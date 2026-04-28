import os
import sys
import pandas as pd

os.environ["JAVA_HOME"] = r"C:\Program Files\Java\jre-17.0.2-full"
os.environ["PATH"] = r"C:\Program Files\Java\jre-17.0.2-full\bin;" + os.environ["PATH"]

DATA_PATH  = "D:/Studying/BigData/Proj1/Q1_data/diabetes_012_health_indicators_BRFSS2015.csv"
OUTPUT_DIR = "D:/Studying/BigData/Proj1/Q1_data/q1_output"
os.makedirs(OUTPUT_DIR, exist_ok=True)

os.environ["HADOOP_HOME"] = "E:/spark_envs/spark35"
os.environ["JAVA_HOME"]   = os.getenv("JAVA_HOME", "")

from pyspark.sql import SparkSession, DataFrame
from pyspark.sql import functions as F
from pyspark.sql.types import DoubleType, IntegerType, StructType, StructField

spark = (
    SparkSession.builder
    .appName("Q1_Diabetes_Analysis")
    .master("local[*]")
    .config("spark.driver.memory", "4g")
    .config("spark.sql.shuffle.partitions", "8")
    .config("spark.hadoop.hadoop.security.authentication", "simple")
    .config("spark.hadoop.hadoop.security.authorization",   "simple")
    .getOrCreate()
)
spark.sparkContext.setLogLevel("WARN")
print(f"Spark version : {spark.version}")
print(f"Python version: {sys.version.split()[0]}")

df = (
    spark.read.format("csv")
    .option("header", True)
    .option("inferSchema", True)
    .load(DATA_PATH)
)
df.cache()

print(f"Rows   : {df.count():,}")
print(f"Cols   : {len(df.columns)}")
print("\nSchema:")
df.printSchema()

print("\nSample rows (limit 5):")
df.show(5, truncate=False)

df.createOrReplaceTempView("diabetes")

sql_dist = spark.sql("""
    SELECT
        Diabetes_012,
        COUNT(*)                         AS count,
        ROUND(COUNT(*) * 100.0 /
              SUM(COUNT(*)) OVER (), 2)  AS pct
    FROM diabetes
    GROUP BY Diabetes_012
    ORDER BY Diabetes_012
""")
print("\n[Spark SQL API result]")
sql_dist.show()

total = df.count()

df_dist = (
    df.groupBy("Diabetes_012")
    .count()
    .withColumn("pct",
        F.round(F.col("count") * 100.0 / total, 2))
    .orderBy("Diabetes_012")
)
print("\n[Spark DataFrame API result]")
df_dist.show()

indicators = ["HighBP", "HighChol", "BMI", "PhysActivity", "Age"]

print("\n[Overall statistics - DataFrame API]")
for ind in indicators:
    print(f"\n  ── {ind} ──")
    result = (
        df.select(ind)
        .describe()
    )
    result.show()

print("\n[By-class statistics - DataFrame API]")
for ind in indicators:
    print(f"\n  ── {ind} by Diabetes_012 ──")
    grp = (
        df.groupBy("Diabetes_012")
        .agg(
            F.count(ind).alias("count"),
            F.mean(ind).alias("mean"),
            F.stddev(ind).alias("std"),
            F.min(ind).alias("min"),
            F.max(ind).alias("max"),
            F.percentile_approx(ind, 0.5).alias("median")
        )
        .orderBy("Diabetes_012")
    )
    grp.show()

print("\n[Cross-class mean values - Spark SQL API]")
sql_cmp = spark.sql("""
    SELECT
        Diabetes_012,
        ROUND(AVG(HighBP),       3) AS HighBP_mean,
        ROUND(AVG(HighChol),    3) AS HighChol_mean,
        ROUND(AVG(BMI),          3) AS BMI_mean,
        ROUND(AVG(PhysActivity), 3) AS PhysActivity_mean,
        ROUND(AVG(Age),          3) AS Age_mean
    FROM diabetes
    GROUP BY Diabetes_012
    ORDER BY Diabetes_012
""")
sql_cmp.show()

print("\n[Cross-class mean values - DataFrame API]")
df_cross = (
    df.groupBy("Diabetes_012")
    .agg(
        F.mean("HighBP").alias("HighBP_mean"),
        F.mean("HighChol").alias("HighChol_mean"),
        F.mean("BMI").alias("BMI_mean"),
        F.mean("PhysActivity").alias("PhysActivity_mean"),
        F.mean("Age").alias("Age_mean")
    )
    .orderBy("Diabetes_012")
)
for col_ in ["HighBP_mean","HighChol_mean","BMI_mean","PhysActivity_mean","Age_mean"]:
    df_cross = df_cross.withColumn(col_, F.round(col_, 3))
df_cross.show()

bmi_obs_pd = (
    df.groupBy("Diabetes_012")
    .agg(
        F.count("BMI").alias("count"),
        F.round(F.mean("BMI"), 2).alias("mean_BMI"),
        F.round(F.stddev("BMI"), 2).alias("std_BMI"),
        F.min("BMI").alias("min_BMI"),
        F.max("BMI").alias("max_BMI"),
        F.percentile_approx("BMI", 0.5).alias("median_BMI")
    )
    .orderBy("Diabetes_012")
    .toPandas()
)
bmi_obs_pd.to_csv(f"{OUTPUT_DIR}/obs1_bmi_stats.csv", index=False)

risk_pd = (
    df.groupBy("Diabetes_012")
    .agg(
        F.round(F.mean("HighBP"), 3).alias("HighBP_rate"),
        F.round(F.mean("HighChol"), 3).alias("HighChol_rate"),
        F.round(F.mean("PhysActivity"), 3).alias("PhysActivity_rate")
    )
    .orderBy("Diabetes_012")
    .toPandas()
)
risk_pd.to_csv(f"{OUTPUT_DIR}/obs2_risk_rates.csv", index=False)

age_pd = (
    df.groupBy("Diabetes_012")
    .agg(
        F.round(F.min("Age"), 0).alias("min_age_code"),
        F.round(F.max("Age"), 0).alias("max_age_code"),
        F.round(F.mean("Age"), 3).alias("mean_age_code")
    )
    .orderBy("Diabetes_012")
    .toPandas()
)
age_pd.to_csv(f"{OUTPUT_DIR}/obs3_age_stats.csv", index=False)

corr_cols = ["Diabetes_012","HighBP","HighChol","BMI","PhysActivity","Age","Income"]
corr_rows = []
for i, c1 in enumerate(corr_cols):
    for c2 in corr_cols[i+1:]:
        corr_val = df.select(F.corr(c1, c2)).collect()[0][0]
        corr_rows.append({"col1": c1, "col2": c2, "corr": round(corr_val, 4)})
corr_pd = pd.DataFrame(corr_rows)
corr_pd = corr_pd.sort_values("corr", ascending=False).reset_index(drop=True)
corr_pd.to_csv(f"{OUTPUT_DIR}/obs3_correlations.csv", index=False)
print(corr_pd.to_string(index=False))

summary_df = sql_cmp.toPandas()
summary_df.to_csv(f"{OUTPUT_DIR}/summary_table.csv", index=False)
print(f"\nAll results saved to: {OUTPUT_DIR}")

spark.stop()
