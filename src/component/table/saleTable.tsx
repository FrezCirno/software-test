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
        title: 'AnnualSales',
        dataIndex: 'annualSales'
    },{
        title: 'LeaveDays',
        dataIndex: 'leaveDays'
    },{
        title: 'CashtoAccountRate',
        dataIndex: 'cashtoAccountRate'
    },{
        title: 'ExpectedOutput1',
        dataIndex: 'expectedOutput1'
    },{
        title: 'ActualOutput1',
        dataIndex: 'actualOutput1'
    },{
        title: 'ExpectedOutput2',
        dataIndex: 'expectedOutput2'
    },{
        title: 'ActualOutput2',
        dataIndex: 'actualOutput2'
    },{
        title: 'Correctness',
        dataIndex: 'correctness'
    },{
        title: 'Path',
        dataIndex: 'path'
    },{
        title: 'Time',
        dataIndex: 'time'
    },{
        title: 'TesterName',
        dataIndex: 'testerName'
    }
];

let data: any[] = [];

class SaleTable extends React.Component{
    state = {
        data: [],
        toShow: false,
        type: '',
        option: {},
        columns: []
    };

    toTest = () => {
        this.setState({
            toShow: true,
        })
    };

   onChange = (value: any) => {

       if(value === 'condition'){
           this.setState({
               columns: [
                   {
                       title: 'TestCaseID',
                       dataIndex: 'testCaseID'
                   },{
                       title: 'AnnualSales',
                       dataIndex: 'annualSales'
                   },{
                       title: 'LeaveDays',
                       dataIndex: 'leaveDays'
                   },{
                       title: 'CashtoAccountRate',
                       dataIndex: 'cashtoAccountRate'
                   },{
                       title: 'ExpectedOutput1',
                       dataIndex: 'expectedOutput1'
                   },{
                       title: 'ActualOutput1',
                       dataIndex: 'actualOutput1'
                   },{
                       title: 'ExpectedOutput2',
                       dataIndex: 'expectedOutput2'
                   },{
                       title: 'ActualOutput2',
                       dataIndex: 'actualOutput2'
                   },{
                       title: 'Correctness',
                       dataIndex: 'correctness'
                   },{
                       title: 'Path',
                       dataIndex: 'path'
                   },{
                       title: 'Condition',
                       dataIndex: 'condition'
                   },{
                       title: 'Time',
                       dataIndex: 'time'
                   },{
                       title: 'TesterName',
                       dataIndex: 'testerName'
                   }
               ]
           })
       }else{
           this.setState({
               columns: columns
           })
       }

       post({
           url: '/api/show-csv/',
           data: {
               problem: 'sales',
               method_type: value
           }
       }).then((response) => {
           data = [];
           for(let i = 0; i < response.length; i++){
               if(response[i].Condition){
                   data.push({
                       key: i,
                       testCaseID: response[i].TestCaseID,
                       annualSales: response[i].AnnualSales,
                       leaveDays: response[i].LeaveDays,
                       cashtoAccountRate: response[i].CashtoAccountRate,
                       expectedOutput1: response[i].ExpectedOutput1,
                       actualOutput1: response[i].ActualOutput1,
                       expectedOutput2: response[i].ExpectedOutput2,
                       actualOutput2: response[i].ActualOutput2,
                       correctness: '-' + response[i].Correctness + '-',
                       path: response[i].Path,
                       condition: response[i].Condition,
                       time: response[i].Time,
                       testerName: response[i].TesterName,
                   });
               }else{
                   data.push({
                       key: i,
                       testCaseID: response[i].TestCaseID,
                       annualSales: response[i].AnnualSales,
                       leaveDays: response[i].LeaveDays,
                       cashtoAccountRate: response[i].CashtoAccountRate,
                       expectedOutput1: response[i].ExpectedOutput1,
                       actualOutput1: response[i].ActualOutput1,
                       expectedOutput2: response[i].ExpectedOutput2,
                       actualOutput2: response[i].ActualOutput2,
                       correctness: '-' + response[i].Correctness + '-',
                       path: response[i].Path,
                       time: response[i].Time,
                       testerName: response[i].TesterName,
                   });
               }


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
           url: `http://106.15.194.220:1216/question8/sales/`+value,
       }).then((response) => {
           console.log(response.data.True);
           this.setState({
               option: {
                   title: {
                       text: 'Sale Result',
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
                           name: '销售问题ç»“æ�œ-'+value,
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
        this.setState({
            columns: columns
        })
    }
    render(){
        let elem1 = null;
        let elem2 = null;
        if(this.state.toShow){
            elem1 = <ReactEcharts
                option={this.state.option}
                style={{height: '300px', width: '100%'}}/>;
            elem2 = <Table columns={this.state.columns} dataSource={this.state.data} />
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
                    <Option value="statement">statement</Option>
                    <Option value="judge">judge</Option>
                    <Option value="condition">condition</Option>
                    <Option value="judge-condition">judge-condition</Option>
                    <Option value="condition-combination">condition-combination</Option>
                </Select>
                <Button type="primary" className={'button_'} onClick={this.toTest}>提交</Button>
                {elem1}
                {elem2}
            </div>
        )
    }
}

export default SaleTable;
