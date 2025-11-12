# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🧠 Gemini / Generative API proxy

This project includes a small server-side proxy at `src/pages/api/gemini.ts` that forwards POST requests to a Gemini/Generative API endpoint. It lets your client code call `/api/gemini` without leaking API keys to the browser.

Setup:

1. Copy `.env.example` to `.env` and set `GEMINI_API_URL` to the full model generate endpoint you want to use and `GEMINI_API_KEY` to your API key.
2. Restart the dev server.

Example `fetch` from the client (the component already posts `{ prompt }` to `/api/gemini`):

```js
await fetch('/api/gemini', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ prompt: 'Say hello' }),
});
```

Notes:
- The proxy forwards the request body as JSON and sets `Authorization: Bearer <GEMINI_API_KEY>` if the key is set.
- Make sure the `GEMINI_API_URL` expects the JSON shape you send (you can adapt the proxy or client to match the target API's required payload).
