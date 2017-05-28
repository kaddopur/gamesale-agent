import React from 'react';
import {Table, Badge} from 'antd';
import Link from './Link';

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
        <Link url={link} style={{paddingRight: 4}}>
          {text}
        </Link>
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
    locale={{
      emptyText: '暫無數據',
    }}
  />
);

export default PostTable;
