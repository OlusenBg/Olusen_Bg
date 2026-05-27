# Yahia Bouabid — Personal Portfolio

Personal portfolio website for Yahia Bouabid (aka Olusen) — 14-year-old self-taught developer from Quebec, Canada.

**Live site:** [olusenbg.github.io/Olusen_Bg](https://olusenbg.github.io/Olusen_Bg/)

---

## Structure

```
index.html                  ← Home / About / Hero / Story / Skills
projects/
  index.html                ← All projects overview with filter tabs
  modrift.html              ← modrift.dev — cross-game mod platform
  rift.html                 ← Rift Loader — custom Minecraft mod loader
  the-watcher.html          ← The Watcher — psychological horror mod
  arvex-games.html          ← Arvex Games — discontinued web gaming platform
  alloy-editor.html         ← Alloy Editor — FTC-native code editor
  minecraft-mod.html        ← More Curse Enchantments — CurseForge mod
  unity-games.html          ← Unity game prototypes (2022–present)
  ai-snake.html             ← AI Snake Agent — Python RL project
css/
  style.css                 ← All shared styles, CSS variables, animations
  nav.css                   ← Navbar styles (desktop + mobile hamburger)
js/
  main.js                   ← Scroll animations, cursor, nav, particles, filters
assets/                     ← Placeholder for future images/logos
```

## Design

- **Dark, cinematic aesthetic** — deep black backgrounds, violet/cyan accents
- **Typography:** Syne (headings) · DM Sans (body) · JetBrains Mono (code/labels)
- **Color palette:** `#080810` bg · `#7c3aed` violet · `#06b6d4` cyan · `#ef4444` red
- **Animations:** staggered page-load reveals, IntersectionObserver scroll fade-ins, glowing hover states, animated grid background
- **Custom cursor** — glowing dot with trailing ring (desktop only)
- **The Watcher page** uses a red/horror theme with CSS glitch animation on the title

## Tech

Pure HTML/CSS/JS — no frameworks, no build step. Works directly on GitHub Pages.

- Google Fonts via `<link>` (Syne, DM Sans, JetBrains Mono)
- CSS custom properties for theming
- IntersectionObserver for scroll animations
- Vanilla JS filter tabs on the projects page
- SVG data URI favicon

## Projects covered

| Project | Status | Description |
|---|---|---|
| modrift | Active | Cross-game mod dev platform — browser-based, AI-assisted |
| Rift Loader | Beta | Minecraft mod loader with feature-level fault isolation |
| The Watcher | In Development | Psychological horror Minecraft mod on Rift |
| Arvex Games | Discontinued | Full ad-free web gaming platform |
| Alloy Editor | Active | Purpose-built IDE for FTC robotics |
| More Curse Enchantments | Published | First Minecraft mod on CurseForge |
| Unity Projects | Ongoing | 2D/3D game prototypes since age 10 |
| AI Snake Agent | Completed | Python RL agent, Summer 2024 |

## Links

- GitHub: [github.com/OlusenBg](https://github.com/OlusenBg)
- modrift: [modrift.dev](https://modrift.dev)
- Rift: [rift.modrift.dev](https://rift.modrift.dev)
- CurseForge: [olusen_bg/projects](https://www.curseforge.com/members/olusen_bg/projects)
- Email: yahiabouabid@gmail.com · Olusen514@gmail.com
