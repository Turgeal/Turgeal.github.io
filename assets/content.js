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
    pendingNote: "I haven't had time to revise this page's content yet.",
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
          { t: "2. A 15-minute " },
          { t: "presentation", href: "project.html?id=jameson-presentation" },
          { t: " titled \"Fredric Jameson's Death and the Historical Sedimentations of Capitalism\" given in front of 100+ people." }
        ]
      },
      {
        parts: [
          { t: "3. An " },
          { t: "essay", href: "project.html?id=hegel-essay" },
          { t: " discussing the relation between Hegel and modern anthropology." }
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
        links: [],
        body: [
          { video: { src: "assets/video/vingilote-demo.mp4" } }
        ]
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
      },
      "jameson-presentation": {
        title: "Fredric Jameson's Death and the Historical Sedimentations of Capitalism",
        oneLiner: "A 15-minute presentation given in front of 100+ people.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { p: "I have already applied to Professor Yin; the talk is about 15 minutes long." },
          { p: "On September 22, 2024, Fredric Jameson — one of the most important Marxist scholars of our time, in the United States and in the world — died in the United States, the heartland of global capitalism. He was ninety years old. The influence of this news was basically confined to leftist academic circles." },
          { p: "Barely two days later — September 24, 25, 26, 27 and 30 — the Chinese stock market rose continuously, all the way to the daily limit. Once again the capital market demonstrated, in our socialist motherland, her mighty power of capturing the human heart." },
          { p: "Anyone can see that the past forty years seem to have been forty years of total victory for the free market." },
          { p: "In China, the logic of capital has replaced the logic of revolution; the logic of the office tower is eroding the logic of the compound. In the world, ever since the upheaval in Eastern Europe and the disintegration of the Soviet Union, the globe has accelerated to the right: the \"clash of civilizations\" in Huntington's phrase has replaced the clash of ideologies." },
          { p: "It is precisely against this background that Francis Fukuyama proposed the famous \"end of history\" — that capitalism is the final stage of history; it is precisely against this background that a French scholar, assessing contemporary China, said: \"Compared with them, we cannot even be called real capitalism\"; and it is precisely against this background that this image began to appear in a corner of the Chinese internet: (showing the Musk—Marx image)." },
          { p: "Beyond these external problems, we — if you are a Marxist too — must also face many doubts from within. Doubts that Marx did not necessarily face, that Lenin and Mao did not necessarily face, that Lukács, Gramsci, Sartre and Althusser did not necessarily face. These are the questions of our own time. Let me list them, from the shallow to the deep." },
          { p: "Question one: once we did not even have the right to survive, and so we opposed the entire existing order. But today we have food and drink — at whom are we supposed to direct our anger?" },
          { p: "Question two: \"Capitalism will eventually perish\" is our slogan. Yet we could equally say \"the solar system will eventually perish\". In the face of the historical reality of the last sixty years, in what sense can we still say that \"communism is bound to triumph\"?" },
          { p: "Question three: after witnessing that many socialist experiments of the last century either failed (the Soviet Union, Rosa Luxemburg, May 1968 ...) or turned into genuine catastrophes (Cambodia, North Korea ...), what face do we have left to drag millions upon millions of lives into yet another social experiment?" },
          { p: "Question four: at a moment when the whole world is turning right, what counts as the \"general trend of history\"? Is \"growing more conservative\" the historical tide?" },
          { p: "Question five: after every collective, centralized resistance has died away, Foucault calls on us to resist in a dispersed, atomized way. But look at reality: local interest groups in which officials and merchants shield one another, multinational corporations as rigidly hierarchical as Arasaka, academic cliques whose protégés recommend one another — which of these can a single individual afford to provoke?" },
          { p: "Question six: the student movements in Europe and America in 1968 ultimately did not become a subversive social revolution. Hobsbawm, in The Age of Extremes, summed up why: first, because the increasingly affluent middle class felt nothing for revolution; second, because of the shift in industrial structure — the traditional revolutionary subject, the working class, was displaced by the ever-growing service sector." },
          { p: "Please note! In classical class analysis, \"middle class\" was always a pseudo-concept: there have only ever been the bourgeoisie, which owns the means of production, and the proletariat, which owns none. Yet in lived experience it is a vividly real concept. The same 1% of property owners ruling over the 99% without property — if one third of the propertyless can be made to think of themselves as some kind of \"middle class\", then the hope of change is replaced by the fear of loss, even though the actual power structure never changes. And as for the service sector, take an extreme example: finance. Finance workers are laborers who sell their last asset, their labor power, just like anyone else — and yet they may (read that again) be even more determined than others to defend this system." },
          { p: "Just look at today's developed capitalist regions! The middle class flourishes even more; the tertiary sector takes an even larger share. If this is the global trend, what resistance can there possibly be for us in the next thousand years?" },
          { p: "Question seven: when Honor of Kings has taken over all the spare time of a barbershop apprentice; when the cheap pleasures of short videos on Douyin let a migrant worker endure any kind of life — facing them, can Marx still rashly speak of the \"revolutionary character of the proletariat\"? Can Lukács still rashly speak of the \"formation of proletarian class consciousness\"?" },
          { p: "Question eight: within our Party, how much appeal does Marxism still hold for our vast ranks of Party cadres?" },
          { p: "It seems that the social reality of the last forty years has already made many people stop believing in \"this stuff\". What solid logic do we have to offer, to convince them?" },
          { p: "Among these eight questions, some are profound, some shallow, some simply pseudo-questions. But gathered together, a thousand such questions constitute the total question of our age: is the world today still within Marx's theory, Marx's paradigm, Marx's prophecy?" },
          { p: "This question easily invites an answer like this: \"Some of his theory is right, some is already wrong; we adapt to local conditions, discard the dross and keep the essence.\" But the same could be said of Confucianism, of every school of economic doctrine, even of Marx's enemies — and then we would have lost our entire standpoint." },
          { p: "Therefore our final, total question is: today, should our basic standpoint — philosophical, political, economic — still be a Marxist one?" },
          { p: "We need to settle two questions: what is a Marxist standpoint? And what is the relation between Marxism and today's capitalism?" },
          { p: "Let us first review two theoretical standpoints that Marx held before Capital. The first is the standpoint of materiality. I will explain it in three sentences." },
          { p: "1. The question is not what effect an addiction to Genshin Impact has on teenagers; the question is why real life is not as fun as Genshin. Don't play Genshin." },
          { p: "2. Christianity is of course a false, deceptive thing; but what really matters is the real thing behind the illusion: the real suffering of medieval people, a history of suffering one thousand years long. Without that reality, there would be no such illusion." },
          { p: "3. Old materialism says: religion is the opium of the people! Games, the virtual world, are the new opium! We must tear them down and stink them out!!! New materialism instead asks: then why do the people need this opium? Isn't it because the real political and economic situation is painful? To criticize games and religion instead of changing reality is to scratch the itch through one's boot." },
          { p: "And so we have these words from the Introduction to the Critique of Hegel's Philosophy of Right." },
          { p: "One more remark here: the false materialist takes \"matter\" to be \"elementary particles\" and physical laws, which is why doubts like this keep arising: \"every atom in my brain is governed by physical laws — so what freedom do I have left?\" That is French materialism, eighteenth-century thinking. The true materialist takes \"matter\" to be reality — reality temporalized, that is, history. That is why Marx's ultimate standpoint can be the standpoint of the human being, the standpoint on which a human being can reach the realm of freedom." },
          { p: "The second is the standpoint of the dialectic. What we usually take the dialectic to be is the Zhdanov dialectic: \"A has a point, B has a point, so we combine A and B\"; \"we must see the good side of A as well as the bad\". This is nonsense, which is why it is also called \"sophistry\" or \"sleight of hand\". My favorite remark comes from Professor Fan Gong, who said the dialectic is \"bullshit\". So what is the real dialectic? It seems to be like this. It has two sides. The bright side: always see the tension between a concept and the thing the concept points to. The dark side: any \"authority\", \"truth\" or \"eternity\" must contain its own self-contradiction, and once it enters the movement of history, it brings about its own self-negation. Where does this dialectical standpoint come from? I am afraid it is the product of the entire history of German classical philosophy; we have no time to explain it today." },
          { p: "But so that everyone can better accept this conclusion, I ask you to notice one feature of it: in its posture it seems to possess an absolutely anti-kowtow character. It first negates all truths, authorities and eternities; and at the same time, the moment we try to take it itself as some kind of truth, authority or eternity, we find that it destroys itself within its own principles." },
          { p: "But then, don't we fall into a universal negation? Don't we lose every theoretical foundation? Doesn't this lead to relativism and nihilism? At this point we arrive at the great convergence of the dialectical and the material: when every theoretical, conceptual, ideological foundation has dissolved into smoke, we stand firmly upon the foundation of reality." },
          { p: "We just said that reality is not \"elementary particles\", not physical laws — so what on earth is \"reality\"?? We won't be evasive here; let us say it plainly: \"reality\" is the sum total of the first-person lived experience of all human beings since history began! What? Isn't that idealism?? Then we must look: what is the \"heart\", the idea, that idealism worships? Idealism, idealism — what it worships is the idea, the concept! We must ask: a human being's living pain, and the \"laws of physics\" as a model for understanding reality — which of the two is conceptual, and which is in fact more \"real\"?" },
          { p: "\"Discard all ideology, pick up the standpoint of reality\" — if this \"reality\" is \"the living pain and loneliness of human beings\", then we arrive at existentialism. That is why Sartre said that \"existentialism is only an enclave of Marxism\". And if we abandon the standpoint that \"concepts such as physical laws can dominate reality\", treating them merely as a model for understanding reality, then we arrive at the true scientific spirit." },
          { p: "Now, with these two standpoints, let us look through the structure of today's global capitalism." },
          { p: "At the very bottom of capitalism, its oldest plane, lies the economic layer composed of the categories of labor power, production, product, value, price, money, exchange, profit, ground rent, competition and so on." },
          { p: "I call it the layer of blood and flesh — in fact the blood-and-flesh layer of the market economy. At this stage there is not yet so-called capitalism. Its beating heart is the formula \"W-G-W1\": commodity to money to a new commodity. Imagine the classical period: I grow wheat, I have a lot of wheat, I exchange the surplus wheat for money, and I top up Genshin with the money. How natural that sounds, how reasonable — simply the truth. But since it is the truth, from the dialectical standpoint we place it in the movement of history. W-G-W1-G1-W2-G2-... and Marx immediately discovers a second structure inside it: G-W1-G1, the formula for the reproduction of money. Following this path further, one arrives at capital's essential self-expansion, its self-replication. I will not go into the detailed analysis, because I don't know it either." },
          { p: "And everyone can imagine such a process of concentration (figure). The real process of capital concentration is of course far more complex — for example, the various interest groups formed along industrial chains since China's reform and opening up: interest groups in different regions, in Beijing, in Shanghai, in the provinces. We can concretely examine the history of their formation." },
          { p: "On the other hand, Marx moves from the duality of labor to the duality of the commodity, and then to this conclusion: \"money crystallizes all partial and total social relations, becoming the power of each individual to dispose of the activities of others or of social wealth, becoming power itself\". This is easy to understand: you take twenty yuan to buy a bowl of noodles, and in fact you directly rule over five to ten minutes of the noodle-shop auntie's life. And this bowl of noodles also embodies your relation to the auntie, the auntie's relation to the flour retailer, the flour retailer's relation to the flour company, the flour company's relation to the farmers. This is \"the relation between things concealing the relation between people\" in Marx's sense. Money, which in Adam Smith's sense was the lubricant of the market, is promoted to the subject of the market." },
          { p: "Combining these two aspects, we see that the gradually concentrated money structure is essentially a gradually concentrated power structure. We move from the economic dimension to a political dimension; in fact, we move from the market economy to capitalism. And this power structure will necessarily intervene in and distort the originally natural free market. In a sense, then, capitalism is the self-negation of the market economy. As the economic layer grows in quantity — with economic globalization, for instance — the power structure keeps emerging more clearly: for example, the American middle class using expensive dollars to buy cheap manufactured goods from Asia, Africa and Latin America is in fact a power relation. If one person rules over ten thousand, in classical times that rule was direct. In the capitalist era, it may become 800,000 people ruling over eight billion. We see rule becoming \"cloud rule\". On the forms of rule in late capitalism, Gilles Deleuze has a very good short essay, the \"Postscript on the Societies of Control\". Today we can see that the newest form of rule has become data and algorithms." },
          { p: "The third layer of capitalism is the ideological layer, the layer of concepts. I call it the eyeball layer." },
          { p: "This ideology is in fact bourgeois ideology: in law it appears as the idea of bourgeois legal right; in culture, as bourgeois taste and every kind of chain of contempt. The spirit of enlightenment, instrumental rationality, mass culture, the doctrine of individual success — all are contained within it. Western Marxist theorists in the middle of the last century mainly fought and reflected on this layer." },
          { p: "The fourth layer is the layer of discourse, which I call the whisper layer: the mutations that capitalism's power structure produces in our inner structure of consciousness — for example, its influence on our sense of time. Western Marxist theorists in the second half of the last century, with their concepts, mainly reflected on this layer. (For example, Marcuse's \"one-dimensional man\", Althusser's \"ideological interpellation\", Baudrillard's \"consumer society\", Deleuze's A Thousand Plateaus.)" },
          { p: "It should be said that the third and fourth layers are purely spiritual dimensions, built directly upon the political-economic material realities of the first and second layers — this is the conclusion we draw from the standpoint of materiality." },
          { p: "This shows that if there is an integral \"capitalism\", it is constructed upon the self-contradiction of an economic core, and according to the spirit of the dialectic it will undergo countless self-negations in the movement of history. The entire history of the twentieth century shows us this. This movement of self-negation, we call communism. \"Communism is for us not a state of affairs which is to be established, an ideal to which reality will have to adjust itself. We call communism the real movement which abolishes the present state of things.\" The German Ideology says it very clearly." },
          { p: "\"No social order is ever destroyed before all the productive forces for which it is sufficient have been developed\" (Preface to A Contribution to the Critique of Political Economy). The economic rise of China, Singapore and South Korea over the last forty years, and the global circulation of cheap manufactured goods, precisely confirm that the productive forces of global capitalism are far from exhausted. At such a time, if the leftist movement falls into a low tide, we are not surprised, and not in the least disheartened. If one day technology stagnated for a hundred years in a row, productivity stalled or even regressed, and only then did movement after movement fail — that would be the real crisis of our theory." },
          { p: "The single conclusion of all our analysis above is this: Marx occupies a position in the history of human ideas that marks a crack in the crystalline core of the capitalist structure; therefore, as Derrida said, \"as long as capitalism exists, Marx's critical spirit will live forever\"." },
          { p: "As long as we still suffer the pains brought by the capitalist process — the polarization of rich and poor, structural unemployment, the control of big data, 996, industrially produced depression, cyclical economic crises and the slide of the middle class back into poverty, the risk of war brought by structurally unequal distribution of interests — then among all post-capitalist political thought, Marx's should remain our basic standpoint, because only he \"wrestles directly with the Lord\"." }
        ]
      },
      "hegel-essay": {
        title: "A Hidden Thread in Anthropology: Reading Hegel's Encyclopedia of the Philosophical Sciences and Lévi-Strauss's Structural Anthropology",
        oneLiner: "An essay discussing the relation between Hegel and modern anthropology.",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { p: "Abstract: Starting from one corner of Hegel's Encyclopedia of the Philosophical Sciences, this essay re-examines several of Hegel's concepts and connects them with Lévi-Strauss's structuralist anthropology, in order to set out a hidden thread in modern anthropology and one corner of the relation between German classical philosophy and modern anthropology. At the end there is also a fierce attack on a certain scholar — although the attack is quite childish! Fortunately, that scholar will never see it." },
          { p: "In the third part of the Encyclopedia of the Philosophical Sciences, published in 1817 — the \"Philosophy of Spirit\" — Friedrich Hegel divides the concept of \"spirit\" into \"subjective spirit\" and \"objective spirit\", and divides \"subjective spirit\" into three levels: \"the object of anthropology: the soul\", \"the object of phenomenology of spirit: consciousness\", and \"the object of psychology: spirit as it determines itself within itself\". The \"anthropology\" Hegel refers to is undoubtedly far removed from the modern anthropology that began in the second half of the nineteenth century and flourished in the twentieth. On Marshall Sahlins's division, the former belongs to the native anthropology of Western society, while the latter is academic anthropology as a cultural discipline: though they share one word, they differ enormously in content, form and method. That Kant, Fichte and Schelling — equally great figures of German classical philosophy — influenced Hegel is well known, and among them Kant above all. In his various works, the number of open and hidden quotations of and references to this predecessor shows how much he mattered. So although Hegel never says it explicitly, it is not hard to infer that Kant's late summa, Anthropology from a Pragmatic Point of View, certainly formed one major basis for Hegel's understanding of the concept of \"anthropology\". What, then, does the Anthropology from a Pragmatic Point of View discuss? It \"discusses the human capacities of cognition, feeling and desire\" and \"briefly explores human characteristics in respect of the individual, sex, peoples, races and species\". Looking closely, it is plainly a hotchpotch of philosophy, physiology, psychology, sociology and ethnology. Unlike the modern versions of all these disciplines, it does not devote itself to the specialized study of some particular system or phenomenon, but aims at a shallow yet holistic answer to the old question \"what is man?\". The gulf between such an anthropology and the modern anthropology we know is easy to see: in content, the former still asks mostly philosophical questions and attends mostly to the inner structures of consciousness, while the latter's field of problems extends to culture, politics, economics and beyond; in method, the former is purely speculative, while the latter is mainly empirical." },
          { p: "It is therefore not hard to understand why the division Hegel makes here — \"anthropology — phenomenology of spirit — psychology\" — was ignored, even despised, by later anthropologists: our concept of \"anthropology\" is already different, and you have even been dismissed within your own field as a pedantic \"dead dog\"; why should I cross disciplines and hunt for phrases in the old papers of a vanished ancient kingdom? Under these conditions, one insight of this essay is that Hegel's division and modern anthropology are connected. And though the connection is hidden, it is strong — its blade points straight at one of the most central, most profound anxieties of modern anthropology. This connection is not so much a connection between anthropology in the Western native-philosophical sense and anthropology in the modern academic sense, as a connection between Hegel's triad itself and anthropology in the modern academic sense. For anthropology in the classical Western sense — like Kant's Anthropology from a Pragmatic Point of View just mentioned — is nothing more than shallow, direct observation and speculation about what geography produces what national character, and about the division of the senses and of the emotions. Compared with the scientific, rigorous analyses and the vast achievements of twentieth-century anthropology, such thinking is negligible. But why Hegel placed such an anthropology in the first part of subjective spirit — that has a deeper meaning." },
          { p: "First, we must review Hegel's concept of spirit. For many, this is one of Hegel's highest and most difficult concepts. But it is in fact extremely simple. Professor Zhuang Zhenhua, in his An Interpretation of the Phenomenology of Spirit, says: \"Spirit is not some subjective thinking or its objective projection; it is precisely the world of meaning itself. It must indeed be realized through individuals, but it is first of all not subjective; it is an objective and real whole — what Hegel calls 'the matter itself'.\" I believe this is the best exposition ever produced by a scholar of this country." },
          { p: "When we hear the words \"no entry\", what we perceive is sound, and signs organized in a certain way out of those sounds; behind those signs we clearly sense that there is a layer of \"meaning\" — otherwise we would not grasp what \"no entry\" means. When the words \"no entry\" surface in our minds, our inner vision \"sees\" four signs; we clearly feel that there is a meaning inside those signs, but we cannot see it, only apprehend it in some form. All we can hear and see are signs. This, of course, is also the signifier and the signified in Saussure's sense. A great part of spirit — namely the kingdom in which all the signifieds of this world reside. Branching off from here, we can also think about what the dialectic is from an entirely new angle: the dialectic is not sophistry, not sleight of hand; it is merely a spontaneous sliding movement between signifier and signified." },
          { p: "Let us return to spirit. The author believes that a central example for understanding Hegel is the alien — yet few set out from this angle." },
          { p: "Now suppose we take a big basket and gather into it all the signs that have ever appeared on Earth. Signs here include a great many things; the largest class is language, and language here also includes a great many things — for example, all the thoughts in all human heads throughout history, all the words ever spoken; all of this is language, and all must be gathered in. The range of signs here is very broad: for instance, a primitive beetle hundreds of millions of years ago that saw a predator in front of it, or sensed the predator's pheromones with its antennae — these count as signs, because under our definition there is something spiritual behind them, namely danger or tension." },
          { p: "Now let us take another frame and gather into it the thing of meaning behind all these signs. Inside this frame is the world of meaning as we know it. It contains the marriage structure of some primitive tribe in the Americas, contains what Du Fu thought and felt on his youthful travels, contains the idea of legal right of some republic. In a sense — in the sense of spirit, in fact — everything is inside, because everything we can say has already been gathered inside. We might ask: what about black holes? Are black holes inside? The answer is: when we mention \"black hole\", what we refer to has already been reduced to a lump of abstract meaning, wrapped in the sign \"black hole\". As for the material existence we imagine, our intention has never been aimed at it, and cannot be — because it can only be seen by the eye." },
          { p: "Now, our question is: does the world of meaning have a general structure? Put another way, more intelligibly: if we took a census of all conscious beings in the world — where \"world\" here is not just Earth, not just the universe, but all possible universes, all possible ranges of space and time, or a field transcending space and time; for instance all planets in our universe that ever had conscious existence; for instance, if we were brains in vats, outside our universe there is a more real world, where other minds watch us, and we count them too. Outside that world there is yet another world, iterating layer upon layer into infinity. We count all consciousness in every world." },
          { p: "Then our question is: do all the worlds of meaning generated by all these consciousnesses have a general structure?" },
          { p: "One evident fact is that two worlds of meaning may differ, and may also share things. This depends on their material basis, or existential conditions. For example, in the world of meaning of a Qin-dynasty person there is no concept of the computer; in the world of meaning of birds there is (probably) no concept of \"1+1=2\"; in the world of meaning of the mind-transparent Trisolarans there is no concept of deception. But whether Qin-dynasty people, birds or Trisolarans, they all have a distinction between self and other, and between inside and outside. Yet for a blind sea star in which only stimulus signals flicker across a nervous system, perhaps there is not even a distinction between inside and outside." },
          { p: "Take another example: the cultures of the Romans and of the islanders of Papua New Guinea differ, but also share things. Then for a million alien species that have something \"cultural\" — will there be something universal across those million cultures? Remember, these species may differ wildly in their biological basis: some species may have no perception of heat or cold at all; some may have no vision at all; some may not be multiple individuals — that is, the whole history of the species features a single lone individual; some may have a pile of perceptions we cannot even imagine. If, under all these conditions, all of them can produce something cultural, and among those cultural things there are some general things — then we might come to believe that the world itself has a cultural structure." },
          { p: "To say that the world itself has a cultural structure may seem a bit too bizarre. So let us drop culture and return to meaning as a whole. Then the question we finally attend to is whether the world itself has a structure of meaning: if all worlds of meaning have a universal structure, then we say that perhaps it does." },
          { p: "In fact, everything said above only restates, in somewhat novel language, the most central question of Western philosophy — the question of the intelligibility of the world. It is just that such a language is better suited to our understanding of Hegel's triad (anthropology — phenomenology of spirit — psychology)." },
          { p: "As said above, if we could take a census of all the worlds of meaning of all possible conscious beings in all possible worlds, then we could reveal the structure of meaning of the world itself. But this we cannot do. What, then, can we do? What objects of cognition can we have? Here is where anthropology enters: we can investigate human populations under all different geographical and temporal environments, to explore each population's world of meaning and the history of its formation. Here, in fact, we have already entered the field of modern anthropology. Through investigating the sign networks of populations that developed independently or influenced one another — and further, their political, economic and cultural forms (in fact, these things all fall under sign networks; they themselves of course exist in the dimension of meaning, but our investigation must proceed through signs) — we explore the general laws of the structure of meaning." },
          { p: "In this sense, anthropology is truly a measure of desperation — for there is no discipline called alienology. Of course many anthropologists do not start from this point; their interest lies only in the human as a particular group. But one must see that behind the whole grand picture of anthropology there is a higher question, a broader perplexity — what I call the hidden thread." },
          { p: "Yet how easy can it be to explore the general laws of the structure of human meaning? Malinowski's generation of scholars met with a huge rift between cultural phenomena, sign phenomena and the structure of meaning behind them; with doubts about the legitimacy of every available method of analysis; with the complexity brought by vast sign networks. They still insisted, through painstaking re-interpretation, on futilely assigning meaning to phenomena and connections to historical or synchronic similarities. But the structuralist breakthrough in anthropology, triggered by the structuralist breakthrough in phonology, found the way through: if we cannot touch the general form of the structure of meaning directly, then let us investigate the general form of the structure of signs. Why is it that in all languages, among all possible phonemes, some sounds always occur more than others? \"Behind the chaotic rules and customs, to reveal one single conceptual scheme that exists and operates in different spatiotemporal environments — a scheme that is neither identical with any particular pattern of this institution nor with an arbitrary combination of its diverse common features.\" These words of Lévi-Strauss hit the nail on the head." },
          { p: "So let us return to Hegel's triad: he in fact foreshadows this hidden thread. As mentioned, his so-called first stage, the anthropological stage, is not the same as modern anthropology; it is an investigation of the developmental history from animal soul to human soul. And what is the phenomenology of spirit? Although a book by that name exists, Hegel's own account is clear: it is the investigation of the developmental history of spirit after humanity enters the stage of consciousness. In fact, though it may seem utterly unrelated, the phenomenology of spirit is the science of ideology. \"Ideology\", in the author's view, is very simple: it is the form of consciousness. But more importantly, it also includes the loop of meaning that leads consciousness into a particular form — a loop in which the mind can spin forever, unable to jump out of this logic, unable to reflect. Historically, after primitive humans developed self-consciousness, they separately developed gender consciousness and class consciousness. A person, merely because his physiological sex differs from others', believes he must be masculine and others must be feminine — that is an ideology. A person, merely because he lives better, believes that humans divide into noble and base, high and low — that too is an ideology. When primary- and middle-school students develop self-consciousness, run with gangs, absorb the underground world, and feel they must smoke a cigarette and get into a fight to be impressive — is that not an ideology too? It is not only the opposition between communism and liberalism that counts as ideology; every corner of the world is ruled by ideology. From the most macroscopic anthropological perspective, to the more concrete science of ideology — that is, the phenomenology of spirit — to the more local psychology: this is at once a process of scaling the perspective and a process of spirit itself becoming more concrete and more diverse. From this we can also see that today's modern academic anthropology is a discipline that goes beyond the original scope of anthropology and conducts investigations in these three directions at once." },
          { p: "Now let us conclude with some reflections from the author's own research." },
          { p: "Quite a few philosophy scholars in our country (not only the older ones in their seventies and eighties, but young scholars too) sprinkle their speech with the names of Western scholars, yet what they say is obviously shallow; their scholarship is done by hard, stubborn labor: translating a few hundred thousand words here, patching together an article with passable logic by hunting phrases there. But these things are third-rate internationally, and were never in the lead historically. They amuse themselves within a small domestic circle and review committees. In the end, it is because too many people never entered the field of twentieth-century philosophy at all — they finish dozens or hundreds of books without ever getting in. Why can't they get in? Ultimately because many of them are not postmodern people at all, not even modern people. Professor Meng Jianwei of the Chinese Academy of Sciences is an example. How did he introduce Lévi-Strauss? Let us look at this passage." },
          { p: "\"...In 1935-1939 he went to primitive tribes to do anthropological fieldwork... Among Westerners, ah, the things some people study, I think are very much worth learning from; the things some people study, in our eyes, how could one study that? People like us doing regular research could never get to that place. But look, what does he study? Anthropology. Anthropology and philosophy. People in a discipline like ours might be unwilling to read anthropology. Because look, is there any meaning to it? Going to, to those jungles in Africa. And going to those ancient tribes to study anthropology. Of course, if things go wrong you also die there. But over on their side, lots of people do this kind of research. What does founding structuralist anthropology have to do with philosophy? Lévi-Strauss, out of dissatisfaction with French culture and Western civilization, went to the Americas to study primitive cultures. Look, how rebellious that is. Out of dissatisfaction with French culture and Western civilization, went to the Americas to study primitive cultures.\"" },
          { p: "\"Worth learning from\" indeed! Today Lévi-Strauss goes into the African rainforest — you say this is blazing a new path, and we should learn from it. Tomorrow Foucault studies the history of sexuality in dusty old papers — you say this breaks convention, and we should learn from it too. One day a Western scholar studies the history of shit — will you also learn from it, and review it anew from a Chinese perspective? There are so many weird things in every far-flung corner of the world — can anyone ever finish investigating them? Moving from philosophy to anthropology, or to the archaeology of knowledge, is an utterly natural logic; if you do not have in your heart a persistent, intense curiosity about those ultimate questions of the world and of consciousness; if you have not gone through the reflections a modern person must undergo in becoming postmodern — then you will think this is grandstanding, blazing a new path." },
          { p: "\"In our eyes, how could one study that?\" \"Is there any meaning to it?\"" },
          { p: "Who is this \"we\"? It is none other than his colleagues, friends and teachers — that whole generation of philosophy scholars! To have such a doubt precisely shows that you have not even touched the theoretical logic and the problematic of that generation in the 1930s. If you cannot even understand the logic of the last century's questions, how can you ask historically meaningful questions and produce scholarship that leads the world?" },
          { p: "\"Out of dissatisfaction with French culture and Western civilization\" — I do not know whether this is the professor's own summary or Lévi-Strauss's own statement. I only know that if Lévi-Strauss had really rushed into the tropical rainforest to do anthropology \"out of dissatisfaction with French culture and Western civilization\", then he would truly be an adolescent rebel — and a rather dim-witted one at that: to express his dissatisfaction with the headmaster, he would not go make speeches but go study rubbings of inscriptions on stone tablets!" },
          { p: "The investigation of the structure of human consciousness, the exploration of the structure of the world's meaning — from the study of the German classical master to Lévi-Strauss's tropics, and on to Foucault's dusty archives — all this has a profound theoretical logic behind it. Some people are eager to emphasize the ruptures and discontinuities of twentieth-century philosophy; in fact this is merely a pretext for their own scattered understanding and chaotic thinking. As the twentieth-century academic system developed rapidly and the number of scholars exploded, each generation grew up looking at the paths the previous generation laid out and feeling the doubts the previous generation left behind. The great field of problems is continuous; the development of the field is clear — where is there any real rupture? It is only that theoretical paths keep multiplying, and ornate vocabulary keeps piling up, dazzling the eye. Many other scholars may go stay on some small Pacific island for a year or two, studying it because that people \"is part of the treasure house of human culture\" and \"has anthropological and sociological value\"; a scholar studying dinosaurs may travel tirelessly to collect fossils purely out of interest. But a thinker like Lévi-Strauss would never study a tropical tribe merely because it has some misty \"cultural heritage value\", nor merely because he is interested. He founded structural anthropology because structural anthropology had to be founded. The deepest questions — \"what is consciousness?\", \"what is spirit?\" — could no longer proceed speculatively, and so necessarily continued to ask empirically: \"What is man?\", \"What is the universal structure of humanity's systems of meaning?\", \"What is the universal structure of humanity's systems of signs?\" Hence the need to investigate the endlessly complex social forms, cultural forms, even psychic structures in world history; hence the need to deploy in two directions, in history and in anthropology. Look at this passage: \"...History and ethnology have the same purpose, namely to understand man better... Their main difference lies in the choice of different yet complementary angles of observation: history organizes its data around the conscious expressions of social life, while ethnology focuses on the unconscious conditions.\" After such words were published in 1958, was it not the most natural thing for the next generation of scholars, like Foucault, to consider unconscious factors in the vast body of historical research? Without a grasp of this grand logic, one naturally feels that Lévi-Strauss or Foucault is going off the beaten track, with a strange way of thinking." },
          { p: "Of course, in the end we must make a grand rehabilitation of Professor Meng Jianwei: he said these words as an introduction in a general-education course for undergraduates. To say the opposite of what one means is also within reason. It is just that the old gentleman's tone, that cadence, was a little too realistic." }
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
    pendingNote: "我还没有来得及修订这页的内容",
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
          { t: "2. 一场 15 分钟的" },
          { t: "演讲", href: "project.html?id=jameson-presentation" },
          { t: "，题为“Fredric Jameson's Death and the Historical Sedimentations of Capitalism”，在 100 多人面前进行。" }
        ]
      },
      {
        parts: [
          { t: "3. 一篇讨论黑格尔与现代人类学之间关系的" },
          { t: "文章", href: "project.html?id=hegel-essay" },
          { t: "。" }
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
        links: [],
        body: [
          { video: { src: "assets/video/vingilote-demo.mp4" } }
        ]
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
      },
      "jameson-presentation": {
        title: "弗雷德里克·詹姆逊之死与资本主义的历史沉积",
        oneLiner: "一场在 100 多人面前进行的 15 分钟演讲。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { p: "已经向尹老师申请，时间在 15 分钟左右。" },
          { p: "2024 年 9 月 22 日，一位当代美国乃至世界最重要的马克思主义学术泰斗之一，詹明信，在全球资本主义的腹地美国，逝世。享年九十岁。这一消息的影响力基本只限于左翼学术圈内部。" },
          { p: "短短的两天之后，9 月 24、25、26、27、30 日，中国股市连续大涨，直至涨停。资本市场再次在我们的社会主义祖国展示了她统摄人心的强大力量。" },
          { p: "任谁都看得出来，过去的四十年，似乎是自由市场全面胜利的四十年。" },
          { p: "在中国，资本的逻辑取代了革命的逻辑；写字楼的逻辑侵蚀着大院的逻辑；在世界，自从东欧剧变、苏联解体，全球加速右转。亨廷顿口中“文明的冲突”，取代了意识形态的冲突。" },
          { p: "正是在这一背景下，弗朗西斯·福山提出了著名的“历史终结论”，也即资本主义就是历史的最终阶段；正是在这一背景下，法国学者在评价当代中国时说道：“和他们比，我们甚至算不上真正的资本主义”；也正是在这一背景下，这张图开始出现在中文互联网的某个角落：（展示马斯克——马克思的图）。" },
          { p: "除了这些外部的问题，我们，假如你也是一位马克思主义者，也要面对许多来自内心的疑惑。这些疑惑，马克思不一定面对过，列宁毛泽东不一定面对过，卢卡奇葛兰西萨特阿尔都塞都不一定面对过。这是属于我们时代的问题。我由浅入深列举一下。" },
          { p: "问题一：曾经我们连生存权都没有，因此反对一切现存秩序。但今天我们有吃有喝，还要对谁报以怒火呢？" },
          { p: "问题二：“资本主义终将灭亡”这是我们的口号。然而，我们同样可以说“太阳系终将灭亡”。在最近六十年的历史现实面前，我们还能在什么意义上说“共产主义必将胜利”呢？" },
          { p: "问题三：在目睹了上个世纪许多社会主义实践要么失败（苏联、罗莎·卢森堡、五月风暴……），要么演变成真正的灾难（柬埔寨、朝鲜……）之后，我们还有什么颜面拉着几百万几百万人的性命再去搞社会实验呢？" },
          { p: "问题四：在全球右转的当下，什么才算“历史大势”？是否“趋于保守”才算历史潮流呢？" },
          { p: "问题五：在所有集体的、中心化的反抗消逝之后，福柯呼唤我们进行离散的、原子化的反抗。但是，看看现实吧：地方乡镇官商相护的利益集团、层级森严如同荒坂的跨国公司、门生故吏相互举荐的学阀，哪一个是一个个体惹得起的？" },
          { p: "问题六：1968 年欧美学生运动最终没有成为颠覆性的社会革命，对此霍布斯鲍姆在《极端的年代》中总结道：一是因为日益富足的中产阶层对革命无感；二是因为产业结构的转变：传统的革命主体，工人阶级，被日益兴盛的服务业取代。" },
          { p: "请注意！在经典的阶级分析中，“中产”从来是一个伪概念，从来就只有占据生产资料的资产阶级和不占有生产资料的无产阶级。但在现实体感中，它却是一个活生生的真概念。同样是 1% 的有产者对 99% 的无产者施加统治，假如让三分之一的无产者自以为是某种“中产”，那么对变革的希望就会被损失的恐惧所取代，即使现实的权力结构从来没有变化。而关于服务业的问题，我们举个极端的例子，金融业。同样是出售自己最后的资产也即劳动力的劳工，金融劳工可能（重读）要比其他人更要维护这个体系。" },
          { p: "试看当今的发达资本主义地区吧！中产阶级更加兴盛，第三产业占比更加扩大。如果这是全球的趋势的话，我们在未来的一千年里还有什么反抗可言？" },
          { p: "问题七：当《王者荣耀》接管了理发店学徒的全部空闲时间，当抖音短视频给予的廉价快乐使得一个农民工能够忍受任何一种生活，面对着他们，马克思还能否妄言“无产阶级的革命性”？卢卡奇还能否妄言所谓“无产阶级阶级意识的生成”？" },
          { p: "问题八：在我们的党内，马克思主义对我们广大的党员干部的征召力还剩多少？" },
          { p: "现在看来，近四十年的社会现实，已经让许多人“不信这一套”了，我们有什么拿得出手的“硬逻辑”，能让他们信服的？" },
          { p: "这八个问题，有的深刻，有的浅薄，有的干脆就是伪问题。但一千个这样的问题汇聚起来，就构成了我们时代的总问题：今天的世界，是否仍然处于马克思的理论，马克思的范式，马克思的预言之中呢？" },
          { p: "这个问题容易招致这样的回答：“他的理论有些是对的，有些已经错了，我们因地制宜，去其糟粕取其精华。”然而，同样的话我们对儒学也能说，对各种学派的经济学理论也能这么说，甚至对马克思的敌人也能这么说，但那样我们就丢失了全部立场。" },
          { p: "因此，我们最终的总问题是：在今天，我们的基本立场（哲学的、政治的、经济的）仍然应该是马克思式的吗？" },
          { p: "我们要解决两个问题，什么是马克思式的立场？马克思主义与今天的资本主义的关系是什么？" },
          { p: "我们首先回顾马克思在《资本论》之前的两个理论立场。一个是唯物性的立场。我这里用三句话说明。" },
          { p: "1. 问题不在于沉迷原神会对青少年造成什么影响，问题在于，为什么现实生活不是像原神一样好玩？不玩原神。" },
          { p: "2. 基督教当然是虚幻的骗人的玩意，但真正重要的是虚幻背后的现实的玩意儿：中世纪人们现实的痛苦，长达一千年的痛苦史。没有这个现实，也不会有那个虚幻。" },
          { p: "3. 旧唯物主义会说：宗教是人民的麻醉剂！游戏是虚拟世界，是新的鸦片！我们要把它们批倒批臭！！！新唯物主义则反问：那么，人民为什么需要这个麻醉剂呢？还不是因为现实的政治经济状况是令人痛苦的？不去改变现实，而去批判游戏、宗教，便是隔靴搔痒。" },
          { p: "于是我们就有了《黑格尔法哲学批判导言》中的这些话。" },
          { p: "这里要多说一句，虚假的唯物主义者所唯的“物质”是“基本粒子”，是物理法则，所以经常会有类似的疑惑，比如“我的大脑里的每一个原子都受物理法则所支配，那我还有什么自由可言？”这是法国唯物主义的思维，是十八世纪的思维。真正的唯物主义者所唯的“物质”是现实，是时间化了的现实，也就是历史。所以马克思最终的立场才能是人的立场，是人能通向自由王国的立场。" },
          { p: "第二个是辩证法的立场。我们通常认为的辩证法是日丹诺夫辩证法，是“A 也有理，B 也有理，所以我们结合 A 与 B”“要同时看到 A 的好处，也要看到坏处”。这是废话，所以它也被称为“诡辩术”“变戏法”。我最喜欢的一个出自樊弓教授，他说，辩证法就是“放屁”。那么，真正的辩证法是什么呢？它似乎是这样的，它有两个侧面：光明侧：永远要看到概念与概念所指向的东西之间的张力。黑暗侧：任何“权威”“真理”“永恒”必有其自我矛盾，一进入历史的运动中，就招致它的自我否定。这个辩证法的立场是从哪里来的呢？恐怕是整个一部德国古典哲学史的产物，我们今天没有时间说明了。" },
          { p: "但为了大家更好地接受这个结论，我请大家注意它的一个特征，那就是它在姿态上似乎有着绝对的反跪拜性。它首先否定了一切真理、权威与永恒，同时，一旦我们要把它本身当成某种真理、权威与永恒，就会发现它自己会在自己的原则中走向毁灭。" },
          { p: "但这样，我们不就陷入了一种普遍否定了吗？我们不就失去了所有理论地基了吗？这难道不会通向相对主义和虚无主义吗？这个时候，我们迎来了辩证性与唯物性的伟大的交汇：当所有理论上的、观念上的、意识形态中的地基烟消云散之后，我们稳稳地站在了现实的地基上。" },
          { p: "刚刚我们说现实不是“基本粒子”，不是物理法则，那“现实”到底是什么？？我们在这儿不打马虎眼，挑明了：“现实”就是有史以来的所有人的第一人称体验史的总和！什么？这难道不是唯心主义吗？？那我们就要看了，唯心主义唯的心是什么？idealism，idealism，唯的是 idea，是观念！我们要问：人的活生生的痛苦，和作为一种理解现实的模型的“物理法则”，哪个才是观念性的呢，哪个反而更加“真实”呢？" },
          { p: "“抛弃一切意识形态，捡起现实的立场”，如果这个“现实”是“人的活生生的痛苦与孤独”，那么我们就得到了存在主义。所以萨特才会说“存在主义不过是马克思主义的一块飞地”。而如果我们抛弃了“物理法则这种观念能主宰现实”的立场，而仅仅把它当作一种理解现实的模型，那么我们就得到了真正的科学精神。" },
          { p: "现在，我们带着这两个立场对今天的全球资本主义的结构进行透视。" },
          { p: "资本主义的最底部，也是最古老的位面，是由劳动力、生产、产品、价值、价格、货币、交换、利润、地租、竞争等范畴组成的经济层。" },
          { p: "我称之为血肉层，其实它是市场经济的血肉层。这个时候还没有所谓资本主义。它的跳动的心脏是这样一条公式“W-G-W1”，商品到货币到新的商品。我们想象一下古典时期的情况：我是种小麦的，小麦多得很，我把多余的小麦换成货币，拿货币充值原神。听起来多么自然，多么合理，简直就是真理。但既然它是真理，根据辩证法的立场，我们把它放到历史的运动中去看。W-G-W1-G1-W2-G2-……马克思马上就发现这里面有第二种结构，那就是 G-W1-G1，这就是货币的再生产的公式。在这条路径上走得更远，就得到了资本本质上的增殖性、自我复制性。具体的分析过程就不赘述了，因为我也不知道。" },
          { p: "而且大家都能想象这样一个聚集的过程（图）。现实的资本聚集的过程当然要复杂得多，比如中国改革开放以来在各个产业链上形成的各种利益集团。在不同地区上形成了比如在北京的利益集团，在上海的利益集团，在地方的利益集团。我们都可以具体地去考察它们的生成史。" },
          { p: "另一方面，马克思从劳动的二重性走向商品的二重性，继而走向了这样一个结论：“货币凝结了一切局部的与整体的社会关系，成为‘每个个人行使支配别人的活动或支配社会财富的权力’，成为权力本身”。这个我们很好理解，你拿二十块钱去买一碗面，在实际上就是你对面馆大妈的五到十分钟的生命时间的直接统治。而这碗面，也集成了你与大妈的关系，大妈和面粉零售商的关系，面粉零售商与面粉公司的关系，面粉公司和农户的关系。这就是马克思意义上的“物的关系遮盖了人的关系”。亚当·斯密意义上的作为市场润滑剂的货币升格为了市场的主体。" },
          { p: "这两个方面结合起来，我们就看到逐渐集中的货币结构实质上就是逐渐集中的权力结构。我们就由经济的维度走向了一个政治的维度。事实上我们就由市场经济走向了资本主义。而这种权力结构也必然会干预、扭曲原本自然的自由市场。所以在某种意义上，资本主义也就是市场经济的自我否定。那么随着经济层的量的增长，比如经济全球化，权力结构也不断凸显出来，比如美国中产拿着价格高昂的美元购买亚非拉地区的廉价工业制成品，实际上就是一种权力关系。如果同样是一个人统治一万个人，在古典时代，这种统治是直接的。在资本主义时期，可能就变成了 80 万人统治八十亿人。我们看到，统治变成了“云统治”。关于晚期资本主义的统治形式，吉尔·德勒兹有一篇非常好的短文《控制社会后记》。今天，我们可以看到，统治的最新形式变成了数据与算法。" },
          { p: "资本主义的第三层是意识形态层，也就是观念层。我称之为眼球层。" },
          { p: "这个意识形态实际上就是资产阶级意识形态，在法上表现为资产阶级法权理念，在文化上表现为资产阶级趣味和任何一种鄙视链。启蒙精神、工具理性、大众文化、个人成功学说，都涵盖于其中。上世纪中叶的西方马克思主义理论家主要对抗与反思的便是这一层。" },
          { p: "第四层是话语层，我称之为低语层，也就是资本主义的权力结构对于我们的内在意识结构所造成的变异，比如对我们对于时间的意识造成的影响。上世纪下半叶的西方马克思主义理论家以及它们的概念反思的主要是这一层。（比如马尔库塞的“单向度的人”，阿尔都塞的“意识形态质询”，鲍德里亚的“消费社会”，德勒兹《资本主义与精神分裂：千高原》）" },
          { p: "应该说，三、四层是纯粹精神性的维度，它们直接建基于一二层的政治经济的物质生产现实之上，这是我们的唯物性立场得出的结论。" },
          { p: "这就表明，如果有一种整体的“资本主义”，那么它是建构于一个经济内核的自我矛盾之上，根据辩证法的精神，它将在历史运动中经历无数次自我否定。二十世纪的全部历史向我们表明了这一点。这种自我否定运动，我们称之为共产主义。“共产主义对我们来说不是应当确立的状况，不是现实应当与之相适应的理想。我们所称为共产主义的是那种消灭现存状况的现实的运动。”《德意志意识形态》说得很清楚了。" },
          { p: "“无论哪一个社会形态，在它所能容纳的全部生产力发挥出来之前，是绝不会灭亡的”（《〈政治经济学批判〉序言》）。中国、新加坡、韩国等国家近四十年的经济崛起，廉价工业制成品的全球流通，印证的恰恰就是全球资本主义的生产力还远未穷尽。此时，你说左翼运动陷入低潮，我们是毫不意外的，毫不沮丧的。如果有一天，连续一百年技术停滞，生产力稳步不前乃至倒退，这时要是运动接连失败，那才是我们理论的危机。" },
          { p: "我们以上的全部分析得出的唯一结论是：马克思在人类观念史上占据的是这样一个位点：这个位点标记了资本主义结构的水晶般的核心上的裂缝，因此，像德里达说的那样，“只要资本主义存在，马克思的批判精神就是永生的”。" },
          { p: "只要我们还在临受着资本主义进程带来的痛苦：贫富分化、结构性失业、大数据的控制、996、批量生产的抑郁症结构、周期性经济危机与中产返贫、结构性利益分配不均带来的战争风险，那么，在所有的后资本主义政治思想中，马克思的就仍应是我们的基本立场，因为只有他，“直接与主对决”。" }
        ]
      },
      "hegel-essay": {
        title: "人类学的一条暗线——读黑格尔《哲学科学百科全书》与施特劳斯《结构人类学》",
        oneLiner: "一篇讨论黑格尔与现代人类学之间关系的文章。",
        role: "TODO",
        stack: "TODO",
        highlights: ["TODO"],
        links: [],
        body: [
          { p: "摘要：本文从黑格尔《哲学科学百科全书》的一个局部切入，通过对黑格尔诸概念的重新梳理，联系列维·施特劳斯的结构主义人类学理论，阐述了现代人类学的一条暗线，以及德国古典哲学与现代人类学的关系的一角。文末还有对某些学者的猛烈的抨击，虽则这抨击也是幼稚得很啊！但幸好那位学者是不会看到了。" },
          { p: "在 1817 年出版的《哲学科学百科全书》的第三部分“精神哲学”中，弗里德里希·黑格尔将“精神”这一概念划分为了“主观精神”与“客观精神”两部分，并将“主观精神”划分为了三个层次：“人类学的对象：灵魂”“精神现象学的对象：意识”以及“心理学的对象：在自己内规定着自己的精神”。黑格尔所指的“人类学”，无疑与发轫于十九世纪下半叶、兴盛于二十世纪的现代人类学相去甚远。按照马歇尔·萨林斯的划分，前者应当属于西方社会的本土人论（native anthropology of Western society），与作为一门文化学科的学术人类学（academic anthropology as a cultural discipline）虽然共用一个词汇，却在内容、形式与方法上都有极大差别。同为德国古典哲学大家的康德、费希特、谢林对于黑格尔的影响是众所周知的，而其中又以康德为主。在其各类著作之中，对这位前辈学人明里暗里地引用与指涉，数量之多，足见重视。因此，虽然黑格尔未能明言，但是不难推测，作为康德晚年集大成之作的《实用人类学》无疑构成了黑格尔对于“anthropology”这一概念的一大理解基础。那么《实用人类学》讲的是什么呢？它“论述了人的认识、情感与欲望能力”“对人类在个体、性别、民族、种族、种类方面的特性作了简要探讨”。细看之下，不难发现这是一锅集齐了哲学、生理学、心理学、社会学、民族学的大杂烩。它不像所有这些学科的现代版本一样，致力于专门地研究某一具体的系统或者现象，而是旨在对于“人是什么”这一古老问题做一个浅显而又整体的回应。不难看到这样一种人类学与我们熟知的现代人类学的分野：在内容上，前者考虑的问题绝大多数仍然是哲学式的，关注的仍然更多是人的内在意识结构，而后者的问题域则拓展到了文化、政治、经济以及其他方面上。从方法上来说，前者的考察纯粹是思辨性的，而后者则以实证为主。" },
          { p: "因此，黑格尔在这里所作的“人类学——精神现象学——心理学”的划分，被后世的人类学家所忽视，乃至轻视，也就不难理解了：我们所讨论的“人类学”概念既已不同，而你甚至在本领域中都已经被批为迂腐的“死狗”，我又为什么要横跨学科，到一个已经逝去的古老王国的故纸堆里寻章摘句呢？在这种情况下，本文的一个洞见就是黑格尔的划分和现代人类学是有关联的。而且这种关联虽则是隐蔽的，却又是强烈的，甚至剑锋直指现代人类学最为核心、最为幽深的疑虑之一。而这样一种关联，与其说是西方本土的哲学意义上的人类学与现代学术意义上的人类学之间的关联，不如说是黑格尔这个三元组合本身与现代学术意义上的人类学之间的关联。因为西方古典意义上的人类学，像刚刚讲的康德的《实用人类学》，无非是关于一些什么样的地理造就什么样的民族性格以及人的感官的划分、情绪的划分，这样肤浅的直接的观察以及思辨。这样的思考和上个世纪现代人类学做出的科学的、严谨的分析以及取得的浩如烟海般的成就相比，是不足道的。但是黑格尔为什么要把这样一种人类学放到主观精神的第一部分，这背后却是有深意在的。" },
          { p: "首先，我们必须回顾一下黑格尔的精神的概念。在很多人那边，这个概念是黑格尔最高也是最难的概念之一了。但是它其实是无比简单的。庄振华教授，在他的《精神现象学义解》中，说到：“精神不是什么主观思维或者其客观投射，而恰恰就是意义世界本身，它固然需要通过个人来成全，但它首先不是主观的，而是客观而实在的整体，是黑格尔所谓的‘事情本身’。”我认为这是国内学人有史以来有过的最好的阐释。" },
          { p: "当我们听到“禁止通行”这四个字的时候，我们感受到的是声音，以及由这些声音以某种方式组织起来的符号，那么在这个符号背后，我们明显地感觉到它是有一层“意思”的，不然我们也不会领会什么叫“禁止通行”了。当我们心中浮现“禁止通行”这四个字的时候，我们的内视觉“看”到了四个符号，我们明显地感到这四个符号后面有一个意思在里面，但是我们看不到它，只能以某种形式领会它。我们所能听到看到的只是符号。当然，这也是索绪尔意义上的能指与所指。精神的一大部分，也就是这个世界上所有所指所存在的王国。从这个地方岔出去，我们也能以一种全新的视角思考辩证法是什么。辩证法不是诡辩论，不是变戏法，它仅仅是一种能指与所指之间自发的滑动运动罢了。" },
          { p: "我们说回来精神。笔者认為理解黑格尔的一个核心的例子就是外星人，但是很少有人从这个角度出发去阐述。" },
          { p: "现在假如我们拿一个大筐子把地球上有史以来出现过的所有符号框起来。这里的符号包括大量的东西，最大的一类就是语言，这里的语言也包括大量的东西，比如有史以来的所有人类脑子里面的所有想法，交谈出来的所有话语，这个东西就全都是语言，全都要框进去。这里的符号范围很广泛的，比如几亿年前的一只原始甲虫，它看到了面前有一只捕食者，或者用触角探测到了捕食者的信息素，这些都算作符号，因为在我们的定义下，它的背后都有一个精神性的东西，也就是危险或者紧张。" },
          { p: "现在我们再拿一个框，把所有这些符号背后的那个意义的东西给它框起来。这个框里边就包含了我们已知的意义世界。它里边包含了美洲某一个原始部族的婚姻结构，包含了杜甫少年壮游时的所思所想，包含了某个共和国的法权理念。从某个意义上，其实也就是精神的意义上，一切都在里面，因为我们能所道出的一切都已经在里面了。我们或许会问，那么黑洞呢？黑洞在不在里面？回答是：当我们提及黑洞这个东西的时候，我们所指涉的已经化约成了一团抽象的意义，被黑洞这个词这个符号所包裹。而我们所想象出来的那个物质性的存在，我们的意向从来没有对准它，也对不准它。因为它只能被眼睛看到。" },
          { p: "现在，我们的问题是，意义世界是否有一般结构？换一个更易理解的问法就是，如果我们统计世界的一切意识体，这里的“世界”不光是地球，也不光是宇宙，而是所有的可能的宇宙，所有可能的空间与时间的范围，或者凌驾于空间和时间之上的场域。比如我们的宇宙中所有曾经有过意识存在的星球；比如如果我们是“缸中之脑”，在我们的宇宙之外，还有一个更加真实的世界，在那里有其他意识观察着我们，我们就把他们也算上。在那个世界之外，还有世界，层层迭代，绵延到无穷。我们把每一个世界里的所有意识都算上。" },
          { p: "那么我们的问题就是：这些所有的意识所生成的所有的意义世界，有没有一般结构？" },
          { p: "一个显而易见的事实是，两组意义世界可能有不同，也可能有相同之处。这取决于他们的物质基础，或者说生存论条件。比如秦朝人的意义世界里边没有电脑这个概念，鸟类的意义世界里边（可能）没有“1+1=2”这个概念，思维透明的三体人的意义世界里边没有欺骗这个概念；但是无论是秦朝人还是鸟类还是三体人，他们都有自我跟他者的区分，也有内和外的区分。但是，对于只有刺激信号闪过神经系统的目盲的海星，可能连内外之别也没有了。" },
          { p: "换一个例子，罗马人和巴布亚新几内亚的岛民的文化有差异，但也有同一的地方。那么，对于一百万个有过“文化性”的东西的外星种群，这一百万种文化，会不会有什么普遍性的东西？要知道，这些种群可能在生物学基础上大相径庭，比如某个种群可能根本没有对冷热的这种感知；某个种群可能根本就没有视觉；某个种群可能不是多个体的，也就是说，整个种群的历史上就只有一个单独的个体；某个种群可能有一堆我们根本想象不到的知觉。在这种情况下，如果它们都能产生出来某种文化性的东西，而且它们这些文化性的东西中又有一些一般的东西，那么我们可能就会相信世界本身具有某种文化性的结构。" },
          { p: "说世界本身具有一种文化性的结构，似乎有一点太过离奇了，那么我们就不关注文化，而回到意义这一个整体上来。那么我们最终关注的问题就是世界本身有没有一种意义结构：如果所有的意义世界有一种普遍的结构的话，那么我们就说，可能是有的。" },
          { p: "实际上，上述全部所述，只不过是把西方哲学的最为核心的问题，也即世界的可理解性问题，用一个比较新奇的语言重述了一遍罢了。只不过这样一副语言比较适合我们理解黑格尔的这一三元组合（人类学——精神现象学——心理学）。" },
          { p: "上面说了，如果我们能够统计所有可能世界的所有可能意识体的全部意义世界的话，那么我们就能揭示世界本身的意义结构。但是这是我们无法做到的。但是我们可以怎么做呢？我们可以有哪些认识对象呢？这里就是人类学介入的地方了，我们可以通过考察所有的不同的地理时空环境下的人类种群去探查每一个种群的意义世界，以及这个意义世界的生成史。在这里，我们其实已经进入了现代人类学的论域之中了。通过对不同的独立发展的或相互影响的种群的符号网络以及更为细分的政治形态、经济形态、文化形态（事实上，这些东西都隶属于符号网络门下，它们本身当然是处于意义的维度的，但我们的考察必然要通过符号来进行）的考察，去探索意义结构的一般规律。" },
          { p: "从这个意义上来说，人类学实在是无奈之举。因为没有一门学问，叫做外星人学。当然也有很多人类学家，他们的出发点并不如此，他们的兴趣只是在于探究人类这样一个特殊的群体。但是必须看到，整个人类学的大图景后面有这样一个更高的疑问，它是一个更加广泛的困惑。也就是我说的暗线。" },
          { p: "然而，探索人类意义结构的一般规律，又岂是那么容易的事？马林诺夫斯基那一代的学者遭遇了文化现象、符号现象与背后的意义结构之间的巨大的割裂，现有的一切分析方法的合法性疑点，以及浩如烟海的符号网络所带来的复杂性，还在坚持用苦心孤诣的再诠释徒劳地为各种现象强行赋予意义，为各种历时的或共时的相似强行赋予关联。但是由音位学的结构主义突破而引发的人类学的结构主义突破又找到了破局之术：如果我们不能直接触碰意义结构的一般形式，那我们就去考察符号结构的一般形式。为什么在所有语言中，在所有可能的音韵之中，总有一些音出现的比其它的音都要多呢？“透过杂乱无章的规则和风俗，把存在并运行于不同时空环境中的一个唯一的概念程式揭示出来。这个概念程式既不等于这种制度的某一特定模式，也不等于形式多样的共同特征的武断组合。”列维·施特劳斯的这段话可谓切中肯綮。" },
          { p: "那么我们再回顾黑格尔的三元组合，他实际上就预示了这个暗线。前面提过它所谓的第一阶段以及人类学的阶段并不等同于现代意义上的人类学，而是一种对于从动物灵魂到人类灵魂的发展史的考察。精神现象学又是什么呢？虽则有一本书摆在那了，但黑格尔自己的讲解是很清晰的：就是对于人类进入意识阶段之后的精神的发展史的考察。实际上，虽然看起来风马牛不相及，但是精神现象学就是意识形态学。所谓意识形态，在笔者看来，非常简单，就是意识的形态。但更重要的是，它还包括了导致意识陷入某种特定的形态的那个意义回路，在这个特定的回路下，人的脑子可以一直转，一直在这套逻辑里边转而跳不出来，也无法反思。从历史上看，原始人类在发展出自我意识之后，就又分别发展出了性别意识和阶级意识。人仅仅是因为自己的生理性征和别人不同，就认为自己非得阳刚他人非得阴柔，这就是一种意识形态。人仅仅因为自己过得更好，就认为人有尊卑贵贱之分，这也是一种意识形态啊。小学初中生发展出自我意识之后，混迹帮派，在地下社会耳濡目染，觉得自己非得抽个烟、打个架才算厉害，这难道不是一种意识形态吗？并不是只有共产主义与自由主义的对立，才叫意识形态，世界的每一个局部，都被意识形态所统治。从最为宏观的人类学视角到更为具体的意识形态学，也就是精神现象学，再到更为局部的心理学，这既是视角的放缩过程，也是精神本身的发展的更为具体、更为多样化的过程。从这里我们也可以看出，今天的现代学术化的人类学是超越了原有的人类学范畴，在这三个方向同时开展考察的学问。" },
          { p: "下面我们通过笔者在进行研究时的一些感想进行一下总结。" },
          { p: "我们国家的不少哲学学者，（不光是年龄较大、七老八十的那些人，年轻学者也一样），张口闭口就是一堆西方学者的名字，但说出来的话却一看就浅薄得不得了，做学问也是苦做、硬做：这里翻译个几十万字，那里寻章摘句凑出一篇逻辑还算通顺的文章。但这些东西在国际上都是不入流的，在历史上也不是领先的。只是在国内的小圈子和评审委员会里自娱自乐罢了。归根结底，是因为太多人从始至终就没有进入二十世纪哲学的论域里面去，几十本书上百本书看完了也没进去。为什么进不去？归根结底，是因为很多人根本不是后现代人，甚至连现代人也算不上。中科院的孟建伟教授就是一个例子，他讲施特劳斯时是怎么引入的？我们来看这段话。" },
          { p: "“……1935-1939 年，他到原始部落进行人类学调查……西方人里面呀，有些人研究的东西呀，我觉得很值得我们学习啊，有些人研究的东西，那在我们看来，怎么能研究到那个地方去呢。像我们一般很正规的研究的话他不可能到了这个地方。但是，你看啊，他研究什么？人类学。人类学与哲学。你像我们现在这个专业的话可能不太愿意读人类学。因为你看，有什么意义吗？到，那非洲，丛林里面去。然后到那个比较远古的部落里面去研究人类学。当然，弄得不好也死在那了。可是，在他们那边却有好多人就做这种研究。创立结构主义人类学与哲学有什么关系呢？列维施特劳斯出于对法国文化和西方文明的不满，到美洲考察原始文化。看，这反叛的够厉害的。出于对法国文化和西方文明的不满，到美洲考察原始文化。”" },
          { p: "好一个“值得学习”！今天列维施特劳斯跑到非洲雨林里面，你说这是另辟蹊径，我们学习学习。明天福柯在故纸堆里考察性经验史，你说这是不拘一格，也得学习学习。哪天西方学者考察一部屎的历史，你也要学习学习，用中国的视角重新审视一遍吗！世界上犄角旮旯里的奇奇怪怪的东西那么多，哪里是考察得完的？从哲学走向人类学，或者走向知识考古学，这根本就是一个再自然不过的逻辑；你心里没有对世界与意识的那些终极问题的持久而强烈的好奇心，你没有经历过一个现代人走向后现代者所要经受的那些反思，你就会觉得这是在标新立异、另辟蹊径。" },
          { p: "“在我们看来，怎么能研究到那个地方去呢”“有什么意义吗”。" },
          { p: "“我们”是谁啊？不就是他的同僚、朋友、老师，那一整代的哲学学者群嘛！能有这样的疑问，恰恰说明你连人家上世纪三十年代的理论逻辑、问题意识都还没摸上边呢。连上个世纪的提问逻辑都没法理解，还怎么问出有历史意义的问题、做出领先世界的学问呢？" },
          { p: "“出于对法国文化和西方文明的不满”我不知道这是这位教授自己的总结，还是施特劳斯本人的表述。我只知道，要真是“出于对法国文化和西方文明的不满”而跑到热带雨林里面做人类学研究，那施特劳斯就真成了一个青春期的叛逆少年了，而且还是一个脑子不太好使的叛逆少年：为了表示对校长的不满，不是去搞演讲而是去研究金石拓片！" },
          { p: "对人类意识结构的考察，对世界意义结构的探究，从德国古典哲学大师的书斋到施特劳斯的热带，再到福柯的故纸堆，这背后是有深刻的理论逻辑的。有些人热衷于强调二十世纪哲学的断裂性、不连续性，其实不过是为自己散乱的认识和混乱的思维找个托辞罢了。二十世纪学术体系迅猛发展、学者数量激增，每一代学者都是看着上一代人给出的路径，体会着上一代人留下的疑惑而成长的。大的论域是一贯的，论域的发展的是清晰的，哪里有什么真正的断裂可言？只不过理论路径层出不穷，花哨词汇越积越多，令人眼花缭乱罢了。其他很多的学者，可能是因为哪个太平洋小岛民族“是人类文化宝库的一部分”，“有其人类学社会学价值”而跑去待上一两年，去研究它；一个研究恐龙的学者，可能纯粹是因为兴趣，不辞劳苦去收集恐龙化石。但像施特劳斯这样的思考者，他决不会仅仅因为热带部落有什么虚无缥缈的“文化遗产价值”而去研究，也决不会仅仅是因为感兴趣而去研究。他之所以要开创结构人类学，是因为结构人类学必然被开创。“什么是意识？”“什么是精神？”这样的最为幽深的问题在思辨上走不下去了，才必然要在实证上继续发问：“什么是人？”“什么是人类的意义体系的普遍结构？”“什么是人类的符号体系的普遍结构？”因此才要考察世界历史上纷繁复杂的社会形态、文化形态，乃至心理结构的形态；因此才要兵分两路，在史学和人类学上进行考察。看这段话：“……历史学与民族学目的相同，即更好地了解什么是人……他们的主要区别在于选择了不同的、却是互补的观察角度：历史学围绕着社会生活的有意识的表达活动组织它的数据，民族学则着眼于无意识的条件。”在这样的文字在 1958 年发表之后，像福柯这样的下一代学者，在卷帙浩繁的史学研究中对无意识的因素进行考量，不是再自然不过的事情了吗？对这样的大的逻辑没有把握，自然会觉得施特劳斯或者福柯是在剑走偏锋，思路奇特。" },
          { p: "当然，最后得为孟建伟教授做一个大大的正名：他是在给本科生的通识课上，作为引入而说的这段话。正话反说，也在情理之中。只是老先生的语气，那种腔调，有点过于拟真了。" }
        ]
      }
    }
  }
};
