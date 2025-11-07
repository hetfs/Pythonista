---
id: 05-expressions-REPL
title: ✏️ Expressions in Python
sidebar_position: 5
description: Learn how Python expressions combine values, variables, and operators to produce results—the foundation of all computations. Perfect for REPL practice!
---

# ✏️ Expressions in Python

Expressions are the **heart of Python code**. Think of them as phrases that Python can **evaluate** to produce a result. Any time you perform a calculation, compare values, or call a function, you are writing an expression.

:::tip 💡 REPL Advantage
The Python REPL (interactive shell) is made for exploring expressions.
Type an expression and press **Enter** you’ll see the result instantly!
:::

---

## 🧠 What exactly is an expression?

An expression is any valid combination of **values**, **variables**, **operators**, or **function calls** that produces a value.

Try these examples in your REPL:

```python
>>> 3 + 4                    # Simple arithmetic → 7
7
>>> "hello".upper()          # Method call → 'HELLO'
'HELLO'
>>> len([1, 2, 3])           # Function call → 3
3
````

Even an assignment contains smaller expressions:

```python
>>> result = 3 * (2 + 1)
>>> result
9
```

Here’s what Python does:

1. It evaluates `(2 + 1)` → `3`
2. Then computes `3 * 3` → `9`
3. Finally, stores the value `9` in the variable `result`

---

## 🎯 Common types of expressions

### 1. Arithmetic expressions

Used for math operations:

```python
>>> 10 + 3 * 2       # Multiplication first → 16
16
>>> 15 / 3           # Division → 5.0
5.0
>>> 17 % 5           # Remainder → 2
2
```

### 2. String expressions

Used for combining or repeating text:

```python
>>> "Hello, " + "world!"   # Join strings
'Hello, world!'
>>> "Python! " * 3         # Repeat string
'Python! Python! Python! '
>>> len("hello")           # String length → 5
5
```

### 3. Comparison expressions

Used to compare values. The result is `True` or `False`.

```python
>>> 5 < 10
True
>>> 5 == 10
False
>>> "a" != "b"
True
```

### 4. Logical expressions

Used to combine or invert Boolean values.

```python
>>> True and False     # Both must be True
False
>>> True or False      # Either can be True
True
>>> not True           # Invert the value
False
```

### 5. Membership expressions

Used to check if a value exists in a list, string, or other collection.

```python
>>> letters = ['a', 'b', 'c']
>>> 'a' in letters
True
>>> 'z' not in letters
True
```

### 6. Identity expressions

Used to check if two variables point to the same object in memory.

```python
>>> x = [1, 2]
>>> y = x
>>> z = [1, 2]
>>> x is y
True
>>> x is z
False
```

---

## 💡 Expression vs. statement

A **statement** performs an action.
An **expression** produces a value.

| Type       | Example       | What it does                     |
| ---------- | ------------- | -------------------------------- |
| Expression | `2 + 2`       | Produces 4                       |
| Statement  | `x = 2 + 2`   | Stores 4 in `x`                  |
| Expression | `print("hi")` | Displays text and returns `None` |

**REPL tip:** The REPL automatically prints expression results, but it stays silent for statements like assignments.

---

## 🔍 Dynamic evaluation with `eval()`

You can turn a string into an expression and evaluate it using `eval()`.

```python
>>> expr = "3 * (4 + 2)"
>>> result = eval(expr)
>>> result
18
```

:::danger ⚠️ Security warning
Never use `eval()` with untrusted input—it can execute harmful code. Use it only for learning or controlled situations.
:::

---

## 🧩 Building complex expressions

You can combine multiple expressions to make more powerful ones.

```python
>>> a, b, x, y = 5, 3, 10, 2
>>> total = (a + b) * (x - y) / 2
>>> total
32.0
```

Python follows **operator precedence** (like PEMDAS in math):
Parentheses first, then multiplication and division, then addition and subtraction.

---

## 🧪 Practice in your REPL

Try these examples yourself and modify the values.

### 🔢 Math combinations

```python
>>> (10 + 5) * 2 / 3
10.0
>>> 2 ** 3 + 4 % 3
9
```

### 📊 Comparison chains

```python
>>> age = 20
>>> 18 <= age <= 65
True

>>> name = "Alice"
>>> len(name) > 3 and name[0] == 'A'
True
```

### 🎯 String manipulation

```python
>>> greeting = "hello"
>>> greeting.upper() + "!" * 3
'HELLO!!!'

>>> "cat" in "concatenate"
True
```

---

## 📘 Key takeaways

Expressions are the **engine of all Python programs**. They:

* Combine values, variables, and operators
* Always produce a result
* Can be simple or deeply nested
* Drive every calculation and function call

:::success ✅ Pro Tip
In the REPL, test complex expressions by breaking them into smaller parts.
It helps you understand how Python evaluates each step.
:::

---

<div align="center">

## 🚀 Your turn to experiment

1. Type each example above in your REPL.
2. Create three original expressions using different operators.
3. Combine two expression types (like math and comparison).

**The more you type and test, the faster you’ll master expressions!**

</div>
