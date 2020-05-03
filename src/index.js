import { markdownRenderer } from 'inkdrop';
import createCodeBlockWithLineNumbers from './code-block-line-number';

let origPreComponent = null;

export const activate = () => {
  origPreComponent = markdownRenderer.remarkReactComponents.pre;
  markdownRenderer.remarkReactComponents.pre = createCodeBlockWithLineNumbers(
    origPreComponent
  );
};

export const deactivate = () => {
  if (origPreComponent) {
    markdownRenderer.remarkReactComponents.pre = origPreComponent;
  } else {
    delete markdownRenderer.remarkReactComponents.pre;
  }
};
