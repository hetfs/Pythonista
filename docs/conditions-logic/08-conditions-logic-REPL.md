---
id: 08-conditional-logic-REPL
title: ⚖️ Conditional statements and logical flow
sidebar_position: 8
description: Learn how Python makes decisions using if, elif, else, and logical operators—all interactively in the REPL.
---

# ⚖️ Conditional statements and logical flow

Programming isn’t just about running commands it’s abut **making decisions**.
Conditional logic allows your program to **react to different situations**, depending on whether something is `True` or `False`.

Python uses `if`, `elif`, and `else` statements to **control how your code flows**.
You can experiment with all of them directly in the **Python REPL**.

---

## 🧠 The `if` statement

An `if` statement runs a block of code **only when its condition is true**.

```python
>>> age = 18
>>> if age >= 18:
...     print("You're an adult!")
````

Output:

```
You're an adult!
```

If the condition is `False`, Python skips that block.

:::tip ✅ Indentation matters
In Python, indentation (usually four spaces) defines code blocks no braces `{}` are needed.
:::

---

## 🌗 Adding an `else` block

Use an `else` block to handle the **opposite case**.

```python
>>> temperature = 20
>>> if temperature > 25:
...     print("It's a hot day!")
... else:
...     print("It's a cool day!")
```

Output:

```
It's a cool day!
```

---

## 🔁 Multiple paths with `elif`

When you have several possible outcomes, use `elif` (short for *else if*).

```python
>>> score = 82
>>> if score >= 90:
...     print("Grade: A")
... elif score >= 75:
...     print("Grade: B")
... elif score >= 60:
...     print("Grade: C")
... else:
...     print("Grade: F")
```

Output:

```
Grade: B
```

Python checks conditions **from top to bottom** and runs **only the first one that’s true**.

---

## 🔗 Combining conditions with logical operators

Logical operators let you combine or invert conditions.

| Operator | Example           | Meaning                            |
| -------- | ----------------- | ---------------------------------- |
| `and`    | `a > 0 and b > 0` | True if **both** are true          |
| `or`     | `a > 0 or b > 0`  | True if **at least one** is true   |
| `not`    | `not is_valid`    | True if the condition is **false** |

Example:

```python
>>> age = 25
>>> has_id = True
>>> if age >= 18 and has_id:
...     print("Access granted.")
... else:
...     print("Access denied.")
```

Output:

```
Access granted.
```

---

## 🧩 Nested conditions

You can place one `if` inside another—this is called *nesting*.

```python
>>> age = 16
>>> has_permission = True
>>> if age < 18:
...     if has_permission:
...         print("Access granted with supervision.")
...     else:
...         print("Access denied.")
... else:
...     print("Access granted.")
```

Output:

```
Access granted with supervision.
```

:::tip 🧩 Keep nesting shallow
Deeply nested logic can be confusing.
Use `and` or `or` to simplify when possible.
:::

---

## ⚡ Short-circuit evaluation

Python stops checking conditions **as soon as the outcome is known**.

```python
>>> def check():
...     print("Checked!")
...     return True
...
>>> result = False and check()  # "Checked!" won’t print
```

This behavior, called **short-circuiting**, improves speed and avoids unnecessary code execution.

---

## 🧭 The `pass` statement

Use `pass` as a **placeholder** for code you plan to write later.

```python
>>> if True:
...     pass  # To be implemented later
```

:::tip 💡 Great for planning
`pass` helps outline your code early, before adding the logic.
:::

---

## 📘 Quick reference

| Keyword | Description                              | Example         |
| ------- | ---------------------------------------- | --------------- |
| `if`    | Runs when the condition is `True`        | `if x > 10:`    |
| `elif`  | Runs if previous conditions were `False` | `elif x == 10:` |
| `else`  | Runs when all conditions are `False`     | `else:`         |

---

## 🚧 Common beginner mistakes

Even experienced learners run into these at first—here’s how to fix them fast.

| Mistake                              | Why it happens                           | Fix                                                      |
| ------------------------------------ | ---------------------------------------- | -------------------------------------------------------- |
| `if x = 10:`                         | Using `=` instead of `==` for comparison | Use `==` for equality checks                             |
| Missing indentation                  | Python uses indentation, not braces      | Indent code by four spaces after `if`, `elif`, or `else` |
| Forgetting colons (`:`)              | Syntax error at line end                 | Always end `if`, `elif`, and `else` lines with a colon   |

:::tip 💬 Pro tip
Run each condition interactively in the REPL to see why a branch runs or doesn’t.
:::

---

## 🧩 REPL challenges

Test your understanding interactively with these mini challenges!

### 🌡️ Challenge 1: Temperature advisor

Write a program that:

* Prints `"Too cold!"` if temperature < 10
* Prints `"Just right."` if between 10 and 25
* Prints `"Too hot!"` otherwise

```python
>>> temperature = 18
# 💡 Write your logic here
```

**Expected output:**

```
Just right.
```

<details>
<summary>💡 Solution</summary>

```python
>>> if temperature < 10:
...     print("Too cold!")
... elif temperature <= 25:
...     print("Just right.")
... else:
...     print("Too hot!")
```

</details>

---

### 🧍 Challenge 2: Login validator

Ask for a username and password, and print:

* `"Welcome!"` if both match
* `"Access denied."` otherwise

```python
>>> username = "admin"
>>> password = "1234"
# 💡 Use if and and/or logic
```

**Hint:**
Use `and` to check that **both** match.

<details>
<summary>💡 Solution</summary>

```python
>>> if username == "admin" and password == "1234":
...     print("Welcome!")
... else:
...     print("Access denied.")
```

</details>

---

### 🚦 Challenge 3: Traffic light extension

Add a rule:
`"Blinking"` means `"Proceed with caution!"`

```python
>>> light = "blinking"
# 💡 Add a new condition below
```

**Expected output:**

```
Proceed with caution!
```

<details>
<summary>💡 Solution</summary>

```python
>>> if light == "green":
...     print("Go!")
... elif light == "yellow":
...     print("Slow down!")
... elif light == "red":
...     print("Stop!")
... elif light == "blinking":
...     print("Proceed with caution!")
```

</details>

---

### 🧮 Challenge 4: Calculator logic

Ask the user for two numbers and an operation (`+`, `-`, `*`, `/`)
Then print the result using conditional logic.

```python
>>> a = 10
>>> b = 5
>>> op = "+"
# 💡 Use if/elif to handle each operator
```

<details>
<summary>💡 Solution</summary>

```python
>>> if op == "+":
...     print(a + b)
... elif op == "-":
...     print(a - b)
... elif op == "*":
...     print(a * b)
... elif op == "/":
...     print(a / b)
... else:
...     print("Invalid operator")
```

</details>

---

### 🌈 Challenge 5: Even or odd checker

Check if a number is even or odd using the modulo operator `%`.

```python
>>> number = 7
# 💡 Use if number % 2 == 0
```

**Expected output:**

```
Odd number
```

<details>
<summary>💡 Solution</summary>

```python
>>> if number % 2 == 0:
...     print("Even number")
... else:
...     print("Odd number")
```

</details>

---

## ✅ Summary

* Use `if`, `elif`, and `else` to control logical flow.
* Indentation defines code blocks—no braces needed.
* Combine conditions with `and`, `or`, and `not`.
* **Short-circuiting** makes logic efficient.
* Use `pass` for placeholders.
* Practice interactively in the REPL to master decision-making.

<div align="center">

🌀 Every `if` adds intelligence to your code.
You now know how to make Python **decide what to do and when** the foundation of all logic in programming.

</div>
