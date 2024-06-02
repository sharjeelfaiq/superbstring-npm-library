## superbstring: String Manipulation Utility for JavaScript

Superbstring is a versatile JavaScript package that provides a comprehensive set of functions to manipulate strings for both frontend and backend applications.

**DOCUMENTATION** https://t.ly/sYjic

### Installation

Install superbstring using npm, pnpm or yarn:

```bash
npm install superbstring
```

```bash
pnpm add superbstring
```

```bash
yarn add superbstring
```

### Usage

Import the entire superbstring library:

```javascript
// ES5 Import
const superbString = require("superbstring");

// ES6 Import
import suberbstring from "superb-string";
```

or import specific functions:

```javascript
// ES5 Import
const { splitString, joinString } = require("superbstring");

// ES6 Import
import { splitString, joinString } from "superb-string";
```

### Available Functions

Superbstring offers a wide range of functions for various string manipulation tasks. Here's a brief description of each function:

- **splitString(string, delimiter)**: Splits a string into an array of substrings based on the provided delimiter.

```javascript
const string = "Hello World";
const delimiter = " ";
superbString.splitString(string, delimiter);
// Hello
// World
```

- **joinString(string)**: Join strings separated on new lines into a single string using the blank space(s) as a delimiter.

```javascript
const string = "Hello\nWorld";
superbString.joinString(string); // "Hello World"
```

- **base64Encode(string)**: Converts a string or a number to a Base64 encoded string.

```javascript
const string = "The quick brown fox jumps over the lazy dog.";
superbString.base64Encode(string); // VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
```

- **base64Decode(string)**: Decodes a Base64 encoded string.

```javascript
const encodedString =
  "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=";
superbString.base64Decode(encodedString); // The quick brown fox jumps over the lazy dog.
```

- **compare(string1, string2)**: Compares a string and its base64 encoded version and returns true if similar and flase if not in the comparison result.

```javascript
const string1 = "The quick brown fox jumps over the lazy dog";
const string2 = "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4";
superbString.compare(string1, string2); // true

const string1 = "The old brown fox lives with the lazy dog";
const string2 = "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4";
superbString.compare(string1, string2); // false
```

- **removeExtraSpaces(string)**: Removes extra spaces from a string, leaving spaces only between words.

```javascript
const string = "   One   space   between   each   word    ";
uperbString.removeExtraSpaces(string); // One space between each word
```

- **removeAllSpaces(string)**: Removes all spaces from a string.

```javascript
const string = "   No   space   anywhere    ";
superbString.removeAllSpaces(string); // Nospaceanywhere
```

- **removeAllSymbols(string)**: Removes all symbols from a string, leaving only alphanumeric characters.

```javascript
const string = "Hello, World!";
superbString.removeAllSymbols(string); // Hello World
```

- **duplicate(string, count)**: Duplicates a string a specified number of times.

```javascript
const string = "hello";
const count = 3;
superbString.duplicate(string, count); // hellohellohello
```

- **reverse(string)**: Reverses the characters in a string.

```javascript
const string = "hello";
superbString.reverse(string); // olleh
```

- **slugify(string)**: Converts a string to a slug format, suitable for URLs.

```javascript
const string = "Hello, World!";
superbString.slugify(string); // hello-world
```

- **truncate(string, maxLength)**: Truncates a string to a specific maximum length.

```javascript
const string = "Big Cat lives in the Jungle";
const maxLength = 13;
superbString.truncate(string, maxLength); // Big Cat lives
```

- **paraToSingleLine(string)**: Converts a paragraph string into a single line by removing line breaks.

```javascript
const string = "Why so serious?\nLet's put a smile on that face.";
superbString.paraToSingleLine(string); // Why so serious? Let's put a smile on that face.
```

- **alphabetize(string)**: Sorts the characters/words of a string alphabetically.

```javascript
const string = "Welcome to the world of JavaScript!";
superbString.alphabetize(string); //JavaScript! of the to Welcome world
```

- **zalgo(string)**: Applies the Zalgo text effect to a string (for decorative purposes).

```javascript
const string = "Decorate me with zalgo!";
superbString.zalgo(string);
// D̡̳͔҉̬e͚̪ͫ̒̂̕͟c͋҉̤̥ͮǫ̻͍͕̍ŗ̵̧̜̣͈͓̓͛͌͜ͅą̴̶̓͆͘tě̴̶͓͕̓ͣ͊ͅ m̸̛̺͕͊̑͟͡è̶̮͔̫̓́̊͢͜͡ͅ w̴̷̵̢̞̥͆͗́̕̚͝͡ͅi͖͝͝tͮ͝͏̷̭͗̄̽͑h̢̧̤̼͋̏͑ͧ͆̽̽̉̒̎ z҉͕̘͉́̀͘͢a͎͛̍͏̸̶̢̛̮̯̞̬̮̋l̴̷͙ͯͭ̀͘͏̢̯̠͂̚͞g̖͓̤̍͗ͮ́ͅo͝҉̴̷̗͙̐̎͂͘҉͖͕͐͢!̶̧̡̼̪̟̙̥̪̮̿ͭ̅
```

- **rotate13Deg(string)**: Performs a Caesar cipher shift by 13 positions on a string.

```javascript
const string = "Hello World!";
superbString.rotate13Deg(string); // Uryyb Jbeyq!

const string = "Uryyb Jbeyq!";
superbString.rotate13Deg(string); // Hello World!
```

- **encodeUri(string)**: Encodes a string for use in URLs.

```javascript
const string = "Hello, World!";
superbString.encodeUri(string); // Hello,%20World!
```

- **decodeUri(string)**: Decodes a URL-encoded string.

```javascript
const string = "Hello,%20World!";
superbString.encodeUri(string); // Hello, World!
```

- **extractText(string)**: Extracts text content from a string.

```javascript
const string = "3.14 is a pi number.";
superbString.extractText(string); // is a pi number;
```

- **extractNumber(string)**: Extracts numerical digits from a string.

```javascript
const string = "4 apples, 3 oranges, 1 banana, 2 pears";
superbString.extractNumber(string); // 4  3  1  2
```

- **addPrefix(string, prefix)**: Adds a prefix to the beginning of a string.

```javascript
const string = "world";
superbString.addPrefix(string, "hello "); // hello world
```

- **addSuffix(string, suffix)**: Adds a suffix to the end of a string.

```javascript
const string = "hello";
superbString.addSuffix(string, " world"); // hello world
```

- **getDummyText()**: Generates dummy text content.

```javascript
superbString.getDummyText();
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
```

- **getRandomCharacters(length)**: Generates a random string of a specified length.

```javascript
superbString.getRandomCharacters(10); // MudjZT5ubk
superbString.getRandomCharacters(20); // >Ww2BKEjeUuKU5_[j1xb
superbString.getRandomCharacters(30); // u~Wh{WC2z>V}hf<z89MVHh~N8VytcV
```

### Support

Feel free to contribute and make superbstring a better choice.
