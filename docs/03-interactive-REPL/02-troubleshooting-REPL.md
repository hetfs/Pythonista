---
id: 02-troubleshooting-REPL
title: 🧯 Troubleshooting REPL errors
sidebar_position: 2
description: Learn how to identify, understand, and fix common Python REPL errors with clear explanations and examples to improve your debugging confidence.
---

# 🧯 Troubleshooting REPL errors

Even the best Python learners encounter issues when using the REPL.
This guide helps you recognize, understand, and fix the most common Python REPL errors.

---

## 🧩 Understanding Python error messages

When you run code in the REPL, Python stops when it encounters an error.
Each message includes the type of problem, the exact location, and a short explanation.

Example:

```python
>>> print("Hello"
SyntaxError: unexpected EOF while parsing
````

Python expected a closing parenthesis but reached the end of the line.
Understanding the message helps you identify and correct the issue.

---

## ⚠️ Common REPL errors and how to fix them

### 🔤 Broken code structure

This error appears when the syntax of your code is incorrect.
Python can’t read what you typed, so it raises a `SyntaxError`.

**Example:**

```python
>>> if True print("Hello")
SyntaxError: invalid syntax
```

**Fix:** Add the missing colon.

```python
>>> if True:
...     print("Hello")
Hello
```

---

### 📛 Unknown name

This happens when Python can’t find a variable or function name.

**Example:**

```python
>>> print(message)
NameError: name 'message' is not defined
```

**Fix:** Define the variable first.

```python
>>> message = "Hello"
>>> print(message)
Hello
```

---

### 📐 Wrong spacing

Python depends on indentation to define code blocks.
Incorrect indentation leads to `IndentationError`.

**Example:**

```python
>>> if True:
print("Hello")
IndentationError: expected an indented block
```

**Fix:** Indent the line correctly.

```python
>>> if True:
...     print("Hello")
Hello
```

---

### 🔄 Incompatible types

This error occurs when you combine values of different data types that can’t work together.

**Example:**

```python
>>> "Age: " + 30
TypeError: can only concatenate str (not "int") to str
```

**Fix:** Convert the number to a string.

```python
>>> "Age: " + str(30)
'Age: 30'
```

---

### 🔢 Wrong value for the operation

Python raises a `ValueError` when an operation receives an invalid argument.

**Example:**

```python
>>> int("abc")
ValueError: invalid literal for int() with base 10: 'abc'
```

**Fix:** Use valid input that Python can convert.

```python
>>> int("123")
123
```

---

### ➗ Division by zero

This happens when a number divides by zero.
Python doesn’t allow division by zero.

**Example:**

```python
>>> 10 / 0
ZeroDivisionError: division by zero
```

**Fix:** Add a condition to check before dividing.

```python
>>> x = 10
>>> y = 0
>>> if y != 0:
...     print(x / y)
... else:
...     print("Cannot divide by zero.")
Cannot divide by zero.
```

---

### ⏹️ You stopped the program

If you press `Ctrl + C` in the REPL, you interrupt execution manually.
Python shows a `KeyboardInterrupt`.

**Example:**

```python
>>> while True:
...     print("Running...")
KeyboardInterrupt
```

**Fix:** This isn’t a real error. You just stopped the loop.

---

### 📦 Missing method

You’ll see this if you try to use a method that doesn’t exist for an object.

**Example:**

```python
>>> 42.append(5)
AttributeError: 'int' object has no attribute 'append'
```

**Fix:** Check the available methods using `dir()`.

```python
>>> dir(42)
```

---

### 🗂️ Missing package

When Python can’t find a module, it raises an `ImportError` or `ModuleNotFoundError`.

**Example:**

```python
>>> import my_fake_package
ModuleNotFoundError: No module named 'my_fake_package'
```

**Fix:** Install the missing package.

```bash
pip install package_name
```

Or ensure the module exists in your working directory.

---

## 🧪 REPL practice: Fix these errors

Try these exercises to strengthen your debugging skills.

### Exercise 1: Syntax error

Find and fix the mistake.

```python
print("Hello"
```

### Exercise 2: Type error

```python
"Score: " + 99
```

### Exercise 3: Name error

```python
print(greeting)
```

### Exercise 4: Math error

```python
10 / 0
```

---

## 🛠️ REPL debugging tools

Use these built-in commands to explore and troubleshoot:

| Tool            | Command                                   | Purpose                   |
| --------------- | ----------------------------------------- | ------------------------- |
| Help            | `help(object)`                            | Displays documentation    |
| Type            | `type(value)`                             | Shows the data type       |
| Dir             | `dir(object)`                             | Lists available methods   |
| Print traceback | `import traceback; traceback.print_exc()` | Shows detailed error info |

---

## 🎯 Error resolution checklist

Before asking for help, check the following:

* Did you close all parentheses and quotes?
* Are variable names spelled correctly?
* Are you using consistent indentation?
* Are the data types compatible?
* Did you import all necessary modules?

---

## 🧠 Learning from mistakes

Every error helps you understand Python better.
Try to read the message carefully, think about what it means, and then correct the issue.
Debugging is a skill that improves with consistent practice.

---

## 🚀 Your troubleshooting mission

1. Open the Python REPL.
2. Recreate at least two errors listed above.
3. Fix them step by step.
4. Type, test, and observe each correction.
5. Celebrate small wins you’re becoming a better debugger!

---

### 📚 Helpful links

* [Python built-in exceptions](https://docs.python.org/3/library/exceptions.html)
* [Official Python tutorial on errors](https://docs.python.org/3/tutorial/errors.html)
