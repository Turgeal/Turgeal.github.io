# Text-to-SQL 技能

## 技能描述

将自然语言数据库问题转换为可执行的SQL语句。支持MySQL、Spark SQL、PostgreSQL等主流数据库。可处理聚合、子查询、JOIN、窗口函数等复杂查询。

## 触发词

"查一下"、"有多少"、"统计"、"分组"、"流失率"、"平均"、"最高"、"排名"、"哪些用户的"、"sql"、"查询"

## 输入参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| question | string | 是 | 自然语言描述的查询需求 |
| database | string | 否 | 数据库类型（mysql/spark/postgres），默认从上下文推断 |
| schema | string | 否 | 表结构描述，不提供则尝试从上下文获取 |

## 使用限制

- 返回格式统一为 `{"sql": "生成的SQL语句"}`
- 不处理 DDL（CREATE/ALTER/DROP）和 DML（INSERT/UPDATE/DELETE）操作
- 单次查询超时 30 秒
- 最大支持 10 表 JOIN 的查询

## 常见失败场景

1. **聚合与过滤顺序混淆**：用户要求"支付方式A的流失率"但附加了"月费>50"条件时，容易生成先过滤后聚合的错误SQL
2. **统计量语义偏差**：VARIANCE(churn) 会被理解为"组内流失方差"而非"组间流失率方差"
3. **百分比格式期望**：用户期望百分比但LLM返回0-1小数
4. **嵌套条件优先级**：多重AND/OR条件需要明确括号，否则执行顺序可能与预期不符

## 使用示例

```
用户: 有多少客户流失了？
AI: {"sql": "SELECT COUNT(*) FROM customers WHERE churn = 'Yes'"}

用户: 按互联网服务类型分组，列出每组的客户数和流失率
AI: {"sql": "SELECT internetService, COUNT(*) as cnt, AVG(CASE WHEN churn='Yes' THEN 1 ELSE 0 END) as churn_rate FROM customers GROUP BY internetService"}

用户: 找出月费超过50但流失率低于30%的支付方式
AI: 这是个陷阱问题。需要先按支付方式分组计算总体流失率，再用HAVING筛选。
    SELECT paymentMethod, AVG(CASE WHEN churn='Yes' THEN 1 ELSE 0 END) as churn_rate
    FROM customers
    GROUP BY paymentMethod
    HAVING churn_rate < 0.3 AND AVG(monthlyCharges) > 50
```

## 内部实现

- 模型：DeepSeek Chat（通过API调用）
- Temperature：0.1（保持SQL输出稳定）
- System prompt 包含当前数据库schema作为上下文

## 关联技能

- DataFrame数据操作：当用户数据不在数据库中而是CSV/DataFrame时使用
- 金融数据搜索：查询股票、基金等金融数据时优先使用专业技能
