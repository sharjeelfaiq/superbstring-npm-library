const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const superbString = require("../dist/index.js");

test("exports every documented public API", () => {
  assert.deepEqual(Object.keys(superbString).sort(), [
    "addPrefix",
    "addSuffix",
    "alphabetize",
    "base64Decode",
    "base64Encode",
    "camelCase",
    "capitalize",
    "charCount",
    "chunkText",
    "compare",
    "decodeUri",
    "duplicate",
    "encodeUri",
    "extractCodeBlocks",
    "extractEmails",
    "extractNumber",
    "extractText",
    "extractUrls",
    "getDummyText",
    "getRandomCharacters",
    "isSlug",
    "joinString",
    "kebabCase",
    "normalizeLineEndings",
    "normalizeUnicode",
    "normalizeWhitespace",
    "paraToSingleLine",
    "pascalCase",
    "removeAllSpaces",
    "removeAllSymbols",
    "removeCodeBlocks",
    "removeDuplicateLines",
    "removeExtraSpaces",
    "removeMarkdown",
    "reverse",
    "rotate13Deg",
    "safeJsonParse",
    "sentenceCount",
    "slugify",
    "snakeCase",
    "splitIntoParagraphs",
    "splitString",
    "stripHtml",
    "titleCase",
    "truncate",
    "truncateWords",
    "wordCount",
    "zalgo",
  ]);
});

test("splitString replaces delimiters with newlines", () => {
  assert.equal(superbString.splitString("Hello World", " "), "Hello\nWorld");
  assert.equal(superbString.splitString("a,b,c", ","), "a\nb\nc");
  assert.equal(superbString.splitString(""), "");
});

test("joinString replaces newline characters with spaces", () => {
  assert.equal(superbString.joinString("Hello\nWorld"), "Hello World");
  assert.equal(superbString.joinString(""), "");
});

test("base64 helpers encode, decode, and compare ASCII strings", () => {
  const encoded = superbString.base64Encode("The quick brown fox.");
  assert.equal(encoded, "VGhlIHF1aWNrIGJyb3duIGZveC4=");
  assert.equal(superbString.base64Decode(encoded), "The quick brown fox.");
  assert.equal(superbString.compare("The quick brown fox.", encoded), true);
  assert.equal(superbString.compare("different", encoded), false);
  assert.equal(superbString.compare("anything", "not valid base64"), false);
});

test("base64Decode throws for malformed base64", () => {
  assert.throws(() => superbString.base64Decode("!!!!"));
});

test("space helpers normalize or remove whitespace", () => {
  assert.equal(
    superbString.removeExtraSpaces("   One   space   between   each   word    "),
    "One space between each word"
  );
  assert.equal(superbString.removeExtraSpaces("Hello ,   world !"), "Hello, world!");
  assert.equal(superbString.removeExtraSpaces(""), "");
  assert.equal(superbString.removeAllSpaces("   No   space\tanywhere\n"), "Nospaceanywhere");
  assert.equal(superbString.removeAllSpaces(""), "");
});

test("removeAllSymbols keeps alphanumeric characters and spaces only", () => {
  assert.equal(superbString.removeAllSymbols("Hello, World!"), "Hello World");
  assert.equal(superbString.removeAllSymbols("abc/123_$"), "abc123");
  assert.equal(superbString.removeAllSymbols(""), "");
});

test("duplicate repeats strings and preserves native repeat errors", () => {
  assert.equal(superbString.duplicate("ha", 3), "hahaha");
  assert.equal(superbString.duplicate("ha"), "haha");
  assert.equal(superbString.duplicate("ha", 0), "");
  assert.throws(() => superbString.duplicate("ha", -1), RangeError);
});

test("reverse reverses UTF-16 code units", () => {
  assert.equal(superbString.reverse("hello"), "olleh");
  assert.equal(superbString.reverse(""), "");
  assert.equal(superbString.reverse("a🙂"), "\ude42\ud83da");
});

test("slugify lowercases, hyphenates spaces, and removes punctuation", () => {
  assert.equal(superbString.slugify("Hello, World!"), "hello-world");
  assert.equal(superbString.slugify("Already-slugged"), "already-slugged");
  assert.equal(superbString.slugify(""), "");
});

test("case conversion helpers handle spaces, separators, numbers, and empty strings", () => {
  assert.equal(superbString.camelCase("hello world"), "helloWorld");
  assert.equal(superbString.camelCase("  user-id_value 42  "), "userIdValue42");
  assert.equal(superbString.camelCase("AlreadyMixed_value"), "alreadymixedValue");
  assert.equal(superbString.camelCase(""), "");

  assert.equal(superbString.pascalCase("hello world"), "HelloWorld");
  assert.equal(superbString.pascalCase("user-id_value 42"), "UserIdValue42");
  assert.equal(superbString.pascalCase(""), "");

  assert.equal(superbString.snakeCase("hello world"), "hello_world");
  assert.equal(superbString.snakeCase("user-id value_42"), "user_id_value_42");
  assert.equal(superbString.snakeCase("Hello, World!"), "hello_world");
  assert.equal(superbString.snakeCase(""), "");

  assert.equal(superbString.kebabCase("hello world"), "hello-world");
  assert.equal(superbString.kebabCase("user_id value-42"), "user-id-value-42");
  assert.equal(superbString.kebabCase("Hello, World!"), "hello-world");
  assert.equal(superbString.kebabCase(""), "");

  assert.equal(superbString.titleCase("hello world"), "Hello World");
  assert.equal(superbString.titleCase("user-id_value 42"), "User Id Value 42");
  assert.equal(superbString.titleCase("hello, world!"), "Hello World");
  assert.equal(superbString.titleCase(""), "");

  assert.equal(superbString.capitalize("hello world"), "Hello world");
  assert.equal(superbString.capitalize("h"), "H");
  assert.equal(superbString.capitalize(""), "");
});

test("counting helpers return predictable basic counts", () => {
  assert.equal(superbString.wordCount("Hello, world! 123"), 3);
  assert.equal(superbString.wordCount("  multiple   spaces_and-hyphens  "), 4);
  assert.equal(superbString.wordCount(""), 0);

  assert.equal(superbString.charCount("hello"), 5);
  assert.equal(superbString.charCount("a🙂"), 2);
  assert.equal(superbString.charCount(""), 0);

  assert.equal(superbString.sentenceCount("One. Two! Three?"), 3);
  assert.equal(superbString.sentenceCount("Wait... really?! Yes."), 3);
  assert.equal(superbString.sentenceCount("No ending punctuation"), 0);
  assert.equal(superbString.sentenceCount(""), 0);
});

test("cleanup helpers remove duplicate lines and normalize unicode", () => {
  assert.equal(
    superbString.removeDuplicateLines("first\nsecond\nfirst\n\nsecond\nthird"),
    "first\nsecond\n\nthird"
  );
  assert.equal(superbString.removeDuplicateLines("same\r\nsame\r\nother"), "same\nother");
  assert.equal(superbString.removeDuplicateLines(""), "");

  assert.equal(superbString.normalizeUnicode("e\u0301"), "\u00e9");
  assert.equal(superbString.normalizeUnicode("\u00e9", "NFD"), "e\u0301");
  assert.equal(superbString.normalizeUnicode("", "NFKC"), "");
});

test("isSlug validates lowercase URL slug format", () => {
  assert.equal(superbString.isSlug("hello-world-123"), true);
  assert.equal(superbString.isSlug("hello"), true);
  assert.equal(superbString.isSlug(""), false);
  assert.equal(superbString.isSlug("Hello-world"), false);
  assert.equal(superbString.isSlug("-hello"), false);
  assert.equal(superbString.isSlug("hello-"), false);
  assert.equal(superbString.isSlug("hello--world"), false);
  assert.equal(superbString.isSlug("hello_world"), false);
  assert.equal(superbString.isSlug("hello world"), false);
});

test("truncate returns a substring up to the requested length", () => {
  assert.equal(superbString.truncate("Big Cat lives in the Jungle", 13), "Big Cat lives");
  assert.equal(superbString.truncate("hello", 10), "hello");
  assert.equal(superbString.truncate("hello", -1), "");
});

test("paraToSingleLine collapses whitespace to spaces", () => {
  assert.equal(
    superbString.paraToSingleLine("Why so serious?\nLet's put a smile\tthere."),
    "Why so serious? Let's put a smile there."
  );
  assert.equal(superbString.paraToSingleLine(""), "");
});

test("alphabetize sorts words with localeCompare", () => {
  assert.equal(
    superbString.alphabetize("Welcome to the world of JavaScript!"),
    "JavaScript! of the to Welcome world"
  );
  assert.equal(superbString.alphabetize(""), "");
});

test("zalgo preserves spaces and includes original characters", () => {
  const result = superbString.zalgo("ab cd");
  assert.match(result, /^a.*b.* c.*d.*/u);
});

test("rotate13Deg applies ROT13 to letters only", () => {
  assert.equal(superbString.rotate13Deg("Hello World!"), "Uryyb Jbeyq!");
  assert.equal(superbString.rotate13Deg("Uryyb Jbeyq!"), "Hello World!");
  assert.equal(superbString.rotate13Deg("123!?"), "123!?");
});

test("URI helpers encode, decode, and preserve native malformed URI errors", () => {
  const encoded = superbString.encodeUri("https://example.com/Hello, World!");
  assert.equal(encoded, "https://example.com/Hello,%20World!");
  assert.equal(superbString.decodeUri(encoded), "https://example.com/Hello, World!");
  assert.throws(() => superbString.decodeUri("%E0%A4%A"), URIError);
});

test("extractText keeps letters and spaces only", () => {
  assert.equal(superbString.extractText("3.14 is a pi number."), " is a pi number");
  assert.equal(superbString.extractText("abc/123_$"), "abc");
  assert.equal(superbString.extractText(""), "");
});

test("extractNumber keeps digits and spaces only", () => {
  assert.equal(superbString.extractNumber("4 apples, 3 oranges, 1 banana, 2 pears"), "4  3  1  2 ");
  assert.equal(superbString.extractNumber("abc/123_$"), "123");
  assert.equal(superbString.extractNumber(""), "");
});

test("addPrefix and addSuffix concatenate strings", () => {
  assert.equal(superbString.addPrefix("world", "hello "), "hello world");
  assert.equal(superbString.addSuffix("hello", " world"), "hello world");
  assert.equal(superbString.addPrefix("", "x"), "x");
  assert.equal(superbString.addSuffix("", "x"), "x");
});

test("getDummyText returns stable placeholder text", () => {
  const text = superbString.getDummyText();
  assert.equal(typeof text, "string");
  assert.ok(text.startsWith("Lorem ipsum dolor sit amet"));
  assert.ok(text.length > 100);
});

test("getRandomCharacters returns requested length from documented character set", () => {
  assert.equal(superbString.getRandomCharacters(0), "");
  assert.equal(superbString.getRandomCharacters(-1), "");
  const result = superbString.getRandomCharacters(30);
  assert.equal(result.length, 30);
  assert.match(result, /^[A-Za-z0-9\-!%*~`()\[\]{}<>_]+$/);
});

test("normalizeWhitespace collapses repeated whitespace and trims", () => {
  assert.equal(superbString.normalizeWhitespace("  a   b\tc\n d  "), "a b c d");
  assert.equal(superbString.normalizeWhitespace("\n\t"), "");
  assert.equal(superbString.normalizeWhitespace(""), "");
});

test("normalizeLineEndings converts mixed line endings", () => {
  assert.equal(superbString.normalizeLineEndings("a\r\nb\rc\nd"), "a\nb\nc\nd");
  assert.equal(superbString.normalizeLineEndings("a\nb", "\r\n"), "a\r\nb");
  assert.equal(superbString.normalizeLineEndings(""), "");
});

test("stripHtml removes tags, comments, and attributes", () => {
  assert.equal(superbString.stripHtml("<p>Hello <strong>world</strong></p>"), "Hello world");
  assert.equal(superbString.stripHtml('<a href="https://example.com">Link</a><!-- note -->'), "Link");
  assert.equal(superbString.stripHtml("plain text"), "plain text");
  assert.equal(superbString.stripHtml("2 < 3 and <broken"), "2 < 3 and <broken");
});

test("removeMarkdown removes common lightweight markdown syntax", () => {
  assert.equal(
    superbString.removeMarkdown("# Title\n- **Hello** _world_ [site](https://example.com) `code`\n> quote"),
    "Title\nHello world site code\nquote"
  );
  assert.equal(superbString.removeMarkdown("plain text"), "plain text");
});

test("extractUrls returns http and https URLs without trailing punctuation", () => {
  assert.deepEqual(superbString.extractUrls("See https://example.com, then http://a.test/path?q=1."), [
    "https://example.com",
    "http://a.test/path?q=1",
  ]);
  assert.deepEqual(superbString.extractUrls("no url"), []);
});

test("extractEmails returns valid email-looking addresses", () => {
  assert.deepEqual(superbString.extractEmails("no email here"), []);
  assert.deepEqual(superbString.extractEmails("Email one@example.com"), ["one@example.com"]);
  assert.deepEqual(superbString.extractEmails("Mail a+b@example.co.uk and user@test.io."), [
    "a+b@example.co.uk",
    "user@test.io",
  ]);
  assert.deepEqual(superbString.extractEmails("Copy one@example.com and one@example.com"), [
    "one@example.com",
    "one@example.com",
  ]);
  assert.deepEqual(superbString.extractEmails("bad @example and a@b and user@example"), []);
});

test("extractEmails declaration exposes a string array return type", () => {
  const declarations = fs.readFileSync(
    path.join(__dirname, "..", "dist", "index.d.ts"),
    "utf8"
  );

  assert.match(
    declarations,
    /export declare const extractEmails: \(str: string\) => string\[\];/
  );
});

test("truncateWords limits text by word count and appends suffix", () => {
  assert.equal(superbString.truncateWords("one two three", 5), "one two three");
  assert.equal(superbString.truncateWords("one two three", 3), "one two three");
  assert.equal(superbString.truncateWords("one two three", 2), "one two...");
  assert.equal(superbString.truncateWords("one two three", 0), "...");
  assert.equal(superbString.truncateWords("one two three", 2, " [more]"), "one two [more]");
});

test("splitIntoParagraphs returns trimmed non-empty paragraphs", () => {
  assert.deepEqual(superbString.splitIntoParagraphs(" first\r\n\r\nsecond\n\n\n third "), [
    "first",
    "second",
    "third",
  ]);
  assert.deepEqual(superbString.splitIntoParagraphs(" \n\t "), []);
});

test("chunkText chunks by character length and prefers whitespace boundaries", () => {
  assert.deepEqual(superbString.chunkText("short", 10), ["short"]);
  assert.deepEqual(superbString.chunkText("one two three four", 7), ["one two", "three", "four"]);
  assert.deepEqual(superbString.chunkText("abcdefghij", 4), ["abcd", "efgh", "ij"]);
  assert.deepEqual(superbString.chunkText("abcdef", 4, 2), ["abcd", "cdef"]);
  assert.deepEqual(superbString.chunkText("abc", 0), []);
  assert.deepEqual(superbString.chunkText("abcdef", 4, 10), ["abcd", "bcde", "cdef"]);
});

test("extractCodeBlocks returns fenced markdown code blocks", () => {
  assert.deepEqual(
    superbString.extractCodeBlocks("```js\nconsole.log(1);\n```\ntext\n```\nraw\n```"),
    [
      { language: "js", code: "console.log(1);" },
      { language: "", code: "raw" },
    ]
  );
  assert.deepEqual(superbString.extractCodeBlocks("no blocks"), []);
});

test("removeCodeBlocks removes fenced markdown code and keeps prose", () => {
  assert.equal(
    superbString.removeCodeBlocks("before\n```js\nconsole.log(1);\n```\nafter\n```\nraw\n```"),
    "before\nafter"
  );
});

test("safeJsonParse returns parsed JSON or fallback without throwing", () => {
  assert.deepEqual(superbString.safeJsonParse('{"ok":true}'), { ok: true });
  assert.deepEqual(superbString.safeJsonParse("[1,2]"), [1, 2]);
  assert.equal(superbString.safeJsonParse("true"), true);
  assert.equal(superbString.safeJsonParse("{bad"), null);
  assert.equal(superbString.safeJsonParse("{bad", "fallback"), "fallback");
});
