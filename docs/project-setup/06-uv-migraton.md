---
id: 05-migration
title: Migration to UV
sidebar_position: 5
description: Migrate legacy Python projects from requirements.txt and virtualenv to pyproject.toml using uv.
---

# Migrate legacy Python projects

How to Migrate from `requirements.txt` to `pyproject.toml` with `uv`?
This guide will help you migrate your Python project from using `requirements.txt` files to the modern `pyproject.toml` format using `uv`, a fast Python package installer and resolver.

### Prerequisites

Ensure `uv` is installed. If you don’t have it yet, follow the [official installation instructions](https://docs.astral.sh/uv/#installation).

### Migration Steps

#### 1. Initialize Your Project

Begin by creating a minimal `pyproject.toml` file in your project directory:

```bash
uv init --bare
```

This creates a clean `pyproject.toml` without any sample content, ready for your dependencies.

#### 2. Import Runtime Dependencies

Add your existing production dependencies from `requirements.txt` to the `pyproject.toml`:

```bash
uv add -r requirements.txt
```

This command will:

- Read dependencies from `requirements.txt`
- Add them to your `pyproject.toml`
- Create or update the lockfile (`uv.lock`)
- Install the dependencies into your project environment

#### 3. Import Development Dependencies (Optional)

If you have a separate file for development dependencies (e.g., `requirements-dev.txt`), import it as follows:

```bash
uv add --dev -r requirements-dev.txt
```

Verify that all dependencies have been correctly imported by listing the installed packages:

```bash
uv pip freeze
```

#### 4. Clean Up Legacy Files

Once you’ve confirmed the migration was successful, you can remove the old requirements files:

```bash
rm requirements.txt requirements-dev.txt
```

### Managing Dependencies with `uv` Going Forward

Now that your project uses `pyproject.toml`, you can manage dependencies directly with `uv`:

- **Add a new runtime dependency:**

  ```bash
  uv add requests
  ```

- **Add a development dependency:**

  ```bash
  uv add --dev pytest
  ```

- **Remove a dependency:**

  ```bash
  uv remove requests
  ```

Each command will automatically update both your `pyproject.toml` and the lockfile, keeping your dependency management consistent and reproducible.
