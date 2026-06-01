# SuperbString

Zero-dependency JavaScript and TypeScript string utilities for cleanup, case conversion, extraction, encoding, and AI/RAG text preparation.

[![npm version](https://img.shields.io/npm/v/superbstring.svg)](https://www.npmjs.com/package/superbstring)
[![npm weekly downloads](https://img.shields.io/npm/dw/superbstring.svg)](https://www.npmjs.com/package/superbstring)
[![license: ISC](https://img.shields.io/npm/l/superbstring.svg)](LICENSE)
[![TypeScript support](https://img.shields.io/badge/TypeScript-supported-blue.svg)](dist/index.d.ts)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)](package.json)
[![CI](https://github.com/sharjeelfaiq/superbstring/actions/workflows/ci.yml/badge.svg)](https://github.com/sharjeelfaiq/superbstring/actions/workflows/ci.yml)

---

## Why SuperbString?

- Zero runtime dependencies
- TypeScript support with bundled declarations
- CommonJS-friendly package output
- AI, LLM, and RAG text-processing helpers
- Case conversion utilities, including `case-string` migration APIs
- Text cleanup, extraction, counting, encoding, and formatting helpers
- Small, focused package contents
- Maintained with tests, CI, changelog, security policy, and contribution docs

## Installation

```bash
npm install superbstring
```

## Quick Start

```javascript
const {
  slugify,
  camelCase,
  extractEmails,
  chunkText,
  removeMarkdown,
  stripHtml,
  safeJsonParse,
  wordCount,
  sentenceCount,
} = require("superbstring");

slugify("Hello, World!"); // "hello-world"
camelCase("user profile-title"); // "userProfileTitle"
extractEmails("Email a+b@example.co.uk"); // ["a+b@example.co.uk"]
chunkText("one two three four five", 10); // ["one two", "three four", "five"]
removeMarkdown("## Hi\n**bold** [site](https://example.com)"); // "Hi\nbold site"
stripHtml("<p>Hello <strong>world</strong></p>"); // "Hello world"
safeJsonParse('{"ok":true}'); // { ok: true }
safeJsonParse("{bad", {}); // {}
wordCount("Hello, world! 123"); // 3
sentenceCount("One. Two! Three?"); // 3
```

TypeScript named imports work out of the box:

```typescript
import { slugify, chunkText, type CodeBlock } from "superbstring";

const slug: string = slugify("Hello, World!");
const chunks: string[] = chunkText("context for retrieval", 500);
const block: CodeBlock = { language: "ts", code: "const ok = true;" };
```

## Common Use Cases

### AI & LLM Text Processing

Clean model output, prepare context for retrieval, and parse generated JSON safely.

```javascript
const {
  stripHtml,
  removeMarkdown,
  extractCodeBlocks,
  removeCodeBlocks,
  chunkText,
  safeJsonParse,
} = require("superbstring");

const source = "<article>## Intro\nUseful **context**.</article>";
const plainText = removeMarkdown(stripHtml(source)); // "Intro\nUseful context."
const chunks = chunkText(plainText, 500); // ["Intro\nUseful context."]

const blocks = extractCodeBlocks("```js\nconsole.log(1);\n```");
// [{ language: "js", code: "console.log(1);" }]

removeCodeBlocks("before\n```js\nconsole.log(1);\n```\nafter");
// "before\nafter"

safeJsonParse('{"answer":"yes"}', {}); // { answer: "yes" }
safeJsonParse("not json", {}); // {}
```

### Case Conversion

Convert user input, headings, labels, filenames, and keys into predictable case formats.

```javascript
const {
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  constantCase,
  trainCase,
  dotCase,
  pathCase,
} = require("superbstring");

camelCase("user profile-title"); // "userProfileTitle"
pascalCase("user profile-title"); // "UserProfileTitle"
snakeCase("User Profile-Title"); // "user_profile_title"
kebabCase("User_Profile Title"); // "user-profile-title"
constantCase("user profile-title"); // "USER_PROFILE_TITLE"
trainCase("user profile-title"); // "User-Profile-Title"
dotCase("User profile-title"); // "user.profile.title"
pathCase("User profile-title"); // "user/profile/title"
```

### Text Cleanup

Normalize messy user-generated text before saving, searching, indexing, or sending it to another system.

```javascript
const {
  normalizeWhitespace,
  normalizeLineEndings,
  removeDuplicateLines,
  stripHtml,
  removeAllSymbols,
  normalizeUnicode,
} = require("superbstring");

normalizeWhitespace("  a   b\tc\n "); // "a b c"
normalizeLineEndings("a\r\nb\rc"); // "a\nb\nc"
removeDuplicateLines("alpha\nbeta\nalpha"); // "alpha\nbeta"
stripHtml("<p>Hello <strong>world</strong></p>"); // "Hello world"
removeAllSymbols("Hello, World!"); // "Hello World"
normalizeUnicode("e\u0301"); // "\u00e9"
```

### Extraction Utilities

Pull useful structured data out of text without adding a parsing dependency.

```javascript
const { extractUrls, extractEmails, extractText, extractNumber } = require("superbstring");

extractUrls("Visit https://example.com."); // ["https://example.com"]
extractEmails("Email a+b@example.co.uk"); // ["a+b@example.co.uk"]
extractText("Order #123 ships today."); // "Order  ships today"
extractNumber("Order #123 ships today."); // " 123  "
```

### Analytics Utilities

Count simple text metrics for previews, validations, dashboards, and content checks.

```javascript
const { wordCount, charCount, sentenceCount } = require("superbstring");

wordCount("Hello, world! 123"); // 3
charCount("a🙂"); // 2
sentenceCount("One. Two! Three?"); // 3
```

## API Reference

### Text Cleanup

| Function | Description |
| --- | --- |
| `normalizeWhitespace(str)` | Collapse repeated whitespace into single spaces and trim. |
| `normalizeLineEndings(str, newline?)` | Convert CRLF, CR, and LF to `"\n"` or `"\r\n"`. |
| `normalizeUnicode(str, form?)` | Normalize Unicode with native `String.prototype.normalize`. |
| `removeExtraSpaces(str)` | Collapse whitespace, trim, and remove spaces before punctuation. |
| `removeAllSpaces(str)` | Remove all whitespace. |
| `removeAllSymbols(str)` | Keep alphanumeric characters and spaces. |
| `removeDuplicateLines(str)` | Remove repeated lines while keeping first occurrences. |
| `stripHtml(str)` | Remove HTML comments and tags for text cleanup. |
| `removeMarkdown(str)` | Remove common Markdown syntax while keeping readable text. |
| `removeCodeBlocks(str)` | Remove triple-backtick fenced Markdown code blocks. |
| `paraToSingleLine(str)` | Collapse whitespace into one line. |

### AI, LLM, and RAG Helpers

| Function | Description |
| --- | --- |
| `splitIntoParagraphs(str)` | Split text into trimmed, non-empty paragraphs. |
| `chunkText(str, maxLength, overlap?)` | Split text into character-length chunks. |
| `truncateWords(str, maxWords, suffix?)` | Limit text by word count and append a suffix only when truncated. |
| `extractCodeBlocks(str)` | Extract fenced Markdown code blocks as `{ language, code }` objects. |
| `removeCodeBlocks(str)` | Remove fenced Markdown code blocks from prose. |
| `safeJsonParse(str, fallback?)` | Parse JSON without throwing; return `fallback` or `null` on failure. |

### Case Conversion

| Function | Description |
| --- | --- |
| `camelCase(str)` | Convert ASCII word-like sequences to `camelCase`. |
| `pascalCase(str)` | Convert ASCII word-like sequences to `PascalCase`. |
| `snakeCase(str)` | Convert ASCII word-like sequences to `snake_case`. |
| `kebabCase(str)` | Convert ASCII word-like sequences to `kebab-case`. |
| `titleCase(str)` | Convert ASCII word-like sequences to `Title Case`. |
| `capitalize(str)` | Uppercase the first character and leave the rest unchanged. |
| `lowerCase(str)` | Convert text to lowercase. |
| `upperCase(str)` | Convert text to uppercase. |
| `constantCase(str)` | Convert ASCII word-like sequences to `CONSTANT_CASE`. |
| `pascalSnakeCase(str)` | Convert ASCII word-like sequences to `Pascal_Snake_Case`. |
| `trainCase(str)` | Convert ASCII word-like sequences to `Train-Case`. |
| `dotCase(str)` | Convert ASCII word-like sequences to `dot.case`. |
| `pathCase(str)` | Convert ASCII word-like sequences to `path/case`. |
| `invertCase(str)` | Invert uppercase and lowercase characters. |
| `reverseTitleCase(str)` | Lowercase words and uppercase the final character of each word. |
| `alternateCase1(str)` | Alternate character casing starting uppercase. |
| `alternateCase2(str)` | Alternate character casing starting lowercase. |
| `toggleCase(str)` | Uppercase words and lowercase each first character. |
| `noCase(str)` | Convert common separated and camelCase input to lowercase words. |
| `sentenceCase(str)` | Convert basic text to sentence case. |

### Extraction

| Function | Description |
| --- | --- |
| `extractUrls(str)` | Extract HTTP and HTTPS URLs. |
| `extractEmails(str)` | Extract email-looking addresses. |
| `extractCodeBlocks(str)` | Extract triple-backtick fenced Markdown code blocks. |
| `extractText(str)` | Keep letters and spaces only. |
| `extractNumber(str)` | Keep digits and spaces only. |

### Counting and Analysis

| Function | Description |
| --- | --- |
| `wordCount(str)` | Count ASCII word-like sequences. |
| `charCount(str)` | Count Unicode code points. |
| `sentenceCount(str)` | Count groups of `.`, `!`, and `?`. |
| `isSlug(str)` | Validate lowercase URL slugs with single hyphen separators. |

### Formatting and General String Utilities

| Function | Description |
| --- | --- |
| `slugify(str)` | Lowercase text, replace spaces with hyphens, and remove non-word characters except hyphens. |
| `splitString(str, delimiter?)` | Replace delimiter occurrences with newline characters. |
| `joinString(str)` | Replace newline characters with spaces. |
| `duplicate(str, count?)` | Repeat a string. |
| `reverse(str)` | Reverse UTF-16 code units. |
| `truncate(str, length)` | Return `str.substring(0, length)`. |
| `alphabetize(str)` | Sort space-separated words with `localeCompare`. |
| `addPrefix(str, prefix)` | Add a prefix. |
| `addSuffix(str, suffix)` | Add a suffix. |
| `getDummyText()` | Return Lorem ipsum placeholder text. |
| `getRandomCharacters(length)` | Generate a random string from letters, numbers, and symbols. |
| `zalgo(str)` | Add random combining marks to each non-space character. |
| `rotate13Deg(str)` | Apply ROT13 to alphabetic characters. |

### Encoding

| Function | Description |
| --- | --- |
| `base64Encode(str)` | Encode a string as Base64 using platform `btoa`. |
| `base64Decode(str)` | Decode a Base64 string using platform `atob`. |
| `compare(str, encodedStr)` | Return whether `encodedStr` decodes to `str`; invalid Base64 returns `false`. |
| `encodeUri(str)` | Encode a URI with JavaScript `encodeURI`. |
| `decodeUri(str)` | Decode a URI with JavaScript `decodeURI`. |

### Types

| Type | Description |
| --- | --- |
| `CodeBlock` | Object returned by `extractCodeBlocks`: `{ language: string; code: string }`. |

## Migration Guide

### Migrating from `case-string`

`case-string` style case-conversion APIs are available inside SuperbString, so projects can consolidate on one zero-dependency string utility package.

```javascript
const {
  lowerCase,
  upperCase,
  reverseTitleCase,
  invertCase,
  constantCase,
  pascalSnakeCase,
  trainCase,
  dotCase,
  pathCase,
  alternateCase1,
  alternateCase2,
  toggleCase,
  noCase,
  sentenceCase,
} = require("superbstring");
```

| From `case-string` style usage | Use in `superbstring` |
| --- | --- |
| Lowercase text | `lowerCase(str)` |
| Uppercase text | `upperCase(str)` |
| Reverse title casing | `reverseTitleCase(str)` |
| Invert character case | `invertCase(str)` |
| `CONSTANT_CASE` | `constantCase(str)` |
| `Pascal_Snake_Case` | `pascalSnakeCase(str)` |
| `Train-Case` | `trainCase(str)` |
| `dot.case` | `dotCase(str)` |
| `path/case` | `pathCase(str)` |
| Alternating case, uppercase first | `alternateCase1(str)` |
| Alternating case, lowercase first | `alternateCase2(str)` |
| Toggle word case | `toggleCase(str)` |
| Lowercase words | `noCase(str)` |
| Sentence case | `sentenceCase(str)` |

## TypeScript Support

SuperbString ships generated declaration files through the package `types` field. No separate `@types` package is needed.

```typescript
import {
  camelCase,
  extractEmails,
  safeJsonParse,
  type CodeBlock,
} from "superbstring";

const key: string = camelCase("User Profile Title");
const emails: string[] = extractEmails("Contact hello@example.com");
const value = safeJsonParse<{ ok: boolean }>('{"ok":true}', { ok: false });
const block: CodeBlock = { language: "js", code: "console.log(1);" };
```

## Behavior Notes

- `chunkText` is character-length based, not token based.
- `stripHtml` removes tags for text cleanup; it is not a browser security sanitizer.
- `removeMarkdown` is lightweight cleanup, not a full Markdown parser.
- `safeJsonParse` does not repair invalid JSON.
- `getRandomCharacters` and `zalgo` use `Math.random()` and are not cryptographically secure.
- `reverse` reverses UTF-16 code units, so complex Unicode characters can be split.
- `charCount` counts Unicode code points, not grapheme clusters.
- `sentenceCount` is a basic punctuation counter, not a natural-language sentence parser.
- Case conversion helpers based on word splitting use ASCII word-like sequences.
- `base64Encode`, `base64Decode`, and `compare` rely on platform `btoa` and `atob`.
- `encodeUri` and `decodeUri` use JavaScript `encodeURI` and `decodeURI`.

## FAQ

### Does it have dependencies?

No. SuperbString has zero runtime dependencies.

### Does it work in Node.js?

Yes. The package targets Node.js `>=16` and publishes CommonJS output.

### Does it work with TypeScript?

Yes. Type declarations are bundled and named imports are supported.

### Can I use it for AI applications?

Yes. It includes dependency-free helpers for prompt cleanup, Markdown/HTML cleanup, code block extraction, text chunking, paragraph splitting, and safe JSON parsing.

### Is it tree-shakeable?

The package marks `"sideEffects": false` and exports pure utility functions, which helps modern bundlers remove unused code.

### Is it a sanitizer or parser?

No. Utilities such as `stripHtml`, `removeMarkdown`, `sentenceCount`, and `chunkText` are lightweight text helpers, not security sanitizers, full parsers, or tokenizers.

## Project Information

- [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [GitHub Issues](https://github.com/sharjeelfaiq/superbstring/issues)
- [npm Package](https://www.npmjs.com/package/superbstring)

## License

[ISC](LICENSE)
