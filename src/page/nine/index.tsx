import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from '../../component/codeBlock'
// @ts-ignore
import md from './Problem9.md'
import '../junit/junit.scss'

class ProblemNineMD extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {
            markdown: ''
        }
    }

    render(){
        return(
            <div className={'md'}>
                <ReactMarkdown
                    children={md}
                    allowDangerousHtml
                    renderers={{
                        code: CodeBlock,
                    }}
                />
            </div>

        )
    }
}

export default ProblemNineMD
