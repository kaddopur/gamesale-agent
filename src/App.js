import React, {Component} from 'react';
import {Table, Button, Tabs, Badge, Tag} from 'antd';
import PostTable from './components/PostTable';
import './App.css';
const {TabPane} = Tabs;

const operations = <Button>新增任務</Button>;

const questDataSource = [
  {
    key: '1',
    name: '人中之龍6',
    type: 'buy',
    platform: 'PS4',
    aliases: ['人龍6'],
  },
  {
    key: '2',
    name: '地平線',
    type: 'buy',
    platform: 'PS4',
    aliases: ['鐵7'],
    unreadPostCount: 8,
  },
  {
    key: '3',
    name: '鐵拳6',
    type: 'sell',
    platform: 'PS4',
    aliases: ['鐵6'],
  },
];

const questColumns = [
  {
    title: '遊戲',
    dataIndex: 'name',
    key: 'name',
    render: (text, {unreadPostCount}) => (
      <Badge dot={unreadPostCount > 0}>
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

const postDataSource = [
  {
    key: '11',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
    read: false,
  },
  {
    key: '12',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
    read: false,
  },
  {
    key: '13',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '14',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '15',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '16',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '17',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '18',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '19',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '20',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">

        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="買遊戲" key="1">
            <Table
              className="components-table-demo-nested"
              dataSource={questDataSource.filter(row => row.type === 'buy')}
              columns={questColumns}
              pagination={false}
              size="middle"
              expandedRowRender={({name}) => (
                <PostTable
                  dataSource={postDataSource.filter(row => row.name.indexOf(name) !== -1)}
                />
              )}
            />
          </TabPane>
          <TabPane tab="賣遊戲" key="2">
            <Table
              dataSource={questDataSource.filter(row => row.type === 'sell')}
              columns={questColumns}
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
