# DataFrame数据操作 技能

## 技能描述

生成 PySpark/Pandas DataFrame 操作代码，包括数据清洗、聚合统计、分组运算、列变换、关联操作等。是处理结构化表格数据的利器。

## 触发词

"分析数据"、"统计"、"分组"、"聚合"、"新增列"、"计算"、"合并"、"join"、"关联"、"透视"、"describe"、"相关系数"

## 输入参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| operation | string | 是 | 操作类型：agg/transform/join/filter/group |
| columns | string | 否 | 涉及的列名，逗号分隔 |
| library | string | 否 | pandas 或 pyspark，默认从上下文推断 |

## 支持的操作类型

### 聚合 (agg)
- COUNT, SUM, AVG, MEAN
- MIN, MAX
- STDDEV, VARIANCE
- percentile_approx, approx_count_distinct

### 分组统计 (groupBy + agg)
```python
df.groupBy("col1").agg(
    F.count("col2").alias("cnt"),
    F.mean("col2").alias("mean"),
    F.round(F.stddev("col2"), 2).alias("std")
)
```

### 列变换 (withColumn)
```python
df.withColumn("new_col", F.col("a") + F.col("b"))
df.withColumn("label", F.when(F.col("x") > 0, 1).otherwise(0))
```

### 数据类型转换
```python
df.withColumn("age", F.col("age").cast(DoubleType()))
```

### 关联 (join)
```python
df1.join(df2, df1["id"] == df2["id"], "left")
```

### 缺失值处理
```python
df.fillna(0)
df.dropna()
```

## 常见失败场景

1. **空值传播**：AVG/SUM等聚合函数遇到NULL时结果为NULL而非忽略
2. **类型推断错误**：CSV加载时numeric列可能被推断为string，需显式cast
3. **DataFrame vs SQL API混用**：同一个cell内不要混用spark.sql()和df API，容易产生意外结果
4. **内存溢出**：大数据集使用collect()前先filter/samples

## 使用示例

```
用户: 统计每个糖尿病类别的人数和平均BMI
AI: 生成 PySpark DataFrame 代码
    df.groupBy("Diabetes_012").agg(
        F.count("*").alias("count"),
        F.mean("BMI").alias("avg_BMI")
    ).show()

用户: 新增一列是高收入还是低收入
AI: from pyspark.sql.functions import when
    df.withColumn("income_level",
        when(F.col("Income") >= 8, "high")
        .otherwise("low")
    )
```

## 内部实现

- PySpark：SparkSession.builder 创建，支持本地和集群模式
- Pandas：用于结果展示和小数据集处理
- 两者通过 .toPandas() 转换连接

## 关联技能

- Text-to-SQL：数据在数据库中时使用SQL更高效
- 多模态内容生成：需要可视化图表时触发
