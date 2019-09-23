'use strict';

import React from 'react';
import innerText from 'react-innertext';

export default function createCodeBlockWithLineNumbers(OrigPre) {
  // line numbers
  const LineNumbersOfCodeBlock = props => {
    return (
      <code className="line-numbers-of-code-block">
        {Array.from({ length: props.numberOfLines }, (_, i) => {
          return <span>{(i + 1).toString().padStart(3) + '\n'}</span>;
        })}
      </code>
    );
  };
  // Code block with line numbers
  const CodeBlockWithLineNumbers = props => {
    // Original node (built-in <pre> or a React Component)
    const OrigNode = props => {
      return OrigPre ? (
        <OrigPre {...props}>{props.children}</OrigPre>
      ) : (
        <pre {...props}>{props.children}</pre>
      );
    };
    // Render
    return (
      <>
        <OrigNode {...props}>
          <div className="code-block-line-number__container">
            <div className="code-block-line-number__line-numbers">
              <LineNumbersOfCodeBlock
                numberOfLines={innerText(props.children).split(/\n/).length - 1}
              />
            </div>
            <div className="code-block-line-number__code-contents">
              {props.children}
            </div>
          </div>
        </OrigNode>
      </>
    );
  };
  // Return this component
  return CodeBlockWithLineNumbers;
}
