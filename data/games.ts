export type FAQItem = {
  question: string;
  answer: string;
};

export type GameInfo = {
  title: string;
  slug: string;
  iframeUrl: string;
  image: string;
  description: string;
  tags: string[];
  controls: string[];
  tips: string[];
  faqs: FAQItem[];
};

export const games: GameInfo[] = [
  {
    title: "Age Of Battle",
    slug: "age-of-battle",
    iframeUrl: "https://cloud.onlinegames.io/games/2026/unity/age-of-battle/game.html",
    image: "https://www.onlinegames.io/media/posts/1201/responsive/age-of-battle-xs.webp",
    description:
      "Play Age Of Battle unblocked online for free — no download needed. Command primitive units in the Stone Age and evolve through different eras to victory in this strategic browser battle game.",
    tags: ["Unblocked", "Strategy", "Evolve", "No Download", "Browser Game"],
    controls: [
      "Mouse Click / Tap - Deploy units and navigate menus",
      "On Mobile - Tap on-screen buttons to control"
    ],
    tips: [
      "Start small and smart: Use clubmen first since they need less meat.",
      "Always watch your meat count and don't send units if you can't replace them fast.",
      "Save coins for upgrades: Better food production makes every battle easier.",
      "Mix your units: Combine close-range clubmen, far-hitting stone throwers, and high-damage dino riders.",
      "Do not rush evolution: Make sure you are ready since coins and upgrades reset in the new era."
    ],
    faqs: [
      {
        question: "Is Age Of Battle free to play?",
        answer: "Yes, Age Of Battle is 100% free to play in your browser — no download or sign-up needed."
      },
      {
        question: "What is the goal of Age Of Battle?",
        answer: "Defend your territory in the Stone Age, produce meat to deploy soldiers, defeat enemies, collect coins, and evolve into stronger eras like the Farm Age."
      },
      {
        question: "Can I play Age Of Battle on mobile?",
        answer: "Yes! Age Of Battle features responsive mobile optimization and intuitive touch controls for phones and tablets."
      },
      {
        question: "Do my coins carry over when I evolve?",
        answer: "No. When you evolve to a new era (such as the Farm Age), your coins, upgrades, and battles will reset, but you unlock much more powerful units."
      },
      {
        question: "Does Age Of Battle work on Chromebook?",
        answer: "Yes. Age Of Battle is an HTML5 browser game that runs directly in any modern web browser like Google Chrome without any downloads."
      },
      {
        question: "Is Age Of Battle unblocked at school?",
        answer: "Yes, Age Of Battle runs directly in your browser tab without any plugins. Access depends on your school's network restrictions, but there is no software install required."
      }
    ]
  },
  {
    title: "Fall Brainrots",
    slug: "fall-brainrots",
    iframeUrl: "https://cloud.onlinegames.io/games/2026/unity/fall-brainrots/game.html",
    image: "https://www.onlinegames.io/media/posts/1194/responsive/fall-brainrots-xs.webp",
    description:
      "Play Fall Brainrots unblocked online for free — no download needed. Race through chaotic parkour courses with funny Italian brainrot characters in this browser game you can play at school or on Chromebook.",
    tags: ["Unblocked", "Brainrot", "Parkour", "No Download", "Browser Game"],
    controls: [
      "WASD or Arrow Keys - Move",
      "Space - Jump",
      "Mouse - Look around, if supported",
      "R - Restart, if supported"
    ],
    tips: [
      "Do not rush every obstacle.",
      "Watch moving platforms before committing to a jump.",
      "Jump early instead of late on long gaps.",
      "Stay near the center of the track whenever possible.",
      "Learn each stage pattern and replay to improve timing."
    ],
    faqs: [
      {
        question: "Is Fall Brainrots free to play?",
        answer: "Yes. Fall Brainrots is 100% free to play in your browser — no payment, no sign-up, no download required."
      },
      {
        question: "Can I play Fall Brainrots online?",
        answer:
          "Yes. This page embeds the game directly so you can play it instantly. Just open the page and click play — works on any browser."
      },
      {
        question: "Is Fall Brainrots unblocked?",
        answer:
          "Fall Brainrots is an HTML5 browser game that runs in your browser tab. It does not need any plugins or installs. Availability depends on your network, but there is nothing to block on the software side."
      },
      {
        question: "Can I play Fall Brainrots on mobile?",
        answer:
          "Yes, the game loads on most mobile browsers. Controls and performance may vary by device."
      },
      {
        question: "Do I need to download Fall Brainrots?",
        answer: "No download is needed. The game runs entirely in your browser — just open this page and play."
      },
      {
        question: "What are Brainrot games?",
        answer:
          "Brainrot games are meme-heavy, chaotic games built around funny Italian brainrot characters, absurd humor, and fast reactions. They are popular with students as quick browser games."
      },
      {
        question: "Can I play Fall Brainrots at school?",
        answer:
          "Fall Brainrots is a browser-based HTML5 game that requires no download or installation. It works on Chromebook, Windows, and Mac. Whether it loads depends on your school network, but the game itself has no special requirements."
      },
      {
        question: "Does Fall Brainrots work on Chromebook?",
        answer:
          "Yes. Fall Brainrots is an HTML5 game that runs directly in Chrome or any modern browser. No extensions or apps needed — just open the page and play."
      }
    ]
  },
  {
    title: "Steal Brainrot Heist",
    slug: "steal-brainrot-heist",
    iframeUrl: "https://cloud.onlinegames.io/games/2026/unity/steal-brainrot-heist/game.html",
    image: "https://www.onlinegames.io/media/posts/1180/responsive/steal-brainrot-heist-2-xs.webp",
    description:
      "Play Steal Brainrot Heist unblocked for free — no download required. Hunt funny Italian brainrot characters, collect them to your base, and protect your loot in this browser game that works at school on Chromebook.",
    tags: ["Unblocked", "Brainrot", "Strategy", "No Download", "Browser Game"],
    controls: [
      "WASD or Arrow Keys - Move",
      "Mouse - Look around and interact",
      "E - Interact / Collect",
      "Space - Jump"
    ],
    tips: [
      "Focus on collecting nearby brainrot characters first.",
      "Always keep an eye on your base for incoming thieves.",
      "Upgrade your base defenses as early as possible.",
      "Use speed boosts to outrun opponents.",
      "Plan efficient routes to maximize your collection."
    ],
    faqs: [
      {
        question: "Is Steal Brainrot Heist free to play?",
        answer: "Yes. Steal Brainrot Heist is completely free to play in your browser — no download, no sign-up needed."
      },
      {
        question: "What is the goal of Steal Brainrot Heist?",
        answer:
          "You hunt funny brainrot characters and bring them to your base to earn money, while protecting your base from other thieves."
      },
      {
        question: "Can I play Steal Brainrot Heist on mobile?",
        answer:
          "The game can load on mobile browsers, but gameplay experience may vary depending on your device."
      },
      {
        question: "Is there multiplayer in Steal Brainrot Heist?",
        answer:
          "Yes, the game features multiplayer elements where you compete against other players online."
      },
      {
        question: "Can I play Steal Brainrot Heist at school?",
        answer:
          "Steal Brainrot Heist is a browser-based HTML5 game — no download or install needed. It runs on Chromebook and school computers. Access depends on your school network policies."
      },
      {
        question: "Does Steal Brainrot Heist work on Chromebook?",
        answer:
          "Yes. It is an HTML5 browser game that runs in any modern browser including Chrome. No apps, extensions, or plugins required."
      }
    ]
  },
  {
    title: "Cool Brainrot Clicker",
    slug: "cool-brainrot-clicker",
    iframeUrl: "https://cloud.onlinegames.io/games/2025/construct/335/cool-brainrot-clicker/index-og.html",
    image: "https://www.onlinegames.io/media/posts/1104/responsive/cool-brainrot-clicker-xs.webp",
    description:
      "Play Cool Brainrot Clicker unblocked online for free. Click your way through endless fun with brainrot characters and power-ups in this idle clicker browser game — no download, works at school on Chromebook.",
    tags: ["Unblocked", "Clicker", "Brainrot", "No Download", "Free Online"],
    controls: [
      "Mouse Click - Click brainrot characters to earn points",
      "Mouse - Navigate menus and upgrades"
    ],
    tips: [
      "Invest in auto-clickers early for passive income.",
      "Unlock new brainrot characters to boost your earnings.",
      "Use power-ups strategically for maximum point multipliers.",
      "Don't forget to check for idle earnings when you return.",
      "Prioritize upgrades that increase points per click."
    ],
    faqs: [
      {
        question: "Is Cool Brainrot Clicker free?",
        answer: "Yes, it is completely free to play in your browser with no download needed."
      },
      {
        question: "What kind of game is Cool Brainrot Clicker?",
        answer:
          "It is an idle clicker game with brainrot-themed characters. Click to earn points, unlock characters, and use power-ups. Great for a quick game between classes."
      },
      {
        question: "Can I play Cool Brainrot Clicker on my phone?",
        answer: "Yes, since it is a simple clicker game, it works great on mobile browsers and touchscreens."
      },
      {
        question: "How do I unlock new characters?",
        answer:
          "Earn enough points through clicking and use them to unlock new brainrot characters in the shop."
      },
      {
        question: "Can I play Cool Brainrot Clicker at school?",
        answer:
          "Yes — it is an HTML5 browser game that needs no download, no install, and no plugins. It works on Chromebook, school laptops, and any device with a browser."
      },
      {
        question: "Is Cool Brainrot Clicker unblocked?",
        answer:
          "Cool Brainrot Clicker runs entirely in your browser as an HTML5 game. There is nothing to install or unblock on the software side. Network access depends on your school."
      }
    ]
  },
  {
    title: "Crazy Cattle 3D",
    slug: "crazy-cattle-3d",
    iframeUrl: "https://cloud.onlinegames.io/games/2025/unity3/crazy-cattle-3d/index-og.html",
    image: "https://www.onlinegames.io/media/posts/1004/responsive/Crazy-Cattle-3D-xs.jpg",
    description:
      "Play Crazy Cattle 3D unblocked online for free — no download needed. Control a bouncy sheep and knock others off the arena in this hilarious physics battle royale browser game. Works on Chromebook at school.",
    tags: ["Unblocked", "Battle Royale", "Funny", "No Download", "Free Online"],
    controls: [
      "WASD or Arrow Keys - Move",
      "Space - Charge / Boost",
      "Mouse - Camera control"
    ],
    tips: [
      "Use the terrain to your advantage when pushing sheep.",
      "Time your charges to knock sheep off edges.",
      "Avoid getting cornered near the arena boundary.",
      "Let other sheep fight each other before engaging.",
      "Keep moving to avoid being an easy target."
    ],
    faqs: [
      {
        question: "Is Crazy Cattle 3D free to play?",
        answer: "Yes, Crazy Cattle 3D is completely free to play in your browser — no download required."
      },
      {
        question: "What type of game is Crazy Cattle 3D?",
        answer:
          "It is a hilarious battle royale game where you control a bouncy sheep and try to be the last one standing by knocking others off the arena."
      },
      {
        question: "Can I play Crazy Cattle 3D on mobile?",
        answer:
          "The game may load on mobile browsers, but the 3D controls work best on desktop or Chromebook."
      },
      {
        question: "How do I win in Crazy Cattle 3D?",
        answer:
          "Be the last sheep standing by bumping and knocking all other sheep off the arena. Use terrain and timing."
      },
      {
        question: "Can I play Crazy Cattle 3D at school?",
        answer:
          "Crazy Cattle 3D runs in your browser as an HTML5 game — no download, no app install needed. It works on Chromebook and school computers. Access depends on your school network."
      },
      {
        question: "Does Crazy Cattle 3D work on Chromebook?",
        answer:
          "Yes. It is a browser-based game that runs in Chrome or any modern browser. No extensions or extra software needed."
      }
    ]
  },
  {
    title: "Troll Level",
    slug: "troll-level",
    iframeUrl: "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html",
    image: "https://www.onlinegames.io/media/posts/857/responsive/troll-level-online-xs.jpg",
    description:
      "Play Troll Level unblocked online for free — no download needed. Navigate tricky levels full of pranks and surprises in this hilarious troll game you can play at school on any browser including Chromebook.",
    tags: ["Unblocked", "Troll", "Funny", "No Download", "Browser Game"],
    controls: [
      "WASD or Arrow Keys - Move",
      "Space - Jump",
      "Mouse - Interact with objects"
    ],
    tips: [
      "Expect the unexpected — nothing is what it seems.",
      "If something looks too easy, it probably is a trap.",
      "Pay close attention to every detail on screen.",
      "Try the opposite of what your instinct tells you.",
      "Laugh it off and try again — patience is key."
    ],
    faqs: [
      {
        question: "Is Troll Level free to play?",
        answer: "Yes, Troll Level is completely free to play in your browser — no download, no sign-up."
      },
      {
        question: "What kind of game is Troll Level?",
        answer:
          "It is a troll/prank arcade game designed to trick you at every turn. Expect hilarious surprises and impossible-seeming challenges. Perfect for a laugh with friends."
      },
      {
        question: "Why do I keep dying in Troll Level?",
        answer:
          "The game is designed to troll you! The fun is in figuring out the trick behind each level. Don't give up."
      },
      {
        question: "Can I play Troll Level on mobile?",
        answer:
          "The game loads on mobile browsers, but desktop or Chromebook offers the best experience."
      },
      {
        question: "Can I play Troll Level at school?",
        answer:
          "Troll Level is an HTML5 browser game — no download, no installation, no plugins. It runs on Chromebook and school computers. Whether you can access it depends on your school network."
      },
      {
        question: "Is Troll Level unblocked?",
        answer:
          "Troll Level runs entirely in your browser tab as an HTML5 game. There is nothing to install. Access may depend on your network, but the game has no special software requirements."
      }
    ]
  },
  {
    title: "Velocity Rush",
    slug: "velocity-rush",
    iframeUrl: "https://cloud.onlinegames.io/games/2026/unity/velocity-rush/game.html",
    image: "https://www.onlinegames.io/media/posts/1265/responsive/velocity-rush-xs.webp",
    description:
      "Play Velocity Rush unblocked for free — no download required. Guide a ball through fast obstacle courses in this arcade parkour browser game. Works on Chromebook and school computers.",
    tags: ["Unblocked", "Arcade", "Parkour", "No Download", "Free Online"],
    controls: [
      "WASD or Arrow Keys - Move the ball",
      "Space - Jump",
      "Mouse - Camera direction"
    ],
    tips: [
      "Keep your ball centered to avoid falling off edges.",
      "Memorize obstacle patterns for smoother runs.",
      "Use quick taps rather than holding direction keys.",
      "Look ahead to anticipate upcoming obstacles.",
      "Speed is important but precision matters more."
    ],
    faqs: [
      {
        question: "Is Velocity Rush free to play?",
        answer: "Yes, Velocity Rush is completely free to play in your browser — no download needed."
      },
      {
        question: "What type of game is Velocity Rush?",
        answer:
          "Velocity Rush is a fast-paced arcade game where you guide a ball through obstacle courses. Test your reflexes and timing."
      },
      {
        question: "Can I play Velocity Rush on mobile?",
        answer:
          "The game can load on mobile but is best played on desktop or Chromebook due to precise control requirements."
      },
      {
        question: "How many levels does Velocity Rush have?",
        answer:
          "Velocity Rush features multiple challenging levels with increasing difficulty and new obstacles."
      },
      {
        question: "Can I play Velocity Rush at school?",
        answer:
          "Velocity Rush is an HTML5 browser game — no download, no install, no plugins needed. It works on Chromebook and school computers. Access depends on your school network."
      },
      {
        question: "Does Velocity Rush work on Chromebook?",
        answer:
          "Yes. It runs directly in Chrome or any modern browser. No apps, extensions, or special software needed."
      }
    ]
  },
  {
    title: "Backflip Challenge",
    slug: "backflip-challenge",
    iframeUrl: "https://cloud.onlinegames.io/games/2026/unity/backflip-challenge/game.html",
    image: "https://www.onlinegames.io/media/posts/1203/responsive/backflip-challenge-xs.webp",
    description:
      "Play Backflip Challenge unblocked online for free — no download needed. Do perfect backflips from high places using a trampoline in this physics skill game. Works in browser at school on Chromebook.",
    tags: ["Unblocked", "Physics", "Skill", "No Download", "Browser Game"],
    controls: [
      "Mouse Click / Tap - Hold and release to jump",
      "Timing - Release at the right moment for a perfect flip"
    ],
    tips: [
      "Hold the button longer for a higher jump.",
      "Release at the perfect moment for a clean backflip.",
      "Watch the angle — too much or too little rotation means a crash.",
      "Practice the timing on easier heights first.",
      "A perfect landing scores bonus points."
    ],
    faqs: [
      {
        question: "Is Backflip Challenge free to play?",
        answer: "Yes, Backflip Challenge is completely free to play in your browser — no download required."
      },
      {
        question: "What is Backflip Challenge about?",
        answer:
          "You help a character do backflips from high places by jumping on a trampoline. The goal is to land perfectly without crashing."
      },
      {
        question: "Can I play Backflip Challenge on mobile?",
        answer:
          "Yes, Backflip Challenge works great on mobile since it uses simple tap controls. Perfect for playing on the go."
      },
      {
        question: "How do I get a perfect score?",
        answer:
          "Land cleanly on your feet with a full rotation. Timing your tap release is the key to a perfect backflip."
      },
      {
        question: "Can I play Backflip Challenge at school?",
        answer:
          "Backflip Challenge is an HTML5 browser game — no download, no install, no sign-up. It works on Chromebook and school computers. Whether you can access it depends on your school network."
      },
      {
        question: "Does Backflip Challenge work on Chromebook?",
        answer:
          "Yes. It runs in any modern browser including Chrome. No apps or extensions needed — just open the page and play."
      }
    ]
  },
  {
    title: "Geometry Dash FreezeNova",
    slug: "geometry-dash-freezenova",
    iframeUrl: "https://www.onlinegames.io/games/2023/q2/geometry-dash-freezenova/index.html",
    image: "https://www.onlinegames.io/media/posts/510/responsive/Geometry-Dash-FreezeNova-xs.jpg",
    description:
      "Play Geometry Dash FreezeNova unblocked online for free — no download needed. Jump to the beat, dodge obstacles, and survive challenging rhythm levels in this browser game. Works at school on Chromebook.",
    tags: ["Unblocked", "Rhythm", "Arcade", "No Download", "Free Online"],
    controls: [
      "Mouse Click / Space / Up Arrow - Jump",
      "Timing - Jump to the beat of the music"
    ],
    tips: [
      "Listen to the music — the beat guides your timing.",
      "Practice the first few obstacles until they become muscle memory.",
      "Don't panic when the speed increases.",
      "Focus on the next obstacle, not the one you just passed.",
      "Use practice mode to learn difficult sections."
    ],
    faqs: [
      {
        question: "Is Geometry Dash FreezeNova free to play?",
        answer: "Yes, this browser version is completely free to play — no download, no purchase needed."
      },
      {
        question: "Is this the original Geometry Dash?",
        answer:
          "This is a FreezeNova version inspired by the original Geometry Dash. It is free to play in your browser with no download."
      },
      {
        question: "Can I play Geometry Dash FreezeNova on mobile?",
        answer:
          "Yes, the game supports click and tap controls, making it playable on mobile phones and tablets."
      },
      {
        question: "How do I beat difficult levels?",
        answer:
          "Practice is key. Learn the obstacle patterns and time your jumps to the beat of the music. Repetition builds muscle memory."
      },
      {
        question: "Can I play Geometry Dash at school?",
        answer:
          "Geometry Dash FreezeNova is an HTML5 browser game — no download, no install, no plugins. It works on Chromebook and school computers. Access depends on your school network."
      },
      {
        question: "Is Geometry Dash FreezeNova unblocked?",
        answer:
          "This version runs entirely in your browser as an HTML5 game. There is nothing to install or unblock on the software side. Network access depends on your school."
      }
    ]
  },
  {
    title: "Stickman Parkour",
    slug: "stickman-parkour",
    iframeUrl: "https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html",
    image: "https://www.onlinegames.io/media/posts/871/responsive/stickman-parkour-OG-xs.jpg",
    description:
      "Play Stickman Parkour unblocked online for free — no download needed. Guide a stickman through 30 challenging platformer levels in this browser parkour game. Works at school on Chromebook.",
    tags: ["Unblocked", "Parkour", "Stickman", "No Download", "Browser Game"],
    controls: [
      "WASD or Arrow Keys - Move",
      "W or Up Arrow - Jump",
      "S or Down Arrow - Slide / Duck"
    ],
    tips: [
      "Collect all keys before heading to the exit.",
      "Look for hidden chests in each level.",
      "Master wall jumps for hard-to-reach platforms.",
      "Time your slides to pass under low obstacles.",
      "Each level gets harder — be patient and learn the pattern."
    ],
    faqs: [
      {
        question: "Is Stickman Parkour free to play?",
        answer: "Yes, Stickman Parkour is completely free to play in your browser — no download required."
      },
      {
        question: "How many levels does Stickman Parkour have?",
        answer: "Stickman Parkour features 30 challenging levels with increasing difficulty."
      },
      {
        question: "Can I play Stickman Parkour on mobile?",
        answer:
          "Yes, Stickman Parkour is optimized for mobile browsers with touch controls. Play it on your phone or tablet."
      },
      {
        question: "What do I need to collect in Stickman Parkour?",
        answer:
          "Collect keys to unlock doors and open chests throughout each level to progress to the next stage."
      },
      {
        question: "Can I play Stickman Parkour at school?",
        answer:
          "Stickman Parkour is an HTML5 browser game — no download, no install, no plugins. It works on Chromebook and school computers. Access depends on your school network."
      },
      {
        question: "Is Stickman Parkour unblocked?",
        answer:
          "Stickman Parkour runs entirely in your browser as an HTML5 game. There is nothing to install. Whether you can access it depends on your network, not the game itself."
      }
    ]
  }
];

/** Look up a game by its URL slug. */
export function getGameBySlug(slug: string): GameInfo | undefined {
  return games.find((g) => g.slug === slug);
}

/** Get all games except the one matching the given slug. */
export function getOtherGames(slug: string): GameInfo[] {
  return games.filter((g) => g.slug !== slug);
}
