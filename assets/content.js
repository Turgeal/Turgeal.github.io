/* Personal homepage copy for all pages, in English ("en") and Simplified Chinese ("zh").
   Loaded as a plain script and rendered by assets/app.js (homepage) and
   assets/project.js (project detail pages). Values are strings or arrays of parts:
   { t: "text" } for plain text, { t: "text", b: true } for <strong> text. */
window.CONTENT = {
  en: {
    htmlLang: "en",
    pageTitle: "Personal Homepage",
    portraitAlt: "Portrait photo of the author.",
    ariaSwitchToEn: "Switch to English",
    ariaSwitchToZh: "Switch to Chinese",
    back: "← Back",
    backToHome: "← Back to home",
    notFoundTitle: "Not found",
    notFoundBody: "The requested project does not exist.",
    fieldRole: "Role",
    fieldStack: "Stack",
    fieldHighlights: "Highlights",
    fieldLinks: "Links",

    briefHeading: "Brief",
    briefLines: [
      "An AI learner (focusing on agent).",
      "A follower of the cause of human liberation (from poverty & tittytainment).",
      "A Hegelian and a Tolkien reader."
    ],

    projectsHeading: "The projects I've done.",
    outsideHeading: "Projects outside courses (click to see detail).",
    outsideItems: [
      {
        slug: "vingilote",
        parts: [
          { t: "Vingilote", b: true },
          { t: ": An AI-driven book-wide \"compressed-original\" bijection builder and a two-column reader that displays this bijection." }
        ]
      },
      {
        slug: "braudel",
        parts: [
          { t: "Braudel", b: true },
          { t: ": An AI-driven humanities & social sciences research tool for building timelines & cultural genealogy across a knowledge base of hundreds of books (still under study)." }
        ]
      }
    ],
    courseHeading: "Course projects (click to see detail)",
    nontrivialLabel: "Nontrivial:",
    trivialLabel: "Trivial:",
    nontrivialItems: [
      {
        slug: "meteorite",
        parts: [
          { t: "1. Meteorite classification based on neural network (" },
          { t: "ranking 1st in Kaggle among 19 groups", b: true },
          { t: ")." }
        ]
      },
      {
        slug: "quant-hadoop",
        parts: [
          { t: "2. Quant factor calculation based on Hadoop (" },
          { t: "full marks for the presentation part, for I vividly illustrated all concepts and procedures", b: true },
          { t: ")." }
        ]
      },
      {
        slug: "dqn-cartpole",
        parts: [
          { t: "3. Deep Q-Learning on CartPole-v1 (" },
          { t: "found a novel way to solve it, causing a round of applause", b: true },
          { t: ")." }
        ]
      },
      {
        slug: "mathematicians-video",
        parts: [
          { t: "4. How the distribution of mathematicians changes over time and across different places (" },
          { t: "I made a 3B1B-style video, causing a round of applause", b: true },
          { t: ")." }
        ]
      }
    ],
    trivialItems: [
      {
        slug: "stackoverflow-spring",
        parts: [
          { t: "5. Stack Overflow Java Q&A data analysis and visualization based on Spring Boot." }
        ]
      },
      {
        slug: "convex-optimization-video",
        parts: [
          { t: "6. A video about how convex optimization is used in industry, based on my interview with the founder of a company (Cardinal Operations (Beijing) Co., Ltd.) that builds solvers." }
        ]
      }
    ],
    courseNote: "(These are mostly 3–4 person projects, but I did them on my own, to work on my skills.)",

    othersHeading: "Others.",
    othersItems: [
      {
        parts: [
          { t: "1. Self-studied " },
          { t: "CMU CS 15-213: CSAPP", b: true },
          { t: " & " },
          { t: "UCB CS 168: Introduction to the Internet", b: true },
          { t: " & " },
          { t: "CMU 15-445: Database Systems", b: true },
          { t: "." }
        ]
      },
      {
        parts: [
          { t: "2. A 15-minute presentation titled \"Fredric Jameson's Death and the Historical Sedimentations of Capitalism\" given in front of 100+ people." }
        ]
      },
      {
        parts: [
          { t: "3. An essay discussing the relation between Hegel and modern anthropology." }
        ]
      },
      {
        parts: [
          { t: "4. As the project leader, led the establishment of a university-level College Students' Innovation and Entrepreneurship Training Program project, titled \"Social Interaction of Gig Workers: An Empirical Study Based on the Food Delivery Worker Group in Taoyuan Subdistrict, Nanshan District, Shenzhen.\"" }
        ]
      }
    ],

    projects: {
      "vingilote": {
        title: "Vingilote",
        oneLiner: "An AI-driven book-wide \"compressed-original\" bijection builder and a two-column reader that displays this bijection.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "braudel": {
        title: "Braudel",
        oneLiner: "An AI-driven humanities & social sciences research tool for building timelines & cultural genealogy across a knowledge base of hundreds of books (still under study).",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "meteorite": {
        title: "Meteorite classification based on neural network",
        oneLiner: "Ranking 1st in Kaggle among 19 groups.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "quant-hadoop": {
        title: "Quant factor calculation based on Hadoop",
        oneLiner: "Full marks for the presentation part, for I vividly illustrated all concepts and procedures.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "dqn-cartpole": {
        title: "Deep Q-Learning on CartPole-v1",
        oneLiner: "Found a novel way to solve it, causing a round of applause.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "mathematicians-video": {
        title: "How the distribution of mathematicians changes over time and across different places",
        oneLiner: "I made a 3B1B-style video, causing a round of applause.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "stackoverflow-spring": {
        title: "Stack Overflow Java Q&A data analysis and visualization based on Spring Boot",
        oneLiner: "TODO",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "convex-optimization-video": {
        title: "A video about how convex optimization is used in industry",
        oneLiner: "Based on my interview with the founder of a company (Cardinal Operations (Beijing) Co., Ltd.) that builds solvers.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      }
    }
  },

  zh: {
    htmlLang: "zh-CN",
    pageTitle: "个人主页",
    portraitAlt: "作者的人像照片。",
    ariaSwitchToEn: "切换到英文",
    ariaSwitchToZh: "切换到中文",
    back: "← 返回",
    backToHome: "← 返回首页",
    notFoundTitle: "未找到",
    notFoundBody: "没有找到对应的项目。",
    fieldRole: "角色",
    fieldStack: "技术栈",
    fieldHighlights: "要点",
    fieldLinks: "链接",

    briefHeading: "简介",
    briefLines: [
      "一个 AI 学习者（关注智能体）。",
      "一个人类解放事业（摆脱贫困与“奶头乐”）的追随者。",
      "一个黑格尔主义者，一个托尔金读者。"
    ],

    projectsHeading: "我做过的项目",
    outsideHeading: "课程外项目（点击查看详情）",
    outsideItems: [
      {
        slug: "vingilote",
        parts: [
          { t: "Vingilote", b: true },
          { t: "：一个由 AI 驱动的、全书范围的“压缩—原文”双射构建器，以及一个显示该双射的双栏阅读器。" }
        ]
      },
      {
        slug: "braudel",
        parts: [
          { t: "Braudel", b: true },
          { t: "：一款由 AI 驱动的人文与社会科学研究工具，用于在包含数百本书的知识库中构建时间线与文化谱系（仍在研究中）。" }
        ]
      }
    ],
    courseHeading: "课程项目（点击查看详情）",
    nontrivialLabel: "非平凡：",
    trivialLabel: "平凡：",
    nontrivialItems: [
      {
        slug: "meteorite",
        parts: [
          { t: "1. 基于神经网络的陨石分类（" },
          { t: "在 Kaggle 的 19 个小组中排名第一", b: true },
          { t: "）。" }
        ]
      },
      {
        slug: "quant-hadoop",
        parts: [
          { t: "2. 基于 Hadoop 的量化因子计算（" },
          { t: "展示部分获得满分，因为我生动地阐释了所有概念和流程", b: true },
          { t: "）。" }
        ]
      },
      {
        slug: "dqn-cartpole",
        parts: [
          { t: "3. 在 CartPole-v1 上的深度 Q 学习（" },
          { t: "找到了一种新颖的解决方法，赢得阵阵掌声", b: true },
          { t: "）。" }
        ]
      },
      {
        slug: "mathematicians-video",
        parts: [
          { t: "4. 数学家的分布如何随时间和不同地点变化（" },
          { t: "我制作了一个 3B1B 风格视频，赢得阵阵掌声", b: true },
          { t: "）。" }
        ]
      }
    ],
    trivialItems: [
      {
        slug: "stackoverflow-spring",
        parts: [
          { t: "5. 基于 Spring Boot 的 Stack Overflow Java 问答数据分析与可视化。" }
        ]
      },
      {
        slug: "convex-optimization-video",
        parts: [
          { t: "6. 一个关于凸优化如何在工业中应用的视频，基于我对一家构建求解器的公司（Cardinal Operations (Beijing) Co., Ltd.）创始人的采访。" }
        ]
      }
    ],
    courseNote: "（这些大多是 3-4 人的项目，但我独自完成，以锻炼自己的技能。）",

    othersHeading: "其他",
    othersItems: [
      {
        parts: [
          { t: "1. 自学了：" },
          { t: "CMU CS 15-213: CSAPP", b: true },
          { t: " & " },
          { t: "UCB CS 168: Introduction to the Internet", b: true },
          { t: " & " },
          { t: "CMU 15-445: Database Systems", b: true },
          { t: "。" }
        ]
      },
      {
        parts: [
          { t: "2. 一场 15 分钟的演讲，题为“Fredric Jameson's Death and the Historical Sedimentations of Capitalism”，在 100 多人面前进行。" }
        ]
      },
      {
        parts: [
          { t: "3. 一篇讨论黑格尔与现代人类学之间关系的文章。" }
        ]
      },
      {
        parts: [
          { t: "4. 作为项目负责人，牵头立项了校级“大学生创新创业训练计划”项目，题为“Social Interaction of Gig Workers: An Empirical Study Based on the Food Delivery Worker Group in Taoyuan Subdistrict, Nanshan District, Shenzhen”。" }
        ]
      }
    ],

    projects: {
      "vingilote": {
        title: "Vingilote",
        oneLiner: "一个由 AI 驱动的、全书范围的“压缩—原文”双射构建器，以及一个显示该双射的双栏阅读器。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "braudel": {
        title: "Braudel",
        oneLiner: "一款由 AI 驱动的人文与社会科学研究工具，用于在包含数百本书的知识库中构建时间线与文化谱系（仍在研究中）。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "meteorite": {
        title: "基于神经网络的陨石分类",
        oneLiner: "在 Kaggle 的 19 个小组中排名第一。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "quant-hadoop": {
        title: "基于 Hadoop 的量化因子计算",
        oneLiner: "展示部分获得满分，因为我生动地阐释了所有概念和流程。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "dqn-cartpole": {
        title: "在 CartPole-v1 上的深度 Q 学习",
        oneLiner: "找到了一种新颖的解决方法，赢得阵阵掌声。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "mathematicians-video": {
        title: "数学家的分布如何随时间和不同地点变化",
        oneLiner: "我制作了一个 3B1B 风格视频，赢得阵阵掌声。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "stackoverflow-spring": {
        title: "基于 Spring Boot 的 Stack Overflow Java 问答数据分析与可视化",
        oneLiner: "TODO",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      },
      "convex-optimization-video": {
        title: "一个关于凸优化如何在工业中应用的视频",
        oneLiner: "基于我对一家构建求解器的公司（Cardinal Operations (Beijing) Co., Ltd.）创始人的采访。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: []
      }
    }
  }
};
