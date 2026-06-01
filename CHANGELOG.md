# Changelog

All notable changes to SuperbString will be documented in this file.

This project follows the spirit of [Keep a Changelog](https://keepachangelog.com/) and uses semantic versioning for release planning.

## [Unreleased]

### Added

- Imported compatible case-conversion utilities from `case-string`: `lowerCase`, `upperCase`, `reverseTitleCase`, `invertCase`, `constantCase`, `pascalSnakeCase`, `trainCase`, `dotCase`, `pathCase`, `alternateCase1`, `alternateCase2`, `toggleCase`, `noCase`, and `sentenceCase`.
- Added migration-friendly `case-string` API names where they are useful and predictable.

### Changed

- Expanded npm keywords for case-conversion discoverability.

### Compatibility

- No breaking changes.
- No runtime dependencies added.

## [2.3.0]

### Added

- Added case conversion utilities: `camelCase`, `pascalCase`, `snakeCase`, `kebabCase`, `titleCase`, and `capitalize`.
- Added counting utilities: `wordCount`, `charCount`, and `sentenceCount`.
- Added cleanup utilities: `removeDuplicateLines` and `normalizeUnicode`.
- Added `isSlug` for lowercase URL slug validation.

### Compatibility

- No breaking changes.
- No runtime dependencies added.

## [2.2.0]

### Added

- Added lightweight AI, LLM, and RAG text-processing utilities.
- Added text normalization utilities: `normalizeWhitespace` and `normalizeLineEndings`.
- Added content cleanup utilities: `stripHtml`, `removeMarkdown`, and `removeCodeBlocks`.
- Added structured extraction utilities: `extractUrls`, `extractEmails`, and `extractCodeBlocks`.
- Added context preparation utilities: `splitIntoParagraphs`, `chunkText`, and `truncateWords`.
- Added `safeJsonParse` for JSON parsing without throwing.

### Compatibility

- No breaking changes.
- No runtime dependencies added.

## [2.1.4]

### Changed

- Improved npm SEO metadata for better package discoverability.
- Improved README structure, wording, and examples.
- Added professional README badges.
- Improved package metadata for search, positioning, and install conversion.

## [2.1.3]

### Added

- Added TypeScript declaration generation.
- Added test suite coverage for the public API.
- Added ISC `LICENSE` file.

### Changed

- Improved npm publish safety and package contents.
- Optimized package metadata and distribution settings.
- Cleaned repository publishing configuration.
