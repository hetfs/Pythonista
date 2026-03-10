# Hatch Quick Reference

A concise, well-structured reference for working efficiently with **Hatch**, the modern Python project manager.

---

## 1. Overview

**Hatch** is a modern, extensible Python project manager that brings together:

- Project scaffolding
- Virtual environment management
- Dependency resolution
- Build and publishing workflows

It is designed to support both local development and CI/CD pipelines with minimal configuration.

---

## 2. Installation

Install Hatch using either `pip` or `pipx`:

```bash
pip install hatch
# or
pipx install hatch
````

Using `pipx` is recommended for isolating Hatch from project dependencies.

---

## 3. Project Lifecycle Management

### 3.1 Create a New Project

```bash
hatch new <project-name>            # Interactive project creation
hatch new --basic <project-name>    # Minimal structure
hatch new --cli <project-name>      # CLI application
hatch new --lib <project-name>      # Library package
hatch new -t custom <project-name>  # Custom template
```

### 3.2 Initialize an Existing Project

```bash
hatch init                          # Interactive initialization
hatch init --force                  # Overwrite existing configuration
```

---

## 4. Environment Management

### 4.1 Inspect Environments

```bash
hatch env show                      # List all environments
hatch env find <env-name>           # Show environment path
```

### 4.2 Create Environments

```bash
hatch env create <env-name>         # Create from configuration
hatch env create -p 3.11 <env-name> # Specify Python version
hatch env create --force <env-name> # Overwrite existing environment
```

### 4.3 Remove and Clean Environments

```bash
hatch env remove <env-name>         # Remove an environment
hatch env prune                     # Remove unused environments
```

### 4.4 Run Commands in Environments

```bash
hatch run <command>                 # Run in default environment
hatch run +e <env-name> <command>   # Run in a specific environment
```

---

## 5. Dependency Management

### 5.1 Add Dependencies

```bash
hatch add <package>                 # Add to default environment
hatch add --dev <package>           # Add as development dependency
hatch add -e <env-name> <package>   # Add to a specific environment
hatch add -p <python-version> <package> # Platform-specific dependency
```

### 5.2 Remove Dependencies

```bash
hatch remove <package>              # Remove from default environment
hatch remove -e <env-name> <package># Remove from specific environment
```

### 5.3 Synchronize Dependencies

```bash
hatch dep sync                      # Sync default environment
hatch dep sync -e <env-name>        # Sync specific environment
hatch dep sync --all                # Sync all environments
```

---

## 6. Scripts and Task Execution

### 6.1 Run Built-In Scripts

```bash
hatch run test
hatch run lint
hatch run format
hatch run build
hatch run version
```

### 6.2 Define Custom Scripts

Configure reusable commands in `pyproject.toml`:

```toml
[tool.hatch.envs.default.scripts]
test = "pytest"
cov = "pytest --cov=src"
lint = "ruff check ."
```

---

## 7. Build and Release Management

### 7.1 Build Artifacts

```bash
hatch build                         # Build sdist and wheel
hatch build -t sdist                # Source distribution only
hatch build -t wheel                # Wheel only
hatch build --clean                 # Clean before building
```

### 7.2 Version Management

```bash
hatch version                       # Show current version
hatch version <new-version>         # Set explicit version
hatch version major|minor|patch     # Increment version
```

### 7.3 Publish Packages

```bash
hatch publish                       # Build and publish
hatch publish -r testpypi           # Publish to Test PyPI
hatch publish --repo <url>          # Custom repository
```

---

## 8. Configuration

### 8.1 Common `pyproject.toml` Sections

```toml
[project]
name = "package-name"
version = "0.1.0"
dependencies = ["requests>=2.25"]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.envs.default]
dependencies = ["pytest", "black"]
scripts = { test = "pytest" }

[tool.hatch.envs.lint]
dependencies = ["ruff", "mypy"]
scripts = { check = "ruff check ." }

[tool.hatch.build.targets.wheel]
packages = ["src/mypackage"]
```

### 8.2 Inspect and Modify Configuration

```bash
hatch config show
hatch config set <key> <value>
hatch config unset <key>
```

---

## 9. Shell Integration

```bash
hatch shell                         # Enter default environment
hatch shell <env-name>              # Enter specific environment
hatch shell -p <python-version>     # Temporary Python version shell
```

---

## 10. Testing and Quality Assurance

### 10.1 Test Matrix Execution

```bash
hatch run test:all                  # Run all test environments
hatch run test:py311                # Run specific Python version
```

### 10.2 Coverage Reporting

```bash
hatch run cov
hatch run cov:report
```

---

## 11. Plugin Management

```bash
hatch plugin list                   # List installed plugins
hatch plugin install <plugin-name>  # Install a plugin
hatch plugin remove <plugin-name>   # Remove a plugin
```

---

## 12. Common Workflows

### 12.1 Local Development

```bash
hatch new myproject
cd myproject
hatch env create dev
hatch add -e dev pytest
hatch run test
hatch run lint
```

### 12.2 CI/CD Pipeline

```bash
hatch dep sync --all
hatch run test:all
hatch build
hatch publish
```

### 12.3 Multi-Python Testing

```toml
[tool.hatch.envs]
default = { dependencies = [...] }
test-py311 = { python = "3.11" }
test-py310 = { python = "3.10" }
test-py39  = { python = "3.9" }
```

---

## 13. Productivity Tips

1. Use **matrix expansion** for combinatorial testing
2. Leverage **environment inheritance** to reduce duplication
3. Apply **dependency markers** for conditional installs
4. Implement **custom build hooks** for advanced workflows
5. Use template variables (`{{ }}`) in custom project templates

---

## 14. Troubleshooting and Maintenance

### Reset an Environment

```bash
hatch env remove <env-name>
hatch env create <env-name>
```

### Clean Artifacts and Cache

```bash
hatch clean
```

### Debug with Verbose Output

```bash
hatch -v <command>
HATCH_VERBOSE=3 hatch <command>
```

---

## 15. Help and Documentation

```bash
hatch --help
hatch <command> --help
hatch docs
```

Official documentation:
[https://hatch.pypa.io/](https://hatch.pypa.io/)

---

*This reference applies to Hatch 1.9 and newer. Always verify your version with `hatch --version` and consult the official documentation for updates.*

```
```
