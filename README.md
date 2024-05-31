## superbstring: String Manipulation Utility for JavaScript

Superbstring is a versatile JavaScript package that provides a comprehensive set of functions to manipulate strings for both frontend and backend applications.

### Installation

Install superbstring using npm or yarn:

```bash
npm install superbstring
```

or

```bash
yarn add superbstring
```

### Usage

Import the entire superbstring library:

```javascript
const superbString = require("superbstring");
```

or import specific functions:

```javascript
const { splitString, joinString } = require("superbstring");
```

### Available Functions

Superbstring offers a wide range of functions for various string manipulation tasks. Here's a brief description of each function:

- **splitString(string, delimiter)**: Splits a string into an array of substrings based on the provided delimiter.
- **joinString(string)**: Join strings separated on new lines into a single string using the blank space(s) as a delimiter.
- **base64Encode(string)**: Encodes a string to Base64.
- **base64Decode(string)**: Decodes a Base64 encoded string.
- **compare(string1, string2)**: Compares a string and its base64 encoded version and returns true if similar and flase if not in the comparison result.
- **removeExtraSpaces(string)**: Removes extra spaces from a string, leaving only single spaces between words.
- **removeAllSpaces(string)**: Removes all spaces from a string.
- **removeAllSymbols(string)**: Removes all symbols from a string, leaving only alphanumeric characters.
- **duplicate(string, count)**: Duplicates a string a specified number of times.
- **reverse(string)**: Reverses the characters in a string.
- **slugify(string)**: Converts a string to a slug format, suitable for URLs.
- **truncate(string, maxLength)**: Truncates a string to a specific maximum length.
- **paraToSingleLine(string)**: Converts a paragraph string into a single line by removing line breaks.
- **alphabetize(string)**: Sorts the characters/words of a string alphabetically.
- **zalgo(string)**: Applies the Zalgo text effect to a string (for decorative purposes).
- **rotate13Deg(string)**: Performs a Caesar cipher shift by 13 positions on a string.
- **encodeUri(string)**: Encodes a string for use in URLs.
- **decodeUri(string)**: Decodes a URL-encoded string.
- **extractText(string)**: Extracts text content from a string, removing HTML tags or other formatting.
- **extractNumber(string)**: Extracts numerical digits from a string.
- **addPrefix(string, prefix)**: Adds a prefix to the beginning of a string.
- **addSuffix(string, suffix)**: Adds a suffix to the end of a string.
- **reverseTitleCase(string)**: Reverses the title casing of a string (e.g., "HelloWorld" becomes "hELLOwORLD").
- **invertCase(string)**: Inverts the case of all characters in a string (uppercase to lowercase, lowercase to uppercase).
- **camelCase(string)**: Converts a string to camel case (e.g., "hello world" becomes "helloWorld").
- **pascalCase(string)**: Converts a string to Pascal case (e.g., "hello world" becomes "HelloWorld").
- **kebabCase(string)**: Converts a string to kebab case (e.g., "hello world" becomes "hello-world").
- **snakeCase(string)**: Converts a string to snake case (e.g., "hello world" becomes "hello_world").
- **alternateCase1(string)**: Alternates the case of characters in a string.
- **alternateCase2(string)**: Applies a different alternating case pattern to a string.
- **getDummyText()**: Generates dummy text content with a specified number of paragraphs and sentences.
- **getRandomCharacters(length)**: Generates a random string of a specified length with optional control over the character set used.

### Support

Feel free to contribute and make superbstring a better choice.
