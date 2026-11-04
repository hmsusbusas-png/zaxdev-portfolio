# zaxdev

Personal portfolio: websites, Telegram bots, scrapers and MCP integrations for Claude.

Сайт-витрина: кто я, что делаю и как со мной связаться. На первом экране одна фраза и кнопка в Telegram, ниже работы с живыми превью, отдельный раздел про MCP-серверы и ботов, описанных через задачу, услуги со сроками.

Сайт: https://hmsusbusas-png.github.io/zaxdev-portfolio/

![Первый экран](docs/desktop.jpg)

![Автоматизация и боты](docs/automation.jpg)

<img src="docs/mobile.jpg" width="300" alt="Первый экран на телефоне">

## Что на странице

- Первый экран: чем занимаюсь, кнопка «Написать в Telegram», ссылка на GitHub.
- «Сейчас»: pulsewatch, мониторинг сайтов, со скриншотом интерфейса.
- Пять сайтов: крупное превью в рамке браузера, одна строка о том, чем сайт интересен, ссылки на живую версию и на код.
- «Автоматизация и боты»: пять MCP-серверов, трекер цен и магазин в Telegram, у каждого заголовок — задача, которую он решает.
- Услуги и сроки без цен, порядок работы, контакт.

## Как запустить

```sh
git clone https://github.com/hmsusbusas-png/zaxdev-portfolio
cd zaxdev-portfolio
python -m http.server 8000
```

## Как устроено

Один `index.html` и `css/style.css`, JavaScript нет. Шрифты Golos Text и JetBrains Mono локально в `fonts/`. Превью работ в `img/` — снимки первых экранов в AVIF и WebP, около 50 КБ каждое.

Lighthouse (мобильный профиль): 100 по всем четырём пунктам. axe и html-validate без ошибок.

## Лицензия

Код — MIT, см. [LICENSE](LICENSE).
