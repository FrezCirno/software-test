import React from 'react';
import {TelChargeForm} from '../../component/form';
import {Row, Col, Card} from "antd";
import {TelChargeTable} from '../../component/table'


class TriangleBorder extends React.Component{
    public render() {
        return(
            <div>
                <TelChargeForm/>
                <Row gutter={10}>
                    <Col span={24}>
                        <Card title="电信收费问题" bordered={false}>
                            <TelChargeTable/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default TriangleBorder;
