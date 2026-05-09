## 项目名称

```
Fall Brainrots 单游戏 iframe 游戏站
```

---

## 项目目标

请帮我开发一个英文单游戏网站，主打游戏为 **Fall Brainrots**。

这是一个用于验证小游戏 iframe 站模式的 MVP。网站目标不是做大型游戏聚合站，而是先围绕一个游戏建立高质量 SEO 页面，让用户可以直接在网站内玩游戏，并为后续接入广告平台如 Google AdSense 做准备。

核心目标：

```
1. 用户可以在首页直接玩 Fall Brainrots
2. 页面结构适合 Google SEO
3. 页面内容不能只是 iframe，要包含原创介绍、玩法、操作说明、技巧、FAQ
4. 提前预留广告位，但暂时不接真实广告
5. 移动端和 PC 端都要体验良好
6. 网站结构要方便后续扩展更多游戏或更多内容页
```

---

## 技术栈要求

请使用：

```
Next.jsReactTypeScriptTailwind CSS
```

如果使用 App Router，请按 Next.js App Router 的结构组织代码。

网站应支持：

```
SSR/静态生成SEO metadata响应式布局清晰的组件拆分后续方便接入 AdSense
```

---

## 页面结构

请实现以下页面：

```
/首页，主游戏页/how-to-playHow to Play Fall Brainrots/controlsFall Brainrots Controls/tipsFall Brainrots Tips and Tricks/unblockedFall Brainrots Unblocked/similar-gamesGames Like Fall Brainrots/privacy-policyPrivacy Policy/termsTerms of Service/contactContact/aboutAbout
```

---

## 首页需求

首页是最重要的页面。

首页标题方向：

```
Play Fall Brainrots Online Free
```

首页 H1：

```
Fall Brainrots
```

首页 Meta Description：

```
Play Fall Brainrots online for free. Run, jump, dodge obstacles, and race against funny Brainrot characters in this chaotic browser parkour game.
```

首页模块顺序：

```
1. Header / Navigation2. Top ad placeholder3. Hero section4. Game iframe section5. Below-game ad placeholder6. What is Fall Brainrots?7. How to Play Fall Brainrots8. Controls9. Tips to Win10. Is Fall Brainrots Unblocked?11. FAQ12. Similar Games13. Footer
```

---

## 游戏 iframe

在首页添加游戏 iframe。

iframe 示例：

```
<iframe  src="https://cloud.onlinegames.io/games/2026/unity/fall-brainrots/game.html"  width="100%"  height="650"  frameborder="0"  scrolling="no"  allowfullscreen></iframe>
```

要求：

```
1. iframe 外层要有响应式容器2. PC 端最大宽度可以控制在 1060px 左右3. 移动端高度要自适应，避免页面变形4. iframe 区域上方可以有一个 Play Fall Brainrots Online 的标题5. iframe 加载失败时最好有 fallback 文案6. 不要自动弹窗，不要误导下载
```

---

## 广告位预留

请实现广告位组件，例如：

```
<AdPlaceholder position="top-banner" /><AdPlaceholder position="below-game" /><AdPlaceholder position="sidebar" /><AdPlaceholder position="in-content" />
```

广告位暂时不接入真实广告，只显示浅灰色占位框和文字：

```
Advertisement
```

广告位设计要求：

```
1. 不影响用户玩游戏2. 不遮挡 iframe3. PC 端可以显示右侧广告位4. 移动端不显示右侧广告位5. 移动端可以预留底部 sticky 广告组件，但默认关闭6. 后续方便替换为 Google AdSense 代码
```

推荐广告位：

```
Top banner: 728x90 或 responsiveBelow game: responsiveSidebar: 300x250，仅 PC 显示In-content: 文章内容中间
```

---

## SEO 内容要求

首页内容必须是英文。

内容主题围绕：

```
Fall BrainrotsBrainrot gamesItalian Brainrotparkour gameonline browser gameunblocked game
```

首页正文要包含以下模块：

### What is Fall Brainrots?

说明这是一个 funny brainrot-themed parkour game，玩家控制角色奔跑、跳跃、躲避障碍、争取到达终点。

### How to Play

说明玩家需要：

```
run forwardavoid trapsjump over gapsstay on the platformreach the finish lineretry after falling
```

### Controls

可写成：

```
WASD or Arrow Keys - MoveSpace - JumpMouse - Look around, if supportedR - Restart, if supported
```

如果具体 controls 不确定，文案要保守，例如：

```
Controls may vary slightly depending on the version of the game.
```

### Tips

包括：

```
Do not rush every obstacleWatch moving platformsJump early instead of lateStay near the center of the trackLearn each stage patternReplay levels to improve timing
```

### FAQ

至少 6 个 FAQ：

```
Is Fall Brainrots free to play?Can I play Fall Brainrots online?Is Fall Brainrots unblocked?Can I play Fall Brainrots on mobile?Do I need to download Fall Brainrots?What are Brainrot games?
```

FAQ 要实现结构化数据 JSON-LD。

---

## 子页面内容要求

### /how-to-play

主题：

```
How to Play Fall Brainrots
```

内容包括：

```
basic objectivemovementobstacleswinning strategybeginner mistakes
```

### /controls

主题：

```
Fall Brainrots Controls
```

内容包括：

```
keyboard controlsmovement tipsjump timingmobile controls if available
```

### /tips

主题：

```
Fall Brainrots Tips and Tricks
```

内容包括：

```
beginner tipssurvival tipshow to avoid fallinghow to improve timinghow to win more rounds
```

### /unblocked

主题：

```
Fall Brainrots Unblocked
```

注意不要写规避学校/公司网络限制的具体技术教程，不要教用户绕过封锁。

可以写：

```
Fall Brainrots is a browser game that can be played online without downloading.Availability may depend on your network, device, or region.
```

### /similar-games

主题：

```
Games Like Fall Brainrots
```

可以先放占位推荐卡片，例如：

```
Brainrot GamesParkour GamesObstacle GamesFunny Meme GamesMultiplayer Running Games
```

后续再接真实游戏列表。

---

## 视觉设计要求

风格：

```
现代简洁偏游戏感适合年轻用户不要太花加载快
```

建议设计：

```
深色背景卡片式内容区清晰的 Play 区域圆角轻微阴影高对比按钮移动端优先
```

但不要过度动画，避免影响性能。

---

## 组件拆分建议

请至少拆分这些组件：

```
HeaderFooterGameFrameAdPlaceholderContentSectionFAQSimilarGamesBreadcrumbsSidebarAd
```

---

## SEO 技术要求

请实现：

```
1. 每个页面独立 title 和 meta description2. canonical URL3. Open Graph metadata4. Twitter card metadata5. FAQ JSON-LD6. Breadcrumb JSON-LD7. sitemap.xml8. robots.txt9. 清晰语义化 HTML10. 页面 H1 只能有一个
```

站点基础 URL 可以先用环境变量：

```
NEXT_PUBLIC_SITE_URL
```

如果没有配置，就 fallback 到：

```
https://example.com
```

---

## 性能要求

```
1. 首屏加载尽量轻2. 不使用大型 UI 库3. 图片如果有，使用 Next/Image4. iframe 延迟加载或在主区域加载5. 避免 CLS，iframe 容器提前占位6. 移动端体验优先
```

---

## 合规要求

```
1. 不要声称本站是官方 Fall Brainrots 网站2. 不要使用 Official 字样3. 不要提供 APK 下载4. 不要诱导下载5. 不要绕过平台限制6. 不要添加成人、赌博、擦边内容7. 不要遮挡游戏 iframe8. Privacy Policy、Terms、Contact、About 页面必须存在
```

Footer 中可以写：

```
This is an independent fan-made game page. We are not affiliated with the original game developer or publisher.
```

---

## 后续可扩展性

代码结构要方便以后扩展成多游戏站。

请把游戏数据抽象成配置对象，例如：

```
const game = {  title: "Fall Brainrots",  slug: "fall-brainrots",  iframeUrl: "https://cloud.onlinegames.io/games/2026/unity/fall-brainrots/game.html",  description: "...",  controls: [...],  faqs: [...],  tags: ["Brainrot", "Parkour", "Obstacle", "Funny", "Browser Game"]}
```

这样以后可以增加更多游戏，而不是把所有内容硬编码在页面里。

---

## 最终交付

请生成完整可运行的 Next.js 项目代码，包括：

```
package.jsonNext.js 页面组件Tailwind 配置SEO metadatasitemaprobots基础样式游戏 iframe广告占位组件Privacy PolicyTermsContactAbout
```
