# Contributing

Thanks for improving this workflow.

## Development Flow

1. Import the workflow into a local n8n instance.
2. Make workflow changes in n8n.
3. Export the workflow JSON.
4. Replace `workflows/hourly-stock-portfolio-updates.json`.
5. Remove local-only IDs, personal values, and secrets before committing.
6. Run `npm run validate`.

## Pull Request Checklist

- Workflow JSON imports successfully into n8n.
- No secrets, credential IDs, personal email addresses, chat IDs, or instance IDs are committed.
- README setup steps still match the workflow.
- Validation passes locally.

## Style

- Keep workflow node names clear and action-oriented.
- Prefer environment variables for user-specific values.
- Keep prompts concise and explicit.
- Add source links when reports include external news.
