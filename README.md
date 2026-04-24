# adamhakansson.dev

Personal portfolio site for Adam Håkansson, Software Engineer based in Sweden.

## About Me

Software Engineer with a background in Computer Engineering from Jönköping University (2017-2020). Certified Google Cloud Professional Cloud Architect. I work across the full stack with TypeScript, React, Svelte, Node.js, and Google Cloud. Daily Linux user who lives in the terminal.

Currently building [Echo](https://goecho.xyz), a professional Discord bot, with a close friend.

## Tech Stack

- **Framework:** SvelteKit (Svelte 5) with TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Netlify (SSR via adapter-netlify)
- **Data:** GitHub API fetched server-side with in-memory caching
- **Testing:** Vitest (unit) + Playwright (e2e)
- **Node:** 22 LTS

## Localization

The site auto-detects the visitor's language from the browser `Accept-Language` header. Supported locales:

- English (default)
- Swedish
- Spanish
- Japanese

Translations live in `src/lib/i18n/`. The Japanese one has some personality, check the comments.

## Development

```bash
npm install
npm run dev          # localhost:3000
npm run build        # production build
npm run preview      # preview production build
npm run test:unit    # vitest
npm run test:e2e     # playwright
npm run test         # both
npm run check        # svelte-check
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | No | GitHub personal access token for higher API rate limits (60/hr without, 5000/hr with) |

## Links

- [Portfolio](https://adamhakansson.dev)
- [GitHub](https://github.com/kloparn)
- [LinkedIn](https://www.linkedin.com/in/adam-håkansson-15942313a/)
- [GCP Certification](https://www.credly.com/badges/eeafe348-cb24-4586-91f7-00c08b1464ee/linked_in_profile)
- [Bachelor Thesis](https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1439878&dswid=-67)
