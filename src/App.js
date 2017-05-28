import React, {Component} from 'react';
import {Table, Button, Tabs, Badge, Tag} from 'antd';
import './App.css';
const {TabPane} = Tabs;

const operations = <Button>新增任務</Button>;

const questDtaSource = [
  {
    key: '1',
    name: '人中之龍6',
    type: 'buy',
    platform: 'PS4',
    aliases: ['人龍6'],
    unreadPostCount: 8,
  },
  {
    key: '2',
    name: '鐵拳7',
    type: 'buy',
    platform: 'PS4',
    aliases: ['鐵7'],
  },
  {
    key: '3',
    name: '鐵拳6',
    type: 'sell',
    platform: 'PS4',
    aliases: ['鐵6'],
  },
];

const columns = [
  {
    title: '遊戲',
    dataIndex: 'name',
    key: 'name',
    render: (text, {unreadPostCount}) => (
      <Badge dot={unreadPostCount}>
        <span style={{paddingRight: 4}}>{text}</span>
      </Badge>
    ),
  },
  {
    title: '平台',
    dataIndex: 'platform',
    key: 'platform',
    render: text => {
      switch (text) {
        case 'PS4':
          return <Tag color="#108ee9">{text}</Tag>;
        default:
          return <Tag>{text}</Tag>;
      }
    },
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">

        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="買遊戲" key="1">
            <Table
              dataSource={questDtaSource.filter(row => row.type === 'buy')}
              columns={columns}
              pagination={false}
              size="middle"
              expandedRowRender={() => <h1>11</h1>}
            />
          </TabPane>
          <TabPane tab="賣遊戲" key="2">
            <Table
              dataSource={questDtaSource.filter(row => row.type === 'sell')}
              columns={columns}
              pagination={false}
              size="middle"
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
