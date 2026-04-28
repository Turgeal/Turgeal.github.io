#!/usr/bin/env python3
"""
Q2-(3) LLM Text-to-SQL 测试脚本
数据库：MySQL on D:/MySQL (telco_churn.customers)
LLM：DeepSeek

用法：设置 DEEPSEEK_API_KEY 环境变量或修改下面常量后运行
"""
import os, json, urllib.request

# 数据库 Schema
SCHEMA = """
CREATE TABLE customers (
    customerID       VARCHAR(50) PRIMARY KEY,
    gender          VARCHAR(10),
    seniorCitizen   TINYINT,
    partner         VARCHAR(10),
    dependents      VARCHAR(10),
    tenure          INT,
    phoneService    VARCHAR(20),
    multipleLines   VARCHAR(20),
    internetService VARCHAR(20),
    onlineSecurity  VARCHAR(20),
    onlineBackup    VARCHAR(20),
    deviceProtection VARCHAR(20),
    techSupport     VARCHAR(20),
    streamingTV     VARCHAR(20),
    streamingMovies VARCHAR(20),
    contract        VARCHAR(20),
    paperlessBilling VARCHAR(20),
    paymentMethod   VARCHAR(50),
    monthlyCharges  DECIMAL(10,2),
    totalCharges    VARCHAR(20),
    churn           VARCHAR(5)
);
"""

SYSTEM_PROMPT = """你是一个智能代理，负责根据以下信息生成正确的 SQL 语句。
- 数据库：MySQL 8.0，表名 customers
- 字段名称、类型、含义见下方 Schema

请只返回 JSON，格式：{"sql": "SQL语句"}
不要有其他文字。"""

DEEPSEEK_API_KEY = os.environ.get("DEEPSEEK_API_KEY", "sk-d9370d9d3b32455e8fcd699d2c0cb904")
DEEPSEEK_URL = "https://api.deepseek.com/chat/completions"

def ask_llm(question: str, model: str = "deepseek-chat") -> str:
    if not DEEPSEEK_API_KEY:
        return '{"sql": "API_KEY_NOT_SET"}'
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}"
    }
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"Schema:\n{SCHEMA}\n\n问题: {question}"}
        ],
        "temperature": 0.1,
        "reasoning_effort": "low"
    }
    req = urllib.request.Request(
        DEEPSEEK_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers=headers, method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data["choices"][0]["message"]["content"]
    except Exception as e:
        return json.dumps({"sql": f"Error: {e}"})

QUESTIONS = [
    ("Q1", "有多少客户流失了？"),
    ("Q2", "按互联网服务类型分组，列出每组客户数和流失率。"),
    ("Q3", "有多少女性 Fiber optic 客户流失了？"),
    ("Q4", "流失客户和未流失客户的平均 tenure 分别是多少？"),
    ("Q5", "哪些支付方式的流失率超过 30%？"),
    ("Q6", "tenure 低于平均值的客户中，流失比例是多少？"),
    ("Q7", "有多少客户的 totalCharges 是空白？"),
    ("Q8", "流失客户中月费前5名是谁？"),
]

if __name__ == "__main__":
    for qid, q in QUESTIONS:
        resp = ask_llm(q)
        print(f"{qid}: {q}")
        print(f"  LLM: {resp}\n")
