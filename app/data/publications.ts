export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
  note?: string;
};

export const journalPublications: Publication[] = [
  {
    title: "A Policy Gradient Algorithm for the Risk-Sensitive Exponential Cost MDP",
    authors: "Mehrdad Moharrami, Yashaswini Murthy, Arghyadip Roy, and R. Srikant",
    venue: "Mathematics of Operations Research",
    year: "2024",
    href: "https://arxiv.org/abs/2202.04157",
  },
  {
    title:
      "On the Convergence of Modified Policy Iteration in Risk Sensitive Exponential Cost Markov Decision Processes",
    authors: "Yashaswini Murthy, Mehrdad Moharrami, and R. Srikant",
    venue: "Operations Research",
    year: "2024",
    href: "https://arxiv.org/abs/2302.03811",
  },
  {
    title: "smartSDH: A Mechanism Design Approach to Building Control",
    authors:
      "Ioannis C. Konstantakopoulos, Kristy A. Hamilton, Yashaswini Murthy, Tanya Veeravalli, Costas Spanos, and Roy Dong",
    venue: "IEEE Systems Journal",
    year: "2022",
    href: "https://arxiv.org/abs/2001.02807",
  },
];

export const conferencePublications: Publication[] = [
  {
    title: "On the Gaussian Limit of the Output of IIR Filters",
    authors: "Yashaswini Murthy, Bassam Bamieh, and R. Srikant",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: "2025",
    href: "https://arxiv.org/abs/2508.12705",
  },
  {
    title:
      "Global Convergence of Policy Gradient in Average Reward Markov Decision Processes",
    authors:
      "Yashaswini Murthy*, Navdeep Kumar*, Itai Shufaro, Kfir Levy, R. Srikant, and Shie Mannor",
    venue: "International Conference on Learning Representations (ICLR)",
    year: "2025",
    href: "https://arxiv.org/abs/2403.06806",
    note: "* Equal contribution",
  },
  {
    title:
      "Performance Bounds for Policy-Based Average Reward Reinforcement Learning Algorithms",
    authors: "Yashaswini Murthy, Mehrdad Moharrami, and R. Srikant",
    venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    year: "2023",
    href: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/3da8e709fa1a7d9e23bee89d3c25b5b4-Abstract-Conference.html",
  },
  {
    title:
      "Modified Policy Iteration for Exponential Cost Risk Sensitive MDPs",
    authors: "Yashaswini Murthy, Mehrdad Moharrami, and R. Srikant",
    venue: "Learning for Dynamics and Control (L4DC)",
    year: "2023",
    href: "https://proceedings.mlr.press/v211/murthy23a.html",
  },
  {
    title:
      "On the Convergence of Natural Policy Gradient and Mirror Descent-Like Policy Methods for Average-Reward MDPs",
    authors: "Yashaswini Murthy and R. Srikant",
    venue: "IEEE Conference on Decision and Control (CDC)",
    year: "2023",
    href: "https://ieeexplore.ieee.org/abstract/document/10383691",
  },
  {
    title:
      "A Lagrangian Model to Predict Microscallop Motion in non Newtonian Fluids",
    authors: "Yashaswini Murthy and Ravi Banavar",
    venue:
      "International Conference on Manipulation Automation and Robotics at Small Scales (MARSS)",
    year: "2019",
    href: "https://arxiv.org/abs/1811.08289",
    note: "Invited for journal extension",
  },
  {
    title: "The Twelvefold Way of Non-Sequential Lossless Compression",
    authors:
      "T. Ameen ur Rahman*, A. Barbehenn*, X. Chen*, H. Dbouk*, J. Douglas*, Y. Geng*, I. George*, J. Harvill*, S. Jeon*, K. Kansal*, K. Lee*, K. Levick*, B. Li*, Z. Li*, Y. Murthy*, A. Muthuveeru-Subramaniam*, S. Olmez*, M. Tomei*, T. Veeravalli*, X. Wang*, E. Wayman*, F. Wu*, P. Xu*, S. Yan*, H. Zhang*, Y. Zhang*, Y. Zhang*, Y. Zhao*, Sourya Basu, and Lav R. Varshney",
    venue: "Data Compression Conference (DCC)",
    year: "2021",
    href: "https://arxiv.org/abs/2011.04069",
    note: "* Alphabetical ordering",
  },
];

export const workingPapers: Publication[] = [
  {
    title: "Finite Time Analysis of Risk-Sensitive RL via Noisy Power Iteration",
    authors:
      "Waqar Mirza, Yashaswini Murthy, Laixi Shi, Eric Mazumdar, and Adam Wierman",
    venue: "NeurIPS 2026",
    year: "2026",
    note: "Under review",
  },
  {
    title:
      "Finite-Sample Convergence in Networked Average Reward MARL: Decentralization Pitfalls and Entropy Remedies",
    authors: "Yizhou Zhang*, Yashaswini Murthy*, Laixi Shi, and Adam Wierman",
    venue: "NeurIPS 2026",
    year: "2026",
    note: "Under review · * Equal contribution",
  },
  {
    title:
      "Finite-Time Convergence of Single-Trajectory Chi-Square Robust Q-Learning With Linear Function Approximation",
    authors: "Saptarshi Mandal, Yashaswini Murthy, and R. Srikant",
    venue: "IEEE Transactions on Automatic Control (TAC)",
    year: "2026",
    href: "https://arxiv.org/abs/2510.01721",
    note: "Under submission",
  },
  {
    title: "Performance of NPG in Countable State-Space Average-Cost RL",
    authors:
      "Yashaswini Murthy, Isaac Grosof, Siva Theja Maguluri, and R. Srikant",
    venue: "Operations Research",
    year: "2024",
    href: "https://arxiv.org/abs/2405.20467",
    note: "Major revision",
  },
  {
    title:
      "On the Performance of Actor-Critic Reinforcement Learning Algorithms for Risk Sensitive Exponential Cost Markov Decision Processes",
    authors: "Yashaswini Murthy and R. Srikant",
    venue: "In preparation",
    year: "2026",
  },
];

export const preprints: Publication[] = [
  {
    title: "A Theoretical Model of Microscallop in Non-Newtonian Fluids",
    authors: "Yashaswini Murthy",
    venue: "Preprint",
    year: "",
    href: "https://www.researchsquare.com/article/rs-3552262/v1",
  },
];

export const selectedPublications: Publication[] = [
  workingPapers[0],
  workingPapers[1],
  workingPapers[2],
  journalPublications[1],
];
