# Code block line number plugin

Display line numbers in code blocks.

## Notice

There is a performance issue with a large number of rows in code blocks. (probably when larger than about 2000 rows.)

## Install

```sh
ipm install code-block-line-number
```

## Example

![Example](https://github.com/q1701/inkdrop-code-block-line-number/raw/master/docs/images/example.png)

## Changelog

- 0.6.0
  - Fix missing line numbers caused by copy-code-to-clipboard plugin update
- 0.5.0
  - Fix an issue where enabling this plugin prevents code block wrapping
- 0.4.0
  - Disabled line numbers for non-text code blocks (Thanks [lssch](https://github.com/lssch))
- 0.3.0
  - Fix interoperability with [code-title](https://github.com/elpnt/inkdrop-code-title) (Thanks [kputra-xfers](https://github.com/kputra-xfers))
- 0.2.2
  - Upgrade dependencies
- 0.2.1
  - Minor update
- 0.2.0
  - Upgrade dependencies
- 0.1.1
  - Improve document
- 0.1.0
  - First release
