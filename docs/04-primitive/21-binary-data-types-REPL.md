---
id: 21-binary-data-types
title: Binary Data Types
sidebar_position: 21
description: Learn how Python handles raw binary data with immutable bytes, mutable bytearrays, and zero-copy memoryviews for efficient data processing.
---

# ⚙️ Binary Data Types in Python

Binary data types are essential when working with **low-level data**, **network protocols**, **images**, or **files**.
They represent data as **raw bytes** instead of text—ideal for performance-critical and I/O-heavy tasks.

Python provides three main binary types:

| Type | Mutable | Description |
|------|----------|-------------|
| `bytes` | ❌ No | Immutable sequence of bytes |
| `bytearray` | ✅ Yes | Mutable sequence of bytes |
| `memoryview` | ⚙️ Semi | Zero-copy view of existing binary data |

---

## 🧱 1. `bytes` Immutable binary sequences

The **`bytes`** type is similar to a string, but each element represents a **byte (0–255)** instead of a character.

```python
data = b"Hello"
print(data)        # b'Hello'
print(data[0])     # 72 (ASCII code for 'H')
print(data[1:4])   # b'ell'
````

### ✅ Characteristics

* Immutable you can't modify its contents.
* Commonly used in network I/O or file operations.
* Created using literals (`b"..."`) or constructors (`bytes()`).

### 🔄 Conversion examples

```python
# From string
text = "Python"
encoded = text.encode("utf-8")
print(encoded)  # b'Python'

# Back to string
decoded = encoded.decode("utf-8")
print(decoded)  # Python
```

---

## 🧬 2. `bytearray` Mutable binary sequences

Unlike `bytes`, a **`bytearray`** can be **modified in place**, making it ideal for buffer manipulation and streaming data.

```python
buf = bytearray(b"Python")
buf[0] = ord("J")
print(buf)           # bytearray(b'Jython')
print(buf.decode())  # Jython
```

### ✅ Characteristics

* Mutable supports item assignment and slice modification.
* Useful for encryption, compression, and binary file editing.
* Can be converted back to `bytes` when immutability is required.

```python
immutable_copy = bytes(buf)
```

---

## 🧠 3. `memoryview` Zero-Copy Access to Binary Buffers

`memoryview` provides a **view** of data stored in other binary objects (such as `bytes` or `bytearray`) **without copying** it.
This approach improves performance when handling large datasets or slicing binary structures.

```python
data = bytearray(b"BinaryData")
view = memoryview(data)

print(view[0])       # 66 ('B')
view[0] = ord('b')   # Modify through the view
print(data)          # bytearray(b'binaryData')
```

### ⚡ Why use `memoryview`

* Avoids memory duplication.
* Enables fast slicing and modification.
* Commonly used in scientific computing and networking.

---

## 🧮 Common binary operations

| Operation            | Description         | Example                 |
| -------------------- | ------------------- | ----------------------- |
| `len(data)`          | Get number of bytes | `len(b"ABC") → 3`       |
| `data[i]`            | Access a byte value | `b"Hi"[0] → 72`         |
| `data1 + data2`      | Concatenate         | `b"Hi" + b"!" → b"Hi!"` |
| `b"Py" in b"Python"` | Membership test     | ✅ True                  |
| `bytearray(b"A"*5)`  | Repeat bytes        | `bytearray(b"AAAAA")`   |

---

## 📦 Conversions between types

```python
b = b"abc"
ba = bytearray(b)
mv = memoryview(ba)

# Convert back
b2 = bytes(ba)
ba2 = bytearray(mv)
```

| Conversion          | Example         | Result          |
| ------------------- | --------------- | --------------- |
| `bytes(bytearray)`  | `bytes(ba)`     | Immutable copy  |
| `bytearray(bytes)`  | `bytearray(b)`  | Mutable version |
| `memoryview(bytes)` | `memoryview(b)` | Zero-copy view  |

---

## 🧰 Real-world use cases

### 1. File I/O

```python
with open("data.bin", "wb") as f:
    f.write(b"Binary Example")
```

### 2. Networking (sockets)

```python
import socket

data = b"Hello Server"
sock = socket.socket()
sock.connect(("localhost", 8080))
sock.sendall(data)
```

### 3. Image processing

```python
raw = bytearray(open("image.jpg", "rb").read())
print(len(raw))  # Number of bytes in the image
```

---

## ⚙️ Performance tips

* Use `bytes` for **immutability and safety**.
* Use `bytearray` for **mutable buffers**.
* Use `memoryview` for **large datasets or I/O operations** where copying data would be inefficient.

---

## 💡 Summary

| Type         | Mutable    | Copy-Free | Use Case                   |
| ------------ | ---------- | --------- | -------------------------- |
| `bytes`      | ❌          | ❌         | Text encoding, network I/O |
| `bytearray`  | ✅          | ❌         | In-place modification      |
| `memoryview` | ⚙️ Partial | ✅         | Efficient data slicing     |
