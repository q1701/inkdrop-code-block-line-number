"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deactivate = exports.activate = void 0;
var _inkdrop = require("inkdrop");
var _codeBlockLineNumber = _interopRequireDefault(require("./code-block-line-number"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let origPreComponent = null;
const activate = () => {
  origPreComponent = _inkdrop.markdownRenderer.remarkReactComponents.pre;
  _inkdrop.markdownRenderer.remarkReactComponents.pre = (0, _codeBlockLineNumber.default)(origPreComponent);
};
exports.activate = activate;
const deactivate = () => {
  if (origPreComponent) {
    _inkdrop.markdownRenderer.remarkReactComponents.pre = origPreComponent;
  } else {
    delete _inkdrop.markdownRenderer.remarkReactComponents.pre;
  }
};
exports.deactivate = deactivate;