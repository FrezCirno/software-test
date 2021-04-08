import React, {Component} from 'react';
import {post} from '../../axios/tools'
import './form.scss'

import {Form, Input, Button, Row, Col, Card} from "antd";
import {FormProps} from "antd/lib/form";

type basicFormProps = {} & FormProps;

class TriangleForm extends Component<basicFormProps> {
  

  handleSubmit = (values: any) => {
    post({
      url: '/api/question1/triangle/',
      data: {
        edge1: parseInt(values.inpValue1),
        edge2: parseInt(values.inpValue2),
        edge3: parseInt(values.inpValue3)
      },
    }).then((response) => {
      let span = document.getElementsByClassName('result_span')[0];
      span.innerHTML = 'result: ' + response;
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
              <Card title="三角形问题" bordered={false}>
                <Form onFinish={this.handleSubmit}>
                  <Form.Item name="inpValue1" {...formItemLayout} label="edge-a" hasFeedback
                             rules={[{required: true, message: '请输入边的值'}]}>
                    <Input type="text"/>
                  </Form.Item>
                  <Form.Item name="inpValue2" {...formItemLayout} label="edge-b" hasFeedback
                             rules={[{required: true, message: '请输入边的值'}]}>
                    <Input type="text"/>
                  </Form.Item>
                  <Form.Item name="inpValue3" {...formItemLayout} label="edge-c" hasFeedback
                             rules={[{required: true, message: '请输入边的值'}]}>
                    <Input type="text"/>
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">提交</Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </Col>
          <Col md={6}>
            <span className={'result_span'}>Result: </span>
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

export default TriangleForm;
