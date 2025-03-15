"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCodeBlockWithLineNumbers;
var _reactInnertext = _interopRequireDefault(require("react-innertext"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function createCodeBlockWithLineNumbers(OrigPre) {
  // line numbers
  const LineNumbersOfCodeBlock = ({
    numberOfLines,
    ..._props
  }) => {
    return /*#__PURE__*/React.createElement("code", {
      className: "line-numbers-of-code-block"
    }, Array.from({
      length: numberOfLines
    }, (_, i) => {
      return /*#__PURE__*/React.createElement("span", {
        key: i
      }, `${(i + 1).toString().padStart(3)}\n`);
    }));
  };
  // Code block with line numbers
  const CodeBlockWithLineNumbers = ({
    children,
    ...props
  }) => {
    // Original node (built-in <pre> or a React Component)
    const OrigNode = ({
      children,
      ...props
    }) => {
      return OrigPre ? /*#__PURE__*/React.createElement(OrigPre, props, children) : /*#__PURE__*/React.createElement("pre", props, children);
    };
    // Render
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OrigNode, props, /*#__PURE__*/React.createElement("div", {
      className: "code-block-line-number__container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "code-block-line-number__code-contents"
    }, children), /*#__PURE__*/React.createElement("div", {
      className: "code-block-line-number__line-numbers"
    }, /*#__PURE__*/React.createElement(LineNumbersOfCodeBlock, {
      numberOfLines: (0, _reactInnertext.default)(children).split(/\n/).length - 1
    })))));
  };
  // Return this component
  return CodeBlockWithLineNumbers;
}