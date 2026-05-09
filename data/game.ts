export type FAQItem = {
  question: string;
  answer: string;
};

export const game = {
  title: "Fall Brainrots",
  slug: "fall-brainrots",
  iframeUrl: "https://cloud.onlinegames.io/games/2026/unity/fall-brainrots/game.html",
  description:
    "Play Fall Brainrots online for free. Run, jump, dodge obstacles, and race against funny Brainrot characters in this chaotic browser parkour game.",
  controls: [
    "WASD or Arrow Keys - Move",
    "Space - Jump",
    "Mouse - Look around, if supported",
    "R - Restart, if supported"
  ],
  tags: ["Brainrot", "Parkour", "Obstacle", "Funny", "Browser Game"],
  faqs: [
    {
      question: "Is Fall Brainrots free to play?",
      answer: "Yes. You can play Fall Brainrots in your browser without paying to start."
    },
    {
      question: "Can I play Fall Brainrots online?",
      answer:
        "Yes. This page embeds the game in an iframe so you can launch it directly from the website."
    },
    {
      question: "Is Fall Brainrots unblocked?",
      answer:
        "Availability depends on your network, region, and device settings. Access is not guaranteed in every environment."
    },
    {
      question: "Can I play Fall Brainrots on mobile?",
      answer:
        "Many browser devices can load the game page, but controls and performance may vary by version."
    },
    {
      question: "Do I need to download Fall Brainrots?",
      answer: "No download is required for the browser version on this site."
    },
    {
      question: "What are Brainrot games?",
      answer:
        "Brainrot games are meme-heavy, chaotic games built around funny characters, absurd humor, and fast reactions."
    }
  ] satisfies FAQItem[]
};
