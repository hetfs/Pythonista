---
id: 19-sets-REPL
title: Sets (set, frozenset)
sidebar_position: 19
description: Learn about sets and frozensets in Python unique collections that support fast membership tests and mathematical operations like union, intersection, and difference.
---

# 🔷 Sets (`set`, `frozenset`)

A **set** is an **unordered collection of unique, immutable elements**.
Sets automatically remove duplicates and support powerful **mathematical operations** like union, intersection, and difference.

---

## 🎯 What are sets

Sets are used when **order doesn’t matter** and **uniqueness** does.

```python
fruits = {"apple", "banana", "orange", "apple"}
print(fruits)  # {'apple', 'banana', 'orange'}
````

> 💡 Duplicates are automatically removed — only unique values remain.

---

## ⚙️ Creating sets

| Method           | Example                             | Result                     |
| :--------------- | :---------------------------------- | :------------------------- |
| Using braces     | `colors = {"red", "green", "blue"}` | `{'red', 'green', 'blue'}` |
| From an Iterable | `set([1, 2, 3, 1])`                 | `{1, 2, 3}`                |
| Empty set        | `set()`                             | `{}`                       |
| Literal syntax   | `{1, 2, 3}`                         | `{1, 2, 3}`                |

> ⚠️ `{}` creates an empty **dictionary**, not a set!

```python
empty_set = set()
print(type(empty_set))  # <class 'set'>
```

---

## 🔍 Membership testing

Sets are great for **fast lookups** much faster than lists for large data.

```python
letters = {'a', 'e', 'i', 'o', 'u'}
print('a' in letters)   # True
print('z' in letters)   # False
```

---

## 🧩 Adding and removing elements

```python
numbers = {1, 2, 3}
numbers.add(4)
numbers.remove(2)
numbers.discard(10)  # no error if element not found
print(numbers)  # {1, 3, 4}
```

| Method       | Description                              |
| :----------- | :--------------------------------------- |
| `add(x)`     | Add an element                           |
| `remove(x)`  | Remove element (raises error if missing) |
| `discard(x)` | Remove element if present (no error)     |
| `pop()`      | Remove and return an arbitrary element   |
| `clear()`    | Remove all elements                      |

---

## 🔢 Set operations: Mathematical

Sets support all key **mathematical operations**:

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A | B)   # Union → {1, 2, 3, 4, 5, 6}
print(A & B)   # Intersection → {3, 4}
print(A - B)   # Difference → {1, 2}
print(A ^ B)   # Symmetric difference → {1, 2, 5, 6}
```

| Operation            |  Symbol  | Equivalent                  | Description                  |
| :------------------- | :------: | :-------------------------- | :--------------------------- |
| Union                | `A \| B` | `A.union(B)`                | Combine all unique elements  |
| Intersection         |  `A & B` | `A.intersection(B)`         | Common elements              |
| Difference           |  `A - B` | `A.difference(B)`           | In A but not in B            |
| Symmetric Difference |  `A ^ B` | `A.symmetric_difference(B)` | Elements in A or B, not both |

---

## 🔐 Immutability with `frozenset`

`frozenset` is an **immutable version of set** once created, it can't be changed.
Useful for creating sets that can be used as **dictionary keys** or inside other sets.

```python
frozen = frozenset([1, 2, 3])
print(frozen)           # frozenset({1, 2, 3})
print(2 in frozen)      # True
# frozen.add(4)  ❌ AttributeError: 'frozenset' object has no attribute 'add'
```

---

## 🧠 Set relations and comparisons

You can easily check **subset** or **superset** relationships:

```python
A = {1, 2, 3}
B = {1, 2, 3, 4, 5}

print(A < B)  # True (A is a subset)
print(B > A)  # True (B is a superset)
print(A == B) # False
```

---

## 🚀 Practical Use Cases

* **Duplicate removal** from lists:

  ```python
  items = [1, 2, 2, 3, 4, 4]
  unique = list(set(items))
  print(unique)  # [1, 2, 3, 4]
  ```

* **Membership testing**:

  ```python
  stopwords = {"and", "or", "the"}
  print("and" in stopwords)  # True
  ```

* **Finding shared or unique values** between datasets:

  ```python
  dev_skills = {"Python", "JavaScript", "SQL"}
  data_skills = {"Python", "SQL", "R"}

  print(dev_skills & data skills)  # Common → {'Python', 'SQL'}
  print(dev_skills ^ data skills)  # Unique → {'JavaScript', 'R'}
  ```

---

## ⚡ Performance Notes

| Operation             | Time Complexity | Description              |
| :-------------------- | :-------------: | :----------------------- |
| Membership (`x in s`) |       O(1)      | Fast lookup              |
| Add/Remove            |       O(1)      | Constant-time operations |
| Union/Intersection    |       O(n)      | Linear in set size       |

---

## 🧩 Quick Recap

| Concept      | Example             | Output         |                 |
| :----------- | :------------------ | :------------- | --------------- |
| Create       | `s = {1, 2, 3}`     | `{1, 2, 3}`    |                 |
| Add          | `s.add(4)`          | `{1, 2, 3, 4}` |                 |
| Remove       | `s.remove(2)`       | `{1, 3, 4}`    |                 |
| Union        | `A                  | B`             | Combined unique |
| Intersection | `A & B`             | Shared         |                 |
| Difference   | `A - B`             | Exclusive      |                 |
| Immutable    | `frozenset([1, 2])` | Immutable set  |                 |

---

## ✅ Summary

Sets and frozensets offer **fast, memory-efficient, and mathematical** ways to handle collections of unique items.

Use:

* `set()` when data may change
* `frozenset()` for fixed, hashable sets

> “If order doesn’t matter but uniqueness does use a set.”
