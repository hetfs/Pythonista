---
id: 02-programming-languages
title: Programming Languages
sidebar_position: 2
---

# Types of Programming Languages

Programming languages can be categorized based on **how they execute**, **how they are used**, how they translate [source code into machine instructions](./03-source-code-and-bytcode.md), **type system**, **paradigm**, and **memory management**.

Understanding these categories helps developers choose the right language, tools, and approach for a given problem.

---

## 1. Compiled Languages

A **compiled language** is translated into **machine code before execution** using a compiler.

### How It Works

1. Write the source code.
1. A **compiler** translates the code into a binary executable.
1. The CPU runs the compiled program directly.

### Characteristics

- **Very fast execution**
- Errors detected **during compilation**
- Produces **platform-specific binaries**

### Examples

- C
- C++
- Rust
- Go

### Example

```c
#include <stdio.h>

int main() {
    printf("Hello World\n");
    return 0;
}
````

Compile and run:

```bash
gcc hello.c -o hello
./hello
```

### Key Idea

Compilation converts the **entire program into native machine code before execution**, resulting in high performance.

Source
[https://en.wikipedia.org/wiki/Compiled_language](https://en.wikipedia.org/wiki/Compiled_language)

---

## 2. Interpreted Languages

An **interpreted language** executes code **directly through an interpreter**, typically processing instructions at runtime.

### How It Works

1. The interpreter reads the source code.
1. Instructions are **executed immediately**, often line by line.

### Characteristics

- Generally **slower than compiled languages**
- Easier debugging and rapid iteration
- High portability across systems

### Examples

- Python
- Ruby
- JavaScript

### Example

```python
print("Hello World")
```

Run:

```bash
python hello.py
```

### Key Idea

The interpreter **runs the program directly without producing a standalone binary**.

Source
[https://en.wikipedia.org/wiki/Interpreter_(computing)](https://en.wikipedia.org/wiki/Interpreter_%28computing%29)

---

## 3. Hybrid Languages (Bytecode + Virtual Machine)

Some languages use a **hybrid execution model**. Source code is first compiled into **intermediate bytecode**, which is then executed by a **virtual machine (VM)**.

### How It Works

1. Source code → **Bytecode**
1. Bytecode → **Executed by a Virtual Machine**

### Characteristics

- High portability across operating systems
- Faster than purely interpreted languages
- Slight overhead compared to native binaries

### Examples

- Java
- C#
- Kotlin

### Example (Java)

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

Compile:

```bash
javac Hello.java
```

Run:

```bash
java Hello
```

The program executes inside the **Java Virtual Machine (JVM)**.

Source
[https://en.wikipedia.org/wiki/Java_virtual_machine](https://en.wikipedia.org/wiki/Java_virtual_machine)

---

## 4. Scripting Languages

A **scripting language** is designed to **automate tasks, control applications, or orchestrate systems**.

Most scripting languages are interpreted and optimized for **developer productivity**.

### Characteristics

- Rapid development
- Automation and orchestration
- Often embedded within larger systems

### Examples

- Bash
- PowerShell
- Lua
- Python

### Example

```bash
#!/bin/bash
echo "Backup started"
```

### Typical Use Cases

- DevOps automation
- System administration
- CI/CD pipelines
- Task automation

Source
[https://en.wikipedia.org/wiki/Scripting_language](https://en.wikipedia.org/wiki/Scripting_language)

---

## 5. High-Level vs Low-Level Languages

Languages differ by **abstraction from hardware**.

---

### Low-Level Languages

Operate **close to hardware**, providing direct control over system resources.

#### Examples

- Assembly
- C

#### Characteristics

- Maximum performance
- Direct memory access
- Greater complexity

Source
[https://en.wikipedia.org/wiki/Low-level_programming_language](https://en.wikipedia.org/wiki/Low-level_programming_language)

---

### High-Level Languages

Designed to be **human-readable and easier to write**.

#### Examples

- Python
- JavaScript
- Rust

#### Characteristics

- Abstract hardware details
- Faster development
- Cross-platform portability

Source
[https://en.wikipedia.org/wiki/High-level_programming_language](https://en.wikipedia.org/wiki/High-level_programming_language)

---

## 6. Strongly Typed vs Weakly Typed Languages

Type systems define how **data types are managed**.

---

### Strongly Typed Languages

Enforce **strict rules on type usage**.

Example:

```rust
let x: i32 = 10;
```

Examples: Rust, Java

- Many type errors are caught during **compile time or runtime**.

---

### Weakly Typed Languages

Perform **automatic type conversions**.

Example:

```javascript
"5" + 5
```

Examples: JavaScript, PHP

- Flexible but can produce **unexpected behavior**.

---

## 7. Statically Typed vs Dynamically Typed Languages

Determines **when types are checked**.

---

### Statically Typed

Types are known **at compile time**.

- C, C++, Rust, Go, Java
- Early error detection
- Often better performance

Example:

```rust
let age: i32 = 25;
```

---

### Dynamically Typed

Types are determined **at runtime**.

- Python, JavaScript, Ruby, PHP
- Flexible and fast for prototyping
- Errors appear during execution

Example:

```python
x = 10
x = "hello"
```

Source
[https://en.wikipedia.org/wiki/Dynamic_typing](https://en.wikipedia.org/wiki/Dynamic_typing)

---

## 8. Just-In-Time (JIT) Compiled Languages

**JIT compilation** converts code into machine instructions **at runtime** for better performance.

### How It Works

1. Source → intermediate code
1. Runtime detects **hot code paths**
1. Compiles those paths into **machine code on the fly**

### Examples

- Java (HotSpot JVM)
- JavaScript (V8 engine)
- C# (.NET CLR)
- Python (PyPy)

### Example

```javascript
function add(a, b) {
  return a + b;
}
add(2, 3);
```

- Frequently executed functions are **JIT-compiled** for optimized performance.

Source
[https://en.wikipedia.org/wiki/Just-in-time_compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation)

---

## 9. General-Purpose vs Domain-Specific Languages (DSLs)

### General-Purpose Languages

- Python, C++, Java, Rust
- Wide applicability: web, desktop, mobile, embedded, systems

### Domain-Specific Languages

- SQL, HTML/CSS, MATLAB, Terraform
- Optimized for specific tasks or industries

Source
[https://en.wikipedia.org/wiki/Domain-specific_language](https://en.wikipedia.org/wiki/Domain-specific_language)

---

## 10. Programming Paradigms: Procedural, Object-Oriented, Functional

### Procedural

- Step-by-step instructions
- C, Pascal

### Object-Oriented (OOP)

- Encapsulate data and behavior in objects
- Java, C#, Python

### Functional

- Pure functions, immutable data
- Haskell, Elixir, Scala

Source
[https://en.wikipedia.org/wiki/Programming_paradigm](https://en.wikipedia.org/wiki/Programming_paradigm)

---

## 11. Garbage-Collected vs Manual Memory Management

### Garbage-Collected

- Java, C#, Python, JavaScript
- Runtime automatically frees unused memory

### Manual Memory Management

- C, C++
- Programmer allocates and frees memory explicitly

Source
[https://en.wikipedia.org/wiki/Memory_management_(computer_science)](https://en.wikipedia.org/wiki/Memory_management_%28computer_science%29)

---

## Quick Comparison Table

| Category        | Examples                           |
| --------------- | ---------------------------------- |
| Execution Model | Compiled, Interpreted, Hybrid, JIT |
| Purpose         | General-purpose, DSL               |
| Abstraction     | High-level, Low-level              |
| Type System     | Strong/Weak, Static/Dynamic        |
| Paradigm        | Procedural, OOP, Functional        |
| Memory          | Garbage-collected, Manual          |

---

## Key Takeaway

Modern languages rarely fit into **one single category**. They often combine multiple characteristics:

- **Python** → Interpreted + Dynamically typed + High-level + OOP + Functional + Garbage-collected
- **Rust** → Compiled + Statically typed + Systems programming + Functional + Manual memory management
- **JavaScript** → Interpreted + JIT compiled + Dynamically typed + High-level + OOP + Garbage-collected

Understanding these dimensions allows developers to **choose the best language and tools for performance, safety, productivity, and maintainability**.
