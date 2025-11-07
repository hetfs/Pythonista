---
id: 07-data-types-REPL
title: 🧩 Understanding Data Types
sidebar_position: 07
description: Learn how Python stores, organizes, and understands information using data types the foundation for every Python program.
---

# 🧩 Understanding data types in python

Every piece of information in Python has a **type** a label that tells Python what it's and what you can do with it.

Think of data types as **containers** that hold specific kinds of things:

* 🧃 A **cup** holds liquids (like `3.14`)
* 📦 A **box** holds many items (like `[1, 2, 3]`)
* 📖 A **notebook** stores words or sentences (`"Hello"`)
* 🗂️ A **dictionary** keeps information in pairs (`"name": "Binah"`)

Python uses data types to decide **how to store, display, and process** your data.

:::success 🎯 REPL Learning Tip
Type every example in your Python shell (`python` or `python3`) you’ll *see* how Python reacts and understand faster.
:::

---

## 🧠 What are data types

A **data type** tells Python *what kind of thing* you’re working with.

This helps Python know how to perform operations for example, it knows that:

* You can **add numbers**, but not `"Hello" + 5"`
* You can **loop through** a list, but not an integer

### Quick check: Use `type()`

You can always check what something is using `type()`:

```python
>>> type(42)
<class 'int'>

>>> type("Hello")
<class 'str'>

>>> type([1, 2, 3])
<class 'list'>
````

---

## 🏗️ The main families of data types

| Family                 | Data Types      | Example               | Description                                  |
| ---------------------- | --------------- | --------------------- | -------------------------------------------- |
| **Numbers**            | `int`, `float`  | `42`, `3.14`          | Count or measure things                      |
| **Text**               | `str`           | `"Hello"`             | Represent words, sentences, messages         |
| **Logic**              | `bool`          | `True`, `False`       | Represent decisions and conditions           |
| **Collections**        | `list`, `tuple` | `[1, 2, 3]`, `(1, 2)` | Store multiple items together                |
| **Unique Collections** | `set`           | `{1, 2, 3}`           | Store unique, unordered items                |
| **Labeled Data**       | `dict`          | `{"name": "Alex"}`    | Store key–value pairs (like a mini database) |

---

## 🔢 Numbers counting and measuring

Python uses two main numeric types:

### 🧮 Integers (`int`)

Whole numbers without decimals used for counting.

```python
>>> age = 25
>>> score = -10
>>> type(age)
<class 'int'>
```

Think of integers like *steps on a staircase* you can go up (`+1`), down (`-1`), but never between steps.

---

### ⚖️ Floating-point numbers (`float`)

Numbers with decimals used for measuring or precise values.

```python
>>> pi = 3.14159
>>> price = 19.99
>>> type(price)
<class 'float'>
```

Floats are like *liquids* they can take on values between steps, like 2.5 or 0.001.

---

### 🧪 Try these

```python
>>> 10 + 5
15
>>> 8 / 2
4.0
>>> 2 ** 3
8
>>> 7.5 + 2.5
10.0
```

---

## 📝 Strings working with text

Strings (`str`) store **text**, from single letters to full paragraphs.

They’re written inside quotes: `" "` or `' '`.

```python
>>> name = "Python"
>>> greeting = 'Hello World'
>>> type(name)
<class 'str'>
```

Think of strings as *chains of characters* each letter is a link in the chain.

---

### 🧰 String tools

```python
>>> word = "python"
>>> word.upper()
'PYTHON'

>>> len(word)
6

>>> "py" in word
True
```

### 🧪 Try these

```python
>>> name = "Binahf"
>>> name + " the Coder"
'Binahf the Coder'

>>> "ha" * 3
'hahaha'

>>> "hello".replace("h", "j")
'jello'
```

---

## ✅ Booleans true or false logic

Booleans (`bool`) are Python’s way of representing **yes or no**, **on or off**, or **true or false** answers.

They’re created by comparing things or setting conditions.

```python
>>> is_sunny = True
>>> is_raining = False
>>> type(is_sunny)
<class 'bool'>
```

Booleans act like **switches** they’re either *on* (`True`) or *off* (`False`).

---

### 🔍 Comparison examples

```python
>>> 10 > 5
True
>>> 10 == 10
True
>>> 10 != 3
True
>>> "a" in "apple"
True
```

---

### 🧪 Try it yourself

```python
>>> age = 20
>>> can_vote = age >= 18
>>> can_vote
True
```

---

## 🧺 Lists collections you can change

Lists hold **ordered groups** of items numbers, strings, or even other lists.

They’re written inside square brackets `[ ]`.

```python
>>> fruits = ["apple", "banana", "cherry"]
>>> type(fruits)
<class 'list'>
```

Think of lists as **to-do lists** you can add, remove, or change items anytime.

---

### 🧰 List Tools

```python
>>> fruits.append("orange")
>>> fruits[0]
'apple'
>>> fruits[1] = "pear"
>>> len(fruits)
4
```

### 🧪 Try it

```python
>>> colors = ["red", "green", "blue"]
>>> colors.remove("green")
>>> colors.append("yellow")
>>> colors
['red', 'blue', 'yellow']
```

---

## 🔒 Tuples collections you can’t change

Tuples are like lists, but once created, they **can't be modified**.

They’re written inside parentheses `( )`.

```python
>>> coordinates = (10, 20)
>>> coordinates[0]
10
>>> coordinates[0] = 15
Traceback (most recent call last):
  File "<python-input-127>", line 1, in <module>
    coordinates[0] = 15
    ~~~~~~~~~~~^^^
TypeError: 'tuple' object does not support item assignment
>>>
```

Think of tuples as **sealed boxes** you can read what’s inside, but not change it.

Use tuples when data **shouldn’t change**, like fixed settings or coordinates.

---

## 🎯 Sets unique and unordered

Sets are like lists, but they:

* Only keep **unique** items (no duplicates)
* Don’t preserve order

```python
>>> numbers = {1, 2, 2, 3}
>>> numbers
{1, 2, 3}
```

Think of sets as **bags of marbles** duplicates automatically merge into one.

---

### 🧪 Try It

```python
>>> colors = {"red", "blue", "green"}
>>> colors.add("red")   # Duplicate ignored
>>> colors
{'red', 'blue', 'green'}
```

---

## 🗂️ Dictionaries labeled data

Dictionaries store **key–value pairs**, like labels and their meanings.

They’re written inside curly braces `{}` with a `key: value` format.

```python
>>> person = {"name": "Alex", "age": 25}
>>> person["name"]
'Alex'

>>> person["city"] = "Accra"
>>> person
{'name': 'Alex', 'age': 25, 'city': 'Accra'}
```

Think of dictionaries as **address books** you look things up by name (the key).

---

### 🧰 Dictionary tools

```python
>>> person.keys()
dict_keys(['name', 'age', 'city'])
>>> "age" in person
True
```

---

## 🔄 Type conversion changing containers

Sometimes you need to change a value’s type.

Python lets you convert easily between compatible types:

```python
>>> int("10")
10
>>> float("3.14")
3.14
>>> str(42)
'42'
>>> list((1, 2, 3))
[1, 2, 3]
```

| Function  | Converts To    |
| --------- | -------------- |
| `int()`   | Integer        |
| `float()` | Decimal number |
| `str()`   | String         |
| `list()`  | List           |
| `tuple()` | Tuple          |
| `set()`   | Set            |

---

## 🧩 Data type comparison

| Type           | Mutable? | Ordered? | Example            | Everyday Use             |
| -------------- | -------- | -------- | ------------------ | ------------------------ |
| `int`, `float` | ❌        | ❌        | `42`, `3.14`       | Counting, measuring      |
| `str`          | ❌        | ✅        | `"Hello"`          | Text and messages        |
| `bool`         | ❌        | ❌        | `True`             | Logic and conditions     |
| `list`         | ✅        | ✅        | `[1, 2, 3]`        | To-do lists, collections |
| `tuple`        | ❌        | ✅        | `(1, 2, 3)`        | Unchanging data          |
| `set`          | ✅        | ❌        | `{1, 2, 3}`        | Unique items             |
| `dict`         | ✅        | ✅        | `{"key": "value"}` | Labeled data             |

---

## 🧪 Practice challenges

### 🧍 Challenge 1: Create a profile

```python
# Create your name (string), age (int),
# height in meters (float), and is_student (bool)
```

<details>

<summary>Show Solution</summary>

```python
name = "Binahf"
age = 27
height = 1.75
is_student = True
```

</details>

---

### 🛒 Challenge 2: Shopping list

```python
# Create a list of grocery items
# Add one, remove one, and print it
```

<details>

<summary>Show Solution</summary>

```python
groceries = ["milk", "eggs", "bread"]
groceries.append("butter")
groceries.remove("eggs")
print(groceries)
```

</details>

---

### 🧑‍🤝‍🧑 Challenge 3: Friend dictionary

```python
# Make a dictionary with name, age, and hobby
# Add a new key: city
```

<details>

<summary>Show Solution</summary>

```python
friend = {"name": "Alice", "age": 22, "hobby": "reading"}
friend["city"] = "Accra"
```

</details>

---

### 🔢 Challenge 4: Type conversion

```python
# Convert a number to string and combine with text
# Convert "3.14159" to float and double it
```

<details>

<summary>Show Solution</summary>

```python
number = 100
points = str(number) + " points"

pi = float("3.14159")
double_pi = pi * 2
```

</details>

---

<div align="center">

## 🚀 Your data type mission

1. **Create** one example for each data type
2. **Experiment** with at least three operations
3. **Convert** between types
4. **Build** a simple mini project like a *contact card* or *Todo list*

Learning data types is like learning the alphabet
once you know these symbols, you can build **anything** in Python! 🐍

</div>
