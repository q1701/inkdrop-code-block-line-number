'use strict';

var _inkdrop = require("inkdrop");

var _codeBlockLineNumber = _interopRequireDefault(require("./code-block-line-number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  origPreComponent: null,

  activate() {
    this.origPreComponent = _inkdrop.markdownRenderer.remarkReactComponents.pre;
    _inkdrop.markdownRenderer.remarkReactComponents.pre = (0, _codeBlockLineNumber.default)(this.origPreComponent);
  },

  deactivate() {
    if (this.origPreComponent) {
      _inkdrop.markdownRenderer.remarkReactComponents.pre = this.origPreComponent;
    } else {
      delete _inkdrop.markdownRenderer.remarkReactComponents.pre;
    }
  }

};