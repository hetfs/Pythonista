---
id: 02-python-project-layout
title: Python Project Layout
sidebar_position: 2
description: Learn how to organize your Python projects using a modern, maintainable, and professional directory structure that scales with your codebase.
---

A **well-structured project** is the foundation of maintainable, collaborative, and distributable Python code. It requires thoughtful planning in two areas:

1️⃣ Clear code logic and dependency management.

2️⃣ Logical file and folder organization.

This guide covers the **standard Python project layout** widely used by professionals. It helps you make better architectural decisions from grouping functions and managing data flow to isolating features cleanly.

While there’s no one-size-fits-all layout, the **community-approved standard** offers an excellent starting point for most applications.

---

## 🎯 Why Structure Matters

A good project layout helps you:

- **Enhance Maintainability:** Make your code easy to read, extend, and refactor.
- **Simplify Collaboration:** Help contributors quickly understand where things belong.
- **Ease Packaging & Distribution:** Ensure your project can be installed and published on PyPI.
- **Facilitate Testing:** Organize and discover tests effortlessly.

---

## 🏗️ The Standard Python Project Structure

Here’s the typical layout for a modern, distributable Python package.
Example project: `myapp`

```bash
myapp/                          # Project root (Git repository root)
├── src/                        # Source directory (recommended to prevent import shadowing)
│   └── myapp/                  # Main Python package (import name)
│       ├── __init__.py         # Marks 'myapp' as an importable package
│       ├── core.py             # Core business logic
│       ├── models.py           # Data models or classes
│       ├── utils/              # Utility sub-package
│       │   ├── __init__.py
│       │   └── helpers.py
│       └── cli.py              # Command-line interface
├── tests/                      # All test modules
│   ├── __init__.py
│   ├── test_core.py
│   ├── test_models.py
│   └── utils/
│       ├── __init__.py
│       └── test_helpers.py
├── docs/                       # Documentation source (e.g., Sphinx or MkDocs)
│   └── index.rst
├── scripts/                    # Optional helper scripts
├── data/                       # Optional data files
├── .gitignore                  # Git ignore rules
├── pyproject.toml              # Modern build config & project metadata
├── README.md                   # Project overview
└── LICENSE                     # License information
````

---

## 🧩 Key Components Explained

### 1. The `src` Layout (`src/myapp/`)

A **modern best practice** that keeps your package isolated from the project root.
**Why it matters:** It prevents accidental imports from the local folder instead of the installed package — a common source of subtle bugs.

### 2. The Package Directory (`src/myapp/`)

This is your core logic. The folder name (`myapp`) is the package name users will import:

```python
import myapp
```

Each directory containing Python modules must have an `__init__.py` file (which can be empty).

### 3. The `tests` Directory

Mirror your source structure inside `tests/`.
Prefix test files with `test_` to allow automatic discovery by test runners like `pytest`.

### 4. The `pyproject.toml` File

This file defines your **build system**, **project metadata**, and **tool configurations** — replacing legacy files like `setup.py`, `setup.cfg`, and `requirements.txt`.

#### Example:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "myapp"
version = "0.1.0"
authors = [
  { name = "Your Name", email = "your.email@example.com" }
]
description = "A fantastic Python application."
readme = "README.md"
license = { text = "MIT" }
classifiers = [
  "License :: OSI Approved :: MIT License",
  "Programming Language :: Python :: 3",
  "Operating System :: OS Independent"
]
dependencies = [
  "requests>=2.25.0",
  "click>=8.0.0"
]

[project.optional-dependencies]
dev = [
  "pytest>=6.0",
  "black",
  "mypy"
]

[project.scripts]
myapp = "myapp.cli:main"  # Creates a CLI command 'myapp'
```

---

## 🔄 When to Deviate from the Standard

### ✅ Simple Scripts

For one-off automation tasks, a single `.py` file is fine.

### 🧩 Monorepos or Multi-Package Repositories

If managing multiple related packages:

```bash
myrepo/
├── pkg1/
│   └── src/pkg1/
├── pkg2/
│   └── src/pkg2/
└── shared_tools/
```

### 🌐 Web Applications

Frameworks may define their own structure:

* **Django:** Uses a `project/` and `apps/` layout.
* **Flask:** Flexible — commonly structured with `app/`, `models/`, `views/`, `templates/`, and `static/`.

---

## ⚠️ Common Mistakes & Anti-Patterns

Even experienced developers fall into structural traps that cause confusion and subtle bugs.
Here’s what to **avoid** when setting up your Python projects:

### 1. Mixing Modules and Packages at the Root

Bad example:

```bash
myapp/
├── myapp.py
├── myapp/
│   ├── __init__.py
│   └── core.py
```

Why it’s bad:

* `import myapp` becomes ambiguous — Python might import the `myapp.py` file instead of the package.
  ✅ Fix: Remove `myapp.py` and use only the `myapp/` package.

---

### 2. Missing `__init__.py` Files

Without `__init__.py`, directories aren’t recognized as packages.
This leads to confusing import errors, especially in test discovery or relative imports.

✅ Always include `__init__.py`, even if empty.

---

### 3. Flat, Unorganized Repositories

Bad example:

```bash
myapp/
├── core.py
├── models.py
├── utils.py
├── main.py
```

Why it’s bad:

* Everything lives in one folder, making it hard to scale.
* No clear boundaries between modules.
  ✅ Fix: Group files logically into packages like `src/myapp/utils/`, `src/myapp/models/`, etc.

---

### 4. Using Root Imports During Development

When working without the `src/` layout, developers often run code like:

```python
import myapp
```

from the project root.
This causes your code to import the **local folder**, not the installed package — leading to import inconsistencies.

✅ Use the `src/` layout or install your package in editable mode:

```bash
pip install -e .
```

---

### 5. Keeping Tests Inside the Package

Bad example:

```bash
src/myapp/tests/test_core.py
```

Why it’s bad:

* Tests become part of the package, increasing its size and confusing users.
  ✅ Fix: Place tests **outside** your main package under a top-level `tests/` directory.

---

### 6. Overloading `__init__.py`

Avoid putting logic or imports directly in `__init__.py`.
It should initialize your package minimally, not execute heavy code.

✅ Keep it lightweight:

```python
"""myapp package initialization."""
from .core import main_function
```

---

### 7. Ignoring Tool Configuration

Don’t scatter tool settings across multiple files.
Use `pyproject.toml` to unify configuration for `black`, `mypy`, `pytest`, etc.

✅ Example:

```toml
[tool.black]
line-length = 88
target-version = ['py310']

[tool.pytest.ini_options]
testpaths = ["tests"]
```

---

## 🧭 Summary & Recommendations

If you’re building a project you plan to **maintain**, **collaborate on**, or **distribute**,
start with the **`src/` layout** and a **`pyproject.toml`** file.

This structure reflects modern Python packaging standards and ensures long-term scalability.
It signals professionalism and helps others immediately understand your project.

> 💡 **Pro Tip:**
> The `src/` layout prevents import confusion and aligns with best practices.
> 📚 Learn more at [Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/)

```

## ⚙️ Core Configuration Files

### 1. `pyproject.toml` The Modern Standard

> 🧩 [PEP 621](https://peps.python.org/pep-0621/) defines metadata fields for `pyproject.toml`.
> Supported by tools like [Setuptools](https://setuptools.pypa.io/), [Flit](https://flit.pypa.io/), [Poetry](https://python-poetry.org/), and [Hatch](https://hatch.pypa.io/).

```toml
[build-system]
requires = ["setuptools>=68", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "my-package"
version = "0.1.0"
description = "A short description of my package"
authors = [
    { name = "Your Name", email = "your.email@example.com" },
]
readme = "README.md"
license = { text = "MIT" }
keywords = ["python", "package"]
classifiers = [
    "Development Status :: 3 - Alpha",
    "Intended Audience :: Developers",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3.9",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
    "Programming Language :: Python :: 3.12",
]

[project.urls]
Homepage = "https://github.com/username/my-package"
Repository = "https://github.com/username/my-package"
Documentation = "https://github.com/username/my-package#readme"

[project.optional-dependencies]
dev = ["pytest>=7.0", "black", "flake8", "mypy"]

[tool.setuptools.packages.find]
where = ["src"]
```

> ✅ Use `pyproject.toml` for new projects — it’s standardized, tool-agnostic, and CI-friendly.

---

### 2. `setup.py` — Legacy Support

```python
from setuptools import setup, find_packages

setup(
    name="my-package",
    version="0.1.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A short description of my package",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8+",
    ],
    python_requires=">=3.8",
)
```

> 🧠 Only include `setup.py` for backward compatibility with older build systems.

---

## 🧰 Development Setup

### 1. Create a Virtual Environment

```bash
# Using venv
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Or using Conda
conda create -n my-project python=3.11
conda activate my-project
```

> 💡 Always isolate dependencies using a virtual environment.
> See: [Python venv docs](https://docs.python.org/3/library/venv.html)

---

### 2. Install in Editable Mode

```bash
# Install package with dev dependencies
pip install -e ".[dev]"
```

> 📦 Editable installs let you modify code without reinstalling.

---

## 🧪 Testing Setup

### 1. Example Test

```python
# tests/test_module1.py
import pytest
from my_package.module1 import some_function

def test_some_function():
    assert some_function() is not None
```

### 2. Configure Pytest

```ini
# pytest.ini
[tool:pytest]
testpaths = tests
addopts = -v --cov=my_package --cov-report=term-missing
```

> 🧩 Tools:
>
> * [pytest](https://docs.pytest.org/) — testing framework
> * [pytest-cov](https://github.com/pytest-dev/pytest-cov) — coverage reports

---

## 📚 Documentation Setup

### 1. Sphinx (Classic Docs)

```bash
pip install sphinx sphinx-rtd-theme
cd docs
sphinx-quickstart
sphinx-apidoc -o . ../src/my_package
```

### 2. MkDocs (Modern Markdown Docs)

```bash
pip install mkdocs mkdocs-material
mkdocs new docs
mkdocs serve
```

> Docs Tools:
>
> * [Sphinx](https://www.sphinx-doc.org/en/master/)
> * [MkDocs](https://www.mkdocs.org/)
> * [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

---

## 🔄 Development Workflow

### 1. Code Quality Tools

```bash
# Auto-format code
black src/ tests/

# Run linter
flake8 src/ tests/

# Static type checking
mypy src/

# Run tests
pytest
```

> 🧩 Tools:
>
> * [Black](https://black.readthedocs.io/en/stable/) — formatter
> * [Flake8](https://flake8.pycqa.org/en/latest/) — linter
> * [Mypy](https://mypy.readthedocs.io/en/stable/) — type checker

---

### 2. Pre-Commit Hooks

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/psf/black
    rev: 24.4.2
    hooks:
      - id: black
  - repo: https://github.com/pycqa/flake8
    rev: 7.1.0
    hooks:
      - id: flake8
```

```bash
pip install pre-commit
pre-commit install
```

> ⚙️ Tools: [pre-commit.com](https://pre-commit.com/)

---

## 🚀 Build and Distribution

### 1. Build Package

```bash
pip install build
python -m build
```

> 🏗️ Tool: [build](https://pypa-build.readthedocs.io/)

### 2. Publish to PyPI

```bash
pip install twine
twine upload --repository testpypi dist/*
```

> 🧠 Tools:
>
> * [Twine](https://twine.readthedocs.io/en/stable/) — secure uploads
> * [TestPyPI](https://test.pypi.org/) — sandbox for testing

---

## 📋 Essential Files

### `.gitignore`

```gitignore
__pycache__/
*.py[cod]
build/
dist/
.venv/
.eggs/
*.egg-info/
.vscode/
.idea/
```

### `README.md`

````markdown
# My Package

A concise description of your package.

## Installation
```bash
pip install my-package
````

## Usage

```python
from my_package import main_function
main_function()
```

---

## 🎯 Key Benefits

| Benefit | Description |
| :-- | :-- |
| 🧩 **Separation of Concerns** | Clear distinction between code, tests, and docs. |
| ⚙️ **Modern Tooling** | Uses `pyproject.toml` and supports PEP 621 metadata. |
| 🧪 **Full Dev Lifecycle** | Testing, linting, type checking, and CI ready. |
| 💻 **Developer Friendly** | Editable installs, isolated environments, pre-commit hooks. |
| 🚀 **Publish-Ready** | Build and upload with one command. |

---

<div align="center">

**Build smart. Ship fast. Stay organized.** 🐍
📚 References: [Python Packaging Guide](https://packaging.python.org/), [PEP 621](https://peps.python.org/pep-0621/)

</div>
