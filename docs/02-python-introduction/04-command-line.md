---
id: 04-command-line-options
title: Command-Line Options
sidebar_position: 5
description: Learn essential Python command-line options for efficient development, debugging, and system administration.
---

# 🐍 Python Command-Line Options

Python's command-line interface offers **powerful options** beyond simple script execution. Mastering these flags can **streamline development, debugging, and deployment**.

This guide covers the most essential command-line options every Python developer should know.

---

## 🔑 Essential Command-Line Options

### 🔍 `-h` / `--help` Built-in Reference

**Use Cases**

* Quickly reference forgotten flags
* Discover new functionality
* Access module-specific help (e.g., `python -m pip --help`)

**Examples**

```bash
# Basic help
python3 -h

# Paged output for better readability
python3 -h | less # or with cat , bat

# Module-specific help
python3 -m pip --help
```

---

### 💻 `-c "<code>"` Execute Inline Code

**Practical Applications**

* Rapid calculations and data transformations
* System administration tasks
* Testing small code snippets

### **Platform-Specific Syntax**

#### Linux / macOS

```bash
# Single statement
python3 -c 'print(2**10)'

# Multiple statements
python3 -c 'import os; print(f"User: {os.getlogin()}")'

# Multi-line block (recommended: here-doc)
python3 << 'EOF'
for i in range(3):
    print(f"Iteration: {i}")
EOF

# Multi-line block (compact one-liner using -c)
python3 -c $'for i in range(3):\n    print(f"Iteration: {i}")'
```

#### Windows PowerShell

```powershell
# Single statement
python -c "print(2**10)"

# Multiple statements
python -c "import os; print(f'User: {os.getlogin()}')"

# Multi-line block (using backticks for line continuation)
python -c "for i in range(3):`n    print(f'Iteration: {i}')"

# Multi-line block (recommended: PowerShell here-string)
python - << 'PYTHON'
for i in range(3):
    print(f"Iteration: {i}")
PYTHON
```

**Notes:**

* Linux/macOS: Use single quotes or here-docs for multi-line scripts.
* PowerShell: Double quotes are normal; use backticks (`\``) for line continuation in `-c`.
* Here-strings in PowerShell (`<< 'PYTHON'`) are the cleanest way to write multi-line scripts.
* Avoid mixing shell quoting styles—stick to platform conventions.

---

## 📦 `-m <module>` Run Modules as Scripts

**Critical Use Cases**

### Development Servers

```bash
# Simple HTTP server
python3 -m http.server 8080

# Local documentation server
python3 -m pydoc -p 8080
```

### Package Management

```bash
# Environment-safe package installation
python3 -m pip install requests

# Virtual environment creation
python3 -m venv myproject_env
```

### Development Tools

```bash
# Code formatting
python3 -m black script.py

# Testing
python3 -m pytest

# Linting
python3 -m pylint script.py
```

### Data Processing

```bash
# JSON formatting
echo '{"name": "Alice", "age": 30}' | python3 -m json.tool

# Base64 encoding
echo "data" | python3 -m base64
```

---

### 🐛 `-i` Interactive Debugging Mode

**Example Script**

```python
# script.py
database_url = "postgresql://localhost:5432"
cache_timeout = 3600
user_count = 150

def calculate_metrics():
    return user_count * cache_timeout
```

```bash
# Run with interactive mode
python3 -i script.py
```

```python
# Explore post-execution
>>> print(f"Database: {database_url}")
>>> metrics = calculate_metrics()
>>> debug_data = [database_url, user_count, metrics]
```

**Use Cases**

* Post-mortem debugging
* Interactive function testing
* Data inspection and validation
* Rapid prototyping

---

### 📊 `-V` / `--version` Environment Verification

```bash
python3 --version
# Python 3.11.2

python --version
# Python 3.9.5 (system default)
```

**Importance**

* Verify virtual environment activation
* Ensure compatibility before installing packages
* Debug path and environment issues

---

## 🧹 Prevent Bytecode Files with `-B`

Python usually **creates bytecode files** (`.pyc`) in a folder called `__pycache__`. These files help Python run slightly faster the next time you execute a script.

The `-B` flag tells Python:

> “**Do not create `.pyc` bytecode files.** Just run the script as-is.”

---

### ✅ Why Use `-B`

* **Clean environments:** Avoid leftover `.pyc` files in production or CI/CD pipelines.
* **Troubleshooting:** Prevent Python from using outdated bytecode when scripts behave unexpectedly.
* **Temporary runs:** Keep project folders tidy during development.

---

### 🖥️ Examples

#### Production

```bash
python3 -B production_app.py
```

#### CI/CD Pipelines

```bash
python3 -B -m pytest
python3 -B setup.py install
```

#### Troubleshooting

```bash
python3 -B problematic_script.py
```

#### Development

```bash
python3 -B development_script.py
```

---

### 📊 How Python Handles Bytecode

#### Normal Execution (without `-B`)

```
your_script.py
       │
       ▼
   Python Interpreter
       │
       ▼
 Compiles to bytecode (.pyc)
       │
       ▼
 __pycache__/your_script.cpython-3x.pyc
       │
       ▼
 Executes the compiled bytecode
```

#### Execution with `-B`

```
your_script.py
       │
       ▼
   Python Interpreter
       │
       ▼
 Executes the source code directly
       │
       ▼
No .pyc file is created
```

---

### 💡 Memory Aid

```
-B  →  Bye-bye .pyc!
```

* Think of it as **telling Python**: “Don’t leave any bytecode behind!”
* Easy to remember for beginners and reinforces the purpose of the `-B` flag.

---

### ✅ Summary Table

| Feature                  | Normal Run               | With `-B`                                          |
| ------------------------ | ------------------------ | -------------------------------------------------- |
| Creates `.pyc` files     | ✅                        | ❌                                                  |
| Stores compiled bytecode | **pycache** folder       | None                                               |
| Performance              | Slightly faster next run | Slightly slower (no cache)                         |
| Use cases                | Everyday development     | Production, CI/CD, troubleshooting, clean dev runs |

---

## ⚡ Quick Reference Cheatsheet

### Command Summary

| Option             | Description                   | Example                     |
| ------------------ | ----------------------------- | --------------------------- |
| `-h` / `--help`    | Show help message             | `python3 -h`                |
| `-c "<code>"`      | Execute code string           | `python3 -c "print(2**10)"` |
| `-m <module>`      | Run module as script          | `python3 -m http.server`    |
| `-i`               | Interactive mode after script | `python3 -i script.py`      |
| `-V` / `--version` | Show version                  | `python3 --version`         |
| `-B`               | No bytecode files             | `python3 -B script.py`      |

### Common Patterns

| Scenario             | Command                         |
| -------------------- | ------------------------------- |
| Quick calculation    | `python3 -c "2**8"`             |
| Local file server    | `python3 -m http.server 8000`   |
| Debug session        | `python3 -i debug_me.py`        |
| Safe package install | `python3 -m pip install django` |
| Production run       | `python3 -B app.py`             |

### Pro Tips

**Environment Management**

```bash
python3 -m pip install -r requirements.txt
python3 --version && which python3
```

**Development Workflow**

```bash
python3 -i failing_script.py
python3 -B -m pytest tests/
python3 -m black .
python3 -m pylint src/
```

**Quick Utilities**

```bash
cat data.json | python3 -m json.tool
python3 -m http.server 8080
python3 -m venv venv
source venv/bin/activate
```

---

## ✅ Interactive Checklist: Key Points

* [ ] Use `-m pip` instead of `pip` for environment safety
* [ ] Leverage `-i` for interactive debugging
* [ ] Employ `-B` in production and CI environments
* [ ] Combine options like `-Bi` for advanced workflows
* [ ] Verify Python version with `-V` or `--version`
* [ ] Use `-c` for rapid testing and one-liners

---

## 🚀 Conclusion

Mastering Python's command-line options elevates your workflow from basic script execution to **professional-grade efficiency**. With these tools, you can:

* Prototype quickly (`-c`)
* Execute modules robustly (`-m`)
* Debug interactively (`-i`)
* Maintain clean environments (`-B`, `-V`)

---

## Further Reading

* [Official Python Command Line Documentation](https://docs.python.org/3/using/cmdline.html)

<div align="center">

**Boost productivity across development, testing, and deployment**

</div>
