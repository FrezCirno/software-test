import React, {Component} from 'react';
import {post} from '../../axios/tools'
import './form.scss'

import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Card
} from "antd";
import {FormProps} from 'antd/lib/form';

const FormItem = Form.Item;

type basicFormProps = {} & FormProps;

export default class CalendarForm extends Component<basicFormProps> {
  state = {
    inpValue1: '',
    inpValue2: '',
    inpValue3: ''
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form &&
    this.props.form.validateFields().then(values => {
      post({
        url: '/api/question1/calendar/',
        data: {
          year: parseInt(this.state.inpValue1),
          month: parseInt(this.state.inpValue2),
          day: parseInt(this.state.inpValue3)
        },
      }).then((response) => {
        let span = document.getElementsByClassName('result_span')[0];
        span.innerHTML = 'result: ' + response;
      }).catch((err) => {
        console.log(err);
      });
    });
  };


  handleChange = (key: string) => (e: any) => {
    this.setState({
      key: e.target.value
    });
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14}
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
              <Card title="万年历问题" bordered={false}>
                <form onSubmit={this.handleSubmit}>
                  <FormItem {...formItemLayout} label="year" hasFeedback
                            rules={[{required: true, message: 'è¯·è¾“å…¥å¹´ä»½'}]}>
                    <Input type="text" onChange={this.handleChange('inpValue1')}/>
                  </FormItem>
                  <FormItem {...formItemLayout} label="month" hasFeedback
                            rules={[{required: true, message: 'è¯·è¾“å…¥æœˆä»½'}]}>
                    <Input type="text" onChange={this.handleChange('inpValue2')}/>
                  </FormItem>
                  <FormItem {...formItemLayout} label="day" hasFeedback
                            rules={[{required: true, message: 'è¯·è¾“å…¥å¤©'}]}>
                    <Input type="text" onChange={this.handleChange('inpValue3')}/>
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
            <span className={'result_span'}>result: </span>
          </Col>
        </Row>
      </div>
    )
  }
}
