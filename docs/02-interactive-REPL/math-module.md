---
id: 08-math-module
title: 📐 Mathematical Functions and the `math` Module
sidebar_position: 74
description: Explore Python's built-in mathematical functions and the powerful math module — including square roots, trigonometry, logarithms, constants like π and e, and more.
---

# 📐 Mathematical Functions and the `math` Module

Python is not just good at counting — it’s a **full-fledged calculator** with support for **mathematical operations**, **constants**, and **functions** through the built-in `math` module.

---

## 🧮 Built-in Math Functions

Even before importing anything, Python includes a few basic math helpers you can use right away.

| Function | Description | Example | Result |
| -------- | ------------ | -------- | ------- |
| `abs(x)` | Returns the absolute value of `x` | `abs(-7)` | `7` |
| `pow(x, y)` | Raises `x` to the power of `y` | `pow(2, 3)` | `8` |
| `round(x, n)` | Rounds to `n` decimal places | `round(3.14159, 2)` | `3.14` |
| `divmod(a, b)` | Returns quotient and remainder as a tuple | `divmod(10, 3)` | `(3, 1)` |

### Example in REPL

```python
>>> abs(-10)
10
>>> pow(3, 2)
9
>>> round(2.71828, 3)
2.718
>>> divmod(10, 4)
(2, 2)
````

💡 **Tip:** `pow(x, y)` is equivalent to `x ** y`, but supports a third argument for modular exponentiation — useful in cryptography:
`pow(x, y, mod)` → `(x ** y) % mod`.

---

## 🧭 Importing the `math` Module

To access more advanced mathematical operations, import the built-in `math` module.

```python
>>> import math
```

Once imported, you get access to **dozens of functions and constants** for trigonometry, logarithms, factorials, and more.

---

## 🔢 Square Roots and Powers

```python
>>> import math
>>> math.sqrt(25)
5.0
>>> math.pow(2, 5)
32.0
```

💬 **Explanation:**

* `math.sqrt(x)` returns the **square root** as a float.
* `math.pow(x, y)` behaves like `x ** y`, but always returns a **float**.

---

## 📈 Logarithmic and Exponential Functions

| Function        | Description                | Example            | Result              |
| --------------- | -------------------------- | ------------------ | ------------------- |
| `math.log(x)`   | Natural logarithm (base e) | `math.log(10)`     | `2.302585…`         |
| `math.log10(x)` | Logarithm base 10          | `math.log10(1000)` | `3.0`               |
| `math.exp(x)`   | e to the power of x        | `math.exp(1)`      | `2.718281828459045` |

### Example

```python
>>> import math
>>> math.log(10)
2.302585092994046
>>> math.log10(100)
2.0
>>> math.exp(2)
7.38905609893065
```

💡 **Tip:** Use logarithms to transform multiplicative relationships into additive ones — a common technique in data science and machine learning.

---

## 🔢 Trigonometric Functions

Python’s `math` module supports full trigonometry — angles are always in **radians**, not degrees.

| Function      | Description            | Example                 | Result |
| ------------- | ---------------------- | ----------------------- | ------ |
| `math.sin(x)` | Sine of x (in radians) | `math.sin(math.pi / 2)` | `1.0`  |
| `math.cos(x)` | Cosine of x            | `math.cos(0)`           | `1.0`  |
| `math.tan(x)` | Tangent of x           | `math.tan(math.pi / 4)` | `1.0`  |

### Example

```python
>>> import math
>>> math.sin(math.pi / 2)
1.0
>>> math.cos(0)
1.0
>>> math.tan(math.pi / 4)
1.0
```

💬 **Note:**
To convert between **degrees** and **radians**, use:

```python
>>> math.degrees(math.pi)
180.0
>>> math.radians(180)
3.141592653589793
```

---

## 🧮 Factorials and Combinatorics

Useful in probability, statistics, and combinatorics.

| Function            | Description                                  | Example             | Result |
| ------------------- | -------------------------------------------- | ------------------- | ------ |
| `math.factorial(n)` | Returns n! (product of all integers up to n) | `math.factorial(5)` | `120`  |
| `math.comb(n, k)`   | Number of ways to choose k items from n      | `math.comb(5, 2)`   | `10`   |
| `math.perm(n, k)`   | Number of ways to arrange k items from n     | `math.perm(5, 2)`   | `20`   |

### Example

```python
>>> import math
>>> math.factorial(5)
120
>>> math.comb(5, 2)
10
>>> math.perm(5, 2)
20
```

---

## ⚙️ Constants in the `math` Module

Python gives you access to fundamental mathematical constants:

| Constant   | Description                                    | Example    | Result              |
| ---------- | ---------------------------------------------- | ---------- | ------------------- |
| `math.pi`  | Ratio of circumference to diameter of a circle | `math.pi`  | `3.141592653589793` |
| `math.e`   | Base of natural logarithms                     | `math.e`   | `2.718281828459045` |
| `math.tau` | 2π (a full circle in radians)                  | `math.tau` | `6.283185307179586` |
| `math.inf` | Positive infinity                              | `math.inf` | `inf`               |
| `math.nan` | Not a number                                   | `math.nan` | `nan`               |

### Example in REPL

```python
>>> import math
>>> math.pi * 2
6.283185307179586
>>> math.isfinite(100)
True
>>> math.isnan(math.nan)
True
```

---

## 🧩 Combining It All

You can mix and match these functions for more advanced calculations.

```python
>>> import math

# Area of a circle
radius = 5
area = math.pi * math.pow(radius, 2)
print(round(area, 2))
```

**Output:**

```
78.54
```

---

## 💡 Try It Yourself

Here’s a small exercise:

```python
import math

angle_deg = 45
angle_rad = math.radians(angle_deg)

# Compute trigonometric values
sin_val = round(math.sin(angle_rad), 2)
cos_val = round(math.cos(angle_rad), 2)
tan_val = round(math.tan(angle_rad), 2)

print("sin:", sin_val)
print("cos:", cos_val)
print("tan:", tan_val)
```

**Output:**

```
sin: 0.71
cos: 0.71
tan: 1.0
```

---

## 🧭 Summary

| Concept      | Function / Constant | Example               | Result    |
| ------------ | ------------------- | --------------------- | --------- |
| Square root  | `math.sqrt(x)`      | `math.sqrt(16)`       | `4.0`     |
| Logarithm    | `math.log(x)`       | `math.log(10)`        | `2.3025…` |
| Trigonometry | `math.sin(x)`       | `math.sin(math.pi/2)` | `1.0`     |
| Factorial    | `math.factorial(n)` | `math.factorial(5)`   | `120`     |
| Constant     | `math.pi`, `math.e` | `math.pi * 2`         | `6.283…`  |

---

> 💬 **Next Step:**
> Up next in our series → **🎯 Booleans and Logical Expressions** — where you’ll learn how Python handles truth, comparisons, and decision-making.
