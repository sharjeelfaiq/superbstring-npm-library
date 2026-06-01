# Contributing

Thanks for helping improve SuperbString. Contributions should stay focused, practical, and backward-compatible.

## Getting Started

```bash
npm install
npm run build
npm test
```

## Development Workflow

- Fork the repository.
- Create a focused branch for your change.
- Make your changes.
- Add or update tests when behavior changes.
- Run validation with `npm run build` and `npm test`.
- Open a pull request.

## Pull Request Guidelines

- Keep changes focused and easy to review.
- Preserve backward compatibility for existing public APIs.
- Update documentation when behavior, examples, or package metadata changes.
- Ensure CI passes before requesting review.

## Code Quality

- Prefer TypeScript-first implementation.
- Keep functions small, readable, and predictable.
- Avoid unnecessary dependencies.
- Maintain consistent API naming and behavior.
- Document edge cases when behavior may surprise users.
