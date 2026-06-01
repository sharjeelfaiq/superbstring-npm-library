"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zalgo = exports.alphabetize = exports.chunkText = exports.splitIntoParagraphs = exports.paraToSingleLine = exports.truncateWords = exports.truncate = exports.slugify = exports.reverse = exports.duplicate = exports.extractEmails = exports.extractUrls = exports.removeMarkdown = exports.stripHtml = exports.normalizeLineEndings = exports.normalizeWhitespace = exports.isSlug = exports.normalizeUnicode = exports.removeDuplicateLines = exports.sentenceCount = exports.charCount = exports.wordCount = exports.sentenceCase = exports.noCase = exports.toggleCase = exports.alternateCase2 = exports.alternateCase1 = exports.reverseTitleCase = exports.invertCase = exports.pathCase = exports.dotCase = exports.trainCase = exports.pascalSnakeCase = exports.constantCase = exports.upperCase = exports.lowerCase = exports.capitalize = exports.titleCase = exports.kebabCase = exports.snakeCase = exports.pascalCase = exports.camelCase = exports.removeAllSymbols = exports.removeAllSpaces = exports.removeExtraSpaces = exports.base64Decode = exports.compare = exports.base64Encode = exports.joinString = exports.splitString = void 0;
exports.safeJsonParse = exports.removeCodeBlocks = exports.extractCodeBlocks = exports.getRandomCharacters = exports.getDummyText = exports.addSuffix = exports.addPrefix = exports.extractNumber = exports.extractText = exports.decodeUri = exports.encodeUri = exports.rotate13Deg = void 0;
/**
 * Replaces delimiter occurrences in a string with newline characters.
 *
 * @param {string} str - The string to be split.
 * @param {string} [delimiter=" "] - The delimiter to replace. Defaults to a space character.
 * @returns {string} The string with delimiter occurrences replaced by newline characters.
 */
const splitString = (str, delimiter = " ") => {
    const splittedString = str.split(delimiter).join("\n");
    return splittedString;
};
exports.splitString = splitString;
/**
 * Joins a string by replacing newline characters with spaces.
 *
 * @param {string} str - The input string to be joined.
 * @returns {string} The joined string with newline characters replaced by spaces.
 */
const joinString = (str) => {
    const joinedString = str.replace(/\n/g, " ");
    return joinedString;
};
exports.joinString = joinString;
/**
 * Encodes a string using Base64 encoding.
 *
 * @param {string} str - The string to be encoded.
 * @returns {string} The encoded string.
 */
const base64Encode = (str) => {
    const encodedStr = btoa(str);
    return encodedStr;
};
exports.base64Encode = base64Encode;
/**
 * Compares a string with the Base64 encoded string.
 *
 * @param {string} str - The string to compare.
 * @param {string} encodedStr - The encoded string to compare against.
 * @returns {boolean} - Returns `true` if the string matches the encoded string, `false` otherwise.
 */
const compare = (str, encodedStr) => {
    try {
        let decodedStr = atob(encodedStr);
        if (str !== decodedStr) {
            return false;
        }
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.compare = compare;
/**
 * Decodes a Base64-encoded string.
 *
 * @param {string} encodedStr - The Base64-encoded string to decode.
 * @returns {string} The decoded string.
 */
const base64Decode = (encodedStr) => {
    const decodedStr = atob(encodedStr);
    return decodedStr;
};
exports.base64Decode = base64Decode;
/**
 * Removes extra spaces from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with extra spaces removed.
 */
const removeExtraSpaces = (str) => {
    const extraSpaceFreeStr = str
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/g, "")
        .replace(/ +(\W)/g, "$1");
    return extraSpaceFreeStr;
};
exports.removeExtraSpaces = removeExtraSpaces;
/**
 * Removes all spaces from a given text.
 *
 * @returns {string} The text with all spaces removed.
 */
const removeAllSpaces = (str) => {
    const allSpaceFreeStr = str.replace(/\s+/g, "");
    return allSpaceFreeStr;
};
exports.removeAllSpaces = removeAllSpaces;
/**
 * Removes all symbols from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with symbols removed.
 */
const removeAllSymbols = (str) => {
    const regex = /[0-9A-Za-z ]/g;
    const letters = str.match(regex);
    const symbolFreeStr = letters ? letters.join("") : "";
    return symbolFreeStr;
};
exports.removeAllSymbols = removeAllSymbols;
const getAsciiWords = (str) => {
    return str.match(/[0-9A-Za-z]+/g) || [];
};
const lowerAsciiWord = (word) => {
    return word.toLowerCase();
};
const capitalizeAsciiWord = (word) => {
    const lowerWord = lowerAsciiWord(word);
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
};
const joinWords = (str, transform, separator) => {
    return getAsciiWords(str).map(transform).join(separator);
};
/**
 * Converts a string to camelCase using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The camelCase string.
 */
const camelCase = (str) => {
    const words = getAsciiWords(str);
    return words
        .map((word, index) => {
        return index === 0 ? lowerAsciiWord(word) : capitalizeAsciiWord(word);
    })
        .join("");
};
exports.camelCase = camelCase;
/**
 * Converts a string to PascalCase using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
const pascalCase = (str) => {
    return getAsciiWords(str).map(capitalizeAsciiWord).join("");
};
exports.pascalCase = pascalCase;
/**
 * Converts a string to snake_case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The snake_case string.
 */
const snakeCase = (str) => {
    return getAsciiWords(str).map(lowerAsciiWord).join("_");
};
exports.snakeCase = snakeCase;
/**
 * Converts a string to kebab-case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The kebab-case string.
 */
const kebabCase = (str) => {
    return getAsciiWords(str).map(lowerAsciiWord).join("-");
};
exports.kebabCase = kebabCase;
/**
 * Converts a string to Title Case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The Title Case string.
 */
const titleCase = (str) => {
    return getAsciiWords(str).map(capitalizeAsciiWord).join(" ");
};
exports.titleCase = titleCase;
/**
 * Uppercases the first character and leaves the rest unchanged.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalize = capitalize;
/**
 * Converts a string to lowercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The lowercase string.
 */
const lowerCase = (str) => {
    return str.toLowerCase();
};
exports.lowerCase = lowerCase;
/**
 * Converts a string to uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The uppercase string.
 */
const upperCase = (str) => {
    return str.toUpperCase();
};
exports.upperCase = upperCase;
/**
 * Converts a string to CONSTANT_CASE using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The CONSTANT_CASE string.
 */
const constantCase = (str) => {
    return joinWords(str, (word) => word.toUpperCase(), "_");
};
exports.constantCase = constantCase;
/**
 * Converts a string to Pascal_Snake_Case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The Pascal_Snake_Case string.
 */
const pascalSnakeCase = (str) => {
    return joinWords(str, capitalizeAsciiWord, "_");
};
exports.pascalSnakeCase = pascalSnakeCase;
/**
 * Converts a string to Train-Case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The Train-Case string.
 */
const trainCase = (str) => {
    return joinWords(str, capitalizeAsciiWord, "-");
};
exports.trainCase = trainCase;
/**
 * Converts a string to dot.case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The dot.case string.
 */
const dotCase = (str) => {
    return joinWords(str, lowerAsciiWord, ".");
};
exports.dotCase = dotCase;
/**
 * Converts a string to path/case using ASCII word boundaries.
 *
 * @param {string} str - The input string.
 * @returns {string} The path/case string.
 */
const pathCase = (str) => {
    return joinWords(str, lowerAsciiWord, "/");
};
exports.pathCase = pathCase;
/**
 * Inverts uppercase and lowercase characters.
 *
 * @param {string} str - The input string.
 * @returns {string} The inverted-case string.
 */
const invertCase = (str) => {
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
exports.invertCase = invertCase;
/**
 * Lowercases words and uppercases the final character of each word.
 *
 * @param {string} str - The input string.
 * @returns {string} The reverse title case string.
 */
const reverseTitleCase = (str) => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => {
        return word.slice(0, -1) + word.slice(-1).toUpperCase();
    })
        .join(" ");
};
exports.reverseTitleCase = reverseTitleCase;
/**
 * Alternates character casing starting with uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The alternating-case string.
 */
const alternateCase1 = (str) => {
    return Array.from(str.toLowerCase())
        .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
        .join("");
};
exports.alternateCase1 = alternateCase1;
/**
 * Alternates character casing starting with lowercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The alternating-case string.
 */
const alternateCase2 = (str) => {
    return Array.from(str.toUpperCase())
        .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char))
        .join("");
};
exports.alternateCase2 = alternateCase2;
/**
 * Uppercases each word and lowercases its first character.
 *
 * @param {string} str - The input string.
 * @returns {string} The toggled-case string.
 */
const toggleCase = (str) => {
    return str
        .toUpperCase()
        .split(" ")
        .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
        .join(" ");
};
exports.toggleCase = toggleCase;
/**
 * Converts common separated and camelCase input to lowercase words.
 *
 * @param {string} str - The input string.
 * @returns {string} The no-case string.
 */
const noCase = (str) => {
    return str
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/[\W_]+/g, " ")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
};
exports.noCase = noCase;
/**
 * Converts basic sentences to sentence case.
 *
 * @param {string} str - The input string.
 * @returns {string} The sentence-cased string.
 */
const sentenceCase = (str) => {
    const lower = str.toLowerCase();
    return lower.replace(/(^\s*\w|[.!?]\s*\w)/g, (match) => match.toUpperCase());
};
exports.sentenceCase = sentenceCase;
/**
 * Counts ASCII word-like sequences in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} The word count.
 */
const wordCount = (str) => {
    return getAsciiWords(str).length;
};
exports.wordCount = wordCount;
/**
 * Counts Unicode code points in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} The character count.
 */
const charCount = (str) => {
    return Array.from(str).length;
};
exports.charCount = charCount;
/**
 * Counts basic sentence-ending punctuation groups.
 *
 * @param {string} str - The input string.
 * @returns {number} The sentence count.
 */
const sentenceCount = (str) => {
    const sentences = str.match(/[.!?]+/g) || [];
    return sentences.length;
};
exports.sentenceCount = sentenceCount;
/**
 * Removes repeated lines while preserving the first occurrence order.
 *
 * @param {string} str - The input string.
 * @returns {string} The text without duplicate lines.
 */
const removeDuplicateLines = (str) => {
    const seen = new Set();
    const lines = (0, exports.normalizeLineEndings)(str).split("\n");
    const uniqueLines = lines.filter((line) => {
        if (seen.has(line)) {
            return false;
        }
        seen.add(line);
        return true;
    });
    return uniqueLines.join("\n");
};
exports.removeDuplicateLines = removeDuplicateLines;
/**
 * Normalizes Unicode using the native String.prototype.normalize method.
 *
 * @param {string} str - The input string.
 * @param {"NFC" | "NFD" | "NFKC" | "NFKD"} [form="NFC"] - The normalization form.
 * @returns {string} The normalized string.
 */
const normalizeUnicode = (str, form = "NFC") => {
    return str.normalize(form);
};
exports.normalizeUnicode = normalizeUnicode;
/**
 * Checks whether a string is a lowercase URL slug.
 *
 * @param {string} str - The input string.
 * @returns {boolean} True when the string is a valid slug.
 */
const isSlug = (str) => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str);
};
exports.isSlug = isSlug;
/**
 * Collapses repeated whitespace into single spaces and trims the result.
 *
 * @param {string} str - The input string.
 * @returns {string} The normalized string.
 */
const normalizeWhitespace = (str) => {
    const normalizedStr = str.replace(/\s+/g, " ").trim();
    return normalizedStr;
};
exports.normalizeWhitespace = normalizeWhitespace;
/**
 * Converts CRLF and CR line endings to the requested newline style.
 *
 * @param {string} str - The input string.
 * @param {"\n" | "\r\n"} [newline="\n"] - The newline style to use.
 * @returns {string} The string with normalized line endings.
 */
const normalizeLineEndings = (str, newline = "\n") => {
    const normalizedStr = str.replace(/\r\n|\r|\n/g, "\n").replace(/\n/g, newline);
    return normalizedStr;
};
exports.normalizeLineEndings = normalizeLineEndings;
/**
 * Removes HTML comments and tags from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The text with HTML tags removed.
 */
const stripHtml = (str) => {
    const htmlFreeStr = str.replace(/<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*>/g, "");
    return htmlFreeStr;
};
exports.stripHtml = stripHtml;
/**
 * Removes common Markdown syntax while keeping readable text.
 *
 * @param {string} str - The Markdown string.
 * @returns {string} The string with common Markdown markers removed.
 */
const removeMarkdown = (str) => {
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
exports.removeMarkdown = removeMarkdown;
const trimTrailingUrlPunctuation = (url) => {
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
const extractUrls = (str) => {
    const urls = str.match(/https?:\/\/[^\s<>"']+/g) || [];
    return urls.map(trimTrailingUrlPunctuation);
};
exports.extractUrls = extractUrls;
/**
 * Extracts email-looking addresses from a string.
 *
 * @param {string} str - The input string.
 * @returns {string[]} A list of email addresses.
 */
const extractEmails = (str) => {
    const emails = str.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [];
    return emails;
};
exports.extractEmails = extractEmails;
/**
 * Duplicates a given string a specified number of times.
 *
 * @param {string} str - The string to be duplicated.
 * @param {number} [count=2] - The number of times the string should be duplicated. Default is 2.
 * @returns {string} The duplicated string.
 */
const duplicate = (str, count = 2) => {
    const duplicatedStr = str.repeat(count);
    return duplicatedStr;
};
exports.duplicate = duplicate;
/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
const reverse = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return reversedStr;
};
exports.reverse = reverse;
/**
 * Converts a string into a slug by removing special characters and replacing spaces with hyphens.
 * @param {string} str - The string to be slugified.
 * @returns {string} - The slugified string.
 */
const slugify = (str) => {
    const slugifiedStr = str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    return slugifiedStr;
};
exports.slugify = slugify;
/**
 * Truncates a string to a specified length.
 *
 * @param {string} str - The string to be truncated.
 * @param {number} length - The maximum length of the truncated string.
 * @returns {string} The truncated string.
 */
const truncate = (str, length) => {
    const truncatedStr = str.substring(0, length);
    return truncatedStr;
};
exports.truncate = truncate;
/**
 * Truncates a string to a maximum number of words.
 *
 * @param {string} str - The string to truncate.
 * @param {number} maxWords - The maximum number of words to keep.
 * @param {string} [suffix="..."] - The suffix appended when text is truncated.
 * @returns {string} The word-limited string.
 */
const truncateWords = (str, maxWords, suffix = "...") => {
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
exports.truncateWords = truncateWords;
/**
 * Converts a paragraph to a single line by removing extra whitespace.
 *
 * @param {string} str - The paragraph to be converted.
 * @returns {string} The converted paragraph as a single line.
 */
const paraToSingleLine = (str) => {
    const singleLine = str.replace(/\s+/g, " ");
    return singleLine;
};
exports.paraToSingleLine = paraToSingleLine;
/**
 * Splits text into trimmed, non-empty paragraphs.
 *
 * @param {string} str - The input text.
 * @returns {string[]} Paragraphs from the text.
 */
const splitIntoParagraphs = (str) => {
    const paragraphs = (0, exports.normalizeLineEndings)(str)
        .split(/\n\s*\n/g)
        .map((paragraph) => paragraph.trim())
        .filter((paragraph) => paragraph.length > 0);
    return paragraphs;
};
exports.splitIntoParagraphs = splitIntoParagraphs;
/**
 * Splits text into character-length chunks, preferring whitespace breaks.
 *
 * @param {string} str - The input text.
 * @param {number} maxLength - Maximum chunk length.
 * @param {number} [overlap=0] - Number of characters to overlap between chunks.
 * @returns {string[]} Text chunks.
 */
const chunkText = (str, maxLength, overlap = 0) => {
    if (maxLength <= 0 || str.length === 0) {
        return [];
    }
    const safeOverlap = Math.max(0, Math.min(overlap, maxLength - 1));
    const chunks = [];
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
exports.chunkText = chunkText;
/**
 * Alphabetizes the words in a given string.
 *
 * @param {string} str - The input string to alphabetize.
 * @returns {string} - The alphabetized string.
 */
const alphabetize = (str) => {
    const alphabetizedStr = str
        .split(" ")
        .sort(function (a, b) {
        return a.localeCompare(b);
    })
        .join(" ")
        .toString();
    return alphabetizedStr;
};
exports.alphabetize = alphabetize;
/**
 * Generates a zalgo text by adding random diacritic characters to each character in the input string.
 * @param {string} str - The input string.
 * @returns {string} The zalgo text generated from the input string.
 */
const zalgo = (str) => {
    var Z = {
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
        random: function (len) {
            if (len === 1)
                return 0;
            return !!len ? Math.floor(Math.random() * len + 1) - 1 : Math.random();
        },
        generate: function (str) {
            var str_arr = str.split(""), output = str_arr.map(function (a) {
                if (a === " ")
                    return a;
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
exports.zalgo = zalgo;
/**
 * Rotates each character in a string by 13 positions in the alphabet.
 * Non-alphabetic characters remain unchanged.
 *
 * @param {string} str - The input string to be rotated.
 * @returns {string} The rotated string.
 */
const rotate13Deg = (str) => {
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    const rotatedStr = str.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
    return rotatedStr;
};
exports.rotate13Deg = rotate13Deg;
/**
 * Encodes a URI string.
 *
 * @param {string} str - The URI string to be encoded.
 * @returns {string} - The encoded URI string.
 */
const encodeUri = (str) => {
    const encodedUri = encodeURI(str);
    return encodedUri;
};
exports.encodeUri = encodeUri;
/**
 * Decodes a URI string.
 *
 * @param {string} str - The URI string to decode.
 * @returns {string} - The decoded URI string.
 */
const decodeUri = (str) => {
    const decodedUri = decodeURI(str);
    return decodedUri;
};
exports.decodeUri = decodeUri;
/**
 * Extracts alphabetic characters from a given string.
 *
 * @param {string} str - The input string from which alphabetic characters will be extracted.
 * @returns {string} - The extracted alphabetic characters as a single string.
 */
const extractText = (str) => {
    const regex = /[A-Za-z ]/g;
    const letters = str.match(regex);
    const extractedText = letters ? letters.join("") : "";
    return extractedText;
};
exports.extractText = extractText;
/**
 * Extracts numbers from a given string.
 *
 * @param {string} str - The input string from which numbers need to be extracted.
 * @returns {string} - The extracted numbers as a string.
 */
const extractNumber = (str) => {
    const regex = /[0-9 ]/g;
    const nums = str.match(regex);
    const extractedNumber = nums ? nums.join("") : "";
    return extractedNumber;
};
exports.extractNumber = extractNumber;
/**
 * Adds a prefix to a given string.
 *
 * @param {string} str - The string to add the prefix to.
 * @param {string} prefix - The prefix to add to the string.
 * @returns {string} The resulting string with the prefix added.
 */
const addPrefix = (str, prefix) => {
    const prefixedStr = prefix.concat(str);
    return prefixedStr;
};
exports.addPrefix = addPrefix;
/**
 * Concatenates a suffix to a given string.
 *
 * @param {string} str - The original string.
 * @param {string} suffix - The suffix to be added.
 * @returns {string} - The string with the suffix added.
 */
const addSuffix = (str, suffix) => {
    const suffixedStr = str.concat(suffix);
    return suffixedStr;
};
exports.addSuffix = addSuffix;
/**
 * Generates dummy text using the "Lorem ipsum" placeholder text.
 * @returns {string} The generated dummy text.
 */
const getDummyText = () => {
    let dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";
    return dummyText;
};
exports.getDummyText = getDummyText;
/**
 * Generates a random string of characters.
 *
 * @param {number} length - The length of the random string to generate.
 * @returns {string} The randomly generated string.
 */
const getRandomCharacters = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!%*~`_()[]{}<>";
    let randomCharacters = "";
    const chaactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        randomCharacters += characters.charAt(Math.floor(Math.random() * chaactersLength));
    }
    return randomCharacters;
};
exports.getRandomCharacters = getRandomCharacters;
/**
 * Extracts triple-backtick fenced Markdown code blocks.
 *
 * @param {string} str - The Markdown string.
 * @returns {CodeBlock[]} Extracted code blocks.
 */
const extractCodeBlocks = (str) => {
    const blocks = [];
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
exports.extractCodeBlocks = extractCodeBlocks;
/**
 * Removes triple-backtick fenced Markdown code blocks.
 *
 * @param {string} str - The Markdown string.
 * @returns {string} The string with code blocks removed.
 */
const removeCodeBlocks = (str) => {
    const codeFreeStr = str
        .replace(/```[^\r\n`]*\r?\n[\s\S]*?```/g, "")
        .replace(/\n{2,}/g, "\n")
        .trim();
    return codeFreeStr;
};
exports.removeCodeBlocks = removeCodeBlocks;
/**
 * Parses JSON without throwing.
 *
 * @param {string} str - The JSON string to parse.
 * @param {unknown} [fallback=null] - The value returned when parsing fails.
 * @returns {unknown} Parsed JSON or the fallback value.
 */
const safeJsonParse = (str, fallback) => {
    try {
        const parsedJson = JSON.parse(str);
        return parsedJson;
    }
    catch (error) {
        return fallback === undefined ? null : fallback;
    }
};
exports.safeJsonParse = safeJsonParse;
