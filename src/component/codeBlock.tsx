import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {monokai} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CodeBlock extends React.PureComponent {
  render() {
    // @ts-ignore
    const {value} = this.props;
    return (
      <SyntaxHighlighter language={"java"}
                         style={monokai}>
        {value}
      </SyntaxHighlighter>
    )
  }
}
