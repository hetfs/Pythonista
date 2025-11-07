---
id: 01-intro-REPL
title: 🧭 Interactive Python mode
sidebar_position: 1
description: Learn Python interactively with instant feedback using the REPL—perfect for beginners who want to build confidence and understand core concepts through hands-on practice.
---

# 🐍 Interactive python

Welcome to the easiest way to start learning Python!
This guide helps **absolute beginners** begin coding from day one.
You will use Python’s interactive environment called the **REPL**, short for **Read–Eval–Print–Loop**.

Think of it as your personal coding playground: type code, see results right away, and learn through discovery.

:::success Why use the REPL?
**Instant feedback** helps you learn faster.
You’ll see what works, fix what doesn’t, and build confidence as you go.
:::

---

## 🚀 Start the REPL

When you run the `python` command without a script, it opens the REPL.
This mode lets you type code line by line and view the results instantly.

### How it works

```text
1. READ   → Python reads your input
2. EVAL   → It executes your code
3. PRINT  → It shows the result
4. LOOP   → It waits for your next command
````

It feels like chatting with Python—you type and it responds.

### Steps to open the REPL

1. Open your **Terminal** (macOS/Linux) or **Command Prompt** (Windows).
2. Type one of the following and press **Enter**:

```bash
python
# or
python3
```

If Python runs correctly, you’ll see something like this:

```text
Python 3.14.0 (main, Oct 21 2025, 10:13:52) [GCC 15.2.1 20250813] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

That `>>>` means Python stands ready for your commands.

---

## 🖥️ Try a graphical version

If you prefer a windowed tool instead of the terminal, try one of these:

* **IDLE**: (Integrated Development and Learning Environment) included with Python.
  Launch it with:

  ```bash
  python3 -m idlelib
  ```

* [Install IPython](https://ipython.org/install.html) an advanced REPL with syntax highlighting, tab completion, and extra commands.

* [Install Jupyter](https://jupyter.org/install) Notebook combines code, text, and visuals for interactive learning.

---

## ✨ Your first python commands

At the `>>>` prompt, type these and press **Enter**:

```python
>>> print("Hello, World!")
Hello, World!

>>> 5 + 3
8

>>> "Python" * 3
'PythonPythonPython'

>>> len("hello")
5
```

🎉 **Nice work!** You just ran your first Python code.

---

## 💬 Write comments

Comments explain what code does, and Python skips them during running time.

### Single-line comments

Use `#` for short notes:

```python
>>> # This is a comment
>>> 2 + 2  # Adds two numbers
4
```

### Multi-line notes

Python lacks built-in multi-line comments,
but you can use triple quotes `'''` or `"""` for longer notes:

```python
>>> """
... This is a multi-line note.
... Python displays it as text but does not run it.
... """
'\nThis is a multi-line note.\nPython displays it as text but does not run it.\n'
```

---

## 🧹 Clear your screen

If the REPL looks crowded, clear it with:

```python
>>> import os
>>> os.system('cls' if os.name == 'nt' else 'clear')
```

Or create a helper function:

```python
>>> def clear():
...     import os
...     os.system('cls' if os.name == 'nt' else 'clear')
...
>>> clear()
```

---

## 🦸 REPL features to know

| Feature         | Shortcut / Command       | Description                         |
| --------------- | ------------------------ | ----------------------------------- |
| Command history | ↑ / ↓                    | Recall or edit previous commands    |
| Autocomplete    | Tab                      | Complete variable or function names |
| Help            | `help()` or `help(name)` | View documentation directly         |
| Last result     | `_`                      | Reuse the last printed value        |
| Inspect objects | `type(obj)` / `dir(obj)` | Check data types and methods        |

### Example

```python
>>> 5 + 3
8
>>> _ * 2
16
>>> name = "Python"
>>> type(name)
<class 'str'>
>>> dir(name)
['capitalize', 'upper', 'lower', ...]
```

---

## 🧠 Practice time

Try these exercises in your REPL:

### Numbers

```python
>>> (10 + 5) * 2
30
>>> 2 ** 8  # Power of 2
256
```

### Strings

```python
>>> greeting = "Hello"
>>> name = "Python Learner"
>>> greeting + " " + name
'Hello Python Learner'
>>> "🎉" * 3
'🎉🎉🎉'
```

### Lists

```python
>>> numbers = [1, 2, 3, 4]
>>> type(numbers)
<class 'list'>
>>> dir(numbers)
['append', 'pop', 'sort', ...]
>>> numbers.append(5)
>>> numbers
[1, 2, 3, 4, 5]
```

---

## 📋 Quick reference

| Platform    | Clear screen command                               |
| ----------- | -------------------------------------------------- |
| Windows     | `os.system('cls')`                                 |
| macOS/Linux | `os.system('clear')`                               |
| All systems | `os.system('cls' if os.name == 'nt' else 'clear')` |

---

:::success Pro tip
**Type, don’t copy.**
Typing code builds memory and confidence faster than copying it.
:::

---

<div align="center">

## 🚀 Your turn

1. Open your REPL.
2. Try every example listed earlier.
3. Create three new expressions on your own.
4. Use at least two features (Tab, `help()`, or `_`).
5. Clear your screen when finished.

🎯 **Welcome to Python programming you’ve got this!**

</div>

---

## 📚 Helpful links

* [Official Python interpreter docs](https://docs.python.org/3/tutorial/interpreter.html)
* [IPython interactive tutorial](https://ipython.readthedocs.io/en/stable/interactive/tutorial.html)
