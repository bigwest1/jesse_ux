# JesseWestlund Next.js Project

This repository contains a Next.js site in the `jesse-next-js` folder.

## Setup

Install dependencies for both this root and the Next.js app:

```bash
npm install
```

The `postinstall` script in `package.json` will install the Next.js dependencies automatically.
### Configure your OpenAI API key

Create a `.env.local` file inside the `jesse-next-js` folder and add your key:

```bash
cat << 'EOF' > jesse-next-js/.env.local
OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE
EOF
```

## Available Scripts

From the root directory, you can run (the first time or whenever the Next.js app needs its deps, the `predev` hook will install them automatically):

- `npm run dev` — start the Next.js development server (runs `predev` first if needed)
- `npm run build` — build the Next.js app for production
- `npm run start` — run the Next.js production server
- `npm run lint` — run the Next.js linter

After building, you can serve the production build with:

```bash
npm run start
```
