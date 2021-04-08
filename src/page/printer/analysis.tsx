import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from '../../component/codeBlock'
// import PDF from 'react-pdf-js'
// @ts-ignore
import md from './printer.md'
// @ts-ignore
// import pdf from '../../md/problem6/6.pdf'
import '../junit/junit.scss'

class ProblemSixMD extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      markdown: ''
    }
  }

  render() {
    return (
      <div className={'md'}>
        <ReactMarkdown
          children={md}
          allowDangerousHtml
          renderers={{
            code: CodeBlock,
          }}
        />
        {/*<PDF file={pdf}/>*/}
      </div>

    )
  }
}

export default ProblemSixMD
