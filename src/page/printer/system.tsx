import React from 'react';
import {PrinterForm} from '../../component/form';
import {Row, Col, Card} from "antd";
import {PrinterTable} from '../../component/table'

class PrinterSystem extends React.Component {
  render() {
    return (
      <div>
        <PrinterForm/>
        <Row gutter={10}>
          <Col span={24}>
            <Card title="打印机问题" bordered={false}>
              <PrinterTable/>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PrinterSystem;
