---
id: python-project-docusaurus
title: Python and Docusaurus La
sidebar_position: 3
description: Learn how to organize and configure a project that combines Python code and Docusaurus documentation without conflicts.
---

# Python and Docusaurus in a Single Project

Combining **Python** and **Docusaurus** in one repository allows you to ship both your code and its documentation together.
However, both ecosystems use a `src/` directory but for **very different purposes**, which can cause naming conflicts.

This guide walks you through how to structure, configure, and deploy both tools side-by-side, without sacrificing best practices.

---

## 🎯 Understanding the Core Challenge

Both tools rely on a `src/` directory but for unrelated purposes:

- 🐍 **Python** uses it for your package’s source code (modern “src layout”).
- 🌐 **Docusaurus** uses it for React components, CSS, and pages.

:::warning Conflict Alert
If both share the same root-level `src/`, builds can break or import paths may clash.
:::

To fix this, you’ll separate each tool’s source into its own directory.

---

## 🗂️ Recommended Project Structures

### 🧩 Option 1: Separate Source Directories (✅ Recommended)

This layout offers clear separation, minimal setup, and zero conflicts.

```bash
my-project/
├── python-src/                 # Python package source
│   ├── my_package/
│   │   ├── __init__.py
│   │   └── core.py
│   └── tests/
├── docusaurus-src/             # Docusaurus documentation site
│   ├── docs/                   # Markdown/MDX documentation
│   ├── src/                    # React components & pages
│   ├── static/                 # Static assets
│   └── docusaurus.config.js
├── pyproject.toml
├── README.md
└── .gitignore
````

:::tip Why this is best

* ✅ Clear separation of code and documentation
* ✅ No path conflicts
* ✅ Works out of the box with default configurations
* ✅ Easier to onboard new contributors
  :::

---

### 🧱 Option 2: Custom Directory Names

You can also rename the directories as you like:

```bash
my-project/
├── python-source/              # Python code
│   └── my_package/
├── docs-site/                  # Docusaurus documentation
│   ├── docs/
│   ├── src/
│   └── docusaurus.config.js
└── pyproject.toml
```

---

## ⚙️ Configuration Setup

### 🐍 Python (`pyproject.toml`)

```toml
[build-system]
requires = ["setuptools>=45", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "my-package"
version = "0.1.0"
description = "An example integrated Python + Docusaurus project"

[tool.setuptools]
package-dir = {"": "python-src"}

[tool.setuptools.packages.find]
where = ["python-src"]

[project.optional-dependencies]
dev = [
    "pytest>=6.0",
    "black",
    "flake8",
]
```

### 🌐 Docusaurus

No special changes required Docusaurus runs as usual inside its own folder.

---

## 🛠️ Implementation Steps

### Step 1: Create the Project Structure

```bash
mkdir my-project && cd my-project

# Python package
mkdir -p python-src/my_package
touch python-src/my_package/__init__.py
touch python-src/my_package/core.py

# Docusaurus app
npx create-docusaurus@latest docusaurus-src classic
```

### Step 2: Set Up the Python Environment

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

pip install -e .
pip install -e ".[dev]"
```

### Step 3: Create a Unified Makefile

```makefile
.PHONY: docs test format clean

docs:
	cd docusaurus-src && npm start

test:
	pytest python-src/tests/

format:
	black python-src/
	cd docusaurus-src && npm run format

clean:
	rm -rf build/ dist/ *.egg-info/
	cd docusaurus-src && npm run clear
```

---

## 📚 Documenting Your Python Code

### Option A: Using Sphinx + MyST

Integrate your Python API documentation into Docusaurus using [Sphinx](https://www.sphinx-doc.org/) and [MyST](https://myst-parser.readthedocs.io/).

```bash
pip install sphinx myst-parser
```

**Sphinx configuration (`docs-source/conf.py`):**

```python
extensions = [
    "myst_parser",
    "sphinx.ext.autodoc",
    "sphinx.ext.napoleon",
]
```

**Generate documentation into Docusaurus:**

```bash
sphinx-apidoc -o docusaurus-src/docs/api python-src/my_package
```

---

### Option B: Manual Markdown Examples

You can manually document APIs in Markdown or MDX files:

````markdown
# API Reference

## Core Module

```python
from my_package.core import main_function
result = main_function()
````



:::tip
Manual docs are great for tutorials and code snippets, while Sphinx automates API documentation.
:::

---

## 🚀 Deployment

### Python Package Distribution

```bash
python -m build
twine upload dist/*
````

### Docusaurus Deployment

```bash
cd docusaurus-src
npm run build
```

You can deploy the build output via **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 🔧 Advanced Customization

### Custom Directory Names

If you rename directories (e.g., `source/` instead of `python-src/`):

```toml
[tool.setuptools]
package-dir = {"": "source"}

[tool.setuptools.packages.find]
where = ["source"]
```

For Docusaurus, if you rename its internal `src/`:

```javascript
// docusaurus.config.js
plugins: [
  [
    "@docusaurus/plugin-content-pages",
    {
      path: "custom-src/pages",
    },
  ],
],
```

---

## 🎯 Quick Start Recipes

### 🆕 New Project Setup

```bash
mkdir my-project && cd my-project
mkdir python-source
echo '"""My Python package."""' > python-source/my_package/__init__.py
npx create-docusaurus@latest docs-source classic
```

Then configure `pyproject.toml` as shown above.

---

### 🔄 Existing Project Migration

#### Scenario A: Python Project Using `src/`

**Before:**

```bash
project/
├── src/
│   └── my_package/
└── setup.py
```

**After:**

```bash
project/
├── python-source/
│   └── my_package/
├── docs-source/
└── setup.py
```

#### Migration Steps

```bash
mv src/ python-source/
npx create-docusaurus@latest docs-source classic
```

Verify everything works:

```bash
pip install -e .
pytest
cd docs-source && npm run build
```

:::info Verification Checklist

* [ ] Python package installs correctly (`pip install -e .`)
* [ ] Tests pass (`pytest`)
* [ ] Docusaurus dev server starts (`npm run start`)
* [ ] Site builds cleanly (`npm run build`)
* [ ] CI/CD paths updated
  :::

---

## ✅ Best Practices

### .gitignore Example

```gitignore
# Python
__pycache__/
*.pyc
*.egg-info/
dist/
build/

# Docusaurus
docusaurus-src/node_modules/
docusaurus-src/build/

# Environment
venv/
.env
```

### Development Workflow

1. 🧪 **Python development**: work inside `python-src/`
2. 📝 **Docs development**: edit Docusaurus in `docusaurus-src/`
3. 🧰 **Run via Makefile**: unified workflow for both
4. 🔄 **Keep builds isolated**: no overlapping directories

---

## 💡 Monorepo Benefits

* Centralized issue tracking and versioning
* Unified CI/CD and release automation
* Cross-referencing between docs and code
* Easier maintenance for teams and open-source contributors

---

This approach ensures your **Python codebase** and **Docusaurus documentation** coexist seamlessly

organized, conflict-free, and ready for both local development and CI/CD pipelines.
