import React, {ExoticComponent} from 'react';
import {Table, Select, Button, Menu, Dropdown} from 'antd';
import Icon, {DownOutlined} from '@ant-design/icons'
import {MenuInfo} from "rc-menu/lib/interface";
import {post} from '../../axios/tools'
import axios from 'axios'
import './table.scss'
import ReactEcharts from 'echarts-for-react';


const {Option} = Select;

const columns = [
  {
    title: 'TestCaseID',
    dataIndex: 'testCaseID'
  }, {
    title: 'Edge1',
    dataIndex: 'edge1'
  }, {
    title: 'Edge2',
    dataIndex: 'edge2'
  }, {
    title: 'Edge3',
    dataIndex: 'edge3'
  }, {
    title: 'ExpectedOutput',
    dataIndex: 'expectedOutput'
  }, {
    title: 'ActualOutput',
    dataIndex: 'actualOutput'
  }, {
    title: 'Correctness',
    dataIndex: 'correctness'
  }, {
    title: 'Time',
    dataIndex: 'time'
  }, {
    title: 'TesterName',
    dataIndex: 'testerName'
  }
];

function onBlur() {
  console.log('blur')
}

function onSearch(val: any) {
  console.log(val);
}

let data: any[] = [];

class TriangleTable extends React.Component {
  state = {
    data: [],
    toShow: false,
    type: '',
    option: {},
    version: 'v2'
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
        problem: 'triangle',
        method_type: value
      }
    }).then((response) => {
      data = [];
      for (let i = 0; i < response.length; i++) {
        data.push({
          key: i,
          testCaseID: response[i].TestCaseID,
          edge1: response[i].Edge1,
          edge2: response[i].Edge2,
          edge3: response[i].Edge3,
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
      url: `http://106.15.194.220:1216/question1/triangle/` + value + `/` + this.state.version,
    }).then((response) => {
      console.log(response.data.True);
      this.setState({
        option: {
          title: {
            text: 'Triangle Result',
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
              name: 'ä¸‰è§’å½¢é—®é¢˜ç»“æ�œ-' + value,
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              roseType: 'angle',
              data: [
                {value: response.data.True, name: 'æ­£ç¡®ç»“æ�œ'},
                {value: response.data.False, name: 'é”™è¯¯ç»“æ�œ'}
              ].sort((a, b) => a.value - b.value),
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
              animationDelay: function (idx: any) {
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

  handleMenuClick = (e: MenuInfo) => {
    this.setState({
      version: e.key,
      toShow: false
    })
  };

  componentDidMount(): void {

  }

  render() {
    let elem1 = null;
    let elem2 = null;
    if (this.state.toShow) {
      elem1 = <ReactEcharts
        option={this.state.option}
        style={{height: '300px', width: '100%'}}/>;
      elem2 = <Table columns={columns} dataSource={this.state.data}/>
    }

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="v1">v1</Menu.Item>
        <Menu.Item key="v2">v2</Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Dropdown overlay={menu}>
          <Button>
            版本<Icon component={DownOutlined as ExoticComponent}/>
          </Button>
        </Dropdown>
        <Select showSearch
                style={{width: 300}}
                placeholder="请选择测试方法"
                optionFilterProp="children"
                onChange={this.onChange}
                onSelect={this.onChange}
                onBlur={onBlur}
                onSearch={onSearch}
                className="select__type"
        >
          <Option value="boundary">boundary</Option>
          <Option value="equivalence">equivalence</Option>
        </Select>
        <Button type="primary" className={'button_'} onClick={this.toTest}>提交</Button>
        {elem1}
        {elem2}
      </div>
    )
  }
}

export default TriangleTable;
