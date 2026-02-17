# Hatch, uv, Sphinx, and Ruff

This guide walks through a clean, modern Python workflow built on a clear separation of responsibilities:

* **Hatch** manages project structure, environments, versioning, builds, and publishing
* **uv** handles dependency installation, resolution, and lockfiles
* **Sphinx** generates professional documentation
* **Ruff** enforces linting and formatting at high speed

Everything is configured through `pyproject.toml`, keeping the setup centralized, reproducible, and easy to maintain.

---

## Why This Combination Works

Each tool focuses on a single concern, which keeps your workflow predictable and scalable.

| Tool       | Focus Area        | Benefit                                                           |
| ---------- | ----------------- | ----------------------------------------------------------------- |
| **Hatch**  | Project lifecycle | Central authority for builds, versions, scripts, and environments |
| **uv**     | Dependencies      | Fast installs, reliable lockfiles, CI-friendly behavior           |
| **Sphinx** | Documentation     | Mature, extensible documentation system                           |
| **Ruff**   | Code quality      | Fast linting and formatting in one unified tool                   |

Hatch defines the project.
uv installs and locks dependencies.
Ruff keeps the code consistent.
Sphinx documents the results.

---

## Prerequisites

Install Hatch and uv globally. Using `pipx` helps keep them isolated.

```bash
pipx install hatch
pipx install uv
```

Verify the installation:

```bash
hatch --version
uv --version
```

Official documentation:

* Hatch: [https://hatch.pypa.io/latest/](https://hatch.pypa.io/latest/)
* uv: [https://docs.astral.sh/uv/](https://docs.astral.sh/uv/)

---

## Create a Project with Hatch

Hatch initializes the project layout and build configuration.

```bash
hatch new my_project
cd my_project
```

Typical structure:

```text
my-project/
├── src/my_project/
│   └── __init__.py
├── tests/
├── pyproject.toml
└── README.md
```

From here:

* Versioning is handled by Hatch
* Builds and publishing are handled by Hatch
* Environments are defined in Hatch configuration

---

## Manage Dependencies with uv

Use uv for all dependency operations: adding, syncing, and locking.

### Configure Hatch to Use uv

In `pyproject.toml`:

```toml
[tool.hatch.envs.default]
installer = "uv"
```

Hatch manages the environment definition.
uv performs the actual installation.

---

### Add Runtime Dependencies

```bash
uv add requests rich
```

### Add Development Dependencies

```bash
uv add --dev sphinx ruff myst-parser sphinx-autobuild
```

This updates:

* `pyproject.toml`
* `uv.lock`

Commit `uv.lock` to ensure deterministic installs across machines and CI.

Reference:
[https://docs.astral.sh/uv/concepts/projects/](https://docs.astral.sh/uv/concepts/projects/)

---

## Code Quality with Ruff

Ruff consolidates linting and formatting into one fast tool.

### Configure Ruff

Add this to `pyproject.toml`:

```toml
[tool.ruff]
target-version = "py311"
line-length = 120

[tool.ruff.lint]
select = ["E", "F", "I", "B", "UP"]
```

### Run Ruff

```bash
ruff check .
ruff format .
```

Ruff can replace tools such as Flake8, isort, and Black in many projects.

Documentation:
[https://docs.astral.sh/ruff/](https://docs.astral.sh/ruff/)

---

## Documentation with Sphinx

### Initialize Documentation

```bash
mkdir docs
cd docs
sphinx-quickstart
```

Recommended choices:

* Separate source and build directories: yes
* Enable autodoc: yes

Resulting layout:

```text
docs/
├── source/
│   ├── conf.py
│   ├── index.rst
│   └── api.rst
└── build/
```

---

### Configure for a `src/` Layout

In `docs/source/conf.py`:

```python
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "src"))

extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.napoleon",
    "sphinx.ext.autosummary",
    "myst_parser",
]

autosummary_generate = True
```

This enables:

* Automatic API documentation
* Google and NumPy-style docstrings
* Markdown support through MyST

References:

* Sphinx: [https://www.sphinx-doc.org/](https://www.sphinx-doc.org/)
* MyST Parser: [https://myst-parser.readthedocs.io/](https://myst-parser.readthedocs.io/)

---

## Manage Documentation Tasks with Hatch

Define a dedicated docs environment.

```toml
[tool.hatch.envs.docs]
dependencies = [
  "sphinx",
  "myst-parser",
]

[tool.hatch.envs.docs.scripts]
build = "sphinx-build -b html docs/source docs/build"
serve = "sphinx-autobuild docs/source docs/build"
```

### Build Documentation

```bash
hatch run docs:build
```

### Live Preview

```bash
hatch run docs:serve
```

---

## Recommended Daily Workflow

```bash
# Create environments
hatch env create

# Sync dependencies
uv sync

# Lint and format
ruff check .
ruff format .

# Run tests
hatch run pytest

# Build documentation
hatch run docs:build
```

Hatch orchestrates tasks.
uv keeps dependencies fast and consistent.

---

## Example CI Configuration (GitHub Actions)

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: astral-sh/setup-uv@v3
      - run: pipx install hatch
      - run: hatch run ruff check .
      - run: hatch run docs:build
```

Action reference:
[https://github.com/astral-sh/setup-uv](https://github.com/astral-sh/setup-uv)

---

## Recommended Practices

1. Treat Hatch as the single project authority
2. Use uv for all dependency changes
3. Commit `uv.lock`
4. Run Ruff locally and in CI
5. Maintain documentation as a first-class artifact

---

## Final Thoughts

This stack promotes clarity and performance:

* **Hatch** manages the project lifecycle
* **uv** ensures fast, deterministic dependency handling
* **Sphinx** produces structured documentation
* **Ruff** maintains code quality

The result is a modern Python workflow that scales well across teams and environments.

Further reading:

* Hatch: [https://hatch.pypa.io/latest/](https://hatch.pypa.io/latest/)
* uv: [https://docs.astral.sh/uv/](https://docs.astral.sh/uv/)
* Sphinx: [https://www.sphinx-doc.org/](https://www.sphinx-doc.org/)
* Ruff: [https://docs.astral.sh/ruff/](https://docs.astral.sh/ruff/)
