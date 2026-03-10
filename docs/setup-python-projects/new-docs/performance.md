# 20 Python Performance Tricks Used by Senior Engineers

Below are **20 Python performance techniques senior engineers use** to dramatically speed up programs. These focus on **algorithm choice, memory efficiency, and correct use of the standard library**.

Official optimization reference:
[https://docs.python.org/3/faq/programming.html#my-program-is-too-slow-how-do-i-speed-it-up](https://docs.python.org/3/faq/programming.html#my-program-is-too-slow-how-do-i-speed-it-up)

## 1. Use Sets for Fast Membership Tests

Bad:

```python
if user in users_list:
```

Better:

```python
users_set = set(users_list)

if user in users_set:
```

Complexity:

```
list lookup → O(n)
set lookup → O(1)
```

---

# 2. Use Dictionary Lookups Instead of If Chains

Bad:

```python
if cmd == "start":
    start()
elif cmd == "stop":
    stop()
```

Better:

```python
commands = {
    "start": start,
    "stop": stop
}

commands[cmd]()
```

---

# 3. Use List Comprehensions Instead of Loops

Slower:

```python
result = []
for x in numbers:
    result.append(x * 2)
```

Faster:

```python
result = [x * 2 for x in numbers]
```

Reason: implemented internally in optimized C loops.

---

# 4. Use Generator Expressions for Large Data

Avoid loading everything into memory.

Bad:

```python
sum([x*x for x in numbers])
```

Better:

```python
sum(x*x for x in numbers)
```

---

# 5. Use Built-in Functions

Built-ins are implemented in **C** and are much faster.

Example:

```python
sum(numbers)
min(numbers)
max(numbers)
```

Docs:
[https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)

---

# 6. Avoid Repeated Attribute Lookups

Slow:

```python
for item in data:
    result.append(item.value)
```

Better:

```python
append = result.append

for item in data:
    append(item.value)
```

Reduces attribute resolution overhead.

---

# 7. Use `join()` for String Concatenation

Bad:

```python
s = ""
for word in words:
    s += word
```

Better:

```python
s = "".join(words)
```

Why:

```
+= creates many temporary strings
join allocates once
```

---

# 8. Use `collections.deque` for Queues

Lists are inefficient for front removals.

Better queue:

```python
from collections import deque

queue = deque()
queue.append(1)
queue.popleft()
```

Docs:
[https://docs.python.org/3/library/collections.html#collections.deque](https://docs.python.org/3/library/collections.html#collections.deque)

---

# 9. Use `heapq` for Top-K Problems

Instead of sorting everything.

Bad:

```python
sorted(nums)[-3:]
```

Better:

```python
import heapq

heapq.nlargest(3, nums)
```

Docs:
[https://docs.python.org/3/library/heapq.html](https://docs.python.org/3/library/heapq.html)

---

# 10. Use `defaultdict` Instead of Checking Keys

Slow:

```python
if key not in d:
    d[key] = []
```

Better:

```python
from collections import defaultdict

d = defaultdict(list)
```

Docs:
[https://docs.python.org/3/library/collections.html#collections.defaultdict](https://docs.python.org/3/library/collections.html#collections.defaultdict)

---

# 11. Cache Expensive Computations

Use **functools**.

```python
from functools import lru_cache

@lru_cache
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)
```

Docs:
[https://docs.python.org/3/library/functools.html#functools.lru_cache](https://docs.python.org/3/library/functools.html#functools.lru_cache)

---

# 12. Avoid Global Variables in Loops

Global lookups are slower.

Bad:

```python
for i in range(len(data)):
    process(data[i])
```

Better:

```python
proc = process

for item in data:
    proc(item)
```

---

# 13. Use `enumerate()` Instead of `range(len())`

Bad:

```python
for i in range(len(items)):
    print(i, items[i])
```

Better:

```python
for i, item in enumerate(items):
    print(i, item)
```

Docs
[https://docs.python.org/3/library/functions.html#enumerate](https://docs.python.org/3/library/functions.html#enumerate)

---

# 14. Prefer Tuples Over Lists for Fixed Data

Tuples are:

* smaller
* faster
* immutable

Example:

```python
point = (10, 20)
```

---

# 15. Use `__slots__` in Classes

Reduces memory usage.

```python
class User:
    __slots__ = ("name", "age")

    def __init__(self, name, age):
        self.name = name
        self.age = age
```

---

# 16. Use Multiprocessing for CPU Work

Threads don't speed up CPU work due to the **CPython** GIL.

Use **multiprocessing**.

```python
from multiprocessing import Pool

Pool().map(process, data)
```

Docs
[https://docs.python.org/3/library/multiprocessing.html](https://docs.python.org/3/library/multiprocessing.html)

---

# 17. Use Async IO for Network Tasks

For IO-heavy workloads use **asyncio**.

```python
import asyncio
```

Best for:

* APIs
* web scraping
* microservices

Docs
[https://docs.python.org/3/library/asyncio.html](https://docs.python.org/3/library/asyncio.html)

---

# 18. Avoid Repeated Sorting

Instead of sorting repeatedly.

Bad:

```python
sorted(data)
sorted(data)
```

Better:

```python
data_sorted = sorted(data)
```

---

# 19. Use `array` for Large Numeric Data

Better memory efficiency.

```python
import array

arr = array.array("i", [1,2,3])
```

Docs
[https://docs.python.org/3/library/array.html](https://docs.python.org/3/library/array.html)

---

# 20. Profile Before Optimizing

Never guess performance problems.

Use **cProfile**.

```python
import cProfile

cProfile.run("my_function()")
```

Docs
[https://docs.python.org/3/library/profile.html](https://docs.python.org/3/library/profile.html)

---

# The Golden Rule of Python Performance

Senior engineers follow this order:

```
1 Fix algorithm complexity
2 Use correct data structure
3 Use built-in functions
4 Reduce memory allocations
5 Profile before optimizing
```

Example improvement:

```
O(n²) → O(n log n)
```

This alone can make code **100× faster**.

---

If you'd like, I can also show you:

**The 15 Python coding patterns used in production systems like Instagram, Netflix, and large-scale APIs.**
These patterns are what truly separate **junior vs senior Python engineers**. 🚀
