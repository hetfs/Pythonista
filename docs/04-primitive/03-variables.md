---
id: 03-variables
title: 📦 Python variable
sidebar_position: 3
description: Learn how Python variables store and manage data with clear examples and hands-on practice for absolute beginners.
---

# 📦 Python variable

Variable label data so you can reuse it.
Think of a variable like a name tag you attach to a value—later you call that name to get the value back.

:::success 🎯 Try it now
Open the Python REPL and type every example yourself. Typing helps you notice small details and learn faster.
:::

---

## 🎯 Lesson goals

By the end of this lesson you will be able to:

- Create variables for different types of data
- Update variables and use shorthand operators
- Follow Python naming rules and conventions
- Inspect variables and understand copying behavior

---

## 🧩 Create your first variables

Assign a value to a name with `=`:

```python
>>> greeting = "Hello, Python!"     # text (string)
>>> score = 95                      # integer
>>> temperature = 23.5              # float (decimal)
>>> is_sunny = True                 # boolean
````

Use the names later in expressions:

```python
>>> greeting
'Hello, Python!'
>>> score + 5
100
>>> temperature * 2
47.0
>>> is_sunny
True
```

---

## 🔤 Naming rules and best practices

Follow these simple rules when naming variables:

- Start with a letter or underscore (`_`)
- Use letters, numbers, and underscores only (no spaces or special characters)
- Avoid Python keywords like `class`, `for`, `if`
- Prefer descriptive names using snake_case

Valid examples:

```python
first_name = "Asha"
user_age = 28
_total = 100
is_active = False
```

Invalid examples:

```python
2nd_place = "Bob"     # starts with a number
user name = "Ali"     # contains a space
price$ = 10           # contains a special character
class = "Math"        # Python keyword
```

Good names explain intent:

```python
student_count = 30    # clear
x = 30                # unclear
```

Use snake_case for most Python code: `first_name`, `total_price`, `is_valid_user`.

---

## 🔁 Update values and use shortcuts

Variables can change at any time.

```python
>>> score = 10
>>> score = 15         # overwrite the value
>>> score
15
```

Shorthand operators make updates shorter:

```python
>>> coins = 10
>>> coins += 5         # coins = coins + 5
>>> coins
15
>>> coins *= 2         # coins = coins * 2
>>> coins
30
```

Other shortcuts: `-=`, `/=`, `//=`, `%=`

---

## 🔍 Inspect variables

Check a variable’s type and value:

```python
>>> language = "Python"
>>> type(language)     # what kind of data?
<class 'str'>
>>> print(language)    # show value
Python
```

See the runtime name for the type with `__name__`:

```python
>>> type(language).__name__
'str'
```

---

## 🧠 Mutable and immutable

Variables name objects. Some objects change in place (mutable); others don’t (immutable).

### Immutable example (strings)

```python
>>> name = "Python"
>>> backup = name
>>> name = "Java"      # assignment makes name point to a new string
>>> backup
'Python'
```

Changing `name` created a new string; `backup` still references the old one.

### Mutable example (lists)

```python
>>> fruits = ["apple", "banana"]
>>> my_fruits = fruits   # both names reference the same list
>>> fruits.append("orange")
>>> my_fruits             # sees the change
['apple', 'banana', 'orange']
```

To create an independent copy, copy explicitly:

```python
>>> fruits = ["apple", "banana"]
>>> my_copy = fruits.copy()
>>> fruits.append("orange")
>>> fruits
['apple', 'banana', 'orange']
>>> my_copy
['apple', 'banana']
```

---

## 🔁 Multiple assignment and swapping

Python supports assigning multiple variables in one line:

```python
>>> x, y, z = 1, 2, 3
>>> x, y = y, x         # swap values
>>> x
2
```

Swapping like this avoids a temporary variable.

---

## 🧪 Hands-on REPL practice

Type these exercises in the REPL and experiment.

1. Personal profile
   Create variables for your name, age, favorite food, and `likes_python` then print them.

1. Example calculator

   ```python
   >>> length = 10
   >>> width = 5
   >>> area = length * width
   >>> print(f"The area is: {area}")
   ```

1. Swap values

   ```python
   >>> a = "chocolate"
   >>> b = "vanilla"
   >>> a, b = b, a
   >>> print(a, b)
   ```

1. Type explorer

   ```python
   >>> values = [42, 3.14, "hello", True, [1,2]]
   >>> for v in values:
   ...     print(repr(v), "→", type(v).__name__)
   ```

---

## ⚠️ Common beginner mistakes

|                           Mistake | Why it fails                  | Fix                                    |
| --------------------------------: | ----------------------------- | -------------------------------------- |
| `print(score)` before `score = 5` | Name not defined              | Assign before using                    |
|                         `2nd = 2` | Name starts with a digit      | Use `second` or `second_place`         |
|                  `"Score: " + 10` | Can't concatenate str and int | Use `f"Score: {10}"` or `str(10)`      |
|                 `b = a` for lists | Both names point to same list | Use `b = a.copy()` for a separate list |

---

## 📋 Quick reference

- Create: `name = value`
- Update: `name = new_value` or `name += 1`
- Check type: `type(name)`
- Make copy: `new = old.copy()` (for lists and similar types)

---

:::success 🎯 Pro tip
Try small experiments in the REPL: change a variable, print it, check its type, and observe how copies behave. Small loops of trial and observation build strong intuition.
:::

---

<div align="center">

## 🚀 Your variable challenge

1. Create five variables that mix strings, numbers, and booleans.
1. Change three values and print each result.
1. Make a list, copy it, mutate the original, and verify the copy stays unchanged.
1. Swap two values without a temporary variable.

Keep practicing the REPL rewards experimentation.

</div>
