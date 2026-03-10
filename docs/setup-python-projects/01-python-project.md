---
id: 01-python-project
title: Setup Python Project
sidebar_position: 1
description: Build a production-grade, maintainable, and CI/CD-ready Python project from scratch.
---

# Setup Python Project

Creating a **production-ready Python project** requires much more than writing code that runs. It demands intentional structure, disciplined dependency management, automated testing, and consistent standards across development, testing, and production environments.
A **well-structured project** forms the foundation of maintainable, collaborative, and distributable software.

At a high level, a professional Python project relies on two fundamental principles:

1️⃣ Clear organization of code with isolated dependencies

2️⃣ A logical, scalable directory and file structure

This guide presents a **community-validated project layout** widely adopted in professional and open-source ecosystems. It provides a solid architectural baseline for organizing functionality, managing data flow, and enforcing clean separation of concerns.

Although no single structure fits every project, this layout offers a proven starting point. Adopting it allows your project to grow smoothly from **initial development** into a **deployable, maintainable, and CI/CD-ready** system.

---

## Dependency Management

Reliable dependency management ensures consistent behavior across environments, from local development to staging and production.

By isolating the Python interpreter and project dependencies inside a dedicated environment, you improve reproducibility, reduce conflicts, and make collaboration easier.

---

## 🎯 Why Isolation Matters

Skipping environment isolation often results in version conflicts, inconsistent runtime behavior, and subtle bugs that appear only on specific machines.

When combined with a clean project layout, virtual environments help you:

* **Improve maintainability** by keeping the codebase readable and extensible
* **Simplify collaboration** through a predictable structure
* **Enable packaging and distribution** for PyPI and internal registries
* **Support testing workflows** with clearly organized tests

---

## 🏗️ Standard Python Project Structure

Below is a commonly used layout for modern, distributable Python packages.

Example project: `my_project`

```bash
my_project/                     # Project root (Git repository root)
├── src/                        # Source directory (prevents import shadowing)
│   └── my_project/             # Main Python package (import name)
│       ├── __init__.py         # Marks the package as importable
│       ├── core.py             # Core business logic
│       ├── models.py           # Domain models
│       ├── utils/              # Utility subpackage
│       │   ├── __init__.py
│       │   └── helpers.py
│       └── cli.py              # Command-line interface
├── tests/                      # Test suite
│   ├── __init__.py
│   ├── test_core.py
│   ├── test_models.py
│   └── utils/
│       ├── __init__.py
│       └── test_helpers.py
├── docs/                       # Documentation sources
│   └── index.rst
├── scripts/                    # Optional helper scripts
├── data/                       # Optional data files
├── .gitignore                  # Git ignore rules
├── pyproject.toml              # Project metadata and tooling config
├── README.md                   # Project overview and usage
└── LICENSE                     # License information
```

---

## 🧩 Key Components Explained

### 1. The `src` Layout

The `src/` layout is a modern best practice that separates your package from the project root.

**Why it matters:** It prevents accidental imports from the working directory instead of the installed package, a frequent source of subtle and difficult bugs.

---

### 2. The Package Directory

This directory contains the application’s core logic and defines the import name:

```python
import my_project
```

Any directory containing Python modules must include an `__init__.py` file. Even if empty, it explicitly marks the directory as importable.

---

### 3. The `tests` Directory

All test code lives under `tests/` and should mirror the structure of `src/`.

Prefix test files with `test_` so tools like `pytest` can automatically discover and execute them. Separating tests from production code improves clarity and reinforces testing discipline.

---

### 4. The `pyproject.toml` File

`pyproject.toml` is the central configuration file for modern Python projects. It defines:

* Build system requirements
* Project metadata
* Dependency declarations
* Configuration for linters, formatters, and test tools

It replaces legacy files such as `setup.py`, `setup.cfg`, and `requirements.txt` and is now the standard for Python packaging.

---

### 5. The `README.md` File

The README serves as the primary entry point for users and contributors.

A strong README typically includes:

* A concise project overview
* Installation instructions
* Usage examples
* Contribution and development guidelines

This file is often the first thing users see on GitHub or PyPI.

---

### 6. The `LICENSE` File

The [LICENSE](https://opensource.org/licenses) file defines the legal terms under which the project can be used, modified, and distributed.

Including a license is essential for open-source projects. Without one, others technically have no permission to use your code. Common options include MIT, Apache-2.0, and GPL.

---

## 🛠️ Core Tools: `venv` and `pip`

These built-in tools form the backbone of most Python workflows.

| Tool       | Purpose                              | Key Commands                                                                                      |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **`venv`** | Create isolated virtual environments | `python -m venv .venv`<br/>`source .venv/bin/activate`<br/>`.venv\Scripts\activate`               |
| **`pip`**  | Install and manage packages          | `pip install <package>`<br/>`pip freeze > requirements.txt`<br/>`pip install -r requirements.txt` |

Recommended workflow:

1. Create and activate a virtual environment
2. Install dependencies with `pip`
3. Record versions for reproducibility
4. Pin dependencies using `package==x.y.z`
5. Separate runtime and development dependencies
6. Detect conflicts with `pip check`
7. Update dependencies intentionally and test thoroughly
8. Add `.venv/` to `.gitignore`

Starting with a `src/` layout and `pyproject.toml` signals professionalism and aligns with modern Python standards.

---

## ⚙️ Core Configuration Files

### `pyproject.toml`: The Modern Standard

[PEP 621](https://peps.python.org/pep-0621/) defines a standardized way to declare project metadata in `pyproject.toml`. It is supported by modern Python packaging tools, including [Setuptools](https://setuptools.pypa.io/en/latest/), [Flit](https://flit.pypa.io/en/stable/), [Poetry](https://python-poetry.org/), [Hatch](https://hatch.pypa.io/latest/), and [uv](https://docs.astral.sh/uv/), ensuring consistent and interoperable project configuration across the Python ecosystem.

Example pyproject.toml

```toml
[build-system]
requires = ["setuptools>=68", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "my-project"
version = "0.1.0"
description = "a short description of my-project"
authors = [{ name = "your name", email = "your.email@example.com" }]
readme = "readme.md"
license = { text = "mit" }
keywords = ["python", "my-project"]

[project.optional-dependencies]
dev = ["pytest>=7.0", "black", "flake8", "mypy"]

[tool.setuptools.packages.find]
where = ["src"]
```

---

## 🏁 choose the right documentation tool

each documentation tool serves a specific purpose. the right choice depends on whether you are documenting a **library api**, a **project guide**, or **educational material**, and whether you require **hosting or automation**.

| tool              | best use case                                 | output formats  | official link                                          |
| ----------------- | --------------------------------------------- | --------------- | ------------------------------------------------------ |
| **sphinx**        | large libraries and detailed api references   | html, pdf, epub | [sphinx](https://www.sphinx-doc.org/)                  |
| **mkdocs**        | simple and clean documentation sites          | html            | [mkdocs](https://www.mkdocs.org/)                      |
| **pdoc**          | lightweight api documentation from docstrings | html            | [pdoc](https://pdoc.dev/)                              |
| **jupyter book**  | tutorials, books, and notebooks               | html, pdf       | [jupyterbook](https://jupyterbook.org/)                |
| **pydocstyle**    | enforcing pep 257 docstring standards         | cli             | [pydocstyle](https://pycodestyle.pycqa.org/en/latest/) |
| **read the docs** | automated hosting and versioned documentation | web             | [readthedocs](https://readthedocs.org/)                |

### 💡 selection guidance

* choose **sphinx** for robust and extensible api documentation
* choose **mkdocs** for markdown-first documentation with minimal setup
* choose **pdoc** for fast, zero-configuration api documentation
* choose **jupyter book** for learning-focused or notebook-driven content
* use **pydocstyle** to enforce documentation quality in ci pipelines
* use **read the docs** for automated builds, hosting, and versioning

this combination-based approach is common in mature python projects and scales well as the codebase grows.

---

## 🚦 continuous integration with github actions

continuous integration automatically validates your project on every push and pull request.

### why ci matters

ci enables you to:

* detect bugs early
* enforce code quality standards
* maintain consistency across contributors
* release with confidence

---

### basic github actions workflow

create the file:

```text
.github/workflows/ci.yml
```

```yaml
name: ci

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        python-version: ["3.10", "3.11", "3.12", "3.13", "3.14"]

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}

      - run: |
          python -m pip install --upgrade pip
          pip install -e ".[dev]"

      - run: pytest
```

📚 reference: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

---

## 🧹 introducing `pre-commit`

`pre-commit` runs automated checks before each commit, keeping the codebase clean and consistent.

### installation

```bash
pip install pre-commit
pre-commit install
```

### configuration example

```yaml
repos:
  - repo: https://github.com/psf/black
    rev: 24.4.2
    hooks:
      - id: black

  - repo: https://github.com/pycqa/flake8
    rev: 7.0.0
    hooks:
      - id: flake8

  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.10.0
    hooks:
      - id: mypy
```

📚 reference: [https://pre-commit.com/](https://pre-commit.com/)

---

## 📦 runtime vs development dependencies

separating dependencies keeps production installs lean and secure.

```toml
[project]
dependencies = [
  "requests>=2.31",
  "pydantic>=2.0"
]

[project.optional-dependencies]
dev = ["pytest", "black", "flake8", "mypy", "pre-commit"]
```

---

## 🚀 publishing to pypi

```bash
pip install build twine
python -m build
twine upload dist/*
```

📚 references:

* [https://packaging.python.org/](https://packaging.python.org/)
* [https://pypi.org/help/](https://pypi.org/help/)

---

## 🏁 outcome

with ci, `pre-commit`, clean dependency separation, and pypi readiness, your project becomes:

* professional
* continuously tested
* automatically formatted
* publish-ready
* scalable and maintainable

**build deliberately. ship with confidence.** 🐍
