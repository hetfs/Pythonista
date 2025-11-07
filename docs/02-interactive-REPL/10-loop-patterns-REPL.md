---
id: 10-loop-patterns
title: 🔄 Smarter Loop Patterns
sidebar_position: 10
description: Learn practical looping tricks like enumerate(), zip(), and comprehensions to make your Python code cleaner, shorter, and more expressive all through hands-on REPL practice.
---

# 🔄 Smarter loop patterns

Now that you know how to use basic loops, it’s time to level up.
Python gives you **powerful loop patterns** that make your code cleaner and smarter.

These techniques are what real developers use to write efficient, readable, and `Pythonic` code.

:::success 🎯 Learn by Doing
Type **every example** in your REPL.
Typing builds memory reading alone doesn’t.
:::

---

## 🎯 What you'll learn

By the end of this lesson, you’ll be able to:

* Keep track of **both position and value** using `enumerate()`
* Combine **multiple lists** easily with `zip()`
* Loop through **dictionaries and sets**
* Build **lists and dictionaries in one line** using comprehensions

---

## 📍 `enumerate()`: Count without counting

### 🧩 The old way

Before `enumerate()`, you had to manage your own counter:

```python
>>> fruits = ["apple", "banana", "cherry"]
>>> index = 0
>>> for fruit in fruits:
...     print(f"Item {index}: {fruit}")
...     index += 1
...
Item 0: apple
Item 1: banana
Item 2: cherry
````

That works but it’s clunky.

### ✨ The pythonic way

`enumerate()` automatically gives you **both** the index and value:

```python
>>> fruits = ["apple", "banana", "cherry"]
>>> for index, fruit in enumerate(fruits):
...     print(f"Item {index}: {fruit}")
...
Item 0: apple
Item 1: banana
Item 2: cherry
```

Much cleaner!

### 🎛️ Start counting from 1 (Optional)

You can choose where counting begins:

```python
>>> for number, fruit in enumerate(fruits, start=1):
...     print(f"#{number}: {fruit}")
...
#1: apple
#2: banana
#3: cherry
```

### 🧠 Real-life example: Numbered menus

```python
>>> dishes = ["Pizza", "Pasta", "Salad", "Soup"]
>>> for i, dish in enumerate(dishes, start=1):
...     print(f"{i}. {dish}")
...
1. Pizza
2. Pasta
3. Salad
4. Soup
```

---

## 🔗 `zip()`: Combine lists together

### 🚧 The problem

You often have related data in separate lists:

```python
>>> names = ["Alice", "Bob", "Charlie"]
>>> scores = [85, 90, 88]
```

Looping through them side by side manually is awkward.

### 💡 The solution: `zip()`

`zip()` combines lists into pairs so you can loop through them easily:

```python
>>> for name, score in zip(names, scores):
...     print(f"{name} scored {score} points")
...
Alice scored 85 points
Bob scored 90 points
Charlie scored 88 points
```

### 🎪 Zip more than two lists

You can zip as many as you need:

```python
>>> ages = [25, 30, 35]
>>> cities = ["London", "Paris", "Tokyo"]
>>> for name, age, city in zip(names, ages, cities):
...     print(f"{name} ({age}) lives in {city}")
...
Alice (25) lives in London
Bob (30) lives in Paris
Charlie (35) lives in Tokyo
```

:::warning ⚠️ Heads Up
`zip()` stops when the **shortest list ends**.
If lists are uneven, the extra items in longer lists are ignored.
:::

### 🧠 Real-life example: Report cards

```python
>>> students = ["Alex", "Jamie", "Morgan"]
>>> math = [85, 92, 78]
>>> science = [88, 95, 82]
>>> for student, m, s in zip(students, math, science):
...     avg = (m + s) / 2
...     print(f"{student}: {avg:.1f} average")
...
Alex: 86.5 average
Jamie: 93.5 average
Morgan: 80.0 average
```

---

## 🗂️ Looping through dictionaries

A **dictionary** stores pairs: keys and their values.

Python lets you loop through them in several ways.

### 🔑 1. Keys (Default)

```python
>>> student = {"name": "Alex", "age": 20, "major": "CS"}
>>> for key in student:
...     print(key)
...
name
age
major
```

### 🔑 2. Keys explicitly

```python
>>> for key in student.keys():
...     print(f"Key: {key}")
...
Key: name
Key: age
Key: major
```

### 📋 3. Values only

```python
>>> for value in student.values():
...     print(f"Value: {value}")
...
Value: Alex
Value: 20
Value: CS
```

### 🎯 4. Keys and values (Best option!)

```python
>>> for key, value in student.items():
...     print(f"{key} → {value}")
...
name → Alex
age → 20
major → CS
```

---

## 🔄 Looping through sets

A **set** is like a list, but with **no duplicates** and **no guaranteed order**.

```python
>>> colors = {"red", "green", "blue"}
>>> for color in colors:
...     print(f"Found color: {color}")
...
Found color: blue
Found color: green
Found color: red
```

⚠️ The order may change every time you run it!

---

## 🚀 Comprehensions: Build lists in one line

Comprehensions are **shortcuts** for building lists, dictionaries, or sets.

They’re powerful and clean but keep them simple and readable.

---

### 📋 List comprehensions

**Before:**

```python
>>> squares = []
>>> for x in range(5):
...     squares.append(x ** 2)
>>> squares
[0, 1, 4, 9, 16]
```

**After:**

```python
>>> squares = [x ** 2 for x in range(5)]
>>> squares
[0, 1, 4, 9, 16]
```

---

### 🎯 Add conditions

```python
>>> numbers = [1, 2, 3, 4, 5, 6]
>>> evens = [x for x in numbers if x % 2 == 0]
>>> evens
[2, 4, 6]
```

---

### 📖 Dictionary comprehensions

```python
>>> numbers = [1, 2, 3, 4]
>>> squares = {x: x ** 2 for x in numbers}
>>> squares
{1: 1, 2: 4, 3: 9, 4: 16}
```

---

### 🎪 Set comprehensions

```python
>>> nums = [1, 2, 2, 3, 3, 3, 4]
>>> unique_squares = {x ** 2 for x in nums}
>>> unique_squares
{16, 1, 9, 4}
```

:::success 💡 Tip
Use comprehensions when they’re **clear**.
If they look confusing, a normal loop is better.
:::

---

## 🧩 Power patterns

### Build a dictionary from two lists

```python
>>> names = ["Alice", "Bob", "Charlie"]
>>> scores = [90, 85, 88]
>>> report = {name: score for name, score in zip(names, scores)}
>>> report
{'Alice': 90, 'Bob': 85, 'Charlie': 88}
```

### Numbered dictionary example

```python
>>> fruits = ["apple", "banana", "cherry"]
>>> fruit_menu = {i: fruit.upper() for i, fruit in enumerate(fruits, start=1)}
>>> fruit_menu
{1: 'APPLE', 2: 'BANANA', 3: 'CHERRY'}
```

---

## 🧪 REPL challenges

### 🧾 Challenge 1: Numbered to-do list

```python
tasks = ["Buy groceries", "Finish homework", "Call mom"]
# Use enumerate() to print "1. Buy groceries", etc.
```

<details>

<summary>Show Solution</summary>

```python
for i, task in enumerate(tasks, start=1):
    print(f"{i}. {task}")
```

</details>

---

### 🧮 Challenge 2: Student averages

```python
students = ["Taylor", "Jordan", "Casey"]
math = [88, 92, 79]
english = [85, 90, 82]
# Use zip() to calculate and print averages
```

<details>

<summary>Show Solution</summary>

```python
for s, m, e in zip(students, math, english):
    avg = (m + e) / 2
    print(f"{s}: {avg:.1f}")
```

</details>

---

### 🌡️ Challenge 3: Temperature converter

```python
celsius = [0, 20, 30, 40]
# Convert each to Fahrenheit: (C × 9/5) + 32
```

<details>

<summary>Show Solution</summary>

```python
fahrenheit = [(c * 9/5) + 32 for c in celsius]
print(fahrenheit)
```

</details>

---

### 🔤 Challenge 4: Character counter

```python
words = ["python", "loops", "comprehension"]
# Make a dict: {'python': 6, 'loops': 5, ...}
```

<details>

<summary>Show Solution</summary>

```python
lengths = {word: len(word) for word in words}
print(lengths)
```

</details>

---

## 📋 Quick reference

| Tool               | What It Does            | Example                             |
| ------------------ | ----------------------- | ----------------------------------- |
| `enumerate()`      | Get index + value       | `for i, v in enumerate(items)`      |
| `zip()`            | Combine sequences       | `for a, b in zip(list1, list2)`     |
| `.items()`         | Loop through dict pairs | `for k, v in data.items()`          |
| List comprehension | Build lists fast        | `[x*2 for x in nums]`               |
| Dict comprehension | Build dicts fast        | `{k: v*2 for k, v in data.items()}` |

---

:::success 🧠 Pro Tip: Experiment to Learn
Try changing things rename variables, alter conditions, or mix techniques.
Every variation you test **deepens your understanding**.
:::

---

<div align="center">

## 🚀 Your mission

Open your REPL and:

1. **Type** every example yourself
2. **Tweak** at least three examples
3. **Invent** one new loop pattern
4. **Break** one on purpose and fix it again

**Learning happens by experimenting not just reading.** 💪

</div>
