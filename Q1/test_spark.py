import os
import sys

# Use Java 17 explicitly
os.environ["JAVA_HOME"] = r"C:\Program Files\Java\jre-17.0.2-full"
os.environ["PATH"] = r"C:\Program Files\Java\jre-17.0.2-full\bin;" + os.environ["PATH"]

from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .appName("test") \
    .master("local[1]") \
    .config("spark.driver.memory", "2g") \
    .getOrCreate()

print("Spark version:", spark.version)
print("Java home:", spark.sparkContext._jvm.System.getProperty("java.home"))
spark.stop()
print("Done.")
