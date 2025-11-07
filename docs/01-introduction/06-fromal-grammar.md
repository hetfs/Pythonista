---
id: 04-python-formal
title: Python’s Formal Grammar
sidebar_position: 14
---

# 🐍 Formal Grammar Specification

This is Python's **formal grammar specification** the official "rule book" that defines what counts as valid Python syntax. Let’s break down what this means and highlight the key ideas.

---

## 📖 What Is a Grammar Specification?

Think of it as the **DNA of the Python language**. It’s a precise mathematical definition of:

* Which sequences of tokens form valid Python code
* How different syntax elements relate to one another
* The exact structure the Python parser understands

👉 You can view the official (CPython) grammar here:

* [Python 3.14 Grammar](https://github.com/python/cpython/blob/3.14/Grammar/python.gram)
* [Python 3.13 Grammar](https://docs.python.org/3/reference/grammar.html)
* [Python 3.12 Grammar](https://github.com/python/cpython/blob/3.12/Grammar/python.gram)
* [Python 3.11 Grammar](https://github.com/python/cpython/blob/3.11/Grammar/python.gram)

---

## 🔧 Key Notation Explained

Python’s grammar is defined using **PEG (Parsing Expression Grammar)** notation.

### Basic Operators

* `e1 e2` → Match **e1 then e2**
* `e1 | e2` → Match **e1 or e2** (left to right)
* `e?` or `[e]` → **Optional** (zero or one occurrence)
* `e*` → Match **zero or more** times
* `e+` → Match **one or more** times
* `(e)` → Group expressions

### Advanced PEG Features

* `&e` → **Positive lookahead** (check if `e` matches, don’t consume it)
* `!e` → **Negative lookahead** (check if `e` does *not* match)
* `~` → **Commit** to this alternative (disable backtracking)

---

## 🏗️ Major Sections of the Grammar

### 1. Starting Rules (Entry Points)

```peg
file: [statements] ENDMARKER           # A full Python file
interactive: statement_newline         # REPL input
eval: expressions NEWLINE* ENDMARKER   # eval() input
```

### 2. Statement Structure

```peg
# Two main types
statement: compound_stmt | simple_stmts

# Simple (single line)
simple_stmt: assignment | 'pass' | 'break' | 'continue' | ...

# Compound (multi-line with blocks)
compound_stmt: function_def | if_stmt | class_def | for_stmt | ...
```

### 3. Common Python Constructs

**Function Definition**

```peg
function_def:
    | 'def' NAME '(' [params] ')' ['->' expression] ':' block
    | 'async' 'def' NAME '(' [params] ')' ['->' expression] ':' block
```

**If Statement**

```peg
if_stmt:
    | 'if' named_expression ':' block elif_stmt
    | 'if' named_expression ':' block [else_block]
```

**For Loop**

```peg
for_stmt:
    | 'for' star_targets 'in' star_expressions ':' block
    | 'async' 'for' star_targets 'in' star_expressions ':' block
```

### 4. Expression Hierarchy (Operator Precedence)

The grammar encodes operator precedence by nesting rules:

```peg
expression: disjunction 'if' disjunction 'else' expression | disjunction
disjunction: conjunction ('or' conjunction)+ | conjunction
conjunction: inversion ('and' inversion)+ | inversion
inversion: 'not' inversion | comparison
comparison: bitwise_or compare_op_bitwise_or_pair+ | bitwise_or
# ... down to atoms
```

This enforces the order:
`or` < `and` < `not` < comparisons < `+`/`-` < `*`/`/` < …

### 5. Pattern Matching (Python 3.10+)

```peg
match_stmt: "match" subject_expr ':' NEWLINE INDENT case_block+ DEDENT
case_block: "case" patterns guard? ':' block
```

---

## 🤔 Why This Matters for Beginners

### 1. Understanding Syntax Errors

A `SyntaxError` means your code didn’t match these rules.

**Example:**

```python
if x > 5
    print("Big")
```

Fails because the grammar requires a colon:
`'if' named_expression ':' block`

---

### 2. Learning Language Structure

The grammar shows:

* What’s allowed in function parameters
* How conditions must be written
* How assignment is structured

---

### 3. Grasping Operator Precedence

You don’t need to memorize a table — the grammar explains why:

```python
3 + 4 * 5   # = 23, not 35
```

`*` (in `term`) has higher precedence than `+` (in `sum`).

---

## 📝 Practical Takeaways

### Common Patterns

* **`NAME`** → identifier / variable name
* **`expression`** → any code that produces a value
* **`block`** → an indented block of code
* **`simple_stmts`** → one or more simple statements separated by semicolons

### Focus Areas for Beginners

1. Learn the **big picture**: statements vs. expressions
2. Map **familiar code** to grammar rules
3. Use it as a **reference** when syntax feels confusing

---

## 🔍 Example: Function Call in the Grammar

Code:

```python
my_function(1, 2, name="hello")
```

Grammar:

```peg
primary: primary '(' [arguments] ')'
arguments: args [','] &')'
args: ','.(starred_expression | expression)+
```

---

## 🌟 Final Thought

The grammar might look intimidating, but it’s essentially Python’s **constitution** — the set of formal rules that ensures Python behaves consistently across all interpreters and platforms.

For further exploration, browse the full grammar here:
📂 [CPython Grammar on GitHub](https://github.com/python/cpython/tree/main/Grammar)
