"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCodeBlockWithLineNumbers;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInnertext = _interopRequireDefault(require("react-innertext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCodeBlockWithLineNumbers(OrigPre) {
  // line numbers
  const LineNumbersOfCodeBlock = ({
    numberOfLines,
    ..._props
  }) => {
    return /*#__PURE__*/_react.default.createElement("code", {
      className: "line-numbers-of-code-block"
    }, Array.from({
      length: numberOfLines
    }, (_, i) => {
      return /*#__PURE__*/_react.default.createElement("span", null, `${(i + 1).toString().padStart(3)}\n`);
    }));
  }; // Code block with line numbers


  const CodeBlockWithLineNumbers = ({
    children,
    ...props
  }) => {
    // Original node (built-in <pre> or a React Component)
    const OrigNode = ({
      children,
      ...props
    }) => {
      return OrigPre ? /*#__PURE__*/_react.default.createElement(OrigPre, props, children) : /*#__PURE__*/_react.default.createElement("pre", props, children);
    }; // Detect the code-title plug-in


    const isCodeTitleActive = _react.default.Children.toArray(children).find(e => {
      var _e$props, _e$props$className;

      return e === null || e === void 0 ? void 0 : (_e$props = e.props) === null || _e$props === void 0 ? void 0 : (_e$props$className = _e$props.className) === null || _e$props$className === void 0 ? void 0 : _e$props$className.includes('with-title');
    }) !== undefined; // Render

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(OrigNode, props, /*#__PURE__*/_react.default.createElement("div", {
      className: "code-block-line-number__container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)({
        'code-block-line-number__line-numbers': true,
        'with-title-block': isCodeTitleActive
      })
    }, /*#__PURE__*/_react.default.createElement(LineNumbersOfCodeBlock, {
      numberOfLines: (0, _reactInnertext.default)(children).split(/\n/).length - 1
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "code-block-line-number__code-contents"
    }, children))));
  }; // Return this component


  return CodeBlockWithLineNumbers;
}