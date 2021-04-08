import React from 'react';
import {CalendarForm} from '../../component/form';
import {Row, Col, Card} from "antd";
import {CalendarTable} from '../../component/table'

class CalendarBorder extends React.Component {
  public render() {
    return (
      <div>
        <CalendarForm/>
        <Row gutter={10}>
          <Col span={24}>
            <Card title="万年历问题" bordered={false}>
              <CalendarTable/>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CalendarBorder;
