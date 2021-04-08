import React, { Component } from 'react';
import { post } from '../../axios/tools'
import './form.scss'

import { Form, Input, Button, Row, Col, Card } from "antd";
import { FormProps } from "antd/lib/form";

const FormItem = Form.Item;

type basicFormProps = {} & FormProps;

class PrinterForm extends Component<basicFormProps>{
    state = {
        inpValue1: ''
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form &&
            this.props.form.validateFields().then(values => {
                const get_printer = () => {
                    post({
                        url: '/api/question6/printer/',
                        data: {
                            command: this.state.inpValue1,
                        },
                    }).then((response) => {
                        console.log(response);
                        let span = document.getElementsByClassName('result_span3')[0];
                        span.innerHTML = 'state: ' + response.description;
                        let span2 = document.getElementsByClassName('result_span3_')[0];
                        span2.innerHTML = 'state_code: ' + response.state;
                    });
                };
                get_printer();
            });
    };

    handleChange1 = (e: any) => {
        this.setState({
            inpValue1: e.target.value
        });
    };

    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // @ts-ignore

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 }
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 8,
                },
            },
        };
        return (
            <div>
                <Row gutter={10}>
                    <Col md={18}>
                        <div>
                            <Card title="打印机问题" bordered={false} >
                                <form onSubmit={this.handleSubmit}>
                                    <FormItem {...formItemLayout} label="command" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥å€¼' }]}>
                                        <Input type="text" onChange={this.handleChange1} />
                                    </FormItem>

                                    <FormItem {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit" size="large">
                                            提交
                                        </Button>
                                    </FormItem>
                                </form>
                            </Card>
                        </div>
                    </Col>
                    <Col md={6}>
                        <span className={'result_span3'}>state: </span>
                        <span className={'result_span3_'}>state_code: </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PrinterForm
