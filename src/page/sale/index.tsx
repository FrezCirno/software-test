import React from 'react';
import {SaleForm} from '../../component/form';
import {Row, Col, Card} from "antd";
import {SaleTable} from '../../component/table'

class SaleStatement extends React.Component{
    public render() {
        return(
            <div>
                <SaleForm/>
                <Row gutter={10}>
                    <Col span={24}>
                        <Card title="打印机问题" bordered={false}>
                            <SaleTable/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SaleStatement;
