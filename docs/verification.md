# Проверка кейса LeadMind

5 ноября 2026. Кейс `index.html#leadmind` добавлен в раздел «Боты и автоматизация», остальные работы и дизайн сохранены.

- Изображения `img/leadmind-{720,1200}.{avif,webp}` получены из screenshot работающей production-сборки LeadMind CRM (1440×1000). Данные демонстрационные; это явно написано в карточке.
- Локальная проверка Chromium через `leadmind-crm/scripts/check-portfolio.mjs`: 1440×1000 и 390×1000, по 30 ссылок и 10 локальных изображений/CSS/favicon; нет переполнения, битых локальных ресурсов/якорей и ошибок браузера. Кейс осмотрен на обоих размерах.
- Ссылка на код: https://github.com/zaxdevv/leadmind-crm . Публичный backend не развёрнут: авторизованный совместимый хостинг не подключён. Вместо нерабочего demo-URL дана инструкция локального запуска без ключа ИИ.
- Lighthouse/axe/html-validate после этого изменения не запускались. Старые показатели README не выдаются за новую проверку.
- Артефакты локального прогона: `leadmind-crm/output/playwright/portfolio/`; итог исправлений CRM: [docs/verification.md в LeadMind](https://github.com/zaxdevv/leadmind-crm/blob/main/docs/verification.md).

[Проверка живого сайта 42099026201](https://github.com/zaxdevv/zaxdev-portfolio/actions/runs/42099026201) для e67b6a7 успешна: GitHub Pages отдаёт HTML, полностью совпадающий с коммитом; Chromium проверил 1440/390px, 30 ссылок, 10 ресурсов, отсутствие overflow/pageerror/console errors. Проверены HTTP-ответы всех внешних ссылок. [Скриншоты и JSON](https://github.com/zaxdevv/zaxdev-portfolio/actions/runs/42099026201/artifacts/13448781222). Локальный Chromium не имеет прямого доступа в интернет, поэтому публичный прогон выполнен в GitHub Actions.

Первый полный link check обнаружил прежний 404 у demo «ШУМ». Работа и скриншот сохранены, ссылка заменена на доступный репозиторий с локальным запуском. Другие работы сохранены. Workflow сначала ждёт совпадения опубликованного HTML с index.html текущего коммита, затем проверяет браузер и ссылки.
