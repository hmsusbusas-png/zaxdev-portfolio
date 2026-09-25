# zaxdev — portfolio

One-page portfolio site: dark theme, glassmorphism, no frameworks, no builders. Pure HTML/CSS/JS.

**Live:** [hmsusbusas-png.github.io/zaxdev-portfolio](https://hmsusbusas-png.github.io/zaxdev-portfolio/)

## What's inside

- **Hero** — asymmetric layout with status chip, quick facts column and a services marquee
- **Services** — bento grid with cursor spotlight effect
- **Projects** — alternating rows with outlined index numbers
- **About** — short story + timeline
- **Contact** — CTA with a hand-drawn arrow, magnetic button

Details: film grain overlay (SVG turbulence), scroll reveal via IntersectionObserver,
nav that hides on scroll down, custom selection/scrollbar, `prefers-reduced-motion` respected.
Fonts: [Unbounded](https://fonts.google.com/specimen/Unbounded) + [Golos Text](https://fonts.google.com/specimen/Golos+Text), both with native Cyrillic.

## Run

No build step. Either open `index.html` directly, or:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Structure

```
├── index.html      # markup, all sections
├── css/style.css   # styles (~600 lines, plain CSS, no preprocessor)
├── js/main.js      # animations, ~70 lines, no dependencies
└── favicon.svg
```

## Contact

Telegram: [@lev_backend](https://t.me/lev_backend) — open for orders.

---

## RU

Одностраничный сайт-портфолио: тёмная тема, glassmorphism, без фреймворков и конструкторов.

**Живой сайт:** [hmsusbusas-png.github.io/zaxdev-portfolio](https://hmsusbusas-png.github.io/zaxdev-portfolio/)

Внутри: hero с асимметричной сеткой и бегущей строкой услуг, bento-сетка услуг
с прожектором за курсором, проекты чередующимися рядами, таймлайн, CTA с
магнитной кнопкой и рисованной стрелкой. Сверху — лёгкое «зерно» (SVG-шум),
чтобы фон не выглядел пластиковым.

Анимации: появление блоков при скролле (IntersectionObserver), навигация
прячется при скролле вниз, кастомные ::selection и скроллбар, уважается
`prefers-reduced-motion`.

Сборка не нужна — открой `index.html` или подними любой статический сервер.

Связь: Telegram [@lev_backend](https://t.me/lev_backend) — открыт под заказы.
