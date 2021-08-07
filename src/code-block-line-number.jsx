import React from 'react';
import Classnames from 'classnames';
import innerText from 'react-innertext';

export default function createCodeBlockWithLineNumbers(OrigPre) {
  // line numbers
  const LineNumbersOfCodeBlock = ({ numberOfLines, ..._props }) => {
    return (
      <code className="line-numbers-of-code-block">
        {Array.from({ length: numberOfLines }, (_, i) => {
          return <span>{`${(i + 1).toString().padStart(3)}\n`}</span>;
        })}
      </code>
    );
  };
  // Code block with line numbers
  const CodeBlockWithLineNumbers = ({ children, ...props }) => {
    // Original node (built-in <pre> or a React Component)
    const OrigNode = ({ children, ...props }) => {
      return OrigPre ? (
        <OrigPre {...props}>{children}</OrigPre>
      ) : (
        <pre {...props}>{children}</pre>
      );
    };
    // Detect the code-title plug-in
    const isCodeTitleActive =
      React.Children.toArray(children).find((e) =>
        e?.props?.className?.includes('with-title')
      ) !== undefined;
    // Render
    return (
      <>
        <OrigNode {...props}>
          <div className="code-block-line-number__container">
            <div
              className={Classnames({
                'code-block-line-number__line-numbers': true,
                'with-title-block': isCodeTitleActive,
              })}
            >
              <LineNumbersOfCodeBlock
                numberOfLines={innerText(children).split(/\n/).length - 1}
              />
            </div>
            <div className="code-block-line-number__code-contents">
              {children}
            </div>
          </div>
        </OrigNode>
      </>
    );
  };
  // Return this component
  return CodeBlockWithLineNumbers;
}
