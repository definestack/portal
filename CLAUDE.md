# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo currently contains a single app:

- `definestack-portal/` — the Vue 3 frontend application (all commands below are run from this directory).
- `README.md` (repo root) — placeholder, no content yet.

## Tech stack

- **Vue 3** (Composition API, `<script setup lang="ts">`)
- **TypeScript** (`~6.0.0`), type-checked via `vue-tsc`
- **Vite 8** as the build tool/dev server, with `vite-plugin-vue-devtools`
- **Vue Router 5** (`src/router/index.ts` — currently no routes registered)
- **ESLint 10** (`@vue/eslint-config-typescript`, `eslint-plugin-vue`) + **oxlint** running as a fast pre-pass (`.oxlintrc.json`), reconciled with `eslint-plugin-oxlint`
- **Prettier** for formatting (no semicolons, single quotes, 100 print width — see `.prettierrc.json`)
- Node engine requirement: `^22.18.0 || >=24.12.0`

## Commands

Run from `definestack-portal/`:

```sh
npm install              # install dependencies
npm run dev               # start Vite dev server
npm run build              # type-check (vue-tsc --build) + production build, run in parallel
npm run preview            # preview the production build
npm run lint                # oxlint --fix, then eslint --fix --cache
npm run format               # prettier --write on src/
```

There is no test runner configured in this project yet.

## Definition of done

A task is not complete until all of the following have been verified — do not report a task as done without doing this:

1. **Type-check passes**: `npm run type-check` (or `vue-tsc --build`) reports no errors.
2. **Build succeeds**: `npm run build` completes without errors.
3. **The app has actually been run** (`npm run dev` or `npm run preview`) and the feature was exercised in the browser to confirm it behaves as intended — passing type-check/build alone is not sufficient proof the feature works.

## Architecture notes

- Path alias `@` resolves to `definestack-portal/src` (configured in `vite.config.ts`); use it instead of relative `../../..` imports.
- `src/main.ts` creates the app, installs the router, and mounts to `#app` — this is the single composition root.
- `src/router/index.ts` uses `createWebHistory` and currently has an empty `routes` array; new pages should be registered here.
- Linting is two-layered: `oxlint` enforces `correctness` rules quickly, and `eslint` (Vue + TypeScript flat config) handles the rest, with `eslint-config-prettier` disabling any formatting-related rules so Prettier stays the single source of formatting truth.
