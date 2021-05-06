import React, { Component } from 'react';
import { post } from '../../axios/tools'
import './form.scss'

import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Card
} from "antd";
import { FormProps } from "antd/lib/form";

const FormItem = Form.Item;

type basicFormProps = {} & FormProps;

class TelChargeForm extends Component<basicFormProps>{
  state = {
    inpValue1: '',
    inpValue2: '',
    inpValue3: '',
    inpValue4: ''
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form &&
      this.props.form.validateFields().then(values => {
        const get_tel_charge = () => {
          post({
            url: 'https://software-test-platform-api.herokuapp.com/question7/charge/',
            data: {
              talk_time_month: parseInt(this.state.inpValue1),
              unpaid_num_year: parseInt(this.state.inpValue2),
              unpaid_cost_across_year: parseInt(this.state.inpValue3),
              pay_method: this.state.inpValue4
            },
          }).then((response) => {
            let span = document.getElementsByClassName('result_span2')[0];
            span.innerHTML = 'result: ' + response;
          });
        };
        get_tel_charge();
      })
  };

  handleChange1 = (e: any) => {
    this.setState({
      inpValue1: e.target.value
    });
  };

  handleChange2 = (e: any) => {
    this.setState({
      inpValue2: e.target.value
    })
  };

  handleChange3 = (e: any) => {
    this.setState({
      inpValue3: e.target.value
    })
  };

  handleChange4 = (e: any) => {
    this.setState({
      inpValue4: e.target.value
    })
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
        sm: { span: 10 }
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
              <Card title="电信收费问题" bordered={false} >
                <form onSubmit={this.handleSubmit} >
                  <FormItem {...formItemLayout} label="talk_time_month" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥æ¯�æœˆé€šè¯�æ—¶é—´çš„å€¼' }]}>
                    <Input type="text" onChange={this.handleChange1} />
                  </FormItem>
                  <FormItem {...formItemLayout} label="unpaid_num_year" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥ä¸€å¹´æœªç¼´è´¹çš„å€¼' }]}>
                    <Input type="text" onChange={this.handleChange2} />
                  </FormItem>
                  <FormItem {...formItemLayout} label="unpaid_cost_across_year" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥ä¸€å¹´æœªç¼´è´¹çš„å€¼' }]}>
                    <Input type="text" onChange={this.handleChange3} />
                  </FormItem>
                  <FormItem {...formItemLayout} label="pay_method" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥æ”¯ä»˜æ–¹å¼�çš„å€¼' }]}>
                    <Input type="text" onChange={this.handleChange4} />
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
            <span className={'result_span2'}>result: </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TelChargeForm;
