---
id: 13-ascii-REPL
title: ASCII
sidebar_position: 13
description: Learn how ASCII represents characters, its relationship with Unicode, and how to work with ASCII in Python.
---

# 🧩 ASCII

**ASCII** (American Standard Code for Information Interchange) represents **128 unique characters** using a **7-bit encoding scheme**. It includes **letters**, **digits**, **punctuation marks**, and **control characters**. This standard forms the **foundation of modern text encoding** and serves as a **subset of Unicode**, which expands support to thousands of additional symbols, scripts, and emojis.

---

## ✨ Character set overview

ASCII defines **exactly 128 characters** (from `0–127`):

| Type                    | Range    | Description                                                                          |
| ------------------------ | -------- | ------------------------------------------------------------------------------------ |
| **Control characters**   | `0–31`   | Non-printable elements like newline (`\n`), tab (`\t`), and carriage return (`\r`)   |
| **Printable characters** | `32–126` | Spaces, letters, digits, punctuation marks, and symbols                              |
| **Del**                  | `127`    | Delete character (historically used to erase teletyped data)                         |

---

## 🔢 Common ASCII values

| Character type           | Range    | Example                 |
| ------------------------- | -------- | ----------------------- |
| Digits `0–9`              | `48–57`  | `'0' = 48`, `'9' = 57`  |
| Uppercase letters `A–Z`   | `65–90`  | `'A' = 65`, `'Z' = 90`  |
| Lowercase letters `a–z`   | `97–122` | `'a' = 97`, `'z' = 122` |
| Space                     | `32`     | `' ' = 32`              |
| Newline (LF)              | `10`     | `'\n' = 10`             |
| Tab                       | `9`      | `'\t' = 9`              |

---

## 🐍 Working with ASCII in Python

Python includes built-in tools for handling ASCII conversions and validation.

### Convert character to ASCII code

```python
>>> ord('A')
65
````

### Convert ASCII code to character

```python
>>> chr(65)
'A'
```

### Check if a string uses ASCII

```python
>>> "Hello".isascii()
True
>>> "Café".isascii()
False
```

### Encode and decode ASCII

```python
>>> text = "Hello"
>>> encoded = text.encode('ascii')
>>> encoded
b'Hello'

>>> encoded.decode('ascii')
'Hello'
```

---

## 🧰 ASCII-aware string methods

Python string methods provide ASCII-aware utilities for validation and manipulation.

| Method                | Description                               | Example                          |
| --------------------- | ----------------------------------------- | -------------------------------- |
| `isascii()`           | Checks if all characters use ASCII        | `'Hello'.isascii()` → `True`     |
| `isalpha()`           | Checks if all characters are letters      | `'ABC'.isalpha()` → `True`       |
| `isdigit()`           | Checks if all characters are digits       | `'123'.isdigit()` → `True`       |
| `isalnum()`           | Checks if all characters are alphanumeric | `'A1B2'.isalnum()` → `True`      |
| `isprintable()`       | Checks if characters are printable        | `'Hi\n'.isprintable()` → `False` |
| `upper()` / `lower()` | Changes letter case                       | `'abc'.upper()` → `'ABC'`        |

These methods help with **text normalization**, **input checks**, and **data cleaning**.

---

## 🧮 ASCII and string operations

Because ASCII maps each character to a numeric code, it enables simple text-based loops and transformations.

```python
# Generate alphabet sequence
for i in range(ord('A'), ord('Z') + 1):
    print(chr(i), end=' ')
```

**Output:**

```
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
```

You can also build basic ciphers, such as a Caesar cipher:

```python
def shift_char(c, shift=3):
    if c.isalpha():
        base = ord('A') if c.isupper() else ord('a')
        return chr((ord(c) - base + shift) % 26 + base)
    return c

print(shift_char('A'))  # D
```

---

## 🌐 ASCII versus Unicode

While **ASCII** uses 7 bits for 128 characters, **Unicode** extends the range to include nearly all languages and symbols.

| Feature          | ASCII       | Unicode                        |
| ---------------- | ------------ | ------------------------------ |
| Bits             | 7-bit        | Variable (8, 16, or 32-bit)    |
| Characters       | 128          | 140,000+                       |
| Language support | English only | Global                         |
| Example          | `'A' = 65`   | `'A' = U+0041`, `'你' = U+4F60` |

The first 128 Unicode characters match ASCII for **full backward compatibility**.

---

## ⚙️ Handling non-ascii characters

When working with accented letters, emojis, or international text, use **UTF-8 encoding**.

### Encode to UTF-8

```python
>>> text = "Café ☕"
>>> encoded = text.encode('utf-8')
>>> encoded
b'Caf\xc3\xa9 \xe2\x98\x95'
```

### Decode from UTF-8

```python
>>> encoded.decode('utf-8')
'Café ☕'
```

### Handle encoding errors

```python
>>> "Café".encode('ascii', errors='replace')
b'Caf?'
```

| Error mode           | Description                            |
| -------------------- | -------------------------------------- |
| `'ignore'`           | Skips non-ascii characters             |
| `'replace'`          | Substitutes `?` for invalid bytes      |
| `'backslashreplace'` | Uses escape sequences such as `\u00e9` |

---

## 💻 Common uses of ASCII

ASCII remains widely used because of its simplicity and reliability. Some use cases include:

1. **Data transmission** ensures consistent text encoding across systems (for example, email headers or HTTP protocols).
2. **File formats** plain text files such as `.txt`, `.csv`, and `.ini` rely on ASCII compatibility.
3. **Programming and debugging** useful for inspecting binary data, logs, or protocols.
4. **Embedded systems** microcontrollers rely on ASCII for serial communication.
5. **Networking and APIs** legacy systems often exchange ASCII messages for simplicity.

---

## 🧭 Best practices for ASCII

1. **Prefer UTF-8 encoding** always use UTF-8 because it’s ASCII compatible and supports every Unicode character.

2. **Validate input data** use `.isascii()` or regular expressions to detect invalid input.

3. **Handle errors gracefully** specify `errors='ignore'` or `errors='replace'` when decoding uncertain sources.

4. **Normalize strings before comparison** Unicode characters can appear identical but differ internally.

   ```python
   import unicodedata
   s1 = "é"
   s2 = "e\u0301"
   print(s1 == s2)  # False without normalization
   print(unicodedata.normalize('NFC', s1) == unicodedata.normalize('NFC', s2))  # True
   ```

5. **Use ASCII for identifiers and protocols** maximizes compatibility across systems.

---

## 💡 Key takeaways

* ASCII encodes **128 characters using 7 bits** and forms the **core of Unicode**.
* It continues to play a vital role in **protocols, programming, and text systems**.
* Use **UTF-8** for multilingual applications.
* Always **validate, normalize, and encode safely** when handling text.

---

### 📚 References

* [Official ASCII Table ASCII-Code.com](https://www.ascii-code.com)
* [Unicode Standard Overview Unicode.org](https://www.unicode.org/standard/standard.html)
* [Python Unicode HOWTO Python.org](https://docs.python.org/3/howto/unicode.html)
