export interface Project {
  id: string;
  title: string;
  category: 'VS Code' | 'p5.js' | 'Three.js' | 'Arduino' | 'Unity' | 'Touch Designer' | 'IoT';
  year: string;
  image: string;
  description: string;
  techStack?: string[];
  githubUrl?: string;
  externalUrl?: string;
  challenge?: string[];
  gallery?: { type: 'image' | 'video'; url: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'vscode-extension',
    title: 'Birth Machine',
    category: 'Arduino',
    year: '2026',
    image: '/images/birthmachine.jpg',
    description: 'Blends bodily horror, existential reflection, and a surreal sense of artificiality—a profound exploration of pregnancy, childbirth, and the strange intersection between the organic and the synthetic.',
    techStack: ['Arduino', 'AI', 'Blender'],
    gallery: [
      { type: 'image', url: '/images/birthmachine1.jpg' },
      { type: 'image', url: '/images/birthmachine2.jpg' },
      { type: 'image', url: '/images/birthmachine3.jpg' },
      { type: 'video', url: '/videos/birthmachine_video.mp4' }
    ],
    challenge: [
      "As women under Chinese rule, we should never forget the nightmare of being treated as breeding machines. In 1979, the Chinese government implemented an extreme one-child policy due to overpopulation, including forced abortions. However, today, China faces the serious problems of an aging population and low birth rate, and has begun implementing a three-child policy to encourage people to have more children. Are women merely breeding machines, easily given birth to or stopped like the push of a button, simply to serve the country? Does the Chinese government truly treat its people as human beings?",
      "I built a birthing machine, using wires to simulate the umbilical cord for data/nutrient delivery, and hiding the alien hybrid baby inside. The surreal birthing process: the mechanical device, like a \"shell\" (vagina/vulva), spirals open with a humming sound, its slow rotation simulating labor contractions. The baby is a bizarre yet innocent fusion of human and alien features. Their \"innocence\" contrasts sharply with their terrifying origins. I hope women will think carefully before giving birth and make an informed choice for their lives."
    ]
  },
  {
    id: 'three-galaxy',
    title: 'Wheel of Fortune',
    category: 'p5.js',
    year: '2026',
    image: '/images/wheeloffortune.jpeg',
    description: 'Exploring human experience, this work delves into the complexities of human existence and focuses on profound themes such as the cycle of life (birth and social mobility). Also, address socio-political themes, critiquing inequality and examining power structures and social status.',
    techStack: ['p5.js'],
    gallery: [
      { type: 'image', url: '/images/wheeloffortune1.jpeg' },
      { type: 'image', url: '/images/wheeloffortune2.jpeg' },
      { type: 'image', url: '/images/wheeloffortune3.jpeg' }
    ],
    challenge: [
      "Exploring human experience, this work delves into the complexities of human existence and focuses on profound themes such as the cycle of life (birth and social mobility). Also, address socio-political themes, critiquing inequality, and examining power structures and social status.",
      "Having studied political science in South Korea, I am particularly interested in international affairs and my homeland. After World War II, the world rebuilt from chaos, but now a third world war seems to be brewing. I closely monitor the changing international landscape. The massive investments by countries in the technological race have fueled the development of artificial intelligence. Recently, I have been reflecting on how artists can survive in the current international environment."
    ]
  },
  {
    id: 'arduino-synth',
    title: 'Meshby',
    category: 'IoT',
    year: '2026',
    image: '/images/meshby.png',
    description: 'A prototype of digital art presented on a platform that allows customers to access quality digital content in our app using an NFC card with high physical and digital security barriers for copyright protection.',
    techStack: ['VS Code', 'IoT'],
    externalUrl: 'https://drive.google.com/file/d/1EAkj5NvgwakRfzW0BtehI2wnQnGGGyhZ/view?usp=sharing',
    gallery: [
      { type: 'image', url: '/images/meshby1.png' },
      { type: 'image', url: '/images/mushby2.png' },
      { type: 'video', url: '/videos/mushroom_card.mp4' },
      { type: 'video', url: '/videos/mushroom_prototype2.mp4' },
      { type: 'video', url: '/videos/Cardmic_promotionvideo_demo.mp4' }
    ],
    challenge: [
      "Stimulated by the AI bubble, AI-generated “fast-food” art has rapidly proliferated, severely damaging the value and returns of high-quality digital art content creators and reducing their willingness to remain in the art industry.",
      "The massive investments by countries in the technological race have fueled the development of artificial intelligence. Stimulated by the AI bubble, AI-generated \"fast-food\" art has rapidly proliferated, severely damaging the value and returns of high-quality digital art content creators and reducing their willingness to remain in the art industry. In the long run, this will affect the sustainable development of the art industry.",
      "Today, under the influence of technological feudalism, AI can easily produce digital art; we need a mature regulatory system to address this change. I am committed to making an impact in the art world, focusing on the global art industry, and actively seeking opportunities to address long-standing issues such as copyright, labor rights, and the well-being of content creators through practical solutions. Building networks is essential for the flourishing of art. I cannot wait to explore better solutions through in-depth discussions with international industry professionals and experts."
    ]
  },
  {
    id: 'p5-generative',
    title: 'Hangang Bridge Bombing',
    category: 'Unity',
    year: '2025',
    image: '/images/hangangbridgebombing.png',
    description: 'RPG game highlights the complexities of the Korean Peninsula’s past, evoking empathy for history as a commemoration of lost lives, and highlighting the importance of preserving peace.',
    techStack: ['Unity', 'Blender', 'VS Code'],
    externalUrl: 'https://github.com/9uququ9u4787/GIM2025_Final',
    gallery: [
      { type: 'image', url: '/images/hangangbridgebombing.png' },
      { type: 'video', url: '/videos/hangangbridgebombing.mp4' }
    ],
    challenge: [
      "In 2025, I participated in an exchange program at Sogang University in Seoul, which broadened my global perspective and further enhanced my skills in international media and cross-cultural storytelling.",
      "Big thanks to 이우 and 9uququ9u4787. One of the most valuable experiences was that I got a chance to co-create a game related to Korean history with students at Sogang. The Hangang Bridge bombing, which happened on June 28, 1950, was a significant, tragic event during the early Korean War, where the South Korean Army prematurely destroyed the bridge to slow North Korean forces. The explosion occurred while the bridge was crowded, causing an estimated 500–1,000 deaths. It failed to stop the North Korean advance, with Seoul falling that same day.",
      "Our immersive game allow audiences experience what happened back in the days and relate to the citizens at that time. Even today, the Korean government still trying to hide this history to the world. We translated Korean into English and visualized the whole event through Unity, hope the world can widness the truth in a virtual way."
    ]
  },
  {
    id: 'vscode-theme',
    title: 'Saving Goal',
    category: 'Unity',
    year: '2025',
    image: '/images/savinggoal.jpg',
    description: 'Through real-time, responsive 3D mapping games, encourage children distinguish between wants and needs, thus making informed purchasing decisions.',
    techStack: ['Unity', 'Blender', 'VS Code'],
    externalUrl: 'https://youtu.be/nFxLYa4WK4M?si=VaytEKB7DNEWgVFZ',
    gallery: [
      { type: 'image', url: '/images/savinggoal1.png' },
      { type: 'image', url: '/images/savinggoal2.png' },
      { type: 'image', url: '/images/savinggoal3.jpg' },
      { type: 'video', url: '/videos/savinggoal.mp4' }
    ],
    challenge: [
      "Our Team: Ng Ming Ming, Thea; Hung Lok Wing, Kristy; Lui Hoi Kei, Heidi; Liu Ting, Tiffany",
      "We strive to strike a balance between challenge and feasibility. This allows players to easily grasp the hidden messages within our games. Even if our games are zero-sum games, players can easily accept the outcomes.",
      "Our goal is to raise children's awareness of saving through games and teach them how to use money wisely. We hope to help viewers distinguish between wants and needs, thereby guiding them to consume rationally and understand that they need to give up some things to gain something.",
      "This immersive experience attracted a variety of markets, including schools, entertainment centers, medical facilities, and homes. Innovative applications like augmented reality and personalized experiences set us apart from competitors. Experience the fusion of imagination and expertise with me—the catalyst for strategic marketing transformations that enrich the world around us."
    ]
  },
  {
    id: 'p5-audio',
    title: 'Flock Flow',
    category: 'Unity',
    year: '2024',
    image: '/images/flokflow.jpg',
    description: 'Flok Flow is an immersive game designed to explore human behavior. Players take on the role of a sheep, choosing a path through an eternal maze, while other sheep move in different directions.',
    techStack: ['Unity', 'Blender', 'VS Code'],
    externalUrl: 'https://playerkhk.wordpress.com/wp-content/uploads/2024/06/youcut_20240613_012631042.mp4',
    gallery: [
      { type: 'video', url: '/videos/flokflow.mp4' }
    ],
    challenge: [
      "Team Members: Ng Ming Ming, Thea; Hung Lok Wing, Kristy; Lui Hoi Kei, Heidi",
      "To accomplish this, we spent a significant amount of time defining the game mechanics and objectives. Today, people have easy access to various media, information is ubiquitous, and people hold differing opinions about it. It's difficult to distinguish truth from falsehood, like being in a maze with no exit. Most of the time, we simply follow the crowd, blindly conforming to the actions of others.",
      "In this game, we allow players to explore the maze using the WASD keys. They can choose to follow other players' routes or forge their own path, simulating how we use the internet in our daily lives. Ultimately, the player's choices will lead to different endings."
    ]
  }
];
