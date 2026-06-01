/**
 * Replaces delimiter occurrences in a string with newline characters.
 *
 * @param {string} str - The string to be split.
 * @param {string} [delimiter=" "] - The delimiter to replace. Defaults to a space character.
 * @returns {string} The string with delimiter occurrences replaced by newline characters.
 */
export const splitString = (str: string, delimiter: string = " ") => {
  const splittedString = str.split(delimiter).join("\n");
  return splittedString;
};

/**
 * Joins a string by replacing newline characters with spaces.
 *
 * @param {string} str - The input string to be joined.
 * @returns {string} The joined string with newline characters replaced by spaces.
 */
export const joinString = (str: string) => {
  const joinedString = str.replace(/\n/g, " ");
  return joinedString;
};

/**
 * Encodes a string using Base64 encoding.
 *
 * @param {string} str - The string to be encoded.
 * @returns {string} The encoded string.
 */
export const base64Encode = (str: string) => {
  const encodedStr = btoa(str);
  return encodedStr;
};

/**
 * Compares a string with the Base64 encoded string.
 *
 * @param {string} str - The string to compare.
 * @param {string} encodedStr - The encoded string to compare against.
 * @returns {boolean} - Returns `true` if the string matches the encoded string, `false` otherwise.
 */
export const compare = (str: string, encodedStr: string) => {
  try {
    let decodedStr = atob(encodedStr);

    if (str !== decodedStr) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Decodes a Base64-encoded string.
 *
 * @param {string} encodedStr - The Base64-encoded string to decode.
 * @returns {string} The decoded string.
 */
export const base64Decode = (encodedStr: string) => {
  const decodedStr = atob(encodedStr);
  return decodedStr;
};

/**
 * Removes extra spaces from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with extra spaces removed.
 */
export const removeExtraSpaces = (str: string) => {
  const extraSpaceFreeStr = str
    .replace(/\s+/g, " ")
    .replace(/^\s+|\s+$/g, "")
    .replace(/ +(\W)/g, "$1");
  return extraSpaceFreeStr;
};

/**
 * Removes all spaces from a given text.
 *
 * @returns {string} The text with all spaces removed.
 */
export const removeAllSpaces = (str: string) => {
  const allSpaceFreeStr = str.replace(/\s+/g, "");
  return allSpaceFreeStr;
};

/**
 * Removes all symbols from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with symbols removed.
 */
export const removeAllSymbols = (str: string) => {
  const regex = /[0-9A-Za-z ]/g;
  const letters = str.match(regex);
  const symbolFreeStr = letters ? letters.join("") : "";
  return symbolFreeStr;
};

const getAsciiWords = (str: string) => {
  return str.match(/[0-9A-Za-z]+/g) || [];
};

const lowerAsciiWord = (word: string) => {
  return word.toLowerCase();
};

const capitalizeAsciiWord = (word: string) => {
  const lowerWord = lowerAsciiWord(word);
  return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
};

const joinWords = (
  str: string,
  transform: (word: string) => string,
  separator: string
) => {
  return getAsciiWords(str).map(transform).join(separator);
};

/**
 * Converts a string to camelCase using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The camelCase string.
 */
export const camelCase = (str: string) => {
  const words = getAsciiWords(str);
  return words
    .map((word, index) => {
      return index === 0 ? lowerAsciiWord(word) : capitalizeAsciiWord(word);
    })
    .join("");
};

/**
 * Converts a string to PascalCase using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
export const pascalCase = (str: string) => {
  return getAsciiWords(str).map(capitalizeAsciiWord).join("");
};

/**
 * Converts a string to snake_case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The snake_case string.
 */
export const snakeCase = (str: string) => {
  return getAsciiWords(str).map(lowerAsciiWord).join("_");
};

/**
 * Converts a string to kebab-case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The kebab-case string.
 */
export const kebabCase = (str: string) => {
  return getAsciiWords(str).map(lowerAsciiWord).join("-");
};

/**
 * Converts a string to Title Case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The Title Case string.
 */
export const titleCase = (str: string) => {
  return getAsciiWords(str).map(capitalizeAsciiWord).join(" ");
};

/**
 * Uppercases the first character and leaves the rest unchanged.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a string to lowercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The lowercase string.
 */
export const lowerCase = (str: string) => {
  return str.toLowerCase();
};

/**
 * Converts a string to uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The uppercase string.
 */
export const upperCase = (str: string) => {
  return str.toUpperCase();
};

/**
 * Converts a string to CONSTANT_CASE using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The CONSTANT_CASE string.
 */
export const constantCase = (str: string) => {
  return joinWords(str, (word) => word.toUpperCase(), "_");
};

/**
 * Converts a string to Pascal_Snake_Case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The Pascal_Snake_Case string.
 */
export const pascalSnakeCase = (str: string) => {
  return joinWords(str, capitalizeAsciiWord, "_");
};

/**
 * Converts a string to Train-Case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The Train-Case string.
 */
export const trainCase = (str: string) => {
  return joinWords(str, capitalizeAsciiWord, "-");
};

/**
 * Converts a string to dot.case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The dot.case string.
 */
export const dotCase = (str: string) => {
  return joinWords(str, lowerAsciiWord, ".");
};

/**
 * Converts a string to path/case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The path/case string.
 */
export const pathCase = (str: string) => {
  return joinWords(str, lowerAsciiWord, "/");
};

/**
 * Inverts uppercase and lowercase characters.
 *
 * @param {string} str - The input string.
 * @returns {string} The inverted-case string.
 */
export const invertCase = (str: string) => {
  return Array.from(str)
    .map((char) => {
      const upper = char.toUpperCase();
      const lower = char.toLowerCase();

      if (char === upper && char !== lower) {
        return lower;
      }

      if (char === lower && char !== upper) {
        return upper;
      }

      return char;
    })
    .join("");
};

/**
 * Lowercases words and uppercases the final character of each word.
 *
 * @param {string} str - The input string.
 * @returns {string} The reverse title case string.
 */
export const reverseTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.slice(0, -1) + word.slice(-1).toUpperCase();
    })
    .join(" ");
};

/**
 * Alternates character casing starting with uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The alternating-case string.
 */
export const alternateCase1 = (str: string) => {
  return Array.from(str.toLowerCase())
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
    .join("");
};

/**
 * Alternates character casing starting with lowercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The alternating-case string.
 */
export const alternateCase2 = (str: string) => {
  return Array.from(str.toUpperCase())
    .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char))
    .join("");
};

/**
 * Uppercases each word and lowercases its first character.
 *
 * @param {string} str - The input string.
 * @returns {string} The toggled-case string.
 */
export const toggleCase = (str: string) => {
  return str
    .toUpperCase()
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join(" ");
};

/**
 * Converts common separated and camelCase input to lowercase words.
 *
 * @param {string} str - The input string.
 * @returns {string} The no-case string.
 */
export const noCase = (str: string) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[\W_]+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
};

/**
 * Converts basic sentences to sentence case.
 *
 * @param {string} str - The input string.
 * @returns {string} The sentence-cased string.
 */
export const sentenceCase = (str: string) => {
  const lower = str.toLowerCase();
  return lower.replace(/(^\s*\w|[.!?]\s*\w)/g, (match) => match.toUpperCase());
};

/**
 * Counts ASCII word-like sequences in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} The word count.
 */
export const wordCount = (str: string) => {
  return getAsciiWords(str).length;
};

/**
 * Counts Unicode code points in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} The character count.
 */
export const charCount = (str: string) => {
  return Array.from(str).length;
};

/**
 * Counts basic sentence-ending punctuation groups.
 *
 * @param {string} str - The input string.
 * @returns {number} The sentence count.
 */
export const sentenceCount = (str: string) => {
  const sentences = str.match(/[.!?]+/g) || [];
  return sentences.length;
};

/**
 * Removes repeated lines while preserving the first occurrence order.
 *
 * @param {string} str - The input string.
 * @returns {string} The text without duplicate lines.
 */
export const removeDuplicateLines = (str: string) => {
  const seen = new Set<string>();
  const lines = normalizeLineEndings(str).split("\n");
  const uniqueLines = lines.filter((line) => {
    if (seen.has(line)) {
      return false;
    }

    seen.add(line);
    return true;
  });
  return uniqueLines.join("\n");
};

/**
 * Normalizes Unicode using the native String.prototype.normalize method.
 *
 * @param {string} str - The input string.
 * @param {"NFC" | "NFD" | "NFKC" | "NFKD"} [form="NFC"] - The normalization form.
 * @returns {string} The normalized string.
 */
export const normalizeUnicode = (
  str: string,
  form: "NFC" | "NFD" | "NFKC" | "NFKD" = "NFC"
) => {
  return str.normalize(form);
};

/**
 * Checks whether a string is a lowercase URL slug.
 *
 * @param {string} str - The input string.
 * @returns {boolean} True when the string is a valid slug.
 */
export const isSlug = (str: string) => {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str);
};

/**
 * Collapses repeated whitespace into single spaces and trims the result.
 *
 * @param {string} str - The input string.
 * @returns {string} The normalized string.
 */
export const normalizeWhitespace = (str: string) => {
  const normalizedStr = str.replace(/\s+/g, " ").trim();
  return normalizedStr;
};

/**
 * Converts CRLF and CR line endings to the requested newline style.
 *
 * @param {string} str - The input string.
 * @param {"\n" | "\r\n"} [newline="\n"] - The newline style to use.
 * @returns {string} The string with normalized line endings.
 */
export const normalizeLineEndings = (
  str: string,
  newline: "\n" | "\r\n" = "\n"
) => {
  const normalizedStr = str.replace(/\r\n|\r|\n/g, "\n").replace(/\n/g, newline);
  return normalizedStr;
};

/**
 * Removes HTML comments and tags from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The text with HTML tags removed.
 */
export const stripHtml = (str: string) => {
  const htmlFreeStr = str.replace(/<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*>/g, "");
  return htmlFreeStr;
};

/**
 * Removes common Markdown syntax while keeping readable text.
 *
 * @param {string} str - The Markdown string.
 * @returns {string} The string with common Markdown markers removed.
 */
export const removeMarkdown = (str: string) => {
  const markdownFreeStr = str
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/~~(.*?)~~/g, "$1")
    .replace(/^\s*[-*_]{3,}\s*$/gm, "")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
  return markdownFreeStr;
};

const trimTrailingUrlPunctuation = (url: string) => {
  return url.replace(/[.,!?;:]+$/g, "").replace(/\)+$/g, (closingParens) => {
    return closingParens.length > (url.match(/\(/g) || []).length ? "" : closingParens;
  });
};

/**
 * Extracts HTTP and HTTPS URLs from a string.
 *
 * @param {string} str - The input string.
 * @returns {string[]} A list of URLs.
 */
export const extractUrls = (str: string) => {
  const urls = str.match(/https?:\/\/[^\s<>"']+/g) || [];
  return urls.map(trimTrailingUrlPunctuation);
};

/**
 * Extracts email-looking addresses from a string.
 *
 * @param {string} str - The input string.
 * @returns {string[]} A list of email addresses.
 */
export const extractEmails = (str: string): string[] => {
  const emails = str.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [];
  return emails;
};

/**
 * Duplicates a given string a specified number of times.
 *
 * @param {string} str - The string to be duplicated.
 * @param {number} [count=2] - The number of times the string should be duplicated. Default is 2.
 * @returns {string} The duplicated string.
 */
export const duplicate = (str: string, count: number = 2) => {
  const duplicatedStr = str.repeat(count);
  return duplicatedStr;
};

/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
export const reverse = (str: string) => {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
};

/**
 * Converts a string into a slug by removing special characters and replacing spaces with hyphens.
 * @param {string} str - The string to be slugified.
 * @returns {string} - The slugified string.
 */
export const slugify = (str: string) => {
  const slugifiedStr = str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  return slugifiedStr;
};

/**
 * Truncates a string to a specified length.
 *
 * @param {string} str - The string to be truncated.
 * @param {number} length - The maximum length of the truncated string.
 * @returns {string} The truncated string.
 */
export const truncate = (str: string, length: number) => {
  const truncatedStr = str.substring(0, length);
  return truncatedStr;
};

/**
 * Truncates a string to a maximum number of words.
 *
 * @param {string} str - The string to truncate.
 * @param {number} maxWords - The maximum number of words to keep.
 * @param {string} [suffix="..."] - The suffix appended when text is truncated.
 * @returns {string} The word-limited string.
 */
export const truncateWords = (
  str: string,
  maxWords: number,
  suffix: string = "..."
) => {
  const words = str.trim().match(/\S+/g) || [];

  if (maxWords <= 0) {
    return words.length > 0 ? suffix : "";
  }

  if (words.length <= maxWords) {
    return words.join(" ");
  }

  const truncatedStr = words.slice(0, maxWords).join(" ") + suffix;
  return truncatedStr;
};

/**
 * Converts a paragraph to a single line by removing extra whitespace.
 *
 * @param {string} str - The paragraph to be converted.
 * @returns {string} The converted paragraph as a single line.
 */
export const paraToSingleLine = (str: string) => {
  const singleLine = str.replace(/\s+/g, " ");
  return singleLine;
};

/**
 * Splits text into trimmed, non-empty paragraphs.
 *
 * @param {string} str - The input text.
 * @returns {string[]} Paragraphs from the text.
 */
export const splitIntoParagraphs = (str: string) => {
  const paragraphs = normalizeLineEndings(str)
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
  return paragraphs;
};

/**
 * Splits text into character-length chunks, preferring whitespace breaks.
 *
 * @param {string} str - The input text.
 * @param {number} maxLength - Maximum chunk length.
 * @param {number} [overlap=0] - Number of characters to overlap between chunks.
 * @returns {string[]} Text chunks.
 */
export const chunkText = (
  str: string,
  maxLength: number,
  overlap: number = 0
) => {
  if (maxLength <= 0 || str.length === 0) {
    return [];
  }

  const safeOverlap = Math.max(0, Math.min(overlap, maxLength - 1));
  const chunks: string[] = [];

  if (safeOverlap > 0) {
    const step = maxLength - safeOverlap;
    for (let index = 0; index < str.length; index += step) {
      const chunk = str.slice(index, index + maxLength).trim();
      if (chunk.length > 0) {
        chunks.push(chunk);
      }
      if (index + maxLength >= str.length) {
        break;
      }
    }
    return chunks;
  }

  let remaining = str.trim();
  while (remaining.length > 0) {
    if (remaining.length <= maxLength) {
      chunks.push(remaining);
      break;
    }

    let splitAt = maxLength;
    const nextChar = remaining.charAt(maxLength);
    if (!/\s/.test(nextChar)) {
      const whitespaceIndex = remaining.slice(0, maxLength + 1).search(/\s+\S*$/);
      if (whitespaceIndex > 0) {
        splitAt = whitespaceIndex;
      }
    }

    const chunk = remaining.slice(0, splitAt).trim();
    if (chunk.length > 0) {
      chunks.push(chunk);
    }
    remaining = remaining.slice(splitAt).trim();
  }

  return chunks;
};

/**
 * Alphabetizes the words in a given string.
 *
 * @param {string} str - The input string to alphabetize.
 * @returns {string} - The alphabetized string.
 */
export const alphabetize = (str: string) => {
  const alphabetizedStr = str
    .split(" ")
    .sort(function (a, b) {
      return a.localeCompare(b);
    })
    .join(" ")
    .toString();
  return alphabetizedStr;
};

/**
 * Generates a zalgo text by adding random diacritic characters to each character in the input string.
 * @param {string} str - The input string.
 * @returns {string} The zalgo text generated from the input string.
 */
export const zalgo = (str: string) => {
  type ZalgoType = {
    chars: {
      [index: number]: string[];
    };
    random: (len: number) => number;
    generate: (str: string) => string;
  };
  var Z: ZalgoType = {
    chars: {
      0: [
        /* up */ "\u030d" /*     ̍     */,
        "\u030e" /*     ̎     */,
        "\u0304" /*     ̄     */,
        "\u0305" /*     ̅     */,
        "\u033f" /*     ̿     */,
        "\u0311" /*     ̑     */,
        "\u0306" /*     ̆     */,
        "\u0310" /*     ̐     */,
        "\u0352" /*     ͒     */,
        "\u0357" /*     ͗     */,
        "\u0351" /*     ͑     */,
        "\u0307" /*     ̇     */,
        "\u0308" /*     ̈     */,
        "\u030a" /*     ̊     */,
        "\u0342" /*     ͂     */,
        "\u0343" /*     ̓     */,
        "\u0344" /*     ̈́     */,
        "\u034a" /*     ͊     */,
        "\u034b" /*     ͋     */,
        "\u034c" /*     ͌     */,
        "\u0303" /*     ̃     */,
        "\u0302" /*     ̂     */,
        "\u030c" /*     ̌     */,
        "\u0350" /*     ͐     */,
        "\u0300" /*     ̀     */,
        "\u0301" /*     ́     */,
        "\u030b" /*     ̋     */,
        "\u030f" /*     ̏     */,
        "\u0312" /*     ̒     */,
        "\u0313" /*     ̓     */,
        "\u0314" /*     ̔     */,
        "\u033d" /*     ̽     */,
        "\u0309" /*     ̉     */,
        "\u0363" /*     ͣ     */,
        "\u0364" /*     ͤ     */,
        "\u0365" /*     ͥ     */,
        "\u0366" /*     ͦ     */,
        "\u0367" /*     ͧ     */,
        "\u0368" /*     ͨ     */,
        "\u0369" /*     ͩ     */,
        "\u036a" /*     ͪ     */,
        "\u036b" /*     ͫ     */,
        "\u036c" /*     ͬ     */,
        "\u036d" /*     ͭ     */,
        "\u036e" /*     ͮ     */,
        "\u036f" /*     ͯ     */,
        "\u033e" /*     ̾     */,
        "\u035b" /*     ͛     */,
        "\u0346" /*     ͆     */,
        "\u031a" /*     ̚     */,
      ],
      1: [
        /* down */ "\u0316" /*     ̖     */,
        "\u0317" /*     ̗     */,
        "\u0318" /*     ̘     */,
        "\u0319" /*     ̙     */,
        "\u031c" /*     ̜     */,
        "\u031d" /*     ̝     */,
        "\u031e" /*     ̞     */,
        "\u031f" /*     ̟     */,
        "\u0320" /*     ̠     */,
        "\u0324" /*     ̤     */,
        "\u0325" /*     ̥     */,
        "\u0326" /*     ̦     */,
        "\u0329" /*     ̩     */,
        "\u032a" /*     ̪     */,
        "\u032b" /*     ̫     */,
        "\u032c" /*     ̬     */,
        "\u032d" /*     ̭     */,
        "\u032e" /*     ̮     */,
        "\u032f" /*     ̯     */,
        "\u0330" /*     ̰     */,
        "\u0331" /*     ̱     */,
        "\u0332" /*     ̲     */,
        "\u0333" /*     ̳     */,
        "\u0339" /*     ̹     */,
        "\u033a" /*     ̺     */,
        "\u033b" /*     ̻     */,
        "\u033c" /*     ̼     */,
        "\u0345" /*     ͅ     */,
        "\u0347" /*     ͇     */,
        "\u0348" /*     ͈     */,
        "\u0349" /*     ͉     */,
        "\u034d" /*     ͍     */,
        "\u034e" /*     ͎     */,
        "\u0353" /*     ͓     */,
        "\u0354" /*     ͔     */,
        "\u0355" /*     ͕     */,
        "\u0356" /*     ͖     */,
        "\u0359" /*     ͙     */,
        "\u035a" /*     ͚     */,
        "\u0323" /*     ̣     */,
      ],
      2: [
        /* mid */ "\u0315" /*     ̕     */,
        "\u031b" /*     ̛     */,
        "\u0340" /*     ̀     */,
        "\u0341" /*     ́     */,
        "\u0358" /*     ͘     */,
        "\u0321" /*     ̡     */,
        "\u0322" /*     ̢     */,
        "\u0327" /*     ̧     */,
        "\u0328" /*     ̨     */,
        "\u0334" /*     ̴     */,
        "\u0335" /*     ̵     */,
        "\u0336" /*     ̶     */,
        "\u034f" /*     ͏     */,
        "\u035c" /*     ͜     */,
        "\u035d" /*     ͝     */,
        "\u035e" /*     ͞     */,
        "\u035f" /*     ͟     */,
        "\u0360" /*     ͠     */,
        "\u0362" /*     ͢     */,
        "\u0338" /*     ̸     */,
        "\u0337" /*     ̷      */,
        "\u0361" /*     ͡     */,
        "\u0489" /*     ҉_     */,
      ],
    },
    random: function (len: number) {
      if (len === 1) return 0;
      return !!len ? Math.floor(Math.random() * len + 1) - 1 : Math.random();
    },
    generate: function (str: string) {
      var str_arr = str.split(""),
        output = str_arr.map(function (a) {
          if (a === " ") return a;
          for (var i = 0, l = Z.random(16); i < l; i++) {
            var rand = Z.random(3);
            a += Z.chars[rand][Z.random(Z.chars[rand].length)];
          }
          return a;
        });
      return output.join("");
    },
  };
  const zalgoStr = Z.generate(str);
  return zalgoStr;
};

/**
 * Rotates each character in a string by 13 positions in the alphabet.
 * Non-alphabetic characters remain unchanged.
 *
 * @param {string} str - The input string to be rotated.
 * @returns {string} The rotated string.
 */
export const rotate13Deg = (str: string) => {
  const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  const rotatedStr = str.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
  return rotatedStr;
};

/**
 * Encodes a URI string.
 *
 * @param {string} str - The URI string to be encoded.
 * @returns {string} - The encoded URI string.
 */
export const encodeUri = (str: string) => {
  const encodedUri = encodeURI(str);
  return encodedUri;
};

/**
 * Decodes a URI string.
 *
 * @param {string} str - The URI string to decode.
 * @returns {string} - The decoded URI string.
 */
export const decodeUri = (str: string) => {
  const decodedUri = decodeURI(str);
  return decodedUri;
};

/**
 * Extracts alphabetic characters from a given string.
 *
 * @param {string} str - The input string from which alphabetic characters will be extracted.
 * @returns {string} - The extracted alphabetic characters as a single string.
 */
export const extractText = (str: string) => {
  const regex = /[A-Za-z ]/g;
  const letters = str.match(regex);
  const extractedText = letters ? letters.join("") : "";
  return extractedText;
};

/**
 * Extracts numbers from a given string.
 *
 * @param {string} str - The input string from which numbers need to be extracted.
 * @returns {string} - The extracted numbers as a string.
 */
export const extractNumber = (str: string) => {
  const regex = /[0-9 ]/g;
  const nums = str.match(regex);
  const extractedNumber = nums ? nums.join("") : "";
  return extractedNumber;
};

/**
 * Adds a prefix to a given string.
 *
 * @param {string} str - The string to add the prefix to.
 * @param {string} prefix - The prefix to add to the string.
 * @returns {string} The resulting string with the prefix added.
 */
export const addPrefix = (str: string, prefix: string) => {
  const prefixedStr = prefix.concat(str);
  return prefixedStr;
};

/**
 * Concatenates a suffix to a given string.
 *
 * @param {string} str - The original string.
 * @param {string} suffix - The suffix to be added.
 * @returns {string} - The string with the suffix added.
 */
export const addSuffix = (str: string, suffix: string) => {
  const suffixedStr = str.concat(suffix);
  return suffixedStr;
};

/**
 * Generates dummy text using the "Lorem ipsum" placeholder text.
 * @returns {string} The generated dummy text.
 */
export const getDummyText = () => {
  let dummyText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";
  return dummyText;
};

/**
 * Generates a random string of characters.
 *
 * @param {number} length - The length of the random string to generate.
 * @returns {string} The randomly generated string.
 */
export const getRandomCharacters = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!%*~`_()[]{}<>";
  let randomCharacters = "";
  const chaactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    randomCharacters += characters.charAt(
      Math.floor(Math.random() * chaactersLength)
    );
  }

  return randomCharacters;
};

export type CodeBlock = {
  language: string;
  code: string;
};

/**
 * Extracts triple-backtick fenced Markdown code blocks.
 *
 * @param {string} str - The Markdown string.
 * @returns {CodeBlock[]} Extracted code blocks.
 */
export const extractCodeBlocks = (str: string) => {
  const blocks: CodeBlock[] = [];
  const codeBlockRegex = /```([^\r\n`]*)\r?\n([\s\S]*?)```/g;
  let match = codeBlockRegex.exec(str);

  while (match) {
    blocks.push({
      language: match[1].trim(),
      code: match[2].replace(/^\r?\n|\r?\n$/g, ""),
    });
    match = codeBlockRegex.exec(str);
  }

  return blocks;
};

/**
 * Removes triple-backtick fenced Markdown code blocks.
 *
 * @param {string} str - The Markdown string.
 * @returns {string} The string with code blocks removed.
 */
export const removeCodeBlocks = (str: string) => {
  const codeFreeStr = str
    .replace(/```[^\r\n`]*\r?\n[\s\S]*?```/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
  return codeFreeStr;
};

/**
 * Parses JSON without throwing.
 *
 * @param {string} str - The JSON string to parse.
 * @param {unknown} [fallback=null] - The value returned when parsing fails.
 * @returns {unknown} Parsed JSON or the fallback value.
 */
export const safeJsonParse = <T = unknown>(
  str: string,
  fallback?: T
): unknown | T => {
  try {
    const parsedJson = JSON.parse(str);
    return parsedJson;
  } catch (error) {
    return fallback === undefined ? null : fallback;
  }
};
