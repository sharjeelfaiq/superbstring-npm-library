# SuperbString

[![npm version](https://img.shields.io/npm/v/superbstring.svg)](https://www.npmjs.com/package/superbstring)
[![npm weekly downloads](https://img.shields.io/npm/dw/superbstring.svg)](https://www.npmjs.com/package/superbstring)
[![license: ISC](https://img.shields.io/npm/l/superbstring.svg)](LICENSE)
[![TypeScript support](https://img.shields.io/badge/TypeScript-supported-blue.svg)](dist/index.d.ts)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)](package.json)
[![CI](https://github.com/sharjeelfaiq/superbstring/actions/workflows/ci.yml/badge.svg)](https://github.com/sharjeelfaiq/superbstring/actions/workflows/ci.yml)

SuperbString is a zero-dependency JavaScript and TypeScript string utilities package for text cleanup, string manipulation, slug generation, Base64 encoding, URI encoding, formatting, parsing, and lightweight text processing.

## Features

- Zero dependencies
- TypeScript support with bundled declarations
- CommonJS support for Node.js projects
- Text cleanup utilities for whitespace normalization and symbol removal
- Encoding helpers for Base64 and URI encoding
- Formatting helpers for slugs, truncation, prefixes, suffixes, and ROT13
- String extraction helpers for text and numbers

## Installation

```bash
npm install superbstring
```

## Quick Start

TypeScript:

```typescript
import { slugify, removeExtraSpaces, base64Encode } from "superbstring";

const slug = slugify("Hello, World!");
const cleanText = removeExtraSpaces("  Clean   this   text  ");
const encoded = base64Encode("SuperbString");

console.log(slug); // "hello-world"
console.log(cleanText); // "Clean this text"
console.log(encoded); // "U3VwZXJiU3RyaW5n"
```

CommonJS:

```javascript
const superbString = require("superbstring");

console.log(superbString.slugify("Hello, World!")); // "hello-world"
console.log(superbString.truncate("Big Cat lives in the Jungle", 13)); // "Big Cat lives"
```

## String Utilities

Use these JavaScript string utilities for common string manipulation tasks.

| Function | Purpose |
| --- | --- |
| `splitString` | Replace delimiters with newlines |
| `joinString` | Replace newlines with spaces |
| `duplicate` | Repeat a string |
| `reverse` | Reverse UTF-16 code units |
| `truncate` | Return a substring up to a max length |
| `alphabetize` | Sort space-separated words |
| `getRandomCharacters` | Generate a random character string |

## Text Processing

Use these TypeScript string utilities for text processing, text cleanup, and parsing user-generated content.

| Function | Purpose |
| --- | --- |
| `removeExtraSpaces` | Normalize whitespace and remove spaces before punctuation |
| `removeAllSpaces` | Remove all whitespace |
| `removeAllSymbols` | Keep alphanumeric characters and spaces |
| `paraToSingleLine` | Collapse whitespace into one line |
| `extractText` | Keep letters and spaces only |
| `extractNumber` | Keep digits and spaces only |
| `getDummyText` | Return placeholder text |

## Encoding Utilities

Use these helpers for Base64 encoding, Base64 decoding, URI encoding, and URI decoding.

| Function | Purpose |
| --- | --- |
| `base64Encode` | Encode a string as Base64 |
| `base64Decode` | Decode a Base64 string |
| `compare` | Compare plain text with Base64-encoded text |
| `encodeUri` | Encode a URI with `encodeURI` |
| `decodeUri` | Decode a URI with `decodeURI` |

## Formatting Utilities

Use these helpers for string formatting, slug generation, decoration, and affixes.

| Function | Purpose |
| --- | --- |
| `slugify` | Create URL-friendly slugs |
| `addPrefix` | Add a prefix |
| `addSuffix` | Add a suffix |
| `rotate13Deg` | Apply ROT13 to letters |
| `zalgo` | Add random combining marks |

## API Reference

### splitString(string, delimiter = " ")

Replaces each delimiter occurrence with a newline character.

```javascript
const { splitString } = require("superbstring");

splitString("Hello World", " "); // "Hello\nWorld"
```

### joinString(string)

Replaces newline characters with spaces.

```javascript
const { joinString } = require("superbstring");

joinString("Hello\nWorld"); // "Hello World"
```

### base64Encode(string)

Encodes a string as Base64.

```javascript
const { base64Encode } = require("superbstring");

base64Encode("The quick brown fox."); // "VGhlIHF1aWNrIGJyb3duIGZveC4="
```

### base64Decode(string)

Decodes a Base64 string. Malformed input may throw the platform decoder error.

```javascript
const { base64Decode } = require("superbstring");

base64Decode("VGhlIHF1aWNrIGJyb3duIGZveC4="); // "The quick brown fox."
```

### compare(string, encodedString)

Returns `true` when `encodedString` decodes to `string`; otherwise returns `false`.

```javascript
const { compare } = require("superbstring");

compare("hello", "aGVsbG8="); // true
compare("hello", "d29ybGQ="); // false
```

### removeExtraSpaces(string)

Normalizes whitespace by collapsing repeated whitespace to single spaces, trimming leading and trailing whitespace, and removing spaces before punctuation.

```javascript
const { removeExtraSpaces } = require("superbstring");

removeExtraSpaces("   One   space   between   each   word    ");
// "One space between each word"
```

### removeAllSpaces(string)

Removes all whitespace.

```javascript
const { removeAllSpaces } = require("superbstring");

removeAllSpaces("   No   space   anywhere    "); // "Nospaceanywhere"
```

### removeAllSymbols(string)

Removes symbols and keeps alphanumeric characters and spaces.

```javascript
const { removeAllSymbols } = require("superbstring");

removeAllSymbols("Hello, World!"); // "Hello World"
removeAllSymbols("abc/123_$"); // "abc123"
```

### duplicate(string, count = 2)

Repeats a string. Invalid counts use the native `String.prototype.repeat` behavior.

```javascript
const { duplicate } = require("superbstring");

duplicate("hello", 3); // "hellohellohello"
```

### reverse(string)

Reverses UTF-16 code units in a string.

```javascript
const { reverse } = require("superbstring");

reverse("hello"); // "olleh"
```

### slugify(string)

Lowercases a string, replaces spaces with hyphens, and removes non-word characters except hyphens.

```javascript
const { slugify } = require("superbstring");

slugify("Hello, World!"); // "hello-world"
```

### truncate(string, maxLength)

Returns `string.substring(0, maxLength)`.

```javascript
const { truncate } = require("superbstring");

truncate("Big Cat lives in the Jungle", 13); // "Big Cat lives"
```

### paraToSingleLine(string)

Collapses whitespace into single spaces.

```javascript
const { paraToSingleLine } = require("superbstring");

paraToSingleLine("Why so serious?\nLet's smile.");
// "Why so serious? Let's smile."
```

### alphabetize(string)

Sorts space-separated words using `localeCompare`.

```javascript
const { alphabetize } = require("superbstring");

alphabetize("Welcome to the world of JavaScript!");
// "JavaScript! of the to Welcome world"
```

### zalgo(string)

Adds random combining marks to each non-space character.

```javascript
const { zalgo } = require("superbstring");

zalgo("Decorate me");
```

### rotate13Deg(string)

Applies ROT13 to alphabetic characters. Non-letters are unchanged.

```javascript
const { rotate13Deg } = require("superbstring");

rotate13Deg("Hello World!"); // "Uryyb Jbeyq!"
rotate13Deg("Uryyb Jbeyq!"); // "Hello World!"
```

### encodeUri(string)

Encodes a URI using `encodeURI`.

```javascript
const { encodeUri } = require("superbstring");

encodeUri("Hello, World!"); // "Hello,%20World!"
```

### decodeUri(string)

Decodes a URI using `decodeURI`. Malformed input throws `URIError`.

```javascript
const { decodeUri } = require("superbstring");

decodeUri("Hello,%20World!"); // "Hello, World!"
```

### extractText(string)

Keeps letters and spaces only.

```javascript
const { extractText } = require("superbstring");

extractText("3.14 is a pi number."); // " is a pi number"
extractText("abc/123_$"); // "abc"
```

### extractNumber(string)

Keeps digits and spaces only.

```javascript
const { extractNumber } = require("superbstring");

extractNumber("4 apples, 3 oranges, 1 banana, 2 pears");
// "4  3  1  2 "
extractNumber("abc/123_$"); // "123"
```

### addPrefix(string, prefix)

Adds a prefix.

```javascript
const { addPrefix } = require("superbstring");

addPrefix("world", "hello "); // "hello world"
```

### addSuffix(string, suffix)

Adds a suffix.

```javascript
const { addSuffix } = require("superbstring");

addSuffix("hello", " world"); // "hello world"
```

### getDummyText()

Returns placeholder text.

```javascript
const { getDummyText } = require("superbstring");

getDummyText();
```

### getRandomCharacters(length)

Returns a random string with the requested length.

```javascript
const { getRandomCharacters } = require("superbstring");

getRandomCharacters(10); // for example, "MudjZT5ubk"
```

## Behavior Notes

- `reverse` reverses UTF-16 code units, so complex Unicode characters such as emoji can be split.
- `getRandomCharacters` uses `Math.random()` and is not cryptographically secure.
- `encodeUri` uses JavaScript's `encodeURI`, not `encodeURIComponent`.
- `decodeUri` uses JavaScript's `decodeURI` and malformed input throws `URIError`.
- `base64Encode`, `base64Decode`, and `compare` rely on platform `btoa` and `atob` APIs.

## TypeScript Support

SuperbString includes generated TypeScript declaration files through the package `types` field. Named imports work in TypeScript projects:

```typescript
import { slugify, truncate, extractNumber } from "superbstring";

const slug: string = slugify("Hello, World!");
const summary: string = truncate("Big Cat lives in the Jungle", 13);
const numbers: string = extractNumber("Order #123");
```

## Why SuperbString

- **Zero dependencies:** keeps installs small and reduces supply-chain surface area.
- **Small package size:** focused utilities without a large framework or runtime dependency.
- **Practical utilities:** common string manipulation, text cleanup, string formatting, encoding, decoding, and parsing helpers in one package.
- **TypeScript support:** declarations are included for editor autocomplete and type checking.

## License

[ISC](LICENSE)
