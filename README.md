# superbstring

String manipulation utilities for JavaScript and TypeScript projects.

## Installation

```bash
npm install superbstring
```

```bash
pnpm add superbstring
```

```bash
yarn add superbstring
```

## Usage

```javascript
const superbString = require("superbstring");

superbString.slugify("Hello, World!"); // "hello-world"
```

```javascript
const { splitString, joinString } = require("superbstring");

splitString("Hello World", " "); // "Hello\nWorld"
joinString("Hello\nWorld"); // "Hello World"
```

Type declarations are included for TypeScript consumers.

## API

### splitString(string, delimiter = " ")

Replaces each delimiter occurrence with a newline character.

```javascript
splitString("Hello World", " "); // "Hello\nWorld"
```

### joinString(string)

Replaces newline characters with spaces.

```javascript
joinString("Hello\nWorld"); // "Hello World"
```

### base64Encode(string)

Encodes a string as Base64.

```javascript
base64Encode("The quick brown fox."); // "VGhlIHF1aWNrIGJyb3duIGZveC4="
```

### base64Decode(string)

Decodes a Base64 string. Malformed input may throw the platform decoder error.

```javascript
base64Decode("VGhlIHF1aWNrIGJyb3duIGZveC4="); // "The quick brown fox."
```

### compare(string, encodedString)

Returns `true` when `encodedString` decodes to `string`; otherwise returns `false`.

```javascript
compare("hello", "aGVsbG8="); // true
compare("hello", "d29ybGQ="); // false
```

### removeExtraSpaces(string)

Collapses whitespace to single spaces, trims leading/trailing whitespace, and removes spaces before punctuation.

```javascript
removeExtraSpaces("   One   space   between   each   word    ");
// "One space between each word"
```

### removeAllSpaces(string)

Removes all whitespace.

```javascript
removeAllSpaces("   No   space   anywhere    "); // "Nospaceanywhere"
```

### removeAllSymbols(string)

Removes symbols and keeps alphanumeric characters and spaces.

```javascript
removeAllSymbols("Hello, World!"); // "Hello World"
```

### duplicate(string, count = 2)

Repeats a string. Invalid counts use the native `String.prototype.repeat` behavior.

```javascript
duplicate("hello", 3); // "hellohellohello"
```

### reverse(string)

Reverses UTF-16 code units in a string.

```javascript
reverse("hello"); // "olleh"
```

### slugify(string)

Lowercases a string, replaces spaces with hyphens, and removes non-word characters except hyphens.

```javascript
slugify("Hello, World!"); // "hello-world"
```

### truncate(string, maxLength)

Returns `string.substring(0, maxLength)`.

```javascript
truncate("Big Cat lives in the Jungle", 13); // "Big Cat lives"
```

### paraToSingleLine(string)

Collapses whitespace into single spaces.

```javascript
paraToSingleLine("Why so serious?\nLet's smile.");
// "Why so serious? Let's smile."
```

### alphabetize(string)

Sorts space-separated words using `localeCompare`.

```javascript
alphabetize("Welcome to the world of JavaScript!");
// "JavaScript! of the to Welcome world"
```

### zalgo(string)

Adds random combining marks to each non-space character.

```javascript
zalgo("Decorate me");
```

### rotate13Deg(string)

Applies ROT13 to alphabetic characters. Non-letters are unchanged.

```javascript
rotate13Deg("Hello World!"); // "Uryyb Jbeyq!"
rotate13Deg("Uryyb Jbeyq!"); // "Hello World!"
```

### encodeUri(string)

Encodes a URI using `encodeURI`.

```javascript
encodeUri("Hello, World!"); // "Hello,%20World!"
```

### decodeUri(string)

Decodes a URI using `decodeURI`. Malformed input throws `URIError`.

```javascript
decodeUri("Hello,%20World!"); // "Hello, World!"
```

### extractText(string)

Keeps letters and spaces only.

```javascript
extractText("3.14 is a pi number."); // " is a pi number"
```

### extractNumber(string)

Keeps digits and spaces only.

```javascript
extractNumber("4 apples, 3 oranges, 1 banana, 2 pears");
// "4  3  1  2 "
```

### addPrefix(string, prefix)

Adds a prefix.

```javascript
addPrefix("world", "hello "); // "hello world"
```

### addSuffix(string, suffix)

Adds a suffix.

```javascript
addSuffix("hello", " world"); // "hello world"
```

### getDummyText()

Returns placeholder text.

```javascript
getDummyText();
```

### getRandomCharacters(length)

Returns a random string with the requested length. This uses `Math.random()` and is not cryptographically secure.

```javascript
getRandomCharacters(10); // for example, "MudjZT5ubk"
```

## Validation

```bash
npm run build
npm test
npm audit
npm pack --dry-run
```
