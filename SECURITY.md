# Security Policy

## Supported Versions

The current `main` branch is maintained.

## Reporting a Vulnerability

Open a private security advisory on GitHub if the repository is hosted there, or contact the maintainer privately. Do not open a public issue for exposed credentials, tokens, or personal identifiers.

## Secret Handling

Never commit:

- n8n credential IDs
- API keys or OAuth secrets
- Personal email addresses
- Telegram chat IDs
- n8n instance IDs
- `.env` files

Use n8n credentials and environment variables for sensitive configuration.
