# Hourly Stock Portfolio Updates

An n8n workflow that monitors a configurable stock portfolio every hour, gathers recent market headlines from Google News RSS, summarizes sentiment with a Groq-hosted LLM, and sends the resulting update through Telegram and Gmail.

> This project is for workflow automation and market-news monitoring only. It is not financial advice.

## Features

- Hourly scheduled portfolio monitoring
- Configurable ticker list through environment variables
- Google News RSS headline collection for each ticker
- AI-generated portfolio overview and per-stock sentiment
- Telegram Markdown summary
- HTML email report with source article links
- Animated workflow explanation page in `index.html`
- Sanitized n8n export suitable for public repositories

## Repository Structure

```text
.
|-- workflows/
|   `-- hourly-stock-portfolio-updates.json
|-- scripts/
|   `-- validate-workflows.mjs
|-- index.html
|-- .env.example
|-- .github/workflows/validate.yml
|-- CONTRIBUTING.md
|-- LICENSE
|-- SECURITY.md
`-- README.md
```

## Workflow Webpage

Open `index.html` in a browser to see an animated explanation of how the automation runs from schedule trigger to final Telegram and Gmail delivery. The page is static, dependency-free, and suitable for GitHub Pages.

## Requirements

- n8n 1.x
- Gmail OAuth2 credential in n8n
- Telegram Bot API credential in n8n
- Groq API credential in n8n
- Node.js 20+ only for local repository validation

## Configuration

Create matching n8n environment variables before activating the workflow:

```env
PORTFOLIO_TICKERS=ZENTEC, RAILTEL, DIXONTECH, KPITTECH, OSWALPUMPS, M&M, MAXHEALTH, COFORGE, ACE, HPL, KAYNES
GMAIL_SEND_TO=you@example.com
TELEGRAM_CHAT_ID=123456789
```

The workflow still needs credentials mapped inside n8n after import:

- `Gmail OAuth2 account`
- `Telegram bot account`
- `Groq API account`

## Importing Into n8n

1. Open n8n.
2. Go to **Workflows**.
3. Select **Import from File**.
4. Choose `workflows/hourly-stock-portfolio-updates.json`.
5. Reconnect the Gmail, Telegram, and Groq credentials.
6. Confirm the environment variables are available to n8n.
7. Run a manual test, then activate the workflow.

## Local Validation

```bash
npm run validate
```

This checks that every workflow JSON file in `workflows/` is valid JSON and contains the expected n8n export fields.

## Privacy

The workflow export is sanitized for public sharing. It does not include personal email addresses, Telegram chat IDs, credential IDs, or n8n instance IDs. Keep real values in your n8n environment and credential store, not in Git.

## License

MIT License. See [LICENSE](LICENSE).
