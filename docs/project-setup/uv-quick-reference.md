# uv Quick Reference

A streamlined reference for commonly used **uv** commands, organized by workflow.
For full and up-to-date documentation, [see](https://docs.astral.sh/uv/)

---

## Project Creation

Initialize and scaffold Python projects with minimal setup.

| Command | Description |
|--------|-------------|
| `uv init` | Initialize a new project in the current directory |
| `uv init myproject` | Create a new project directory |
| `uv init --package` | Initialize a Python package |
| `uv init --app` | Create an application-style project |
| `uv init --lib` | Create a library-style project |
| `uv init --script` | Create a single-file script with inline metadata |
| `uv init --bare` | Generate only a `pyproject.toml` |
| `uv init --python 3.12` | Set the project Python version |

---

## Dependency Management

Manage production and development dependencies declaratively.

| Command | Description |
|--------|-------------|
| `uv add requests` | Add a production dependency |
| `uv add --dev pytest` | Add a development dependency |
| `uv add -r requirements.txt` | Import dependencies from a requirements file |
| `uv remove requests` | Remove a dependency |
| `uv lock` | Generate or update `uv.lock` |
| `uv lock --upgrade` | Upgrade all dependencies |
| `uv sync` | Sync environment with the lockfile |
| `uv sync --locked` | Enforce exact locked versions |
| `uv tree` | Display dependency tree |

Migration guide:
`./05-uv-migration.md`

---

## Script Management

Work with single-file scripts using managed environments.

| Command | Description |
|--------|-------------|
| `uv init --script myscript.py` | Create a script with inline metadata |
| `uv add --script myscript.py click` | Add script-specific dependencies |
| `uv run myscript.py` | Run the script in an isolated environment |
| `uv run --with requests myscript.py` | Run with temporary dependencies |

---

## Tool Management

Install and execute developer tools cleanly and globally.

| Command | Description |
|--------|-------------|
| `uvx pytest` | Run a tool in an ephemeral environment |
| `uv tool install ruff` | Install a tool globally |
| `uv tool list` | List installed tools |
| `uv tool upgrade ruff` | Upgrade a specific tool |
| `uv tool upgrade --all` | Upgrade all installed tools |

---

## Python Version Management

Install, pin, and switch Python versions seamlessly.

| Command | Description |
|--------|-------------|
| `uv python list` | List available Python versions |
| `uv python install 3.12` | Install a specific Python version |
| `uv python pin 3.12` | Pin the project Python version |
| `uv run --python 3.12 python` | Run a command with a specific Python |

---

## Building and Publishing

Package and publish Python projects.

| Command | Description |
|--------|-------------|
| `uv build` | Build source and wheel distributions |
| `uv publish` | Publish to PyPI |
| `uv publish --publish-url https://test.pypi.org/legacy/` | Publish to TestPyPI |

[Building and publishing](https://docs.astral.sh/uv/guides/package/)

---

## Version Management

Manage project versions directly from the CLI.

| Command | Description |
|--------|-------------|
| `uv version` | Show current project version |
| `uv version --bump patch` | Increment patch version |
| `uv version --bump minor` | Increment minor version |
| `uv version --bump major` | Increment major version |

---

## Virtual Environments

Create and manage virtual environments explicitly when needed.

| Command | Description |
|--------|-------------|
| `uv venv` | Create a virtual environment |
| `uv venv --python 3.12` | Create with a specific Python version |

 Creating a [virtual environment](https://docs.astral.sh/uv/pip/environments/)

---

## Utility Commands

General maintenance and inspection commands.

| Command | Description |
|--------|-------------|
| `uv --help` | Show global help |
| `uv help sync` | Command-specific help |
| `uv self update` | Update uv |
| `uv cache clean` | Clear package cache |

---

## Common Workflows

### New Project Setup

```bash
uv init my_project
cd my_project
uv add requests pandas
uv add --dev pytest ruff
uv sync
uv run python main.py
uv run pytest -v
````

Testing guide:
`./05-uv-testing.md`

### Quick Script Development

```bash
uv init --script analyze.py
uv add --script analyze.py pandas matplotlib
uv run analyze.py
```

### Multi-Python Testing

```bash
uv sync
uv run --python 3.11 pytest
uv run --python 3.12 pytest
```

---

## Environment Variables

Configure uv behavior using environment variables.

| Variable                | Description                  |
| ----------------------- | ---------------------------- |
| `UV_CACHE_DIR`          | Override cache directory     |
| `UV_PYTHON_INSTALL_DIR` | Set Python installation path |
| `UV_INDEX_URL`          | Default package index        |
| `UV_HTTP_TIMEOUT`       | HTTP timeout in seconds      |
| `UV_SSL_NO_VERIFY`      | Disable SSL verification     |

[Environment variables](https://docs.astral.sh/uv/reference/environment/)

---

## Tips and Shortcuts

1. **Temporary dependencies**

   ```bash
   uv run --with pandas myscript.py
   ```

2. **Explicit Python selection**

   ```bash
   uv add --python 3.12 requests
   ```

3. **Strict dependency enforcement**

   ```bash
   uv sync --locked
   ```

4. **Quick tool checks**

   ```bash
   uvx --with black black --check .
   ```

5. **Cache management**

   ```bash
   uv cache clean --all
   uv cache dir
   ```

6. **Project inspection**

   ```bash
   uv tree --all
   uv show
   ```

---

*Last reviewed for uv 0.4.x. Always verify with `uv --version` as commands may evolve.*
