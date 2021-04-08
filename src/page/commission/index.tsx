import React from 'react';
import {CommissionForm} from '../../component/form';
import {Row, Col, Card} from "antd";
import {CommissionTable} from '../../component/table'

class CommissionBorder extends React.Component {
  public render() {
    return (
      <div>
        <CommissionForm/>
        <Row gutter={10}>
          <Col span={24}>
            <Card title="打印机问题" bordered={false}>
              <CommissionTable/>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CommissionBorder;
