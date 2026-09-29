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

    outsideHeading: "Projects outside courses (click to see detail).",
    outsideItems: [
      {
        slug: "vingilote",
        parts: [
          { t: "Vingilote", b: true, link: true },
          { t: ": An AI-driven book-wide \"compressed-original\" bijection builder and a two-column reader that displays this bijection." }
        ]
      },
      {
        slug: "braudel",
        parts: [
          { t: "Braudel", b: true, link: true },
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
          { t: "1. " },
          { t: "Meteorite classification based on neural network", link: true },
          { br: true },
          { t: "(" },
          { t: "ranking 1st in Kaggle among 19 groups", b: true },
          { t: ")." }
        ]
      },
      {
        slug: "quant-hadoop",
        parts: [
          { t: "2. " },
          { t: "Quant factor calculation based on Hadoop", link: true },
          { br: true },
          { t: "(" },
          { t: "full marks for the presentation part, for I vividly illustrated all concepts and procedures", b: true },
          { t: ")." }
        ]
      },
      {
        slug: "dqn-cartpole",
        parts: [
          { t: "3. " },
          { t: "Deep Q-Learning on CartPole-v1", link: true },
          { br: true },
          { t: "(" },
          { t: "found a novel way to solve it, causing a round of applause", b: true },
          { t: ")." }
        ]
      },
      {
        slug: "mathematicians-video",
        parts: [
          { t: "4. " },
          { t: "How the distribution of mathematicians changes over time and across different places", link: true },
          { br: true },
          { t: "(" },
          { t: "I made a 3B1B-style video, causing a round of applause", b: true },
          { t: ")." }
        ]
      }
    ],
    trivialItems: [
      {
        slug: "stackoverflow-spring",
        parts: [
          { t: "5. " },
          { t: "Stack Overflow Java Q&A data analysis and visualization", link: true },
          { t: " based on Spring Boot." }
        ]
      },
      {
        slug: "convex-optimization-video",
        parts: [
          { t: "6. " },
          { t: "A video about how convex optimization is used in industry", link: true },
          { t: ", based on my interview with the founder of a company (Cardinal Operations (Beijing) Co., Ltd.) that builds solvers." }
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
        links: [
          { label: "Presentation slides (PPTX)", url: "assets/files/meteorite-slides.pptx" }
        ],
        body: [
          { p: "This task asked us to train a neural network to tell meteorites from non-meteorites. The training set contained 5,098 images, with the two classes at a ratio of 1 : 1.11. The first competition phase had 511 test images with a positive-to-negative ratio of 1 : 4.06, and the final phase had 200 images with an unknown ratio." },
          { p: "Our project finished with an F1-score of 0.86597, ranking 1st among 19 groups. Why? Besides the optimization work that every other group also did (hyperparameter tuning, choosing a suitable pretrained model, ...), we used Google reverse image search to discover leaked data, and we built \"automatic Google reverse-image scraping + Dino v2 similarity matching\" into our entire data-processing pipeline, so that we could draw training data from the wider Internet. After asking the instructor, this approach was deemed compliant. That is how we obtained the highest Kaggle score." },
          { img: { src: "assets/img/meteorite-leaderboard.png", alt: "Kaggle leaderboard of the meteorite classification competition", caption: "(We are the \"turgeal\" group.)" } }
        ]
      },
      "quant-hadoop": {
        title: "Quant factor calculation based on Hadoop",
        oneLiner: "Full marks for the presentation part, for I vividly illustrated all concepts and procedures.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [
          { label: "STA321.pptx", url: "assets/files/sta321.pptx" }
        ],
        body: [
          { p: "This project provided five days of market snapshot tables for the Shanghai and Shenzhen exchanges and asked us to compute twenty factor values with HDFS + MapReduce." },
          { p: "The professor told me after class that my presentation part got full marks. The score record can no longer be found in the course system, but the script and the PPT are still on my local machine, and they show my understanding of how the project works:" },
          { p: "1. The script: our overall idea was two-stage — two consecutive MapReduce jobs. In the first stage, when the mapper's map function runs it receives one row of raw data and wraps it into two Writable objects. The first object holds the trading date, stock code and trading time; it is comparable, and it is the key. The second object holds the rest of the useful data in that row; it is not comparable, and it is the value." },
          { p: "Next we rewrote the partitioner rules. Normally, rows sharing the same day, code and time would go to one reducer, but under our rewritten rule, everything with the same day and code is hashed to the same reducer." },
          { p: "For each reducer: although it may also receive other data, as long as keys beginning with, say, \"0102 Ping An\" are inside it, every other key beginning with \"0102 Ping An\" must also be inside it." },
          { p: "During the reduce phase we rewrote the grouping rules, so that a single reduce call receives all the key-value pairs starting with \"0102 Ping An\" and none starting with anything else." },
          { p: "So all the content received by the reduce function is the raw data of Ping An stock at every moment of January 2. With that, we have enough to compute Ping An's factor values at each moment of January 2 — and that is exactly the output of reduce." },
          { p: "But at this point the reduce function does one more thing: it discards the \"stock name\" feature entirely before outputting, because at this point it is merely \"the factor values of some stock at moment 1 of January 2\" — we do not care which stock it is, we only need to add it to the factor values of the other stocks and average them." },
          { p: "Then comes the second MapReduce. What the mapper receives is two strings: one is the key and one is the value. The key is \"month-day + time\", and the value is twenty factor values. One such key-value pair represents the computed factor values of some stock on some day at some time. We simply append a one — like the averaging task introduced in class — and hand it to the reducer to average. Finally, we convert all the output files into CSV format." },
          { p: "The first version written this way ran in 136 seconds locally. Through persistent effort we cut it down to 30 seconds (about 36 seconds on the Docker side). The steps were as follows." },
          { p: "From 136 s to 70 s: the input Reducer 1 sent to Mapper 2 used to be a Text key-value pair. Now reduce 1 writes a binary file — a SequenceFile — for Mapper 2, and methods such as split were replaced by fieldpos (locating commas by their positions in the char array)." },
          { p: "From 70 s to 56 s: ① we made use of Reducer 1's memory by maintaining a 24,000-cell factorWritable array on the reduce-1 side. If, for example, a particular reduce call handles Ping An Bank stock, then as soon as it computes the factor values of a moment such as 093003, it packs them all into a factorWritable object and adds it into the second slot of the array (adds, not inserts — 093003 is the day's second moment). In this way, each reducer effectively precomputes the first half of what the later MapReduce would do, namely the summation. As a result, the amount of data written to and read from disk between MapReduce 1 and MapReduce 2 shrank enormously. ② we replaced all divisions with multiplications." },
          { p: "From 56 s to 48 s: we replaced the whole factorWritable[24000] with a primitive array double[480000], and replaced the stock code from a string \"000063\" with an int 63." },
          { p: "From 48 s to 38 s: ① during Hadoop's sort, the binary stream used to be deserialized into WritableComparable objects for comparison; now we compare the first eight bytes of the binary stream directly — the day and the code. Note that both are now ints, so together they take exactly eight bytes. ② instead of generating one big file at the end and writing extra methods to turn it into five CSV files, we used MultipleOutputs as taught in class, so that every reducer writes CSV files directly." },
          { p: "From 38 s to 30 s: we went fully single-job, moving all the work that the second job would have done into the memory of the first reducer. This saved a lot of MapReduce job-initialization time." },
          { p: "We also forced the driver to use uber mode on the Docker side; it only saved one second, but a saving is a saving, so we kept it." },
          { p: [ { t: "2. " }, { t: "PPT: STA321.pptx", href: "assets/files/sta321.pptx", download: true } ] }
        ]
      },
      "dqn-cartpole": {
        title: "Deep Q-Learning on CartPole-v1",
        oneLiner: "Found a novel way to solve it, causing a round of applause.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { p: "Unlike the other groups, we started from a question: in the CartPole problem, where do Newton's three laws live? In the environment that Gymnasium provides. The data distribution is governed by simple laws of dynamics, and near the upright position it is strongly linear. So the deep learning needed for this problem should not be very complex." },
          { p: "We therefore used an evolutionary algorithm and, within 15 seconds, found a set of weights such that a single linear discriminator (> 0 → left, < 0 → right) scores full marks on all 100,000 evaluation rounds. For reinforcement learning we also took two routes: REINFORCE and PPO." },
          { p: "For hyperparameter tuning, we set up a competition among 243 grid configurations. We also came up with a fair way to compare them: 1. cap the total number of environment steps at the same value (100,000 steps), since that is the real cost; 2. use the same forty seeds for every configuration." },
          { img: { src: "assets/img/cartpole-training.png", alt: "Chart from the CartPole-v1 experiments" } }
        ]
      },
      "mathematicians-video": {
        title: "How the distribution of mathematicians changes over time and across different places",
        oneLiner: "I made a 3B1B-style video, causing a round of applause.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { video: { src: "assets/video/mathematicians-distribution.mp4" } }
        ]
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
        links: [],
        body: [
          { video: { src: "assets/video/convex-optimization-industry.mp4" } }
        ]
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

    outsideHeading: "课程外项目（点击查看详情）",
    outsideItems: [
      {
        slug: "vingilote",
        parts: [
          { t: "Vingilote", b: true, link: true },
          { t: "：一个由 AI 驱动的、全书范围的“压缩—原文”双射构建器，以及一个显示该双射的双栏阅读器。" }
        ]
      },
      {
        slug: "braudel",
        parts: [
          { t: "Braudel", b: true, link: true },
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
          { t: "1. " },
          { t: "基于神经网络的陨石分类", link: true },
          { br: true },
          { t: "（" },
          { t: "在 Kaggle 的 19 个小组中排名第一", b: true },
          { t: "）。" }
        ]
      },
      {
        slug: "quant-hadoop",
        parts: [
          { t: "2. " },
          { t: "基于 Hadoop 的量化因子计算", link: true },
          { br: true },
          { t: "（" },
          { t: "展示部分获得满分，因为我生动地阐释了所有概念和流程", b: true },
          { t: "）。" }
        ]
      },
      {
        slug: "dqn-cartpole",
        parts: [
          { t: "3. " },
          { t: "在 CartPole-v1 上的深度 Q 学习", link: true },
          { br: true },
          { t: "（" },
          { t: "找到了一种新颖的解决方法，赢得阵阵掌声", b: true },
          { t: "）。" }
        ]
      },
      {
        slug: "mathematicians-video",
        parts: [
          { t: "4. " },
          { t: "数学家的分布如何随时间和不同地点变化", link: true },
          { br: true },
          { t: "（" },
          { t: "我制作了一个 3B1B 风格视频，赢得阵阵掌声", b: true },
          { t: "）。" }
        ]
      }
    ],
    trivialItems: [
      {
        slug: "stackoverflow-spring",
        parts: [
          { t: "5. 基于 Spring Boot 的 " },
          { t: "Stack Overflow Java 问答数据分析与可视化", link: true },
          { t: "。" }
        ]
      },
      {
        slug: "convex-optimization-video",
        parts: [
          { t: "6. " },
          { t: "一个关于凸优化如何在工业中应用的视频", link: true },
          { t: "，基于我对一家构建求解器的公司（Cardinal Operations (Beijing) Co., Ltd.）创始人的采访。" }
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
        links: [
          { label: "演示幻灯片（PPTX）", url: "assets/files/meteorite-slides.pptx" }
        ],
        body: [
          { p: "这个任务要求我们训练神经网络，鉴别陨石和非陨石。训练集中有 5098 张图片，两种样本数量为 1:1.11；比赛第一阶段测试集 511 张，正负比 1:4.06；比赛最终阶段 200 张图片，正负比未知。" },
          { p: "我的项目最终 F1-score 是 0.86597，在 19 组中排名第一。为什么呢？因为我们除了做了其他组所做的优化工作（调参、选择合适的预训练模型、……）之外，还用谷歌识图发现了泄露的数据，并且将“谷歌识图自动抓取 + Dino v2 相似度识别”纳入了整个数据处理流水线中，使得我们可以从更广阔的互联网中获得训练数据；经过询问老师，这种方式合规。我们由此得到了最高的 Kaggle 分数。" },
          { img: { src: "assets/img/meteorite-leaderboard.png", alt: "陨石分类比赛的 Kaggle 排行榜", caption: "（其中我们是 turgeal 那一组）" } }
        ]
      },
      "quant-hadoop": {
        title: "基于 Hadoop 的量化因子计算",
        oneLiner: "展示部分获得满分，因为我生动地阐释了所有概念和流程。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [
          { label: "STA321.pptx", url: "assets/files/sta321.pptx" }
        ],
        body: [
          { p: "这个项目提供了深沪两市五天的行情快照数据表，要求我们使用 HDFS + MapReduce 计算一共二十个因子值。" },
          { p: "教授在课下跟我说展示部分得了满分，分数记录如今在课程系统上找不到了，但演讲稿和 PPT 还在我的本地，它们体现了我对项目机制的理解：" },
          { p: "1. 演讲稿：我们的整体思路是两步走，也就是两个相继的 MapReduce 过程。对于第一个过程的 mapper 来说，它们在执行 map 函数的时候，接收一行原始数据，包装成两个 Writable 对象：第一个对象封装着交易日期、股票代码和交易时刻，它是 comparable 的，它是 Key；第二个对象封装了这一行里面其他的有用数据，它是不 comparable 的，它是 value。" },
          { p: "那么接下来我们重写了 partitioner 的规则。按理说，本来是 day、code、time 这三者都相同的分到一个 reducer 上，但是在我们的重写规则之中，只要 day 和 code 相同的都会被哈希到同一个 reducer 上。" },
          { p: "对于每一个 reducer 呢，它虽然也会接收其他的数据，但是只要里边有比如说“0102 平安”开头的键，那么，其他以 0102 平安开头的键，也必然会在里边。" },
          { p: "那么它在 reduce 的时候，我们重写了 grouping 的规则，使得它执行一次 reduce 的时候接收的是全部的以 0102 平安 开头的键值对，而没有以其他开头的键值对。" },
          { p: "那么 reduce 函数接收的全部内容，就是平安这只股票在 1 月 2 号那天的所有时刻的原始数据。我们知道，有了这些就足以计算出平安这只股票在 1 月 2 号那天每个时刻的因子值。而这正是 reduce 的输出。" },
          { p: "但是这个时候它（reduce 函数）还会做一件事情，那就是把“股票名称”这个特征彻底抛弃了，再输出。因为此时它只是“1 月 2 号时刻 1 某只股票的因子值”，我们不在乎它是哪只股票的因子值，只需要把它与其他股票的因子值加起来求平均就行了。" },
          { p: "那么来到第二个 MapReduce，Mapper 接收到的就是两个字符串，其中一个是 key，一个是 value；key 是“几月几号某某时刻”，value 是二十个因子值。这样一个键值对就代表了某某股票在某某日某某时刻算出来的因子值。那么我们只需要像课堂里介绍的求平均的任务那样，在它后面再添一个 1，然后交给 reducer 求平均就行。最后输出出来的文件，我们再统一把它们都转成 CSV 格式。" },
          { p: "在这样一个思路下写出来的初版代码，在本地的运行时间是 136 秒。我们经过不懈努力，将这个时间降到 30 秒，而在 Docker 端大概是 36 秒。具体经过的操作如下。" },
          { p: "从 136 秒到 70 秒：Reducer 1 原本送给 Mapper 2 的输入是一个 Text 键值对；现在 reduce 1 输出一个二进制文件（SequenceFile）送给 Mapper 2，那么有一些比如 split 的方法，我们就替换成 fieldpos（用 char 数组中的逗号的位置来定位）。" },
          { p: "从 70 秒到 56 秒：①我们利用了 Reducer 1 的内存，在 reduce 1 那边维护了一个 24000 格的 factorWritable 数组。这个时候比如说这一次具体的 reduce 方法执行是负责平安银行股票的，那么，它只要算出来比如说 093003 这个时刻的平安银行的因子值，它就会把这些因子值全部打包成一个 factorWritable 对象，往这个数组的第二位加进去（不是插进去，是加进去），因为 093003 是这一天的第二个时刻。这样的话，我们就相当于在每一个 reducer 那边提前算了一遍后面那个 MapReduce 所负责的任务也就是求平均的前半部分，也就是求和。那么，从 MapReduce 1 到 MapReduce 2 之间，我们往磁盘里存取的数据量就小了太多了。②我们把所有除法换成了乘法。" },
          { p: "从 56 到 48 秒：我们把整个 factorWritable[24000] 换成了一个基本数组 double[480000]；另外，我们将股票代码从一个 string“000063”替换成了一个 int 63。" },
          { p: "从 48 秒到 38 秒：①Hadoop 排序时本来要把二进制流反序列化成为 WritableComparable 对象来进行比较，那么我们现在直接比较二进制流的前八位，也就是 day 和 code。注意，这俩现在都已经被我们化成 int 了，所以它们加起来只有八位。②与其在最后生成一个大文件并且额外写方法把它变成五个 CSV 文件，我们直接使用课堂上学习过的 MultipleOutputs，让每个 reducer 都直接接触 CSV 文件的书写。" },
          { p: "从 38 秒到 30 秒：我们彻底奔向了单 job，将所有本来第二个 job 应该做的工作放到第一个 reducer 的内存中进行。这为我们节省了许多 MapReduce 任务初始化的时间。" },
          { p: "我们还强迫 driver 在 Docker 那边使用 Uber 模式，只减少了一秒钟。但毕竟是减少，我们还是保留了。" },
          { p: [ { t: "2. " }, { t: "PPT：STA321.pptx", href: "assets/files/sta321.pptx", download: true } ] }
        ]
      },
      "dqn-cartpole": {
        title: "在 CartPole-v1 上的深度 Q 学习",
        oneLiner: "找到了一种新颖的解决方法，赢得阵阵掌声。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { p: "不同于其他组，我们从一个疑问出发：在 CartPole 问题中，牛顿三定律存在于哪里？存在于 Gymnasium 给的环境里。数据分布由简单的动力学定律所支配，尤其是在接近竖直的位置，具有很强的线性性。因此，对这个问题的深度学习，其复杂度不应该很大。" },
          { p: "因此，我们使用进化算法，在 15 秒内就找到一组权重，使得一个线性判别式（>0 向左，<0 向右）在 100000 轮评估中全部满分。对于强化学习，我们也走了两条路：REINFORCE 和 PPO。" },
          { p: "对于调参，我们为 243 套网格参数制定了竞争游戏。我们还想出了合理的比较方法：1. 限制环境步数总量（十万步）一致，因其为真实成本。2. 所有参数使用同样的四十个种子。" },
          { img: { src: "assets/img/cartpole-training.png", alt: "CartPole-v1 项目的图表" } }
        ]
      },
      "mathematicians-video": {
        title: "数学家的分布如何随时间和不同地点变化",
        oneLiner: "我制作了一个 3B1B 风格视频，赢得阵阵掌声。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { video: { src: "assets/video/mathematicians-distribution.mp4" } }
        ]
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
        links: [],
        body: [
          { video: { src: "assets/video/convex-optimization-industry.mp4" } }
        ]
      }
    }
  }
};
