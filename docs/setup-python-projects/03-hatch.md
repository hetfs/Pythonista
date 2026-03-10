---
id: 03-hatch
title: Hatch
sidebar_position: 3
description: Learn how to manage Python projects using Hatch
---

# Hatch

[Hatch](https://hatch.pypa.io/) is a modern Python project manager that brings **environment management**, **packaging**, **versioning**, and **publishing** together under a single, cohesive command-line interface. It supports the full project lifecycle from initial scaffolding to final release while aligning fully with modern Python packaging standards.

---

## Installation and Setup

Hatch can be installed in several ways while remaining globally available on your system.

```bash
# On Windows with winget

winget install PyPA.Hatch
hatch --version
```

Additional installation methods for other platforms are documented [here](https://hatch.pypa.io/latest/install/)

---

## Key Features

* **Isolated environment management**
  Create and manage virtual environments, and run commands inside them using `hatch run` and `hatch shell`.

* **Standards-compliant packaging**
  Build wheels and source distributions with **Hatchling**, a PEP 517–compliant build backend that reads project metadata from the `[project]` table defined by **PEP 621**.

  * Hatchling: [https://hatch.pypa.io/latest/build/](https://hatch.pypa.io/latest/build/)
  * PEP 517: [https://peps.python.org/pep-0517/](https://peps.python.org/pep-0517/)
  * PEP 621: [https://peps.python.org/pep-0621/](https://peps.python.org/pep-0621/)

* **Environment matrices for testing**
  Define multiple environments and Python versions to test across version matrices with per-environment dependencies.

* **Integrated version management**
  Manage project versions using `hatch version`, with support for semantic version segment bumps such as `major`, `minor`, and `patch`. Version sources are configurable and well suited for automation.

* **Built-in publishing workflow**
  Publish built artifacts directly to package indexes such as PyPI using `hatch publish`.
  PyPI: [https://pypi.org/](https://pypi.org/)

---

## Create a New Project

```bash
hatch new my-project
```

This command scaffolds a new project with a sensible default structure and configuration:

```text
my_project
├── src
│   └── my_project
│       ├── __about__.py
│       └── __init__.py
├── tests
│   └── __init__.py
├── LICENSE.txt
├── README.md
└── pyproject.toml
```

---

## Environment and Dependencies

```bash
cd my_project/
hatch env create
```

Hatch creates an isolated environment and installs the dependencies declared in `pyproject.toml`.

---

## Build the Project

```bash
hatch build
```

This command produces both wheels and source distributions using Hatchling.

---

## Publish the Project

```bash
hatch publish
```

Built artifacts are uploaded to the configured package index.

---

## Run Commands Inside a Managed Environment

```bash
hatch run python -V
hatch run pytest -q
hatch shell
```

These commands ensure all tools run inside Hatch-managed environments, improving reproducibility and consistency across development workflows.

---

## Summary

Hatch is a strong choice for teams and individuals seeking a **structured**, **standards-based**, and **end-to-end** Python project management solution. It is particularly effective when consistent environments, repeatable builds, and frequent publishing are essential to the workflow.
