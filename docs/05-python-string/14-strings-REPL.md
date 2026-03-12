---
id: 14-strings-REPL
title: 🧵 Strings in Python
sidebar_position: 14
description: Learn how to work with text in Python using strings—from creation and slicing to formatting, methods, and best practices.
---

# 🧵 Strings in Python (`str`)

Strings are one of the most common data types in Python.
They represent **textual data** such as names, messages, file paths, and more.

A string is a **sequence of characters** enclosed in **quotes**.
Each character can be a letter, number, symbol, or space—and Python treats them all as text.

---

## ✨ Create strings

You can create strings using single quotes, double quotes, or triple quotes.
All three options work the same way—they instruct Python that everything between the quotes is text.
“Everything between these quotes is text.”

---

### 🔹 Single and double quotes

Python lets you use either single (`'`) or double (`"`) quotes:

```python
>>> single = 'Hello'
>>> double = "World"
````

Both are valid strings:

```python
>>> print(single)
Hello
>>> print(double)
World
```

🧠 **Why two options?**

They make it easier to include quotes *inside* text without escaping them:

```python
>>> sentence1 = "It's a sunny day!"
>>> sentence2 = 'He said, "Python is fun!"'
```

✅ Both examples are valid and readable.

If you must use the same type of quote inside your string,
you’ll need to **escape** it using a backslash (`\`):

```python
>>> sentence = 'It\'s a sunny day!'
>>> print(sentence)
It's a sunny day!
```

---

### 🔸 Triple quotes for multi-line strings

Triple quotes (`'''` or `"""`) let you write text that spans **multiple lines**.

```python
>>> multi = """Python
... is awesome!"""
>>> print(multi)
Python
is awesome!
```

🧩 **Why use triple quotes?**

* They preserve line breaks exactly as written.
* No need to use `\n` for newlines.

You can use either `'''` or `"""`—both behave the same.

---

## 🧩 Work with strings in Python

When working with text, you’ll often need to **combine strings** or **insert values**.
Python provides three main techniques for this:

1. **Concatenation (`+`)**
2. **Interpolation (f-strings)**
3. **Formatting (`.format()`)**

---

### 🔗 String concatenation

Concatenation means *joining strings together* using the `+` operator.

```python
>>> name = "Nadia"
>>> message = "My name is " + name
>>> print(message)
My name is Nadia
```

Output:

```
My name is Nadia
```

---

### ⚠️ Common pitfall

Concatenation works only with strings.
If you try to mix a string and a number, Python raises an error:

```python
>>> name = "Nadia"
>>> print("My name is " + name + " which has " + len(name) + " characters.")
Traceback (most recent call last):
  ...
TypeError: can only concatenate str (not "int") to str
```

That happens because `len(name)` returns an **integer**, not a string.

To fix this, convert it with `str()`:

```python
print("My name is " + name + " which has " + str(len(name)) + " characters.")
```

Output:

```
My name is Nadia which has 5 characters.
```

While this works, it’s not clear or readable when dealing with longer strings.

---

### ✨ String interpolation (f-strings)

A cleaner, modern way is to use **f-strings** (introduced in Python 3.6).

```python
>>> name = "Nadia"
>>> print(f"My name is {name} which has {len(name)} characters.")
My name is Nadia which has 5 characters.
```

Here’s what happens:

* Prefix the string with `f` (or `F`).
* Place variables or expressions inside `{}` braces.
* Python replaces the braces with their evaluated values.

If you forget the `f`, the braces remain literal:

```python
>>> print("My name is {name} which has {len(name)} characters.")
My name is {name} which has {len(name)} characters.
```

---

### 🧾 String formatting with `.format()`

Before f-strings, Python used the **`.format()`** method.

```python
>>> name = "Nadia"
>>> print("My name is {}".format(name))
My name is Nadia
```

The `{}` placeholders are replaced by the values inside `.format()`.

---

### 🧠 Multiple placeholders

You can use several placeholders they fill **in order**:

```python
>>> name = "Nadia"
>>> age = 13
>>> print("My name is {} and I'm {} years old.".format(name, age))
My name is Nadia and I'm 13 years old.
```

---

## 🧠 Summary

| Technique                    | Description                | Example                   | Pros                  | Cons                        |
| ---------------------------- | -------------------------- | ------------------------- | --------------------- | --------------------------- |
| **Concatenation (`+`)**      | Joins strings manually     | `"Hello " + name`         | simple and universal  | Harder to read, type issues |
| **Interpolation (f-string)** | Inserts variables directly | `f"Hello, {name}"`        | Clean, readable, fast | Needs Python ≥ 3.6          |
| **Formatting (`.format()`)** | Replaces `{}` placeholders | `"Hello {}".format(name)` | Backward compatible   | More verbose                |

---

## 🚀 Final thoughts

* Use **`+` concatenation** for simple joins.
* Prefer **f-strings** for modern, clean Python code.
* Know **`.format()`** for older projects.

---

> 🧠 **In short:**
> Concatenation glues strings together.
>
> Interpolation and formatting *inject* values directly into text cleanly and safely.
