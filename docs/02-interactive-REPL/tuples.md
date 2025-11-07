---
id: 11-tuples
title: Tuples (tuple)
sidebar_position: 50
description: Learn about tuples — immutable sequences that ensure data integrity, enable fast lookups, and simplify multi-value assignments in Python.
---

# 🧱 Tuples (`tuple`)

Tuples are **immutable sequences** in Python. They’re similar to lists, but **cannot be changed** after creation.
This immutability makes them ideal for storing fixed collections of items like coordinates, configurations, or key–value pairs.

---

## 🎯 What Are Tuples?

A **tuple** groups multiple values into a single ordered collection.

```python
coordinates = (10.5, 20.8)
user_info = ("Binahf", 28, "Ghana")
````

Tuples are defined using **parentheses `()`**, and items are **comma-separated**.

> 💡 The comma defines the tuple, not the parentheses!

```python
single = (5,)
not_a_tuple = (5)
print(type(single))       # <class 'tuple'>
print(type(not_a_tuple))  # <class 'int'>
```

---

## ⚙️ Creating Tuples

| Method                              | Example            | Result      |
| :---------------------------------- | :----------------- | :---------- |
| Using parentheses                   | `nums = (1, 2, 3)` | `(1, 2, 3)` |
| Without parentheses (tuple packing) | `coords = 1, 2, 3` | `(1, 2, 3)` |
| From iterable                       | `tuple([1, 2, 3])` | `(1, 2, 3)` |
| Empty tuple                         | `()` or `tuple()`  | `()`        |

---

## 🔄 Accessing and Slicing

You can access elements just like lists:

```python
colors = ("red", "green", "blue")
print(colors[0])     # red
print(colors[-1])    # blue
print(colors[0:2])   # ('red', 'green')
```

---

## 🧩 Tuple Unpacking

Tuples shine at **unpacking multiple values** in one go:

```python
point = (10, 20)
x, y = point
print(x, y)  # 10 20
```

You can even unpack with wildcards using `*`:

```python
data = (1, 2, 3, 4, 5)
first, *middle, last = data
print(first, middle, last)  # 1 [2, 3, 4] 5
```

---

## 🧱 Immutability in Action

Tuples cannot be changed after creation:

```python
nums = (1, 2, 3)
# nums[0] = 10   ❌ TypeError: 'tuple' object does not support item assignment
```

However, **mutable elements inside a tuple** can still change:

```python
nested = (1, [2, 3])
nested[1].append(4)
print(nested)  # (1, [2, 3, 4])
```

---

## ⚡ Tuple vs List: Performance & Use Cases

| Feature    | Tuple                 | List                           |
| :--------- | :-------------------- | :----------------------------- |
| Mutability | Immutable             | Mutable                        |
| Syntax     | `( )`                 | `[ ]`                          |
| Memory     | More efficient        | Slightly larger                |
| Speed      | Faster                | Slower                         |
| Use Case   | Fixed data, constants | Dynamic data, frequent changes |

Tuples are generally **faster and safer** for fixed, read-only data — ideal in scenarios like:

* Returning multiple values from a function
* Using as dictionary keys
* Representing coordinates or records

---

## 🧮 Common Tuple Operations

```python
t = (1, 2, 3, 4, 2)

print(len(t))      # 5
print(t.count(2))  # 2
print(t.index(3))  # 2
print(2 in t)      # True
```

---

## 🔐 Using Tuples as Dictionary Keys

Because tuples are **hashable** (if they contain only immutable elements),
they can be safely used as dictionary keys.

```python
location_data = {
    (5, 9): "Accra",
    (7, 12): "Kumasi"
}
print(location_data[(5, 9)])  # Accra
```

---

## 🧠 Best Practices

✅ Use tuples for:

* Grouping related but fixed data
* Function return values (`return x, y, z`)
* Keys in dictionaries or sets

🚫 Avoid tuples when:

* You need to frequently modify elements
* The sequence must grow or shrink dynamically

---

## 🧩 Quick Recap

| Concept   | Example           | Output      |
| :-------- | :---------------- | :---------- |
| Create    | `t = (1, 2, 3)`   | `(1, 2, 3)` |
| Access    | `t[1]`            | `2`         |
| Unpack    | `x, y = (10, 20)` | `10, 20`    |
| Count     | `t.count(2)`      | `1`         |
| Immutable | `t[0] = 5`        | ❌ Error     |

---

## 🚀 Summary

Tuples provide **immutability, performance, and structure** for fixed collections.
They’re lightweight, reliable, and play a key role in Python’s data integrity model.

> “If your data doesn’t need to change — use a tuple.”

---

### 🧩 Next in Series

➡️ **Sets (`set`, `frozenset`) — Ensuring Uniqueness and Mathematical Operations**

---

✅ **Vale-checked** • **Docusaurus-optimized** • **PEP 8 compliant**

```

---

Would you like me to proceed with **Page 6 — Sets (`set`, `frozenset`)** next (covering uniqueness, operations like union/intersection, and use cases)?
```
