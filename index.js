/**
 * Splits a string into an array of substrings based on a specified break point and joins them with a newline character.
 *
 * @param {string} str - The string to be split.
 * @param {string} [breakPoint=" "] - The break point at which to split the string. Defaults to a space character.
 * @returns {string} The string with substrings split at the break point and joined with a newline character.
 */
const splitString = (str, delimiter = " ") => {
  const splittedString = str.split(delimiter).join("\n");
  return splittedString;
};

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

/**
 * Encrypts a string using Base64 encoding.
 *
 * @param {string} str - The string to be encoded.
 * @returns {string} The encoded string.
 */
const base64Enode = (str) => {
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
const compare = (str, encodedStr) => {
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
 * Decode a base64-encoded password.
 *
 * @param {string} encodedStr - The base64-encoded password to decrypt.
 * @returns {string} The decoded password.
 */
const base64Decode = (encodedStr) => {
  const decodedStr = atob(encodedStr);
  return decodedStr;
};

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

/**
 * Removes all spaces from a given text.
 *
 * @returns {string} The text with all spaces removed.
 */
const removeAllSpaces = (str) => {
  const allSpaceFreeStr = str.replace(/\s+/g, "");
  return allSpaceFreeStr;
};

/**
 * Removes all symbols from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with symbols removed.
 */
const removeAllSymbols = (str) => {
  const regex = /[0-9/A-Z/a-z/ /]/g;
  const letters = str.match(regex);
  const symbolFreeStr = letters.join("");
  return symbolFreeStr;
};

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

/**
 * Generates a zalgo text by adding random diacritic characters to each character in the input string.
 * @param {string} text - The input string.
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
      if (len === 1) return 0;
      return !!len ? Math.floor(Math.random() * len + 1) - 1 : Math.random();
    },
    generate: function (str) {
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
const rotate13Deg = (str) => {
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
const encodeUri = (str) => {
  const encodedUri = encodeURI(str);
  return encodedUri;
};

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

/**
 * Extracts alphabetic characters from a given string.
 *
 * @param {string} str - The input string from which alphabetic characters will be extracted.
 * @returns {string} - The extracted alphabetic characters as a single string.
 */
const extractText = (str) => {
  const regex = /[A-Z/a-z/ /]/g;
  const letters = str.match(regex);
  console.log("letters", letters);
  const extractedText = letters.join("");
  return extractedText;
};

/**
 * Extracts numbers from a given string.
 *
 * @param {string} str - The input string from which numbers need to be extracted.
 * @returns {string} - The extracted numbers as a string.
 */
const extractNumber = (str) => {
  const regex = /[0-9/ /]/g;
  const nums = str.match(regex);
  const extractedNumber = nums.join("");
  return extractedNumber;
};

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

/**
 * Reverses the title case of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed title case string.
 */
const reverseTitleCase = (str) => {
  const reversedTitleStr = str
    .toLowerCase()
    .split(" ")
    .map(function (item) {
      return item.slice(0, -1) + item.slice(-1).toUpperCase();
    })
    .join(" ");
  return reversedTitleStr;
};

/**
 * Inverts the case of each character in a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The inverted string.
 */
const invertCase = (str) => {
  const invertedStr = str.replace(/./g, (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  );

  return invertedStr;
};

/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string.
 * @returns {string} The camel case version of the input string.
 */
const camelCase = (str) => {
  function camelize(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }
  const camelizedStr = camelize(str);
  return camelizedStr;
};

/**
 * Converts a string to PascalCase.
 *
 * @param {string} str - The input string.
 * @returns {string} The PascalCase string.
 */
const pascalCase = (str) => {
  function toPascalCase(str) {
    return `${str}`
      .replace(new RegExp(/[-_]+/, "g"), " ")
      .replace(new RegExp(/[^\w\s]/, "g"), "")
      .replace(
        new RegExp(/\s+(.)(\w*)/, "g"),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  }
  const pascalCasedStr = toPascalCase(str);
  return pascalCasedStr;
};

/**
 * Converts a string to kebab case.
 *
 * @param {string} str - The input string.
 * @returns {string} The kebab cased string.
 */
const kebabCase = (str) => {
  const kebabCase = (str) =>
    str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();

  const kebabCasedStr = kebabCase(str);
  return kebabCasedStr;
};

/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The snake cased string.
 */
const snakeCase = (str) => {
  const toSnakeCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("_");
  };
  const snakeCasedStr = toSnakeCase(str);
  return snakeCasedStr;
};

/**
 * Converts the characters of a string to alternate case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with characters converted to alternate case.
 */
const alternateCase1 = (str) => {
  var newText = str.toLowerCase().split("");
  for (var i = 0; i < newText.length; i += 2) {
    newText[i] = newText[i].toUpperCase();
  }
  const alternateCasedStr = newText.join("");
  return alternateCasedStr;
};

/**
 * Converts the characters of a string to alternate case.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with characters converted to alternate case.
 */
const alternateCase2 = (str) => {
  var newText = str.toUpperCase().split("");
  for (var i = 0; i < newText.length; i += 2) {
    newText[i] = newText[i].toLowerCase();
  }
  const alternateCasedStr = newText.join("");
  return alternateCasedStr;
};

/**
 * Generates dummy text using the "Lorem ipsum" placeholder text.
 * @returns {string} The generated dummy text.
 */
const getDummyText = () => {
  let dummyText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";
  return dummyText;
};

/**
 * Generates a random string of characters.
 *
 * @param {number} limit - The length of the random string to generate.
 * @returns {string} The randomly generated string.
 */
const getRandomCharacters = (length) => {
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

/**
 * Retrieves a random quote from the list of quotes.
 * @returns {Object} An object containing a random quote and its author.
 */
const getQuote = () => {
  const quotes = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      quote:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      quote:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain",
    },
    {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      quote: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      quote:
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso",
    },
    {
      quote:
        "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      quote:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      quote: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      quote:
        "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      quote:
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra",
    },
    {
      quote:
        "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
      author: "Zig Ziglar",
    },
    {
      quote: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anais Nin",
    },
    {
      quote:
        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "Vincent Van Gogh",
    },
    {
      quote:
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "Aristotle",
    },
    {
      quote:
        "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "Jesus",
    },
    {
      quote:
        "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Go confidently in the direction of your dreams.  Live the life you have imagined.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      author: "Erma Bombeck",
    },
    {
      quote:
        "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "Certain things catch your eye, but pursue only those that capture the heart.",
      author: " Ancient Indian Proverb",
    },
    {
      quote: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      quote:
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },
    {
      quote:
        "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "Maimonides",
    },
    {
      quote: "Start where you are. Use what you have.  Do what you can.",
      author: "Arthur Ashe",
    },
    {
      quote:
        "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author: "John Lennon",
    },
    {
      quote: "Fall seven times and stand up eight.",
      author: "Japanese Proverb",
    },
    {
      quote:
        "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "Helen Keller",
    },
    {
      quote: "Everything has beauty, but not everyone can see.",
      author: "Confucius",
    },
    {
      quote:
        "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "Anne Frank",
    },
    {
      quote: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu",
    },
    {
      quote:
        "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou",
    },
    {
      quote:
        "Happiness is not something readymade.  It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote:
        "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg",
    },
    {
      quote:
        "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
      author: "Aristotle",
    },
    {
      quote: "If the wind will not serve, take to the oars.",
      author: "Latin Proverb",
    },
    {
      quote:
        "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
      author: "Unknown",
    },
    {
      quote:
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie",
    },
    {
      quote:
        "Too many of us are not living our dreams because we are living our fears.",
      author: "Les Brown",
    },
    {
      quote:
        "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine",
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "Leonardo da Vinci",
    },
    {
      quote:
        "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
      author: "Jamie Paolinetti",
    },
    {
      quote:
        "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "Erica Jong",
    },
    {
      quote:
        "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      author: "Bob Dylan",
    },
    {
      quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "In order to succeed, your desire for success should be greater than your fear of failure.",
      author: "Bill Cosby",
    },
    {
      quote: "A person who never made a mistake never tried anything new.",
      author: " Albert Einstein",
    },
    {
      quote:
        "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "Chinese Proverb",
    },
    {
      quote: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach",
    },
    {
      quote: "It is never too late to be what you might have been.",
      author: "George Eliot",
    },
    {
      quote: "You become what you believe.",
      author: "Oprah Winfrey",
    },
    {
      quote: "I would rather die of passion than of boredom.",
      author: "Vincent van Gogh",
    },
    {
      quote:
        "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "Unknown",
    },
    {
      quote:
        "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers",
    },
    {
      quote:
        "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      author: "Abigail Van Buren",
    },
    {
      quote:
        "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray",
    },
    {
      quote:
        "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      author: "Jesse Owens",
    },
    {
      quote: "Education costs money.  But then so does ignorance.",
      author: "Sir Claus Moser",
    },
    {
      quote:
        "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      author: "Rosa Parks",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote:
        "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      quote:
        "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "Dalai Lama",
    },
    {
      quote:
        "You can’t use up creativity.  The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote:
        "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      quote:
        "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins",
    },
    {
      quote: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem",
    },
    {
      quote:
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
    },
    {
      quote:
        "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
    },
    {
      quote: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses",
    },
    {
      quote:
        "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      quote:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quote:
        "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      quote: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "–Audrey Hepburn",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar",
    },
  ];
  const quoteIndex = Math.floor(Math.random() * 100 + 2);
  const randomQuote = quotes[quoteIndex];
  return randomQuote;
};

module.exports = {
  splitString,
  joinString,
  base64Enode,
  compare,
  base64Decode,
  removeExtraSpaces,
  removeAllSpaces,
  removeAllSymbols,
  duplicate,
  reverse,
  slugify,
  truncate,
  paraToSingleLine,
  alphabetize,
  zalgo,
  rotate13Deg,
  encodeUri,
  decodeUri,
  extractText,
  extractNumber,
  addPrefix,
  addSuffix,
  reverseTitleCase,
  invertCase,
  camelCase,
  pascalCase,
  kebabCase,
  snakeCase,
  alternateCase1,
  alternateCase2,
  getDummyText,
  getRandomCharacters,
  getQuote,
};
