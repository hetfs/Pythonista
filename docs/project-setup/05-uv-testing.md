---
id: 05-uvtesting
title: Testing with uv
sidebar_position: 5
description: Learn how to run fast, isolated, and reproducible tests using uv and pytest.
---

# Running Tests with `uv`

`uv` streamlines Python testing by handling virtual environments and dependency resolution automatically.
You run tests directly through `uv` without manually activating environments or worrying about dependency drift.

This guide walks through configuring and running tests with **pytest** using `uv`.

---

## Prerequisites

Make sure your project includes:

- A `pyproject.toml` file
- `uv` installed on your system

[Installation guide](https://docs.astral.sh/uv/getting-started/installation/)

---

## 1. Add Testing Dependencies

Install `pytest` as a development dependency:

```bash
uv add --dev pytest
````

This command:

- Adds `pytest` to `pyproject.toml` under development dependencies
- Updates `uv.lock`
- Installs dependencies into the project environment

---

## 2. Create a Simple Module to Test

Create a basic calculator module at `src/my_project/calculator.py`:

```python
def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

---

## 3. Create Test Files

Create a `tests/` directory at the project root if it does not exist.
Then add `tests/test_calculator.py`:

```python
import pytest
from my_project.calculator import add, subtract, multiply, divide


def test_add():
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
    assert add(-1, -1) == -2


def test_subtract():
    assert subtract(3, 2) == 1
    assert subtract(2, 3) == -1
    assert subtract(0, 0) == 0


def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(-2, 3) == -6
    assert multiply(-2, -3) == 6


def test_divide():
    assert divide(6, 3) == 2
    assert divide(6, -3) == -2
    assert divide(-6, -3) == 2


def test_divide_by_zero():
    with pytest.raises(ValueError):
        divide(5, 0)
```

---

## 4. Verify Project Structure

A typical layout looks like this:

```text
my_project/
├── src/
│   └── my_project/
│       ├── __init__.py
│       └── calculator.py
├── tests/
│   ├── __init__.py
│   └── test_calculator.py
├── pyproject.toml
└── uv.lock
```

`pytest` automatically discovers files prefixed with `test_`.

---

## 5. Run Tests with `uv run`

Execute the full test suite:

```bash
uv run pytest
```

What happens behind the scenes:

- `uv` creates or reuses a virtual environment
- Dependencies are resolved from `uv.lock`
- Tests run in a clean, isolated environment

No manual activation is required.

For verbose output:

```bash
uv run pytest -v
```

---

## 6. Run Tests with Additional Options

Quiet mode:

```bash
uv run pytest -q
```

Run a specific test file:

```bash
uv run pytest tests/test_calculator.py
```

Run a specific test function:

```bash
uv run pytest tests/test_calculator.py::test_add
```

---

## 7. Enforce Locked Dependencies

To ensure tests run only with locked dependency versions:

```bash
uv sync --locked
uv run pytest
```

This is strongly recommended for CI environments.

---

## 8. Run Tests with Temporary Dependencies

Run tests with one-off tools without adding them permanently:

```bash
uv run --with pytest pytest
```

This is useful for quick validation or experimentation.

---

## 9. Add Test Coverage

Install coverage support:

```bash
uv add --dev pytest-cov
```

Run tests with coverage:

```bash
uv run pytest --cov=my_project
```

For a detailed report:

```bash
uv run pytest --cov=my_project --cov-report=term-missing
```

---

## 10. Configure pytest in `pyproject.toml`

You can configure pytest directly in `pyproject.toml`:

```toml
[tool.pytest.ini_options]
minversion = "7.0"
addopts = "--maxfail=1 --cov=my_project"
testpaths = ["tests"]
```

With this configuration:

- `--maxfail=1` stops after the first failure
- `--cov=my_project` generates coverage reports automatically

Re-running `uv run pytest` will apply these options by default.

---

## 11. Run Tests in CI

Example GitHub Actions workflow:

```yaml
- name: Install uv
  uses: astral-sh/setup-uv@v1

- name: Sync dependencies
  run: uv sync --locked

- name: Run tests
  run: uv run pytest
```

GitHub Actions documentation:
[https://docs.github.com/en/actions](https://docs.github.com/en/actions)

---

## Best Practices

- Always commit `uv.lock`
- Use `uv sync --locked` in CI
- Keep test tools in development dependencies
- Prefer `uv run` over manual environment activation

---

## Summary

Using `uv` for testing provides:

- Fast dependency resolution
- Isolated, reproducible environments
- Clean, one-command workflows
- CI-friendly and deterministic test runs

With `uv`, testing becomes simple, reliable, and scalable. 🧪⚡
