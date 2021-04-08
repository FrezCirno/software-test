import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from '../../component/codeBlock'
// @ts-ignore
import md from '../printer/Problem8.md'
import '../junit/junit.scss'

class ProblemEightMD extends React.Component{
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

export default ProblemEightMD
