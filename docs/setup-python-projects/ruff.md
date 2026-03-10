---
id: ruff
title: Ruff
sidebar_position: 7
description: Fast Python linting and formatting with Ruff. A production-ready guide for modern Python projects.
---

# Ruff

[Ruff](https://docs.astral.sh/ruff/) is an ultra-fast Python linter and formatter written in Rust.
This guide covers installation, configuration, CI integration, and migration from legacy tooling.
Ruff consolidates multiple traditional Python linters and formatters into a **single dependency-free binary**.

---

## Key Features

* **Extremely fast** runs in milliseconds, even on large codebases.
* **Comprehensive** includes 800+ rules (flake8, isort, pyupgrade, pydocstyle, pep8-naming, autoflake, and more).
* **Easy to adopt** minimal configuration required.
* **Modern-first** fully compatible with `pyproject.toml` and tools like `uv`.
Ruff supports **Python 3.12+** and automatically modernizes code using `pyupgrade` rules, including:
* `super()` calls
* Set literals
* f-strings
* Modern exception syntax
All settings live in `pyproject.toml`.
No separate `.flake8`, `.isort.cfg`, or `setup.cfg` files required.

---

## Installation

```bash
# Install Ruff globally.
uv tool install ruff@latest

# Or add Ruff to your project.
uv add --dev ruff

# With pip.
pip install ruff

# With pipx.
pipx install ruff
````

## Install with package manager

```bash
astral-sh.ruff      # windows

brew install ruff   # macOS

apt install ruff    # Linux

pacman -S ruff      # Arch Linux

```

Verify installation:

```bash
ruff --version
```

For more about [ruff installation](https://docs.astral.sh/ruff/installation/).

---

## Basic Usage

```bash

ruff check
ruff check --fix  # Automatically Fix Issues
ruff format       # Format Code
```

*Ruff can be invoked directly with uvx*:

```bash
uvx ruff check   # Lint all files in the current directory.
uvx ruff format  # Format all files in the current directory.
```

*You can use Ruff for*:

* **Linting only** `ruff check`
* **Formatting only** `ruff format`
* **Both** combine commands or integrate with pre-commit

:::tip
Ruff’s formatter aligns closely with Black.
Output is semantically equivalent, though not byte-for-byte identical.
:::

---

## Configuration with `pyproject.toml`

All configuration lives under `[tool.ruff]`.

```toml
[tool.ruff]
line-length = 88
target-version = "py312"

[tool.ruff.lint]
select = ["E", "F", "I", "UP"]
ignore = ["E501"]
```

### Extended Configuration

```toml
[tool.ruff]
line-length = 120

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
skip-magic-trailing-comma = false

[tool.ruff.lint]
extend-select = [
    "B",  # flake8-bugbear
    "N",  # pep8-naming
    "D",  # pydocstyle
]
ignore = ["D203", "D212"]
```

Full reference:
[https://docs.astral.sh/ruff/configuration/](https://docs.astral.sh/ruff/configuration/)

---

## Common Rule Groups

| Prefix | Source                  | Purpose                          |
| ------ | ----------------------- | -------------------------------- |
| E/W    | pycodestyle             | Style errors and warnings        |
| F      | Pyflakes                | Logic errors and undefined names |
| I      | isort                   | Import sorting                   |
| UP     | pyupgrade               | Syntax modernization             |
| B      | flake8-bugbear          | Common bugs and risky patterns   |
| N      | pep8-naming             | Naming conventions               |
| D      | pydocstyle              | Docstring standards              |
| C4     | flake8-comprehensions   | Comprehension improvements       |
| SIM    | flake8-simplify         | Expression simplification        |
| ARG    | flake8-unused-arguments | Unused function arguments        |

Complete rules:
[https://docs.astral.sh/ruff/rules/](https://docs.astral.sh/ruff/rules/)

---

## Replacing Legacy Tools

### Flake8

```bash
ruff check
```

### isort

```bash
ruff check --select I --fix
```

### pyupgrade

```bash
ruff check --select UP --fix
```

### autoflake

```bash
ruff check --fix
```

### Black

```bash
ruff format
```

---

## CI Integration

Ruff exits with a non-zero status on violations, which makes it ideal for CI.

### GitHub Actions

```yaml
- name: Run Ruff
  uses: astral-sh/ruff-action@v3
  with:
    args: check --output-format=github
```

Or directly:

```yaml
- name: Lint with Ruff
  run: ruff check . --output-format=github
```

### GitLab CI

```yaml
ruff:
  script:
    - ruff check
    - ruff format --check
```

> `ruff format --check` validates formatting without modifying files.

---

## Pre-commit Integration

Create `.pre-commit-config.yaml`:

```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.14.10
    hooks:
      - id: ruff-check
        args: [--fix]
      - id: ruff-format

  - repo: https://github.com/astral-sh/uv-pre-commit
    rev: 0.9.21
    hooks:
      - id: uv-lock

  - repo: local
    hooks:
      - id: pytest
        name: pytest
        language: system
        entry: uv run pytest tests
        types: [python]
        pass_filenames: false

  - repo: meta
    hooks:
      - id: check-hooks-apply
      - id: check-useless-excludes

  - repo: https://github.com/Lucas-C/pre-commit-hooks
    rev: v1.1.9
    hooks:
      - id: remove-crlf
```

---

## Recommended Professional Stack

* Dependency management: `uv`
* Build and publishing: `hatch`, `pdm`, or `poetry`
* Testing: `pytest`
* Documentation: `mkdocs` or `sphinx`
* Type checking: `mypy` or `pyright`
* CI: GitHub Actions or GitLab CI

This stack keeps configuration minimal while maintaining strong code quality.

---

## When Ruff May Not Be Ideal

Ruff may not be suitable if:

* You rely on a niche Flake8 plugin not yet implemented
* Your workflow requires byte-for-byte Black output
* You depend on unsupported or custom pydocstyle rules

For most modern Python projects, Ruff effectively replaces traditional linting stacks.

---

## Summary

Ruff provides:

* **Speed** millisecond-level linting
* **Simplicity** one tool, one configuration
* **Coverage** hundreds of rules, auto-fixes, import sorting
* **Modern integration** seamless support for `pyproject.toml`, CI, and pre-commit

Adopting Ruff reduces complexity, accelerates development, and ensures consistent, high-quality Python code.

Official documentation:
[https://docs.astral.sh/ruff/](https://docs.astral.sh/ruff/)
