import React from 'react';
import {TriangleForm} from '../../component/form';
import {Row, Col, Card} from "antd";
import {TriangleTable} from '../../component/table'

class TriangleBorder extends React.Component {
  public render() {
    return (
      <div>
        <TriangleForm/>
        <Row gutter={10}>
          <Col span={24}>
            <Card title="三角形问题" bordered={false}>
              <TriangleTable/>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TriangleBorder;
