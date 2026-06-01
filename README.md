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
- AI, LLM, and RAG helpers for prompt cleanup and context preparation
- Encoding helpers for Base64 and URI encoding
- Formatting helpers for slugs, case conversion, truncation, prefixes, suffixes, and ROT13
- Migration-friendly case utilities for users moving from `case-string`
- Counting helpers for words, characters, and basic sentences
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

RAG preprocessing:

```javascript
const { stripHtml, removeMarkdown, chunkText } = require("superbstring");

const plainText = removeMarkdown(stripHtml("<article># Intro\nUseful context.</article>"));
const chunks = chunkText(plainText, 500);

console.log(chunks); // ["Intro\nUseful context."]
```

Case conversion and counting:

```javascript
const { camelCase, kebabCase, wordCount, removeDuplicateLines } = require("superbstring");

console.log(camelCase("user profile-title")); // "userProfileTitle"
console.log(kebabCase("User_Profile Title")); // "user-profile-title"
console.log(wordCount("Clean, useful text.")); // 3
console.log(removeDuplicateLines("alpha\nbeta\nalpha")); // "alpha\nbeta"
```

## AI & LLM Text Utilities

SuperbString includes lightweight helpers for prompt cleanup, RAG preprocessing, context preparation, structured extraction, and LLM output handling. These utilities do not call any model APIs, make network requests, or add tokenizer dependencies.

### Text Normalization

| Function | Purpose |
| --- | --- |
| `normalizeWhitespace` | Collapse repeated whitespace and trim text |
| `normalizeLineEndings` | Convert CRLF, CR, and LF to a consistent newline style |
| `normalizeUnicode` | Normalize Unicode using a native normalization form |

### Content Cleanup

| Function | Purpose |
| --- | --- |
| `stripHtml` | Remove HTML comments and tags |
| `removeMarkdown` | Remove common Markdown syntax |
| `removeCodeBlocks` | Remove triple-backtick fenced code blocks |
| `removeDuplicateLines` | Remove repeated lines while preserving first occurrences |

### RAG Preparation

| Function | Purpose |
| --- | --- |
| `splitIntoParagraphs` | Split text into trimmed, non-empty paragraphs |
| `chunkText` | Split text into character-length chunks |
| `truncateWords` | Limit text by word count |

### Structured Extraction

| Function | Purpose |
| --- | --- |
| `extractUrls` | Extract HTTP and HTTPS URLs |
| `extractEmails` | Extract email-looking addresses |
| `extractCodeBlocks` | Extract triple-backtick fenced code blocks |

### LLM Output Handling

| Function | Purpose |
| --- | --- |
| `safeJsonParse` | Parse JSON without throwing |

### Case Conversion

| Function | Purpose |
| --- | --- |
| `camelCase` | Convert text to camelCase |
| `pascalCase` | Convert text to PascalCase |
| `snakeCase` | Convert text to snake_case |
| `kebabCase` | Convert text to kebab-case |
| `titleCase` | Convert text to Title Case |
| `capitalize` | Uppercase the first character |
| `lowerCase` | Convert text to lowercase |
| `upperCase` | Convert text to uppercase |
| `constantCase` | Convert text to CONSTANT_CASE |
| `pascalSnakeCase` | Convert text to Pascal_Snake_Case |
| `trainCase` | Convert text to Train-Case |
| `dotCase` | Convert text to dot.case |
| `pathCase` | Convert text to path/case |
| `invertCase` | Invert uppercase and lowercase characters |
| `reverseTitleCase` | Uppercase the final character of each word |
| `alternateCase1` | Alternate character casing starting uppercase |
| `alternateCase2` | Alternate character casing starting lowercase |
| `toggleCase` | Uppercase words and lowercase each first character |
| `noCase` | Convert common case styles to lowercase words |
| `sentenceCase` | Convert basic text to sentence case |
| `isSlug` | Validate lowercase URL slug format |

### Migrating from case-string

SuperbString includes compatible, zero-dependency case-conversion APIs from `case-string` so existing users can move to `superbstring` without keeping both packages installed.

```javascript
const { constantCase, trainCase, noCase } = require("superbstring");

constantCase("user profile-title"); // "USER_PROFILE_TITLE"
trainCase("user profile-title"); // "User-Profile-Title"
noCase("userProfileTitle"); // "user profile title"
```

### Counting

| Function | Purpose |
| --- | --- |
| `wordCount` | Count ASCII word-like sequences |
| `charCount` | Count Unicode code points |
| `sentenceCount` | Count basic sentence-ending punctuation groups |

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
| `wordCount` | Count ASCII word-like sequences |
| `charCount` | Count Unicode code points |
| `sentenceCount` | Count basic sentence-ending punctuation groups |

## Text Processing

Use these TypeScript string utilities for text processing, text cleanup, and parsing user-generated content.

| Function | Purpose |
| --- | --- |
| `normalizeWhitespace` | Collapse repeated whitespace and trim text |
| `normalizeLineEndings` | Normalize CRLF, CR, and LF line endings |
| `normalizeUnicode` | Normalize Unicode with `String.prototype.normalize` |
| `stripHtml` | Remove HTML comments and tags |
| `removeMarkdown` | Remove common Markdown syntax |
| `removeExtraSpaces` | Normalize whitespace and remove spaces before punctuation |
| `removeAllSpaces` | Remove all whitespace |
| `removeAllSymbols` | Keep alphanumeric characters and spaces |
| `removeDuplicateLines` | Remove repeated lines while preserving first occurrences |
| `paraToSingleLine` | Collapse whitespace into one line |
| `extractText` | Keep letters and spaces only |
| `extractNumber` | Keep digits and spaces only |
| `extractUrls` | Extract HTTP and HTTPS URLs |
| `extractEmails` | Extract email-looking addresses |
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
| `camelCase` | Convert text to camelCase |
| `pascalCase` | Convert text to PascalCase |
| `snakeCase` | Convert text to snake_case |
| `kebabCase` | Convert text to kebab-case |
| `titleCase` | Convert text to Title Case |
| `capitalize` | Uppercase the first character |
| `lowerCase` | Convert text to lowercase |
| `upperCase` | Convert text to uppercase |
| `constantCase` | Convert text to CONSTANT_CASE |
| `pascalSnakeCase` | Convert text to Pascal_Snake_Case |
| `trainCase` | Convert text to Train-Case |
| `dotCase` | Convert text to dot.case |
| `pathCase` | Convert text to path/case |
| `invertCase` | Invert uppercase and lowercase characters |
| `reverseTitleCase` | Uppercase the final character of each word |
| `alternateCase1` | Alternate character casing starting uppercase |
| `alternateCase2` | Alternate character casing starting lowercase |
| `toggleCase` | Uppercase words and lowercase each first character |
| `noCase` | Convert common case styles to lowercase words |
| `sentenceCase` | Convert basic text to sentence case |
| `isSlug` | Validate lowercase URL slug format |
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

### normalizeWhitespace(string)

Collapses repeated whitespace into single spaces and trims the result.

```javascript
const { normalizeWhitespace } = require("superbstring");

normalizeWhitespace("  a   b\tc\n "); // "a b c"
```

### normalizeLineEndings(string, newline = "\n")

Converts CRLF, CR, and LF line endings to `"\n"` or `"\r\n"`.

```javascript
const { normalizeLineEndings } = require("superbstring");

normalizeLineEndings("a\r\nb\rc"); // "a\nb\nc"
normalizeLineEndings("a\nb", "\r\n"); // "a\r\nb"
```

### normalizeUnicode(string, form = "NFC")

Normalizes Unicode using native `String.prototype.normalize`.

```javascript
const { normalizeUnicode } = require("superbstring");

normalizeUnicode("e\u0301"); // "\u00e9"
normalizeUnicode("\u00e9", "NFD"); // "e\u0301"
```

### stripHtml(string)

Removes HTML comments and tags. This is tag removal for text cleanup, not a browser security sanitizer.

```javascript
const { stripHtml } = require("superbstring");

stripHtml('<p>Hello <strong>world</strong></p>'); // "Hello world"
```

### removeMarkdown(string)

Removes common Markdown markers while keeping readable text. This is lightweight cleanup, not a full Markdown parser.

```javascript
const { removeMarkdown } = require("superbstring");

removeMarkdown("## Hi\n**bold** [site](https://example.com)"); // "Hi\nbold site"
```

### removeDuplicateLines(string)

Removes repeated lines while preserving the first occurrence order. CRLF and CR line endings are normalized to LF.

```javascript
const { removeDuplicateLines } = require("superbstring");

removeDuplicateLines("first\nsecond\nfirst"); // "first\nsecond"
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

### camelCase(string)

Converts ASCII word-like sequences to camelCase.

```javascript
const { camelCase } = require("superbstring");

camelCase("user profile-title"); // "userProfileTitle"
```

### pascalCase(string)

Converts ASCII word-like sequences to PascalCase.

```javascript
const { pascalCase } = require("superbstring");

pascalCase("user profile-title"); // "UserProfileTitle"
```

### snakeCase(string)

Converts ASCII word-like sequences to snake_case.

```javascript
const { snakeCase } = require("superbstring");

snakeCase("User Profile-Title"); // "user_profile_title"
```

### kebabCase(string)

Converts ASCII word-like sequences to kebab-case.

```javascript
const { kebabCase } = require("superbstring");

kebabCase("User_Profile Title"); // "user-profile-title"
```

### titleCase(string)

Converts ASCII word-like sequences to Title Case.

```javascript
const { titleCase } = require("superbstring");

titleCase("user_profile-title"); // "User Profile Title"
```

### capitalize(string)

Uppercases the first character and leaves the rest unchanged.

```javascript
const { capitalize } = require("superbstring");

capitalize("hello world"); // "Hello world"
```

### lowerCase(string)

Converts a string to lowercase.

```javascript
const { lowerCase } = require("superbstring");

lowerCase("Hello WORLD"); // "hello world"
```

### upperCase(string)

Converts a string to uppercase.

```javascript
const { upperCase } = require("superbstring");

upperCase("Hello world"); // "HELLO WORLD"
```

### constantCase(string)

Converts ASCII word-like sequences to CONSTANT_CASE.

```javascript
const { constantCase } = require("superbstring");

constantCase("User profile-title"); // "USER_PROFILE_TITLE"
```

### pascalSnakeCase(string)

Converts ASCII word-like sequences to Pascal_Snake_Case.

```javascript
const { pascalSnakeCase } = require("superbstring");

pascalSnakeCase("user profile-title"); // "User_Profile_Title"
```

### trainCase(string)

Converts ASCII word-like sequences to Train-Case.

```javascript
const { trainCase } = require("superbstring");

trainCase("user profile-title"); // "User-Profile-Title"
```

### dotCase(string)

Converts ASCII word-like sequences to dot.case.

```javascript
const { dotCase } = require("superbstring");

dotCase("User profile-title"); // "user.profile.title"
```

### pathCase(string)

Converts ASCII word-like sequences to path/case.

```javascript
const { pathCase } = require("superbstring");

pathCase("User profile-title"); // "user/profile/title"
```

### invertCase(string)

Inverts uppercase and lowercase characters.

```javascript
const { invertCase } = require("superbstring");

invertCase("AbC 123!"); // "aBc 123!"
```

### reverseTitleCase(string)

Lowercases words and uppercases the final character of each space-separated word.

```javascript
const { reverseTitleCase } = require("superbstring");

reverseTitleCase("The quick brown fox"); // "thE quicK browN foX"
```

### alternateCase1(string)

Alternates character casing starting with uppercase.

```javascript
const { alternateCase1 } = require("superbstring");

alternateCase1("hello world!"); // "HeLlO WoRlD!"
```

### alternateCase2(string)

Alternates character casing starting with lowercase.

```javascript
const { alternateCase2 } = require("superbstring");

alternateCase2("hello world!"); // "hElLo wOrLd!"
```

### toggleCase(string)

Uppercases each space-separated word and lowercases its first character.

```javascript
const { toggleCase } = require("superbstring");

toggleCase("hello WORLD"); // "hELLO wORLD"
```

### noCase(string)

Converts common separated and camelCase input to lowercase words.

```javascript
const { noCase } = require("superbstring");

noCase("userProfileTitle"); // "user profile title"
```

### sentenceCase(string)

Converts basic text to sentence case.

```javascript
const { sentenceCase } = require("superbstring");

sentenceCase("hELLO WORLD. tHIS is A TEST!"); // "Hello world. This is a test!"
```

### isSlug(string)

Returns `true` for lowercase URL slugs made from letters, numbers, and single hyphens. Leading, trailing, and repeated hyphens are rejected.

```javascript
const { isSlug } = require("superbstring");

isSlug("hello-world-123"); // true
isSlug("Hello--world"); // false
```

### truncate(string, maxLength)

Returns `string.substring(0, maxLength)`.

```javascript
const { truncate } = require("superbstring");

truncate("Big Cat lives in the Jungle", 13); // "Big Cat lives"
```

### truncateWords(string, maxWords, suffix = "...")

Limits text by word count and appends a suffix only when truncation occurs.

```javascript
const { truncateWords } = require("superbstring");

truncateWords("one two three", 2); // "one two..."
```

### wordCount(string)

Counts ASCII word-like sequences.

```javascript
const { wordCount } = require("superbstring");

wordCount("Hello, world! 123"); // 3
```

### charCount(string)

Counts Unicode code points using `Array.from`.

```javascript
const { charCount } = require("superbstring");

charCount("a🙂"); // 2
```

### sentenceCount(string)

Counts basic sentence-ending punctuation groups using `.`, `!`, and `?`.

```javascript
const { sentenceCount } = require("superbstring");

sentenceCount("One. Two! Three?"); // 3
```

### paraToSingleLine(string)

Collapses whitespace into single spaces.

```javascript
const { paraToSingleLine } = require("superbstring");

paraToSingleLine("Why so serious?\nLet's smile.");
// "Why so serious? Let's smile."
```

### splitIntoParagraphs(string)

Splits text on blank lines and returns trimmed, non-empty paragraphs.

```javascript
const { splitIntoParagraphs } = require("superbstring");

splitIntoParagraphs("First\n\nSecond"); // ["First", "Second"]
```

### chunkText(string, maxLength, overlap = 0)

Splits text into character-length chunks, preferring whitespace breaks when no overlap is requested.

```javascript
const { chunkText } = require("superbstring");

chunkText("one two three four", 7); // ["one two", "three", "four"]
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

### extractUrls(string)

Extracts HTTP and HTTPS URLs and trims common trailing punctuation.

```javascript
const { extractUrls } = require("superbstring");

extractUrls("Visit https://example.com."); // ["https://example.com"]
```

### extractEmails(string)

Extracts email-looking addresses.

```javascript
const { extractEmails } = require("superbstring");

extractEmails("Email a+b@example.co.uk"); // ["a+b@example.co.uk"]
```

### extractCodeBlocks(string)

Extracts triple-backtick fenced Markdown code blocks as `{ language, code }` objects.

```javascript
const { extractCodeBlocks } = require("superbstring");

extractCodeBlocks("```js\nconsole.log(1);\n```");
// [{ language: "js", code: "console.log(1);" }]
```

### removeCodeBlocks(string)

Removes triple-backtick fenced Markdown code blocks and preserves surrounding prose.

```javascript
const { removeCodeBlocks } = require("superbstring");

removeCodeBlocks("before\n```js\nconsole.log(1);\n```\nafter");
// "before\nafter"
```

### safeJsonParse(string, fallback = null)

Parses JSON without throwing. Invalid JSON returns `fallback`, or `null` when no fallback is provided.

```javascript
const { safeJsonParse } = require("superbstring");

safeJsonParse('{"ok":true}'); // { ok: true }
safeJsonParse("{bad", {}); // {}
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
- `chunkText` is character-length based, not token based.
- `camelCase`, `pascalCase`, `snakeCase`, `kebabCase`, `titleCase`, `constantCase`, `pascalSnakeCase`, `trainCase`, `dotCase`, `pathCase`, and `wordCount` use ASCII word-like sequences and avoid locale-specific casing behavior.
- `lowerCase`, `upperCase`, `invertCase`, `toggleCase`, and `sentenceCase` use JavaScript's native casing methods.
- `alternateCase1`, `alternateCase2`, and `reverseTitleCase` are included for `case-string` migration compatibility.
- `charCount` counts Unicode code points, not grapheme clusters.
- `sentenceCount` counts basic punctuation groups and is not a natural-language sentence parser.
- `removeMarkdown` is lightweight cleanup, not a full Markdown parser.
- `stripHtml` removes tags for text cleanup and is not a sanitizer for browser security.
- `normalizeUnicode` uses native `String.prototype.normalize` and the runtime's Unicode normalization behavior.
- `safeJsonParse` does not repair invalid JSON.

## TypeScript Support

SuperbString includes generated TypeScript declaration files through the package `types` field. Named imports work in TypeScript projects:

```typescript
import { slugify, camelCase, truncate, extractNumber, chunkText } from "superbstring";

const slug: string = slugify("Hello, World!");
const key: string = camelCase("hello world");
const summary: string = truncate("Big Cat lives in the Jungle", 13);
const numbers: string = extractNumber("Order #123");
const chunks: string[] = chunkText("context for retrieval", 500);
```

## Why SuperbString

- **Zero dependencies:** keeps installs small and reduces supply-chain surface area.
- **Small package size:** focused utilities without a large framework or runtime dependency.
- **Practical utilities:** common string manipulation, text cleanup, string formatting, encoding, decoding, and parsing helpers in one package.
- **TypeScript support:** declarations are included for editor autocomplete and type checking.

## Project Information

- [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [GitHub Issues](https://github.com/sharjeelfaiq/superbstring/issues)

## License

[ISC](LICENSE)
