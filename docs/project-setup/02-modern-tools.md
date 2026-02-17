---
id: 02-modern-tools
title: modern tools
sidebar_position: 2
description: learn how to manage python projects using modern, maintainable, and professional tooling that scales with your codebase.
---

# modern tooling

as python projects grow in size or involve multiple contributors, modern tooling becomes essential. these tools provide stronger dependency resolution, reproducible lockfiles, and workflow automation that go far beyond the capabilities of basic `pip` and `venv`.

below is an overview of widely adopted tools in the modern python ecosystem.

| tool                                                            | description                                                                                                                  |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **[poetry](https://python-poetry.org/)**                        | full-featured dependency management and packaging built around `pyproject.toml`. well-suited for applications and libraries. |
| **[pdm](https://pdm.fming.dev/)**                               | a pep 621–compliant package manager focused on speed, simplicity, and clean workflows.                                       |
| **[hatch](https://hatch.pypa.io/)**                             | an opinionated project manager covering scaffolding, versioning, testing, builds, and publishing.                            |
| **[uv](https://github.com/astral-sh/uv)**                       | an ultra-fast, rust-based tool for virtual environments, dependency resolution, and packaging.                               |
| **[pip-tools](https://github.com/jazzband/pip-tools)**          | deterministic dependency locking generated from a simple `requirements.in` file.                                             |
| **[micropipenv](https://github.com/thoth-station/micropipenv)** | a minimal wrapper designed for containerized deployments, supporting multiple lockfile formats.                              |

for authoritative guidance on packaging standards and best practices, refer to the official
[python packaging user guide](https://packaging.python.org).

---

## choosing the right tool

different tools excel at different stages of a project’s lifecycle. the following guidance helps narrow your choice:

* **getting started or learning**: `venv` + `pip`
* **collaborative application development**: poetry or pipenv
* **library development**: poetry or pdm
* **maximum speed with a unified workflow**: uv
* **structured projects at scale**: hatch, optionally paired with uv

---

## using hatch and uv together

Hatch and uv are often combined to balance **structure** and **performance**.

### Hatch

Hatch is a comprehensive project management tool focused on standardization and extensibility.

* Strong project scaffolding and templates
* Built-in versioning and publishing
* Multi-environment management
* Extensible plugin ecosystem
* Native `pyproject.toml` workflow

**Typical use**: Managing the full project lifecycle, from creation to release.

Learn [hatch](./03-hatch.md)

---

### uv

uv is a performance-focused, Rust-based tool optimized for modern development workflows.

* Extremely fast dependency resolution and installs
* Combines features of `pip`, `pip-tools`, and `venv`
* Built-in lockfile support
* Well-suited for monorepos and CI pipelines
* Drop-in replacement for many existing tools

**Typical use**: High-speed local development and CI/CD workflows.

Learn [uv](./04-uv.md)

---

### Option 1: Hatch with uv as Installer

```toml
# pyproject.toml
[tool.hatch]
installer = "uv"

[tool.hatch.envs.default]
dependencies = []
```

**Benefits**

* Hatch’s structured project management with uv’s performance
* Seamless integration with Hatch-managed environments

---

### Option 2: Split Responsibilities

* Use **Hatch** for project creation, versioning, and publishing
* Use **uv** for daily dependency installs, lockfiles, and fast resolution

---

## Comparison Matrix

| Aspect                    | Hatch     | uv        | Hatch + uv |
| ------------------------- | --------- | --------- | ---------- |
| Speed                     | Moderate  | Very fast | Very fast  |
| Scaffolding               | Excellent | Minimal   | Excellent  |
| Dependency resolution     | Good      | Excellent | Excellent  |
| Lockfiles                 | Basic     | Excellent | Excellent  |
| Multi-environment support | Excellent | Good      | Excellent  |
| Publishing                | Built-in  | External  | Built-in   |
| Learning curve            | Moderate  | Low       | Higher     |

---

## Recommendations

* **Choose Hatch** if you need structured templates, versioning, and frequent publishing.
* **Choose uv** if speed, simplicity, and performance are your top priorities.
* **Choose both** if you want Hatch’s structure combined with uv’s speed and can manage the additional configuration.

---

## Practical Setup Example

```toml
# pyproject.toml
[build-system]
requires = ["hatchling", "hatch-uv"]
build-backend = "hatchling.build"

[tool.hatch]
installer = "uv"

[tool.hatch.envs.default]
dependencies = [
  "flask>=3.0.0",
  "pytest>=7.0.0",
]

[tool.hatch.envs.test]
dependencies = ["pytest"]
```

---

## Current Trend

Many teams now adopt **uv** for its speed while relying on **Hatch** for scaffolding and publishing. The `hatch-uv` integration makes this pairing especially effective in both local development and CI environments.

**Recommendation**: Start with uv for simplicity and performance. Introduce Hatch when you need structured project management, versioning, or publishing features.

---

<div align="center">

## Build smart. Ship fast. Stay organized. 🐍

</div>
