const assert = require("node:assert/strict");
const test = require("node:test");

const superbString = require("../dist/index.js");

test("exports every documented public API", () => {
  assert.deepEqual(Object.keys(superbString).sort(), [
    "addPrefix",
    "addSuffix",
    "alphabetize",
    "base64Decode",
    "base64Encode",
    "compare",
    "decodeUri",
    "duplicate",
    "encodeUri",
    "extractNumber",
    "extractText",
    "getDummyText",
    "getRandomCharacters",
    "joinString",
    "paraToSingleLine",
    "removeAllSpaces",
    "removeAllSymbols",
    "removeExtraSpaces",
    "reverse",
    "rotate13Deg",
    "slugify",
    "splitString",
    "truncate",
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
