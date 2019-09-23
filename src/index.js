'use strict';

import { markdownRenderer } from 'inkdrop';
import createCodeBlockWithLineNumbers from './code-block-line-number';

module.exports = {
    origPreComponent: null,
    activate() {
        this.origPreComponent = markdownRenderer.remarkReactComponents.pre;
        markdownRenderer.remarkReactComponents.pre = createCodeBlockWithLineNumbers(
            this.origPreComponent
        );
    },
    deactivate() {
        if (this.origPreComponent) {
            markdownRenderer.remarkReactComponents.pre = this.origPreComponent;
        } else {
            delete markdownRenderer.remarkReactComponents.pre;
        }
    },
};
