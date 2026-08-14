# Rule: No commits or pushes on `main`

All work in this repository must happen on a feature branch. Never commit or push directly to `main`.

- Before starting any task, check the current branch (`git branch --show-current`). If it is `main`, create and switch to a new feature branch first, e.g. `git checkout -b feature/<short-description>`.
- Never run `git commit` or `git push` while `main` is checked out.
- This applies regardless of whether the user's request mentions branching — create the branch automatically, then do the work on it.
- If already on a non-main feature branch for the current task, keep using it rather than creating a new one.
