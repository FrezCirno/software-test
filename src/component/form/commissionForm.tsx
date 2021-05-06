import React, {Component} from 'react'
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
import {FormProps} from "antd/lib/form";

const FormItem = Form.Item;

type basicFormProps = {} & FormProps;

class CommissionForm extends Component<basicFormProps> {
  state = {
    inpValue1: '',
    inpValue2: '',
    inpValue3: ''
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form &&
    this.props.form.validateFields().then(values => {
      const get_commission = () => {
        post({
          url: 'https://software-test-platform-api.herokuapp.com/question2/commission/',
          data: {
            host: parseInt(this.state.inpValue1),
            display: parseInt(this.state.inpValue2),
            peripheral: parseInt(this.state.inpValue3)
          },
        }).then((response) => {
          console.log(response);
          let span = document.getElementsByClassName('result_span')[0];
          let span2 = document.getElementsByClassName('result_span_')[0];
          if (response.commission === 'error' || response.sales === 'error') {
            span.innerHTML = 'commission: error';
            span2.innerHTML = 'sales: error';
          } else {
            span.innerHTML = 'commission: ' + response.commission;
            span2.innerHTML = 'sales: ' + response.sales;
          }

        });
      };
      get_commission();
    })
  };


  handleChange = (key: string) => (e: any) => {
    this.setState({
      key: e.target.value
    });
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore

    return (
      <div>
        <Row gutter={10}>
          <Col md={18}>
            <div>
              <Card title="佣金问题" bordered={false} className="hello">
                <form onSubmit={this.handleSubmit}>
                  <FormItem {...formItemLayout} label="host" hasFeedback
                            rules={[{required: true, message: 'è¯·è¾“å…¥ä¸»æœºçš„æ•°é‡�'}]}>
                    <Input type="text" onChange={this.handleChange('inpValue1')}/>
                  </FormItem>
                  <FormItem {...formItemLayout} label="display" hasFeedback
                            rules={[{required: true, message: 'è¯·è¾“å…¥æ˜¾ç¤ºå™¨çš„æ•°é‡�'}]}>
                    <Input type="text" onChange={this.handleChange('inpValue2')}/>
                  </FormItem>
                  <FormItem {...formItemLayout} label="peripheral" hasFeedback
                            rules={[{required: true, message: 'è¯·è¾“å…¥å¤–è®¾çš„æ•°é‡�'}]}>
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
            <span className={'result_span'}>commission: </span>
            <span className={'result_span_'}>sales: </span>
          </Col>
        </Row>
      </div>
    )
  }
}

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
export default CommissionForm;
