---
id: 11-python-numbers
title: 🔢 Numbers (int, float, complex)
sidebar_position: 11
description: Learn how Python handles numeric data types—integers, floating-point numbers, and complex numbers—with examples and practical exercises.
---

# 🔢 Numbers in python

Numbers are one of the most common data types in Python.
You’ll use them everywhere—**counting**, **calculating**, **measuring**, or even **controlling logic** in your programs.

Python has **three main numeric types**:

| Type | Description | Example |
|------|--------------|----------|
| `int` | Whole numbers (no decimals) | `42`, `-3`, `1000` |
| `float` | Numbers with decimals (fractional parts) | `3.14`, `-0.5`, `2.0` |
| `complex` | Numbers with real and imaginary parts | `2 + 3j`, `-1j` |

---

## 🧠 Understanding each type

Let’s take a closer look at each type and how to use them effectively.

---

### 1️⃣ Integers (`int`)

Integers are **whole numbers** they don’t include fractions or decimals.
You use them for counting things like items, scores, or loops.

```python
>>> apples = 10
>>> oranges = -3
>>> total = 0
````

They’re perfect for **counting** or **looping**:

```python
>>> apples + oranges
7
>>> apples * 3
30
>>> apples // 3   # Floor division (no decimals)
3
```

🧩 **Think of integers like whole steps on a staircase no fractions in between.**

---

### 2️⃣ Floating-point numbers (`float`)

Floating-point numbers (or “floats”) represent **real numbers** values that can have decimals.

```python
>>> pi = 3.14159
>>> temperature = -4.5
>>> price = 2.0
```

They’re great for **measurements** or **precise calculations**:

```python
>>> pi * 2
6.28318
>>> round(pi, 2)
3.14
```

⚠️ **Note:** Computers store floats in binary, which can cause small rounding errors.

```python
>>> 0.1 + 0.2
0.30000000000000004
```

💡 **For money or high-precision work**, use the `decimal` module:

```python
from decimal import Decimal
>>> Decimal('0.1') + Decimal('0.2')
Decimal('0.3')
```

🧩 **Think of floats like digital rulers they measure between the steps, but sometimes round slightly.**

---

### 3️⃣ Complex numbers (`complex`)

Complex numbers have **two parts** a real part and an imaginary part (`j` means √-1).
They’re used in **engineering**, **physics**, and **signal processing**.

```python
>>> z = 2 + 3j
>>> z.real
2.0
>>> z.imag
3.0
```

You can do math with them too:

```python
>>> (2 + 3j) + (1 - 4j)
(3 - 1j)
>>> abs(3 + 4j)
5.0
```

🧩 **Think of complex numbers as coordinates on a 2D plane one axis is real, the other imaginary.**

---

## 🧩 Checking numeric types

You can check a number’s type using the built-in `type()` function:

```python
>>> a = 5
>>> b = 3.14
>>> c = 2 + 3j

>>> type(a)
<class 'int'>
>>> type(b)
<class 'float'>
>>> type(c)
<class 'complex'>
```

---

## ➕ Arithmetic operators

Python supports all standard math operations.
Here’s a quick summary:

| Operator | Meaning                  | Example  | Result |
| -------- | ------------------------ | -------- | ------ |
| `+`      | Addition                 | `5 + 3`  | `8`    |
| `-`      | Subtraction              | `5 - 3`  | `2`    |
| `*`      | Multiplication           | `5 * 3`  | `15`   |
| `/`      | Division (returns float) | `5 / 2`  | `2.5`  |
| `//`     | Floor division           | `5 // 2` | `2`    |
| `%`      | Remainder (modulus)      | `5 % 2`  | `1`    |
| `**`     | Exponent (power)         | `2 ** 3` | `8`    |

---

## 🧮 Practicing arithmetic in the REPL

You can try math directly in Python’s interactive shell.

```python
>>> a = 5
>>> b = 2
```

### ➕ Addition

```python
>>> a + b
7
```

### ➖ Subtraction

```python
>>> a - b
3
```

### ✖️ Multiplication

```python
>>> a * b
10
```

### ➗ Division

```python
>>> a / b
2.5
```

### 🔢 Floor division

```python
>>> a // b
2
```

### 🔁 Modulus

```python
>>> a % b
1
```

### 💥 Exponentiation

```python
>>> a ** b
25
```

💡 **Tip:**
Use `/` for **decimal results** and `//` for **whole-number results**.

---

## 📦 Useful built-in numeric functions

Python provides built-in helpers for working with numbers.

| Function   | What It Does                   | Example            | Result   |
| ---------- | ------------------------------ | ------------------ | -------- |
| `max()`    | Largest value                  | `max(4, 9, 2)`     | `9`      |
| `min()`    | Smallest value                 | `min(4, 9, 2)`     | `2`      |
| `sum()`    | Adds numbers in a list         | `sum([1, 2, 3])`   | `6`      |
| `divmod()` | Returns quotient and remainder | `divmod(9, 4)`     | `(2, 1)` |
| `round()`  | Rounds decimals                | `round(5.6789, 2)` | `5.68`   |

---

## 🔄 Numeric type conversion

Sometimes you need to **convert** between numeric types.

| Function    | Converts To              | Example         | Result   |
| ----------- | ------------------------ | --------------- | -------- |
| `int()`     | Integer (drops decimals) | `int(3.99)`     | `3`      |
| `float()`   | Float (adds decimals)    | `float('3.14')` | `3.14`   |
| `complex()` | Complex number           | `complex(2, 3)` | `(2+3j)` |
| `str()`     | String                   | `str(42)`       | `'42'`   |

Example:

```python
>>> int(3.99)
3
>>> float(10)
10.0
>>> str(100)
'100'
```

:::tip
Use `str()` when you need to **combine numbers with text** in a sentence.
:::

---

## 🧮 Floating-point precision

Floats are approximate they can’t always store exact decimal values.

```python
>>> 0.1 + 0.2
0.30000000000000004
```

To safely compare floats:

```python
>>> abs((0.1 + 0.2) - 0.3) < 1e-9
True
```

✅ This checks that the result is “close enough.”

---

## ⚠️ Common beginner mistakes

### ❌ 1. Confusing `/` and `//`

```python
>>> 5 / 2   # Normal division
2.5
>>> 5 // 2  # Floor division
2
```

🧠 Use `/` when you want **decimals**, and `//` when you want **whole numbers**.

---

### ❌ 2. Floating-point rounding surprises

```python
>>> 0.1 + 0.2
0.30000000000000004
```

✅ Use the `decimal` module for accurate results:

```python
from decimal import Decimal
>>> Decimal('0.1') + Decimal('0.2')
Decimal('0.3')
```

---

### ❌ 3. Mixing `int` and `str`

```python
>>> "Age: " + 25
TypeError: can only concatenate str (not "int") to str
```

✅ Fix it:

```python
>>> "Age: " + str(25)
'Age: 25'
```

Or better yet:

```python
>>> age = 25
>>> f"Age: {age}"
'Age: 25'
```

---

### ❌ 4. Forgetting parentheses in math

Python follows **operator precedence** (PEMDAS).

```python
>>> 5 + 3 * 2
11
>>> (5 + 3) * 2
16
```

✅ Use parentheses to make your math clearer.

---

### ❌ 5. Unexpected `round()` results

Python uses **bankers’ rounding** `.5` rounds to the nearest even number.

```python
>>> round(2.5)
2
>>> round(3.5)
4
```

✅ For consistent rounding “up,” use `decimal`:

```python
from decimal import Decimal, ROUND_HALF_UP
Decimal('2.5').quantize(Decimal('1'), rounding=ROUND_HALF_UP)
# Output: Decimal('3')
```

---

## 💡 Summary table

| Mistake              | Problem             | Fix                               |
| -------------------- | ------------------- | --------------------------------- |
| `/` vs `//`          | Wrong result type   | Use `/` for floats, `//` for ints |
| Float rounding       | Inaccurate decimals | Use `decimal.Decimal`             |
| Mixing `int` + `str` | TypeError           | Convert or use f-strings          |
| Missing parentheses  | Wrong order         | Add `( )` for clarity             |
| `round()` surprises  | Bankers’ rounding   | Use `Decimal(..., ROUND_HALF_UP)` |

---

## 🧩 Mini challenge

Try this small exercise:

```python
# 1. Create two numbers
a = 7
b = 2.5

# 2. Calculate and round the result
result = round(a ** 2 / b, 2)

# 3. Print it
print(result)
```

**Output:**

```
19.6
```

---

> 💬 **Takeaway:**
> Numbers in Python are powerful and flexible.
> From simple math to precise scientific or financial calculations, you now know how to pick the right type for the job and how to avoid common pitfalls.
