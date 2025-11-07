---
id: 06-operator-precedence-REPL
title: Operator precedence
sidebar_position: 6
description: Learn how Python decides which operations to evaluate first and how parentheses control the order of execution.
---

# ⚖️ Operator precedence and evaluation order

When Python encounters an expression like:

```python
result = 10 + 5 * 2
````

it must decide **which operation to perform first** addition or multiplication.
That decision depends on **operator precedence** and **evaluation order**.

---

## 🧠 Operator precedence

**Operator precedence** defines the order in which Python evaluates operators in an expression.

For example:

```python
10 + 5 * 2
```

Python evaluates multiplication (`*`) **before** addition (`+`), so the result is:

```
10 + (5 * 2) → 10 + 10 → 20
```

If you want addition to happen first, use parentheses:

```python
(10 + 5) * 2  # → 30
```

---

## ⚙️ Common operator precedence (highest → lowest)

| Precedence | Operators                        | Description                                       |            |
| ---------- | -------------------------------- | ------------------------------------------------- | ---------- |
| 1️⃣        | `()`                             | Parentheses (grouping)                            |            |
| 2️⃣        | `**`                             | Exponentiation                                    |            |
| 3️⃣        | `+x`, `-x`, `~x`                 | Unary plus, minus, Bitwise NOT                    |            |
| 4️⃣        | `*`, `/`, `//`, `%`              | Multiplication, division, floor division, modulus |            |
| 5️⃣        | `+`, `-`                         | Addition, subtraction                             |            |
| 6️⃣        | `<<`, `>>`                       | Bitwise shifts                                    |            |
| 7️⃣        | `&`                              | Bitwise AND                                       |            |
| 8️⃣        | `^`                              | Bitwise XOR                                       |            |
| 9️⃣        | `                                | `                                                 | Bitwise OR |
| 🔟         | `<`, `<=`, `>`, `>=`, `==`, `!=` | Comparisons                                       |            |
| 11️⃣       | `not`                            | Logical NOT                                       |            |
| 12️⃣       | `and`                            | Logical AND                                       |            |
| 13️⃣       | `or`                             | Logical OR                                        |            |
| 14️⃣       | `if ... else ...`                | Conditional expression                            |            |
| 15️⃣       | `=`, `+=`, `-=` and similar      | Assignment operators                              |            |

---

## 🪜 Example: Step-by-step evaluation

Let’s walk through this expression:

```python
x = 2 + 3 * 4 ** 2
```

**Order of operations:**

1. `**` → exponentiation → `4 ** 2 = 16`
2. `*` → multiplication → `3 * 16 = 48`
3. `+` → addition → `2 + 48 = 50`
4. `=` → assignment → `x = 50`

✅ Final result: **50**

---

## 🧩 Parentheses override precedence

Parentheses force Python to evaluate expressions **in the order you specify**.

```python
x = (2 + 3) * 4 ** 2  # → (5) * 16 = 80
```

> 💡 Tip: Use parentheses liberally for **clarity**, not just correctness.

---

## 🔁 Left-to-right and right-to-left associativity

When two operators share the same precedence, Python uses **associativity rules** to decide the evaluation direction.

| Associativity     | Operators                          | Example                                 |
| ----------------- | ---------------------------------- | --------------------------------------- |
| **Left to right** | `+`, `-`, `*`, `/`, `%`, `//`      | `10 - 5 - 2` → `(10 - 5) - 2 = 3`       |
| **Right to left** | `**`, assignment (`=`, `+=`, etc.) | `2 ** 3 ** 2` → `2 ** (3 ** 2)` → `512` |

---

## ⚗️ Combining different operators

Example:

```python
result = 10 - 3 * 2 ** 2
```

**Evaluation order:**

1. `**` → `2 ** 2 = 4`
2. `*` → `3 * 4 = 12`
3. `–` → `10 - 12 = - 2`

✅ Final value: `-2`

---

## 🧪 Complex example

```python
result = not (3 + 5 > 7 and 2 ** 3 == 8)
```

Step-by-step:

1. `3 + 5` → `8`
2. `8 > 7` → `True`
3. `2 ** 3` → `8`
4. `8 == 8` → `True`
5. `True and True` → `True`
6. `not (True)` → `False`

✅ Final result: **False**

---

## 🧭 Summary

* Operator **precedence** determines which parts of an expression are evaluated first.
* **Parentheses** can change that order.
* **Associativity** decides direction when operators have the same precedence.
* Use parentheses for clarity, especially in complex expressions.

These rules come from mathematics but are just as useful in understanding how **Python** and most programming languages evaluate expressions.

---

## 🔤 Common abbreviations

| Abbreviation    | Meaning                                                                                                       | Notes                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **PEMDAS**      | **Parentheses** → **Exponents** → **Multiplication** → **Division** → **Addition** → **Subtraction**          | Common in the U.S.                          |
| **BODMAS**      | **Brackets** → **Orders** (powers/roots) → **Division** → **Multiplication** → **Addition** → **Subtraction** | Common in the U.K. and Commonwealth regions |
| **BEDMAS**      | **Brackets** → **Exponents** → **Division** → **Multiplication** → **Addition** → **Subtraction**             | Variant used in some schools                |
| **GEMA** (rare) | **Grouping** → **Exponents** → **Multiplication**/**Division** → **Addition/Subtraction**                         | Seen in some programming courses            |

---

## 🧠 Python context

Although **PEMDAS** offers a quick reminder of mathematical precedence, Python extends this concept further. It includes **Bitwise**, **Comparison**, **Logical**, and **Assignment** operators all with their own precedence levels.

> 🩵 Use **PEMDAS** as a simple mnemonic for math operators,
> but remember that **Python’s operator hierarchy** goes far beyond it.
