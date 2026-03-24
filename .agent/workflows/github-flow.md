---
description: Branching and Merge Strategy (feature branches, PRs, and branch cleanup)
---

# GitHub Flow Workflow - Portfolio Edition

This workflow ensures safe, asynchronous development using feature branches and GitHub's Pull Request (PR) system.

## 1. Local Development

- **Branch Out**: Always create a new branch from `main`: `git checkout -b <type>/<scope>-<feature-name>`.
- **Iteration**: Commit regularly following the [Standards Workflow](file:///c:/Users/lshio/Desktop/Lucas%20Shiota/GitHub%20Repo/my-digital-garden/.agent/workflows/standards.md).

## 2. Remote Synchronization

- **Push Code**: Sync your local branch with the remote: `git push origin <your-branch-name>`.
- **Open PR**: Create a Pull Request on GitHub. Ensure the title follows the conventional commit format.

## 3. Merge & Review

- **Quality Check**: Run a production build and check for UI regressions before merging.
- **Squash Merge**: Merge using the "Squash and Merge" method on GitHub to maintain a clean Git history.
- **Documentation**: Ensure `.doc/refinement_log.md` is updated before merging.

## 4. Branch Cleanup

- **Delete Local**: After merging, delete the local branch to keep your environment clean: `git branch -D <branch-name>`.
- **Fetch Latest**: Pull the latest changes from `main`: `git checkout main && git pull origin main`.
