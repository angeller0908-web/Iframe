export type FAQItem = {
  question: string;
  answer: string;
};

export const game = {
  title: "Golf Bit",
  slug: "golf-bit",
  iframeUrl: "https://cloud.onlinegames.io/games/2026/construct/328/golf-bit/game.html",
  description:
    "Play Golf Bit online for free. Grab your golf club, aim precisely, and hit the golf ball when the indicator is in the green zone to sink it in this fun 2D browser sports game.",
  controls: [
    "Mouse Click / Tap - Start swing and time your hit",
    "On Mobile - Tap on-screen buttons to control"
  ],
  tags: ["Unblocked", "Golf", "2D", "Sports", "No Download", "Browser Game"],
  faqs: [
    {
      question: "Is Golf Bit free to play?",
      answer: "Yes, Golf Bit is 100% free to play in your browser with no download or registration required."
    },
    {
      question: "Who developed Golf Bit?",
      answer: "Golf Bit is developed by FreezeNova, a popular developer of browser-based sports and arcade games."
    },
    {
      question: "Can I play Golf Bit on mobile devices?",
      answer: "Yes! Golf Bit is an HTML5 game that features fully responsive touch controls for phones and tablets."
    },
    {
      question: "Are there multiple levels in Golf Bit?",
      answer: "Yes, you can unlock and play on multiple different courses situated on various planets including Mars, the Moon, Mercury, and Saturn."
    },
    {
      question: "Is Golf Bit unblocked at school?",
      answer: "Yes. Golf Bit runs directly in any modern web browser tab. Availability depends on local network policies, but it requires no downloads or plugins."
    },
    {
      question: "How do I score points in Golf Bit?",
      answer: "You score by timing your hits correctly to sink the golf ball into the holes on the course in as few shots as possible."
    }
  ] satisfies FAQItem[]
};
