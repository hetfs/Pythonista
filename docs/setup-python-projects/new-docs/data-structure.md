
# Python Data Structures Mastery Roadmap

## Stage 1 — Primitive Foundations

These types are the base of everything in Python.

### 1. Numbers

Types:

* `int`
* `float`
* `complex`

What to learn:

* arithmetic operations
* type conversion
* precision issues with floats

Example:

```python
a = 10
b = 2.5
c = a * b
```

Real-world use:

* calculations
* statistics
* financial models

Time complexity:

| Operation  | Complexity |
| ---------- | ---------- |
| Arithmetic | O(1)       |

---

### 2. Boolean

Represents logical truth.

```python
is_valid = True
```

What to learn:

* logical operators
* truthy vs falsy values

Real-world use:

* validation
* conditional logic
* filtering

---

### 3. NoneType

Represents absence of value.

```python
result = None
```

Best practice:

```python
if result is None:
```

Never use:

```python
if result == None
```

---

# Stage 2 — Core Collection Structures

These are used in almost every Python program.

---

# 1. List

Lists are **dynamic arrays**.

Example:

```python
items = [1, 2, 3]
items.append(4)
```

Key properties:

* ordered
* mutable
* allow duplicates

Complexity:

| Operation | Complexity |
| --------- | ---------- |
| Access    | O(1)       |
| Append    | O(1)       |
| Insert    | O(n)       |
| Delete    | O(n)       |
| Search    | O(n)       |

Best practices:

* use `.append()` instead of concatenation
* prefer list comprehensions

Example:

```python
squares = [x*x for x in range(10)]
```

Real-world usage:

* data processing
* iteration pipelines
* batch tasks

Documentation:
[https://docs.python.org/3/tutorial/datastructures.html](https://docs.python.org/3/tutorial/datastructures.html)

---

# 2. Tuple

Immutable sequence.

```python
point = (10, 20)
```

Key properties:

* ordered
* immutable
* faster than lists

Complexity:

| Operation | Complexity |
| --------- | ---------- |
| Access    | O(1)       |

Best practices:

Use tuples for:

* coordinates
* database rows
* fixed configuration

Example:

```python
def get_user():
    return ("Alice", 25)
```

---

# 3. Dictionary

Hash table implementation.

```python
user = {
    "name": "Alice",
    "age": 25
}
```

Properties:

* key → value mapping
* fast lookup
* unordered before Python 3.7 (now insertion ordered)

Complexity:

| Operation | Complexity |
| --------- | ---------- |
| Lookup    | O(1)       |
| Insert    | O(1)       |
| Delete    | O(1)       |

Best practices:

Use `.get()` safely:

```python
age = user.get("age", 0)
```

Real-world usage:

* APIs
* configuration
* caching
* JSON processing

Documentation:
[https://docs.python.org/3/library/stdtypes.html#mapping-types-dict](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)

---

# 4. Set

Unordered collection of unique items.

```python
unique_ids = {1, 2, 3}
```

Properties:

* unique values
* fast membership tests

Complexity:

| Operation | Complexity |
| --------- | ---------- |
| Lookup    | O(1)       |
| Insert    | O(1)       |
| Delete    | O(1)       |

Operations:

```python
a | b   # union
a & b   # intersection
a - b   # difference
```

Real-world usage:

* deduplication
* membership testing
* graph algorithms

Documentation:
[https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)

---

# Stage 3 — Specialized Data Structures

These live in the **Python Standard Library**.

---

## deque

From **collections**.

Double-ended queue.

```python
from collections import deque

queue = deque([1,2,3])
queue.appendleft(0)
```

Complexity:

| Operation  | Complexity |
| ---------- | ---------- |
| append     | O(1)       |
| appendleft | O(1)       |
| pop        | O(1)       |
| popleft    | O(1)       |

Real-world usage:

* task queues
* sliding windows
* BFS algorithms

Docs:
[https://docs.python.org/3/library/collections.html#collections.deque](https://docs.python.org/3/library/collections.html#collections.deque)

---

## Counter

Frequency counting.

```python
from collections import Counter

Counter("banana")
```

Output:

```
{'b':1,'a':3,'n':2}
```

Real-world usage:

* word frequency
* analytics
* statistics

Docs:
[https://docs.python.org/3/library/collections.html#collections.Counter](https://docs.python.org/3/library/collections.html#collections.Counter)

---

## defaultdict

Automatically creates missing keys.

```python
from collections import defaultdict

d = defaultdict(list)
d["a"].append(1)
```

Real-world usage:

* grouping data
* building adjacency lists

Docs:
[https://docs.python.org/3/library/collections.html#collections.defaultdict](https://docs.python.org/3/library/collections.html#collections.defaultdict)

---

# Stage 4 — Advanced Structures

---

## Heap (Priority Queue)

From **heapq**.

Example:

```python
import heapq

nums = [5,1,3]
heapq.heapify(nums)
heapq.heappop(nums)
```

Complexity:

| Operation | Complexity |
| --------- | ---------- |
| Push      | O(log n)   |
| Pop       | O(log n)   |

Real-world usage:

* scheduling
* shortest path algorithms
* priority systems

Docs:
[https://docs.python.org/3/library/heapq.html](https://docs.python.org/3/library/heapq.html)

---

## NamedTuple

From **typing**.

Structured tuples.

```python
from typing import NamedTuple

class Point(NamedTuple):
    x: int
    y: int
```

Better readability.

---

## Dataclasses

From **dataclasses**.

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int
```

Real-world usage:

* models
* configuration
* domain objects

Docs:
[https://docs.python.org/3/library/dataclasses.html](https://docs.python.org/3/library/dataclasses.html)

---

# Stage 5 — Algorithmic Data Structures

These appear in interviews and advanced systems.

Learn to implement:

* Stack
* Queue
* Linked List
* Tree
* Graph
* Trie

Example stack using list:

```python
stack = []

stack.append(1)
stack.pop()
```

---

# Stage 6 — Performance Awareness

Professional developers choose structures based on complexity.

Example:

Bad:

```python
if x in large_list:
```

Better:

```python
if x in large_set:
```

Why:

```
list lookup  O(n)
set lookup   O(1)
```

---

# Stage 7 — Real-World Engineering Patterns

## Configuration systems

```python
config = {
    "database": {
        "host": "localhost",
        "port": 5432
    }
}
```

---

## Graphs

```python
graph = {
    "A": ["B","C"],
    "B": ["D"]
}
```

---

## Caching

```python
cache = {}
```

---

# Stage 8 — Advanced Professional Tools

Professional Python engineers also learn:

* `array`
* `bisect`
* `weakref`
* `types.MappingProxyType`

Documentation:
[https://docs.python.org/3/library/index.html](https://docs.python.org/3/library/index.html)

---

# Final Professional Learning Order

Best mastery sequence:

```
1 Numbers
2 Boolean
3 None
4 String
5 List
6 Tuple
7 Dictionary
8 Set
9 deque
10 defaultdict
11 Counter
12 heapq
13 NamedTuple
14 Dataclasses
15 Trees / Graphs / Algorithms
```

---

# Pro Developer Tip

The **biggest professional skill** is not knowing the structures, but knowing **when to use them**.

Example decision rule:

```
Need order → list
Need uniqueness → set
Need key lookup → dict
Need queue → deque
Need priority → heap
Need immutable record → tuple/dataclass
```
