---
id: 09-booleans
title: Booleans (`bool`)
sidebar_position: 49
description: Learn how Boolean values (`True` and `False`) control logic, comparisons, and condition evaluation in Python.
---

# 🔘 Booleans (`bool`)

Booleans represent **truth values** — the foundation of **decision-making** and **control flow** in Python.
Every `if`, `while`, or comparison ultimately relies on a Boolean value.

---

## 🧩 What Is a Boolean?

Python’s Boolean type, `bool`, has just **two possible values**:

```python
True
False
````

They are actually subclasses of integers:

```python
>>> isinstance(True, int)
True
>>> int(True), int(False)
(1, 0)
```

This means Booleans can behave like numbers in certain operations — but they are mainly used to express **logical truth**.

---

## ⚖️ Comparison Operators

Booleans often come from **comparison expressions** that evaluate to `True` or `False`.

| Operator | Meaning          | Example  | Result  |
| -------- | ---------------- | -------- | ------- |
| `==`     | Equal to         | `5 == 5` | `True`  |
| `!=`     | Not equal to     | `5 != 3` | `True`  |
| `>`      | Greater than     | `10 > 7` | `True`  |
| `<`      | Less than        | `3 < 1`  | `False` |
| `>=`     | Greater or equal | `7 >= 7` | `True`  |
| `<=`     | Less or equal    | `2 <= 5` | `True`  |

```python
>>> a = 10
>>> b = 20
>>> print(a < b)
True
```

---

## 🔍 Logical Operators

Python provides **logical operators** to combine or invert Boolean expressions.

| Operator | Meaning                      | Example          | Result  |
| -------- | ---------------------------- | ---------------- | ------- |
| `and`    | True if both are True        | `True and False` | `False` |
| `or`     | True if at least one is True | `True or False`  | `True`  |
| `not`    | Inverts Boolean value        | `not True`       | `False` |

```python
>>> age = 18
>>> has_id = True

>>> print(age >= 18 and has_id)
True
>>> print(age < 18 or has_id)
True
>>> print(not has_id)
False
```

💡 **Tip:** `and` and `or` return the *actual value* of operands, not strictly `True` or `False`.
Example:

```python
>>> 0 or 5
5
>>> 0 and 5
0
```

---

## 🧠 Truthy and Falsy Values

Not everything in Python is explicitly `True` or `False`,
but **every object has a truth value** when used in conditions.

| Falsy Values              | Description         |
| ------------------------- | ------------------- |
| `False`                   | The Boolean `False` |
| `None`                    | Absence of a value  |
| `0`, `0.0`, `0j`          | Zero numbers        |
| `''`, `[]`, `{}`, `set()` | Empty containers    |
| `range(0)`                | Empty range         |

Everything else is **truthy**.

```python
if []:
    print("This won't run")
else:
    print("Empty list is falsy!")
```

Output:

```
Empty list is falsy!
```

---

## ⚙️ Using Booleans in Conditions

Booleans are the **core of conditional logic**:

```python
is_logged_in = True

if is_logged_in:
    print("Welcome back!")
else:
    print("Please log in.")
```

Or combine logic:

```python
age = 17
has_permission = False

if age >= 18 or has_permission:
    print("Access granted.")
else:
    print("Access denied.")
```

Output:

```
Access denied.
```

---

## 🧮 Boolean Conversion with `bool()`

You can use the built-in `bool()` function to check if something is **truthy** or **falsy**.

```python
>>> bool(0)
False
>>> bool("Python")
True
>>> bool([])
False
```

---

## 🚫 Common Mistakes with Booleans

### ❌ 1. Using `== True` unnecessarily

```python
if is_ready == True:  # redundant
```

✅ Better:

```python
if is_ready:
```

### ❌ 2. Confusing `=` (assignment) with `==` (comparison)

```python
if x = 5:  # ❌ invalid syntax
```

✅ Correct:

```python
if x == 5:
```

### ❌ 3. Forgetting `not` negates truth

```python
if not is_admin:
    print("Restricted area!")
```

---

## 🧩 Summary

| Concept           | Description                   | Example             |
| ----------------- | ----------------------------- | ------------------- |
| Boolean values    | Only `True` or `False`        | `flag = True`       |
| Comparison        | Returns a Boolean             | `x > y`             |
| Logical operators | Combine Booleans              | `a and b`           |
| Truthy/Falsy      | How Python interprets objects | `bool([]) == False` |
| Negation          | Reverse Boolean               | `not True → False`  |

---

## 💡 Quick Recap

Booleans drive **decision-making** in Python programs —
from `if` statements to loops, comparisons, and validations.
Mastering truthy and falsy rules helps you write **cleaner, more Pythonic code**.

---

Would you like me to proceed next with **Page 4 — Lists (`list`)**
(focusing on creation, indexing, slicing, and list comprehensions)?
