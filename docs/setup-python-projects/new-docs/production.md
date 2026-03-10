# Large production platforms

Large production platforms such as **Instagram**, **Netflix**, and **Dropbox** rely heavily on Python in parts of their backend infrastructure. Senior engineers working on large APIs and services use a set of **reliable coding patterns** to keep systems scalable, maintainable, and fast.

Below are **15 Python coding patterns commonly used in production systems**.

Reference:
[https://docs.python.org/3/tutorial/index.html](https://docs.python.org/3/tutorial/index.html)

---

# 1. Configuration Pattern

Centralized configuration stored in dictionaries or dataclasses.

```python
CONFIG = {
    "db_host": "localhost",
    "db_port": 5432,
    "debug": False
}
```

Why it matters:

* separates configuration from code
* easy environment overrides

Production version often uses environment variables.

---

# 2. Dependency Injection Pattern

Avoid hard-coding dependencies.

Bad:

```python
db = Database()
```

Better:

```python
class UserService:
    def __init__(self, db):
        self.db = db
```

Why:

* testable
* modular
* replaceable components

---

# 3. Factory Pattern

Creates objects dynamically.

```python
class DatabaseFactory:

    @staticmethod
    def create(db_type):
        if db_type == "postgres":
            return PostgresDB()
        if db_type == "mysql":
            return MySQLDB()
```

Used for:

* database drivers
* storage backends
* plugin systems

---

# 4. Service Layer Pattern

Separate business logic from API endpoints.

Example structure:

```
api/
services/
models/
repositories/
```

Example:

```python
class UserService:

    def create_user(self, data):
        return user_repository.save(data)
```

Benefits:

* clean architecture
* reusable logic

---

# 5. Repository Pattern

Abstract database operations.

```python
class UserRepository:

    def get_by_id(self, user_id):
        return db.query(User).filter_by(id=user_id)
```

Why:

* database independence
* easier testing

---

# 6. Data Transfer Object (DTO)

Structured data objects using **dataclasses**.

```python
from dataclasses import dataclass

@dataclass
class UserDTO:
    name: str
    email: str
```

Benefits:

* validation
* clear API boundaries

Docs
[https://docs.python.org/3/library/dataclasses.html](https://docs.python.org/3/library/dataclasses.html)

---

# 7. Caching Pattern

Cache expensive computations.

Using **functools**.

```python
from functools import lru_cache

@lru_cache
def expensive_operation(x):
    return x * x
```

Docs
[https://docs.python.org/3/library/functools.html#functools.lru_cache](https://docs.python.org/3/library/functools.html#functools.lru_cache)

---

# 8. Retry Pattern

Retry unstable operations.

```python
import time

def retry(func, retries=3):
    for _ in range(retries):
        try:
            return func()
        except Exception:
            time.sleep(1)
```

Used for:

* network calls
* database operations

---

# 9. Circuit Breaker Pattern

Prevents cascading failures.

Simplified example:

```python
class CircuitBreaker:

    failures = 0
    limit = 3

    def call(self, func):
        if self.failures >= self.limit:
            raise Exception("Service unavailable")

        try:
            return func()
        except:
            self.failures += 1
```

Used in distributed systems.

---

# 10. Background Worker Pattern

Offload heavy tasks.

Common tools:

* **Celery**
* **RQ**

Example:

```python
send_email.delay(user_id)
```

Docs
[https://docs.celeryq.dev](https://docs.celeryq.dev)

---

# 11. Event-Driven Pattern

Trigger actions based on events.

```python
def on_user_created(user):
    send_welcome_email(user)
```

Used in:

* microservices
* analytics pipelines

---

# 12. Middleware Pattern

Used in web frameworks like **Django** and **FastAPI**.

Example:

```python
def middleware(request):
    log_request(request)
```

Handles:

* authentication
* logging
* rate limiting

Docs
[https://fastapi.tiangolo.com/](https://fastapi.tiangolo.com/)

---

# 13. Pagination Pattern

Large APIs never return full datasets.

```python
def get_users(page=1, limit=20):
    offset = (page - 1) * limit
```

Benefits:

* lower memory usage
* faster responses

---

# 14. Bulk Processing Pattern

Avoid single database operations.

Bad:

```
insert 1000 rows one by one
```

Better:

```
bulk insert
```

Example:

```python
db.bulk_save_objects(users)
```

---

# 15. Observability Pattern

Production systems must be observable.

Typical stack:

* structured logging
* metrics
* tracing

Python example:

```python
import logging

logger = logging.getLogger(__name__)
logger.info("User created")
```

Docs
[https://docs.python.org/3/library/logging.html](https://docs.python.org/3/library/logging.html)

---

# Real Production Architecture Example

Typical Python backend structure:

```
project/
│
├── api/
├── services/
├── repositories/
├── models/
├── workers/
├── config/
└── tests/
```

Used in many high-scale systems built with Python frameworks like **Django** and **FastAPI**.

---

# Senior Engineer Mindset

Professionals prioritize:

```
1 Clean architecture
2 Separation of concerns
3 Scalability
4 Observability
5 Performance
```

These patterns allow Python systems to **scale to millions of users**.

---

If you'd like, I can also show you something extremely valuable:

**“The Python architecture blueprint used to design large platforms (microservices + modular monolith) used by companies like Instagram.”**
It includes the **full production folder structure and service layout.** 🚀
