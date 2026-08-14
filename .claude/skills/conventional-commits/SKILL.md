---
name: conventional-commits
description: Use whenever writing a git commit message in this repository. Formats commit messages per the Conventional Commits specification (type(scope): summary, body, footer) so history stays machine-parseable and changelog-friendly.
---

# Conventional Commits

Write every commit message in this repository using the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Type (required)

Pick the one that best matches the primary change:

| Type       | Use for |
|------------|---------|
| `feat`     | A new feature for the user |
| `fix`      | A bug fix for the user |
| `docs`     | Documentation-only changes |
| `style`    | Formatting, whitespace, semicolons — no code logic change |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf`     | Performance improvement |
| `test`     | Adding or correcting tests |
| `build`    | Build system or external dependencies (npm, Vite config, etc.) |
| `ci`       | CI configuration/scripts |
| `chore`    | Other changes that don't modify src or test files |
| `revert`   | Reverts a previous commit |

## Scope (optional)

A parenthesized noun naming the affected area, e.g. `feat(router):`, `fix(auth):`. Omit if the change is repo-wide or scope isn't obvious.

## Description (required)

- Imperative mood, present tense: "add", not "added" or "adds".
- Lowercase, no trailing period.
- Short enough to read on one line (aim for ≤72 chars).

## Body (optional)

- Blank line after the description, then free-form prose explaining *why*, not just what.
- Wrap at ~72 chars per line.

## Breaking changes

Mark breaking changes either with `!` right after the type/scope, or a `BREAKING CHANGE:` footer (or both):

```
feat(router)!: require auth guard on all routes

BREAKING CHANGE: routes without an explicit `meta.public` flag now
redirect to /login.
```

## Footer (optional)

- `BREAKING CHANGE: <description>` for breaking changes not already flagged with `!`.
- Issue references, e.g. `Refs #123`, `Closes #123`.

## Examples

```
feat(router): register dashboard and settings routes
```

```
fix(portal): prevent duplicate submit on slow network

Debounce the submit handler so a double-click no longer fires two
requests.
```

```
chore: bump vite to 8.1.5
```
