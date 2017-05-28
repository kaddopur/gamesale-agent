import React from 'react';
import {Table, Badge, Tag} from 'antd';

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

const QuestTable = ({dataSource, expandedRowRender}) => (
  <Table
    className="components-table-demo-nested"
    dataSource={dataSource}
    columns={questColumns}
    pagination={false}
    size="middle"
    expandedRowRender={expandedRowRender}
    locale={{
      emptyText: '暫無數據',
    }}
  />
);

export default QuestTable;
