import React from 'react';
import {Table, Badge} from 'antd';

const postColumns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '遊戲',
    dataIndex: 'name',
    key: 'name',
    render: (text, {link, read}) => (
      <Badge dot={read === false}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{paddingRight: 4}}>
          {text}
        </a>
      </Badge>
    ),
  },
];

const PostTable = ({dataSource}) => (
  <Table
    dataSource={dataSource}
    columns={postColumns}
    showHeader={false}
    pagination={false}
    size="middle"
  />
);

export default PostTable;
