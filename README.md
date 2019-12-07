# In Any Case

<img src="https://raw.githubusercontent.com/will-stone/in-any-case/master/icon.png" alt="drawing" width="120"/>

VSCode extension that converts strings between cases using the
[Lodash](https://lodash.com/docs/4.17.10#camelCase) utility library. Whilst
there are already many string manipulation extensions, I simply wanted to build
one for myself. I won't be offended if you'd rather use an alternative. However,
if you'd like to help out, I'll happily look at pull requests. You'll find all
the case-changer functions in `src/cases.ts`.

## Features

Once you've highlighted the text to change, use the command palette
(`shift-cmd-p`) to run the desired command.

Available commands:

- camelCase
- Capitalize
- CONSTANT_CASE
- Deburr
- Escape
- kebab-case
- lower case
- lOWER FIRST
- PascalCase
- snake_case
- Start Case
- Title Case (small words remain in lower case)
- to_lower
- TO_UPPER
- Unescape
- UPPER CASE
- Upper first

## Development

Install dependencies:

```sh
yarn
```

Run the extension by opening the debug sidebar in VSCode and clicking the play
button.

Run the tests by selecting `Extension Tests` from the debug task selection menu.
