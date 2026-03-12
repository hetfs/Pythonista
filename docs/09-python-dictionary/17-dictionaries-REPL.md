---
id: 17-dictionaries-REPL
title: 🗺️ Dictionaries { } dict()
sidebar_position: 17
description: Learn how Python dictionaries store key–value pairs efficiently, support dynamic updates, iteration, and nested data structures.
---

# 🗺️ Dictionaries `dict()`

A **dictionary** is a collection of **key–value pairs**.

It lets you store and retrieve data using **keys** instead of numeric indexes perfect for fast lookups and structured data.

---

## 🎯 What are dictionaries

Dictionaries map **unique keys** to **corresponding values**.

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "Accra"
}

print(person["name"])  # Alice
````

Each key must be **immutable** (`str`, `int`, `tuple`, etc.), while values can be **any type**.

---

## 🏗️ Creating dictionaries

Python offers several flexible ways to create dictionaries, depending on your data source or coding style.

---

## ✨ 1. Using curly braces `{}`

This is the most common and readable way for small, predefined data.

```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "Accra"
}
```

---

## 🧩 2. Using the `dict()` constructor

The built-in `dict()` function creates a dictionary from keyword arguments.

```python
person = dict(name="Alice", age=25, city="Accra")
print(person)
```

**Output:**

```python
{'name': 'Alice', 'age': 25, 'city': 'Accra'}
```

---

## 🧩 3. Creating dictionaries with `zip()` and `dict()`

You can combine two lists one for keys and one for values using `zip()` and `dict()` together.

```python
keys = ["name", "age", "city"]
values = ["Alice", 30, "Accra"]

info = dict(zip(keys, values))
print(info)
```

**Output:**

```python
{'name': 'Alice', 'age': 30, 'city': 'Accra'}
```

**How it works:**

1. `zip()` pairs elements from both lists by position.
2. `dict()` converts those pairs into key–value mappings.

:::info **Why use `zip()`?**
It’s clean, concise, and ideal for combining structured data like CSV headers and rows.
:::

---

## 🔄 Merging and updating dictionaries

Python provides multiple ways to merge and update dictionaries.

---

### 🧠 1. Using `update()`

```python
person = {"name": "Alice", "age": 30}
extra = {"city": "Accra", "country": "Ghana"}

person.update(extra)
print(person)
```

**Output:**

```python
{'name': 'Alice', 'age': 30, 'city': 'Accra', 'country': 'Ghana'}
```

---

### 🧠 2. Dictionary unpacking `{**a, **b}`

```python
base = {"name": "Alice", "age": 30}
details = {"city": "Accra", "country": "Ghana"}

merged = {**base, **details}
print(merged)
```

**Output:**

```python
{'name': 'Alice', 'age': 30, 'city': 'Accra', 'country': 'Ghana'}
```

---

### 🧠 3. Python 3.9+ merge operators

```python
a = {"x": 1, "y": 2}
b = {"y": 10, "z": 3}

merged = a | b        # Merge
a |= {"z": 99}        # Update in place
```

**Output:**

```python
{'x': 1, 'y': 10, 'z': 3}
```

---

## ✅ Direct key access in dictionaries

When working with Python dictionaries, you can **access a value directly** by referencing its key inside square brackets (`[]`).
This is the most common way to retrieve data but if the key doesn’t exist, Python raises a **`KeyError`**.

---

## 🧠 Example: Direct key access

```python
student = {"name": "Kofi", "grade": "A"}

# Directly access values by their keys
print(student["name"])   # Output: Kofi

# Update an existing key
student["grade"] = "A+"

# Add a new key-value pair
student["age"] = 20

print(student)
```

### 🪄 Output

```python
Kofi
{'name': 'Kofi', 'grade': 'A+', 'age': 20}
```

---

## ⚠️ Handling missing keys (`KeyError`)

If you try to access a key that doesn’t exist, Python throws a `KeyError`:

```python
print(student["school"])  # ❌ KeyError: 'school'
```

To avoid this, use the `.get()` method.

---

## 🛡️ Safe access using `.get()`

When you’re not sure if a key exists, `.get()` safely retrieves values without causing an error.

---

## 🧩 Example: Safe lookup with `.get()`

```python
student = {"name": "Kofi", "grade": "A"}

# Safe access
print(student.get("name"))           # ✅ Kofi
print(student.get("age"))            # ⚠️ None
print(student.get("age", "Unknown")) # ✅ Custom default
```

**Output:**

```python
Kofi
None
Unknown
```

---

## ⚙️ How `.get()` works

```python
dict.get(key, default)
```

| Parameter   | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| **key**     | The key you want to look up                                             |
| **default** | *(optional)* Value returned if the key isn't found. Defaults to `None` |

---

## ⚔️ Comparing `[]` vs `.get()` in real scenarios

```python
student = {"name": "Kofi", "grade": "A"}

print(student["name"])   # ✅ Works
print(student.get("age", "Not provided"))  # ✅ Safe
print(student["age"])    # ❌ Raises KeyError
```

**Output:**

```python
Kofi
Not provided
Traceback (most recent call last):
  ...
KeyError: 'age'
```

---

## 💡 Best practice

✅ Use `.get()` when accessing **optional or uncertain keys**.

✅ Combine with a **default value** for robustness.

---

## 🧠 Example in context

```python
student = {"name": "Kofi", "grade": "A"}

print(student.get("name", "Not available"))  # Kofi
print(student.get("school", "Not assigned")) # Not assigned
```

✅ Safe, readable, and prevents runtime crashes.

---

## 🔁 Modifying and deleting dictionary items

Dictionaries are **mutable**, meaning you can add, update, or remove items after creation.

---

### 🧩 1. Adding new items

```python
student = {"name": "Kofi", "grade": "A"}
student["age"] = 20
print(student)
```

**Output:**

```python
{'name': 'Kofi', 'grade': 'A', 'age': 20}
```

---

### 🔄 2. Updating existing items

```python
student["grade"] = "A+"
student.update({"school": "Accra High"})
print(student)
```

**Output:**

```python
{'name': 'Kofi', 'grade': 'A+', 'age': 20, 'school': 'Accra High'}
```

---

### ❌ 3. Deleting items

#### Using `del`

```python
del student["age"]
print(student)
```

Raises `KeyError` if key doesn’t exist.

#### Using `.pop()`

```python
removed_grade = student.pop("grade", "N/A")
print("Removed:", removed_grade)
print(student)
```

**Output:**

```python
Removed: A+
{'name': 'Kofi', 'school': 'Accra High'}
```

#### Using `.clear()`

```python
student.clear()
print(student)
```

**Output:**

```python
{}
```

---

## 🧠 Summary table

| Operation   | Method               | Description                           |
| ----------- | -------------------- | ------------------------------------- |
| Add item    | `dict[key] = value`  | Adds or updates a key                 |
| Update item | `.update({...})`     | Updates multiple keys                 |
| Delete item | `del dict[key]`      | Removes a key (`KeyError` if missing) |
| Safe remove | `.pop(key, default)` | Removes key and returns its value     |
| Clear all   | `.clear()`           | Removes all items                     |

---

# 🔍 Iterating over dictionaries

You can loop through keys, values, or key–value pairs.

---

### 🔑 Iterating over keys

```python
student = {"name": "Kofi", "grade": "A+", "school": "Accra High"}

for key in student:
    print(key)
```

**Output:**

```python
name
grade
school
```

---

### 💬 Iterating over values

```python
for value in student.values():
    print(value)
```

**Output:**

```python
Kofi
A+
Accra High
```

---

### 🧩 Iterating over key–value pairs

```python
for key, value in student.items():
    print(f"{key}: {value}")
```

**Output:**

```python
name: Kofi
grade: A+
school: Accra High
```

---

## 🧠 Example: Combined operations

```python
student = {"name": "Kofi", "grade": "A"}
student["age"] = 20
student.update({"grade": "A+", "school": "Accra High"})
student.pop("school", None)

for key, value in student.items():
    print(f"{key} → {value}")
```

**Output:**

```python
name → Kofi
grade → A+
age → 20
```

---

## ⚙️ Best practices

✅ Use `dict[key] = value` for individual updates.

✅ Use `.update()` for batch changes.

✅ Use `.pop()` for safe deletions.

✅ Use `.items()` for readable iteration.

---

## 🧠 Nested dictionaries

Represent complex data by nesting dictionaries.

```python
users = {
    "alice": {"age": 28, "city": "Accra"},
    "bob": {"age": 34, "city": "Takoradi"}
}

print(users["alice"]["city"])  # Accra
```

---

## 🧪 Dictionary comprehensions

```python
squares = {x: x**2 for x in range(5)}
print(squares)
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)
```

---

## ⚡ Dictionary views

Dictionary views reflect real-time changes.

```python
data = {"a": 1, "b": 2}
keys = data.keys()

data["c"] = 3
print(keys)  # dict_keys(['a', 'b', 'c'])
```

---

## 🧩 Practical use cases

### 1. Storing structured data

```python
book = {
    "title": "Python Essentials",
    "author": "Binahf",
    "year": 2025
}
```

### 2. Fast lookups

```python
capitals = {"Ghana": "Accra", "Nigeria": "Abuja"}
print(capitals.get("Kenya", "Unknown"))  # Unknown
```

---

## ⚙️ Dictionary and other collections

| Feature                | `dict` | `list` | `set` |
| :--------------------- | :----: | :----: | :---: |
| Ordered (Python ≥ 3.7) |    ✅   |    ✅   |   ❌   |
| Key–value pairs        |    ✅   |    ❌   |   ❌   |
| Fast lookup by key     |    ✅   |    ❌   |   ✅   |
| Mutable                |    ✅   |    ✅   |   ✅   |
| Supports comprehension |    ✅   |    ✅   |   ✅   |

---

## ⚠️ Common pitfalls

### 1. Accessing missing keys

```python
user = {"name": "Esi"}
print(user["age"])  # ❌ KeyError
```

✅ Use `.get()` instead:

```python
print(user.get("age", "Unknown"))
```

---

### 2. Mutable default values

Avoid shared mutable defaults.

```python
users = {"names": []}
alias = users
alias["names"].append("John")
print(users)  # {'names': ['John']}
```

✅ Create a copy when needed.

```python
alias = users.copy()
```

---

## 🧭 Summary

* Dictionaries store **key–value pairs**.
* Keys are **unique and immutable**.
* Access safely using `.get()`.
* Iterate efficiently with `.items()`.
* Merge using `update()`, `{**a, **b}`, or `|`.
* Perfect for **structured**, **dynamic**, and **JSON-like** data.

---

<div align="center">

<h2>💡 *When you need structured data with fast lookups think `dict()`.*</h2>

</div>
