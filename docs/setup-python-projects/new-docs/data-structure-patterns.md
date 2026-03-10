# Top 25 Python Data Structure Patterns

## 1. Dictionary as a Lookup Table

Fast key-value access.

```python
status_codes = {
    200: "OK",
    404: "Not Found",
    500: "Server Error"
}

print(status_codes[404])
```

Complexity:

```
Lookup → O(1)
```

Real-world use:

* HTTP status mapping
* configuration lookup
* routing tables

---

# 2. List as a Stack

Last-in-first-out structure.

```python
stack = []

stack.append(1)
stack.append(2)
stack.pop()
```

Use cases:

* recursion simulation
* undo systems
* parsing

---

# 3. Queue with deque

Use **collections** `deque` instead of lists.

```python
from collections import deque

queue = deque()

queue.append("task1")
queue.popleft()
```

Why:

```
list pop(0) → O(n)
deque popleft → O(1)
```

Docs
[https://docs.python.org/3/library/collections.html#collections.deque](https://docs.python.org/3/library/collections.html#collections.deque)

---

# 4. Dictionary of Lists (Grouping Pattern)

Common in analytics pipelines.

```python
from collections import defaultdict

groups = defaultdict(list)

groups["admin"].append("Alice")
groups["admin"].append("Bob")
```

Use cases:

* grouping records
* adjacency lists

Docs
[https://docs.python.org/3/library/collections.html#collections.defaultdict](https://docs.python.org/3/library/collections.html#collections.defaultdict)

---

# 5. Frequency Counter

Using **Counter**

```python
from collections import Counter

Counter("banana")
```

Output:

```
{'a': 3, 'n': 2, 'b': 1}
```

Use cases:

* log analysis
* NLP
* metrics

Docs
[https://docs.python.org/3/library/collections.html#collections.Counter](https://docs.python.org/3/library/collections.html#collections.Counter)

---

# 6. Membership Set Pattern

Fast existence checking.

```python
allowed_users = {"alice", "bob"}

if "alice" in allowed_users:
    print("Access granted")
```

Why:

```
set lookup → O(1)
```

---

# 7. Deduplication Pattern

```python
unique_values = list(set(values))
```

Real-world use:

* removing duplicates
* unique IDs

---

# 8. Dictionary Merge Pattern

```python
config = {**default_config, **user_config}
```

Modern alternative:

```python
config = default_config | user_config
```

(Python 3.9+)

Docs
[https://docs.python.org/3/library/stdtypes.html#dict](https://docs.python.org/3/library/stdtypes.html#dict)

---

# 9. Safe Dictionary Access

Avoid crashes.

```python
value = data.get("key", "default")
```

Never do:

```python
data["missing"]
```

---

# 10. Nested Dictionary for Configurations

Used heavily in frameworks.

```python
config = {
    "database": {
        "host": "localhost",
        "port": 5432
    }
}
```

---

# 11. Named Tuple Pattern

Better than plain tuples.

Using **typing**

```python
from typing import NamedTuple

class User(NamedTuple):
    name: str
    age: int
```

Access:

```
user.name
```

Docs
[https://docs.python.org/3/library/typing.html#typing.NamedTuple](https://docs.python.org/3/library/typing.html#typing.NamedTuple)

---

# 12. Dataclass Pattern

Professional model representation using **dataclasses**.

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int
```

Docs
[https://docs.python.org/3/library/dataclasses.html](https://docs.python.org/3/library/dataclasses.html)

---

# 13. Priority Queue Pattern

Using **heapq**.

```python
import heapq

tasks = []
heapq.heappush(tasks, (1, "urgent"))
heapq.heappop(tasks)
```

Use cases:

* scheduling
* task priority systems

Docs
[https://docs.python.org/3/library/heapq.html](https://docs.python.org/3/library/heapq.html)

---

# 14. Sliding Window Pattern

Efficient stream processing.

```python
from collections import deque

window = deque(maxlen=3)
```

Used for:

* real-time analytics
* moving averages

---

# 15. Adjacency List for Graphs

Graph representation.

```python
graph = {
    "A": ["B","C"],
    "B": ["D"]
}
```

Used in:

* routing
* dependency graphs

---

# 16. Dictionary Dispatch Pattern

Replace large `if/elif` chains.

```python
def add(x,y): return x+y
def sub(x,y): return x-y

operations = {
    "add": add,
    "sub": sub
}

operations["add"](3,2)
```

---

# 17. Cache Dictionary Pattern

```python
cache = {}

def compute(x):
    if x not in cache:
        cache[x] = x * x
    return cache[x]
```

Better version uses **functools**.

```python
from functools import lru_cache
```

Docs
[https://docs.python.org/3/library/functools.html](https://docs.python.org/3/library/functools.html)

---

# 18. Flatten Nested Lists

```python
flat = [item for sublist in data for item in sublist]
```

---

# 19. Inverted Index Pattern

Used in search engines.

```python
index = {
    "python": [1,5,8],
    "code": [2,5]
}
```

---

# 20. Set Intersection Pattern

```python
common_users = set(group1) & set(group2)
```

Use cases:

* recommendation systems
* permissions

---

# 21. Top-K Elements Pattern

```python
import heapq

heapq.nlargest(3, numbers)
```

Docs
[https://docs.python.org/3/library/heapq.html](https://docs.python.org/3/library/heapq.html)

---

# 22. Multi-Key Sorting Pattern

```python
sorted(users, key=lambda u: (u.age, u.name))
```

---

# 23. Chunking Data Pattern

```python
chunks = [data[i:i+10] for i in range(0, len(data), 10)]
```

Used in:

* batch processing
* APIs

---

# 24. Immutable Configuration Pattern

Using tuples.

```python
ALLOWED_EXT = ("jpg","png","gif")
```

---

# 25. Generator Data Pipeline

Memory-efficient processing.

```python
def read_lines(file):
    for line in file:
        yield line.strip()
```

Use cases:

* large files
* streaming data

Docs
[https://docs.python.org/3/reference/expressions.html#yieldexpr](https://docs.python.org/3/reference/expressions.html#yieldexpr)

---

# Senior Developer Rule

Professional Python engineers think like this:

```
Need order → list
Need uniqueness → set
Need fast lookup → dict
Need queue → deque
Need priority → heap
Need record object → dataclass
Need streaming → generator
```

---

✅ If you'd like, I can also show you **the 20 Python performance tricks senior engineers use to make code 10–100× faster**.
