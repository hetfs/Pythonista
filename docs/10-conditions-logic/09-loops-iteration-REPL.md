---
id: 09-loops-iteration-REPL
title: 🔁 Loops & iteration
sidebar_position: 9
description: Master Python loops with hands-on REPL practice. Learn for loops, while loops, and control statements to automate repetitive tasks efficiently.
---

# 🔁 Loops & iteration

## 🤔 What are loops and why do we need them

Imagine greeting 100 people one by one.
Would you type `print("Hello")` a hundred times? Not at all!
That’s where **loops** come in they let Python **repeat tasks automatically**.

Loops save time, reduce mistakes, and make code easier to read.

:::tip 🎯 Real-world example

**Without a loop:**

```python
print("Hello person 1")
print("Hello person 2")
print("Hello person 3")
# ... and 97 more lines!
````

**With a loop:**

```python
for person in range(1, 101):
    print(f"Hello person {person}")
```

Just two lines instead of one hundred.
:::

---

## 🧭 The two main types of loops

Python has **two main kinds** of loops.
They perform similar tasks but suit different situations:

| Loop type    | When to use it                                               | Analogy                                |
| ------------ | ------------------------------------------------------------ | -------------------------------------- |
| `for` loop   | When you **know** how many times you’ll repeat               | Reading each page in a book            |
| `while` loop | When you **don’t know** how many times but know when to stop | Washing dishes until the sink is empty |

---

## 🎯 Understanding the `for` loop

### What’s a `for` loop

A `for` loop acts like a **helpful assistant** that goes through a list and performs the same task for each item.

### Your first `for` loop

```python
>>> fruits = ["apple", "banana", "cherry"]
>>> for fruit in fruits:
...     print("I like", fruit)
```

Output:

```
I like apple
I like banana
I like cherry
```

### 🧩 Step-by-step explanation

1. You create a list called `fruits`.
2. The line `for fruit in fruits:` tells Python to look at each fruit one by one.
3. Inside the loop, Python runs `print("I like", fruit)` for every fruit.
4. When the list ends, the loop stops automatically.

### 🎒 What’s the loop variable

The word `fruit` is the **loop variable**.
It changes each time the loop runs:

```python
fruit = "apple"
fruit = "banana"
fruit = "cherry"
```

---

## 🛒 Real-life example: Grocery bag

Imagine unpacking groceries:

* The **bag** is your list
* Each **item** is the loop variable
* The code inside the loop describes what to do with each item

```python
>>> groceries = ["milk", "bread", "eggs", "butter"]
>>> for item in groceries:
...     print(f"I'm putting {item} in the refrigerator")
```

Output:

```
I'm putting milk in the refrigerator
I'm putting bread in the refrigerator
I'm putting eggs in the refrigerator
I'm putting butter in the refrigerator
```

---

## 🔢 Mastering the `range()` function

### Why use `range()`

Sometimes you want to repeat something a specific number of times.
`range()` creates a **sequence of numbers** that helps you do that.

### Common uses of `range()`

**Count from 0 to 4:**

```python
for i in range(5):
    print(i)
```

Output:

```
0
1
2
3
4
```

> 💡 `range(5)` gives 0–4, not 1–5. The last number isn’t included.

**Count from 3 to 7:**

```python
for i in range(3, 8):
    print(i)
```

Output:

```
3
4
5
6
7
```

**Count by steps:**

```python
for i in range(2, 11, 2):
    print(i)
```

Output:

```
2
4
6
8
10
```

**Count backward:**

```python
for countdown in range(5, 0, -1):
    print(f"Launch in {countdown}...")
```

Output:

```
Launch in 5...
Launch in 4...
Launch in 3...
Launch in 2...
Launch in 1...
```

---

## ♻️ The `while` loop

### How’s it different

A `while` loop repeats **as long as a condition remains true**.
Use it when you don’t know how many times something will repeat.

```python
>>> count = 3
>>> while count > 0:
...     print(f"Countdown: {count}")
...     count = count - 1
```

Output:

```
Countdown: 3
Countdown: 2
Countdown: 1
```

### 🧠 Step-by-step

1. Check if the condition is true (`count > 0`).
2. Run the code inside the loop.
3. Update `count`.
4. Repeat until the condition becomes false.

---

## ⚠️ Avoiding infinite loops

A **loop that never stops** is called an *infinite loop*.

```python
while True:
    print("This never stops!")
```

This keeps running forever because `True` never changes.
To stop it, press:

| Platform      | Shortcut   |
| ------------- | ---------- |
| Windows/Linux | `Ctrl + C` |
| macOS         | `Cmd + .`  |

✅ Always ensure something **changes** inside the loop so it can end.

---

## 🧭 Loop control with `break` and `continue`

### 🚫 `break`: Stop the loop

Use `break` to exit a loop early.

```python
rooms = ["living room", "kitchen", "bedroom"]
for room in rooms:
    if room == "bedroom":
        print("Found my keys!")
        break
    print("No keys here.")
```

Output:

```
No keys here.
No keys here.
Found my keys!
```

---

### ⏭️ `continue`: Skip one turn

Use `continue` to **skip** the rest of the current loop and move to the next.

```python
tasks = ["pack clothes", "buy tickets", "pack toiletries"]
for task in tasks:
    if "pack" not in task:
        continue
    print(f"Working on: {task}")
```

Output:

```
Working on: pack clothes
Working on: pack toiletries
```

---

## 🧱 Nested loops

A **nested loop** means one loop inside another.
You often use them to handle pairs of values.

```python
for row in range(1, 4):
    for col in range(1, 4):
        print(f"{row} × {col} = {row * col}")
```

Output:

```
1 × 1 = 1
1 × 2 = 2
1 × 3 = 3
2 × 1 = 2
2 × 2 = 4
2 × 3 = 6
3 × 1 = 3
3 × 2 = 6
3 × 3 = 9
```

---

## 🧪 Practice challenges

Try these in your REPL!

### 🏆 Beginner

**1. Fruit salad maker**

```python
# Print "Adding [fruit] to the salad" for each fruit
fruits = ["apple", "banana", "orange"]
```

<details>
<summary>💡 Show Solution</summary>

```python
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"Adding {fruit} to the salad")
```

✅ The `for` loop runs once per item, printing each fruit name.

</details>

---

**2. Counter**

```python
# Use range() to count from 1 to 10
```

<details>
<summary>💡 Show Solution</summary>

```python
for i in range(1, 11):
    print(i)
```

✅ `range(1, 11)` goes from 1 up to (but not including) 11.

</details>

---

**3. Password checker**

```python
# Keep asking until user types "python123"
```

<details>
<summary>💡 Show Solution</summary>

```python
password = ""
while password != "python123":
    password = input("Enter password: ")
print("Access granted!")
```

✅ The `while` loop repeats until the password matches.

</details>

---

### 🥇 Intermediate

**4. Smart filter**

```python
# Print only numbers > 10, but stop if > 25
numbers = [2, 7, 15, 8, 22, 9, 30, 5]
```

<details>
<summary>💡 Show Solution</summary>

```python
numbers = [2, 7, 15, 8, 22, 9, 30, 5]
for num in numbers:
    if num > 25:
        break
    if num > 10:
        print(num)
```

✅ `break` stops at 30; only numbers >10 and ≤25 print.

</details>

---

**5. Letter counter**

```python
# Count letters in "programming" without len()
```

<details>
<summary>💡 Show Solution</summary>

```python
word = "programming"
count = 0
for letter in word:
    count += 1
print("Letter count:", count)
```

✅ Each loop adds 1 to the counter.

</details>

---

**6. Menu system**

```python
# Keep asking for user input until they type "quit"
```

<details>
<summary>💡 Show Solution</summary>

```python
choice = ""
while choice != "quit":
    choice = input("Type a command: ")
print("Goodbye!")
```

✅ The loop ends only when the user types `quit`.

</details>

---

### 🏅 Advanced

**7. Multiplication table**

```python
# Create a 5x5 table using nested loops
```

<details>
<summary>💡 Show Solution</summary>

```python
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:2}", end=" ")
    print()
```

✅ Explanation: Two nested loops print 5 rows and 5 columns.

</details>

---

## 📘 Quick reference

### Basic syntax

```python
for item in collection:
    # Do something

while condition:
    # Repeat while true
```

### `range()` Examples

```python
range(5)         # 0–4
range(2, 6)      # 2–5
range(1, 10, 2)  # 1, 3, 5, 7, 9
```

### Loop control

```python
break      # stop completely
continue   # skip one turn
```

---

## 🚀 Keep practicing

🎉 Great job! You’ve learned how to make your code repeat and react.

### Next steps

1. Try the challenges above in your REPL.
2. Experiment by changing the examples.
3. Build something small a guessing game, menu, or timer.

> 🌟 Practicing loops is how you become fluent in Python!

---

<div align="center">

## 🎯 Your mission

✅ Solve challenges

✅ Write loop of your own

✅ Type examples from this guide

✅ Teach someone else how loops work

**You’re officially looping like a pro! 🌀**

</div>
