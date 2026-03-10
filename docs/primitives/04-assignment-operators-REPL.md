---
id: 04-assignment-operators-REPL
title: 🔄 Variable assignment & shortcut operators
sidebar_position: 4
description: Learn how Python stores data in variables and how to use shortcut operators to update values quickly. Perfect for beginners working in the REPL.
---

# 🔄 Variable assignment & shortcut operators

Variables act like labeled boxes that hold data. Assignment puts a value into a variable, and shortcut operators let you change that value quickly without repeating the variable name.

:::success 🎯 REPL learning tip
Type every example yourself in the Python REPL. Typing helps you notice details and learn faster.
:::

---

## 🏷 Basic variable assignment

Use the equals sign (`=`) to store a value in a variable.

```python
>>> name = "Alice"       # store text
>>> age = 25             # store an integer
>>> temperature = 98.6   # store a float (decimal)
>>> is_sunny = True      # store a boolean
````

When you refer to a variable name later, Python gives you the stored value:

```python
>>> print(name)
Alice
>>> age + 5
30
>>> temperature * 2
197.2
>>> is_sunny
True
```

### What happens behind the scenes

`x = 10` means “make a value 10 and label it `x`.” If you later do `y = x`, both names point to the same value until you reassign one of them.

```python
>>> x = 10
>>> y = x
>>> x = 20
>>> print(x)   # 20
>>> print(y)   # 10
```

---

## 🎪 Multiple assignment and swapping

Python supports assigning several variables at once.

```python
>>> r, g, b = 255, 128, 64
>>> print(r, g, b)
255 128 64
```

Swap two variables without a temporary value:

```python
>>> a = "apple"
>>> b = "banana"
>>> a, b = b, a
>>> print(a, b)
banana apple
```

Try these:

```python
# Unpack a tuple
x, y, z = (10, 20, 30)

# Split a name
first, last = "John Doe".split()
```

---

## 🚀 Shortcut operators (augmented assignment)

Shortcut operators update a variable by applying an operation to its current value. They save typing and make code clearer.

| Operator |   Example |      Same as |
| -------: | --------: | -----------: |
|     `+=` |  `x += 5` |  `x = x + 5` |
|     `-=` |  `x -= 3` |  `x = x - 3` |
|     `*=` |  `x *= 2` |  `x = x * 2` |
|     `/=` |  `x /= 4` |  `x = x / 4` |
|    `//=` | `x //= 2` | `x = x // 2` |
|     `%=` |  `x %= 3` |  `x = x % 3` |
|    `**=` | `x **= 2` | `x = x ** 2` |

Examples:

```python
>>> score = 0
>>> score += 10   # add 10
>>> score += 5
>>> print(score)
15

>>> lives = 3
>>> lives -= 1    # lose one life
>>> print(lives)
2

>>> number = 10
>>> number *= 3
>>> print(number)
30

>>> price = 100
>>> price /= 2
>>> print(price)
50.0
```

Strings work with `+=` too:

```python
>>> message = "Hello"
>>> message += ", "
>>> message += "world!"
>>> print(message)
Hello, world!
```

---

## ⚠ Important difference: Mutable vs immutable

Shortcut operators affect mutable and immutable objects differently.

**Lists (mutable) change in place**:

```python
>>> my_list = [1, 2, 3]
>>> original = my_list
>>> my_list += [4]      # modifies the same list object
>>> print(my_list)      # [1, 2, 3, 4]
>>> print(original)     # [1, 2, 3, 4]
```

**Numbers and strings (immutable) create new objects**:

```python
>>> my_number = 10
>>> original = my_number
>>> my_number += 5      # creates a new int and rebinds name
>>> print(my_number)    # 15
>>> print(original)     # 10
```

Quick rule:

* Lists, dictionaries, sets = changes affect all references.
* Numbers, strings, tuples = changes create new values.

If you need an independent copy of a list, use `copy()`:

```python
>>> a = [1, 2]
>>> b = a.copy()
>>> a += [3]
>>> print(a)  # [1, 2, 3]
>>> print(b)  # [1, 2]
```

---

## 🧪 Practice exercises (REPL)

Type these into the REPL and experiment.

**Exercise 1 Shopping total**

```python
total = 0
total += 10.50
total += 5.25
total += 8.75
print(total)
```

**Exercise 2 Game stats**

```python
health = 100
strength = 50
level = 1

health += 20
strength += 15
level += 1

print(health, strength, level)
```

**Exercise 3 Text builder**

```python
message = ""
message += "Hello"
message += "! How are you?"
print(message)
```

**Exercise 4 Multiple assignment challenge**

```python
a, b, c = "red", "green", "blue"
# make a = "green", b = "blue", c = "red"
a, b, c = b, c, a
print(a, b, c)
```

---

## 📋 Quick reference

* Assign value: `name = value`
* Multiple assign: `a, b = 1, 2`
* Swap: `a, b = b, a`
* Add and assign: `x += 3`
* Copy list: `copy_list = original.copy()`

---

:::success 🎯 Pro tip
Use shortcut operators to make code shorter and clearer. When working with lists, remember they change in place copy if you need an independent version.
:::

---

<div align="center">

## 🚀 Your assignment mission

1. Create five variables of different types.
2. Use each shortcut operator at least once.
3. Swap three variables in one line.
4. Make a list, copy it, mutate the original, and confirm the copy doesn't change.

**Practice in the REPL until these actions feel natural repetition builds confidence.**

</div>
