import React from 'react';
import {Table, Select, Button} from 'antd';
import { post } from '../../axios/tools'
import axios from 'axios'
import './table.scss'
import ReactEcharts from 'echarts-for-react';

const { Option } = Select;

const columns = [
    {
        title: 'TestCaseID',
        dataIndex: 'testCaseID'
    },{
        title: 'Command',
        dataIndex: 'command'
    },
    {
        title: 'ExpectedOutput',
        dataIndex: 'expectedOutput'
    },{
        title: 'ActualOutput',
        dataIndex: 'actualOutput'
    },{
        title: 'Correctness',
        dataIndex: 'correctness'
    },{
        title: 'Time',
        dataIndex: 'time'
    },{
        title: 'TesterName',
        dataIndex: 'testerName'
    }
];

let data: any[] = [];

class PrinterTable extends React.Component{
    state = {
        data: [],
        toShow: false,
        type: '',
        option: {}
    };

    toTest = () => {
        this.setState({
            toShow: true,
        })
    };

    onChange = (value: any) => {
        post({
            url: '/api/show-csv/',
            data: {
                problem: 'printer',
                method_type: value
            }
        }).then((response) => {
            data = [];
            for(let i = 0; i < response.length; i++){
                data.push({
                    key: i,
                    testCaseID: response[i].TestCaseID,
                    command: response[i].Command,
                    expectedOutput: response[i].ExpectedOutput,
                    actualOutput: response[i].ActualOutput,
                    correctness: '-' + response[i].Correctness + '-',
                    time: response[i].Time,
                    testerName: response[i].TesterName
                })
            }
            this.setState({
                data: data,
                toShow: false,
                type: value
            });
        }).catch((err) => {
            console.log(err);
        });

        axios({
            method: 'get',
            url: `http://106.15.194.220:1216/question6/printer/`+value,
        }).then((response) => {
            console.log(response.data.True);
            this.setState({
                option: {
                    title: {
                        text: 'Printer Result',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#770202',
                        },
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    series: [
                        {
                            name: '打印机问题ç»“æ�œ-'+value,
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '50%'],
                            roseType: 'angle',
                            data: [
                                {value: response.data.True, name: 'æ­£ç¡®ç»“æ�œ'},
                                {value: response.data.False, name: 'é”™è¯¯ç»“æ�œ'}

                            ].sort(function(a, b){
                                return a.value - b.value;
                            }),
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#777',
                                    },
                                },
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: '#777',
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20,
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: '#777',
                                },
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function(idx: any) {
                                return Math.random() * 200;
                            },
                        }
                    ]
                }
            })
        }).catch((error) => {
            console.log(error);
        })
    };
    componentDidMount(): void {

    }

    render() {
        let elem1 = null;
        let elem2 = null;
        if(this.state.toShow){
            elem1 = <ReactEcharts
                option={this.state.option}
                style={{height: '300px', width: '100%'}}/>;
            elem2 = <Table columns={columns} dataSource={this.state.data} />
        }

        return(
            <div>
                <Select showSearch
                        style={{ width: 300 }}
                        placeholder="请选择测试方法"
                        optionFilterProp="children"
                        onChange={this.onChange}
                        className="select__type"
                >
                    <Option value="printer">printer</Option>
                    <Option value="printer-robust">printer-robust</Option>
                </Select>
                <Button type="primary" className={'button_'} onClick={this.toTest}>提交</Button>
                {elem1}
                {elem2}
            </div>
        )
    }
}

export default PrinterTable;
