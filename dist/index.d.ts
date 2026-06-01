/**
 * Replaces delimiter occurrences in a string with newline characters.
 *
 * @param {string} str - The string to be split.
 * @param {string} [delimiter=" "] - The delimiter to replace. Defaults to a space character.
 * @returns {string} The string with delimiter occurrences replaced by newline characters.
 */
export declare const splitString: (str: string, delimiter?: string) => string;
/**
 * Joins a string by replacing newline characters with spaces.
 *
 * @param {string} str - The input string to be joined.
 * @returns {string} The joined string with newline characters replaced by spaces.
 */
export declare const joinString: (str: string) => string;
/**
 * Encodes a string using Base64 encoding.
 *
 * @param {string} str - The string to be encoded.
 * @returns {string} The encoded string.
 */
export declare const base64Encode: (str: string) => string;
/**
 * Compares a string with the Base64 encoded string.
 *
 * @param {string} str - The string to compare.
 * @param {string} encodedStr - The encoded string to compare against.
 * @returns {boolean} - Returns `true` if the string matches the encoded string, `false` otherwise.
 */
export declare const compare: (str: string, encodedStr: string) => boolean;
/**
 * Decodes a Base64-encoded string.
 *
 * @param {string} encodedStr - The Base64-encoded string to decode.
 * @returns {string} The decoded string.
 */
export declare const base64Decode: (encodedStr: string) => string;
/**
 * Removes extra spaces from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with extra spaces removed.
 */
export declare const removeExtraSpaces: (str: string) => string;
/**
 * Removes all spaces from a given text.
 *
 * @returns {string} The text with all spaces removed.
 */
export declare const removeAllSpaces: (str: string) => string;
/**
 * Removes all symbols from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with symbols removed.
 */
export declare const removeAllSymbols: (str: string) => string;
/**
 * Collapses repeated whitespace into single spaces and trims the result.
 *
 * @param {string} str - The input string.
 * @returns {string} The normalized string.
 */
export declare const normalizeWhitespace: (str: string) => string;
/**
 * Converts CRLF and CR line endings to the requested newline style.
 *
 * @param {string} str - The input string.
 * @param {"\n" | "\r\n"} [newline="\n"] - The newline style to use.
 * @returns {string} The string with normalized line endings.
 */
export declare const normalizeLineEndings: (str: string, newline?: "\n" | "\r\n") => string;
/**
 * Removes HTML comments and tags from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The text with HTML tags removed.
 */
export declare const stripHtml: (str: string) => string;
/**
 * Removes common Markdown syntax while keeping readable text.
 *
 * @param {string} str - The Markdown string.
 * @returns {string} The string with common Markdown markers removed.
 */
export declare const removeMarkdown: (str: string) => string;
/**
 * Extracts HTTP and HTTPS URLs from a string.
 *
 * @param {string} str - The input string.
 * @returns {string[]} A list of URLs.
 */
export declare const extractUrls: (str: string) => string[];
/**
 * Extracts email-looking addresses from a string.
 *
 * @param {string} str - The input string.
 * @returns {string[]} A list of email addresses.
 */
export declare const extractEmails: (str: string) => RegExpMatchArray | [];
/**
 * Duplicates a given string a specified number of times.
 *
 * @param {string} str - The string to be duplicated.
 * @param {number} [count=2] - The number of times the string should be duplicated. Default is 2.
 * @returns {string} The duplicated string.
 */
export declare const duplicate: (str: string, count?: number) => string;
/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
export declare const reverse: (str: string) => string;
/**
 * Converts a string into a slug by removing special characters and replacing spaces with hyphens.
 * @param {string} str - The string to be slugified.
 * @returns {string} - The slugified string.
 */
export declare const slugify: (str: string) => string;
/**
 * Truncates a string to a specified length.
 *
 * @param {string} str - The string to be truncated.
 * @param {number} length - The maximum length of the truncated string.
 * @returns {string} The truncated string.
 */
export declare const truncate: (str: string, length: number) => string;
/**
 * Truncates a string to a maximum number of words.
 *
 * @param {string} str - The string to truncate.
 * @param {number} maxWords - The maximum number of words to keep.
 * @param {string} [suffix="..."] - The suffix appended when text is truncated.
 * @returns {string} The word-limited string.
 */
export declare const truncateWords: (str: string, maxWords: number, suffix?: string) => string;
/**
 * Converts a paragraph to a single line by removing extra whitespace.
 *
 * @param {string} str - The paragraph to be converted.
 * @returns {string} The converted paragraph as a single line.
 */
export declare const paraToSingleLine: (str: string) => string;
/**
 * Splits text into trimmed, non-empty paragraphs.
 *
 * @param {string} str - The input text.
 * @returns {string[]} Paragraphs from the text.
 */
export declare const splitIntoParagraphs: (str: string) => string[];
/**
 * Splits text into character-length chunks, preferring whitespace breaks.
 *
 * @param {string} str - The input text.
 * @param {number} maxLength - Maximum chunk length.
 * @param {number} [overlap=0] - Number of characters to overlap between chunks.
 * @returns {string[]} Text chunks.
 */
export declare const chunkText: (str: string, maxLength: number, overlap?: number) => string[];
/**
 * Alphabetizes the words in a given string.
 *
 * @param {string} str - The input string to alphabetize.
 * @returns {string} - The alphabetized string.
 */
export declare const alphabetize: (str: string) => string;
/**
 * Generates a zalgo text by adding random diacritic characters to each character in the input string.
 * @param {string} str - The input string.
 * @returns {string} The zalgo text generated from the input string.
 */
export declare const zalgo: (str: string) => string;
/**
 * Rotates each character in a string by 13 positions in the alphabet.
 * Non-alphabetic characters remain unchanged.
 *
 * @param {string} str - The input string to be rotated.
 * @returns {string} The rotated string.
 */
export declare const rotate13Deg: (str: string) => string;
/**
 * Encodes a URI string.
 *
 * @param {string} str - The URI string to be encoded.
 * @returns {string} - The encoded URI string.
 */
export declare const encodeUri: (str: string) => string;
/**
 * Decodes a URI string.
 *
 * @param {string} str - The URI string to decode.
 * @returns {string} - The decoded URI string.
 */
export declare const decodeUri: (str: string) => string;
/**
 * Extracts alphabetic characters from a given string.
 *
 * @param {string} str - The input string from which alphabetic characters will be extracted.
 * @returns {string} - The extracted alphabetic characters as a single string.
 */
export declare const extractText: (str: string) => string;
/**
 * Extracts numbers from a given string.
 *
 * @param {string} str - The input string from which numbers need to be extracted.
 * @returns {string} - The extracted numbers as a string.
 */
export declare const extractNumber: (str: string) => string;
/**
 * Adds a prefix to a given string.
 *
 * @param {string} str - The string to add the prefix to.
 * @param {string} prefix - The prefix to add to the string.
 * @returns {string} The resulting string with the prefix added.
 */
export declare const addPrefix: (str: string, prefix: string) => string;
/**
 * Concatenates a suffix to a given string.
 *
 * @param {string} str - The original string.
 * @param {string} suffix - The suffix to be added.
 * @returns {string} - The string with the suffix added.
 */
export declare const addSuffix: (str: string, suffix: string) => string;
/**
 * Generates dummy text using the "Lorem ipsum" placeholder text.
 * @returns {string} The generated dummy text.
 */
export declare const getDummyText: () => string;
/**
 * Generates a random string of characters.
 *
 * @param {number} length - The length of the random string to generate.
 * @returns {string} The randomly generated string.
 */
export declare const getRandomCharacters: (length: number) => string;
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
export declare const extractCodeBlocks: (str: string) => CodeBlock[];
/**
 * Removes triple-backtick fenced Markdown code blocks.
 *
 * @param {string} str - The Markdown string.
 * @returns {string} The string with code blocks removed.
 */
export declare const removeCodeBlocks: (str: string) => string;
/**
 * Parses JSON without throwing.
 *
 * @param {string} str - The JSON string to parse.
 * @param {unknown} [fallback=null] - The value returned when parsing fails.
 * @returns {unknown} Parsed JSON or the fallback value.
 */
export declare const safeJsonParse: <T = unknown>(str: string, fallback?: T) => unknown | T;
