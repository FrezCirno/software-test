import React, { Component } from 'react';
import { post } from '../../axios/tools'
import './form.scss'

import { Form, Input, Button, Row, Col, Card } from "antd";
import { FormProps } from "antd/lib/form";

const FormItem = Form.Item;

type basicFormProps = {} & FormProps;

class SaleForm extends Component<basicFormProps>{
  state = {
    inpValue1: '',
    inpValue2: '',
    inpValue3: ''
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form &&
      this.props.form.validateFields().then(values => {
        const get_sale = () => {
          post({
            url: 'https://software-test-platform-api.herokuapp.com/question8/sales/',
            data: {
              annual_sales: parseInt(this.state.inpValue1),
              leave_days: parseFloat(this.state.inpValue2),
              rate_cash_to_account: parseFloat(this.state.inpValue3)
            },
          }).then((response) => {
            console.log(response);
            let span = document.getElementsByClassName('result_span')[0];
            span.innerHTML = 'commission_rate: ' + response.commission_rate;
            let span2 = document.getElementsByClassName('result_span_')[0];
            span2.innerHTML = 'commission: ' + response.commission;

          });
        };
        get_sale();
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

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 }
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
          offset: 10,
        },

      },

    };
    return (
      <div>
        <Row gutter={10}>
          <Col md={18}>
            <div>
              <Card title="销售问题" bordered={false}>
                <form onSubmit={this.handleSubmit}>
                  <FormItem {...formItemLayout} label="annual-sales" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥å¹´é”€å”®é¢�å€¼' }]}>
                    <Input type="text" onChange={this.handleChange1} />
                  </FormItem>
                  <FormItem {...formItemLayout} label="leave-days" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥è¯·å�‡å¤©æ•°çš„å€¼' }]}>
                    <Input type="text" onChange={this.handleChange2} />
                  </FormItem>
                  <FormItem {...formItemLayout} label="rate_cash_to_acc" hasFeedback rules={[{ required: true, message: 'è¯·è¾“å…¥å€¼' }]}>
                    <Input type="text" onChange={this.handleChange3} />
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
            <span className={'result_span'}>commission_rate: </span>
            <span className={'result_span_'}>commission: </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SaleForm;
