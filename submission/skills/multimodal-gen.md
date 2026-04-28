# 多模态内容生成与可视化 技能

## 技能描述

生成图表（折线图/柱状图/热力图/生存曲线）、数据报告（Word/PDF/PPTX）和3D模型。可将分析结果直接转化为可展示的格式。

## 触发词

"画图"、"可视化"、"生成图表"、"做报告"、"导出PDF"、"生成PPT"、"绘制"、"热力图"、"生存曲线"、"Kaplan-Meier"

## 输入参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| type | string | 是 | chart/report/image/video/3d |
| content | string | 是 | 图表类型或报告内容描述 |
| data_source | string | 否 | 数据来源（csv路径/DataFrame/URL） |

## 支持的图表类型

### 统计分析图表
- 折线图：时间序列、趋势展示
- 柱状图：类别对比、数量统计
- 饼图：占比展示
- 热力图：相关性矩阵、分布密度
- 箱线图：数据分布、异常值检测

### 生存分析专用
- Kaplan-Meier 生存曲线
- Log-Rank 检验结果可视化
- 风险表（Risk Table）

### 专业图表
- ROC曲线
- 混淆矩阵
- 特征重要性图

## 报告生成

支持生成格式：
- **Word文档 (.docx)**：带封面、目录、图表、页眉页脚
- **PDF报告**：可直接用于提交
- **PPT演示**：分页幻灯片，每页一个主题

报告结构通常包括：
1. 执行摘要
2. 数据概况
3. 核心发现（可视化+文字）
4. 详细分析
5. 结论与建议

## 生存曲线专用说明

Kaplan-Meier 生存曲线生成需要：
- T: 生存时间序列（tenure/月数）
- E: 事件标志（churn: 1=流失，0=删失）

生成代码使用 lifelines 库的 KaplanMeierFitter，输出：
- 生存函数曲线（带95%置信区间）
- 中位生存时间
- 分层对比（按协变量分组）

## 常见失败场景

1. **中文字体**：matplotlib默认不支持中文，需额外配置字体
2. **负数显示**：有些图表不支持负值（如气泡图）
3. **图例溢出**：标签过多时图例会遮挡主体，需要调整布局
4. **生存曲线0值**：S(t)=0后曲线会截止，这是KM估计器的正常行为

## 使用示例

```
用户: 画一个Kaplan-Meier生存曲线
AI: 使用 lifelines 生成
    kmf = KaplanMeierFitter()
    kmf.fit(T, C)
    kmf.plot(title='Customer Survival Curve')

用户: 生成一个季度销售报告
AI: 创建 Word 文档，包含：
    - 季度汇总数据表
    - 月度趋势折线图
    - TOP10产品柱状图
    - 同比环比分析文字
```

## 内部实现

- 图表：matplotlib + seaborn / plotly（交互）
- 报告：python-docx / reportlab（PDF）
- 生存分析：lifelines 库
- 数据源：优先从上下文获取DataFrame，也可读CSV

## 关联技能

- DataFrame数据操作：生成图表前需要先有处理好的数据
- Text-to-SQL：数据库数据可先SQL查询再可视化
