import React from 'react';
import { Table, Badge } from 'antd';
import Link from './Link';

const { Column } = Table;

const PostTable = ({ postKey, onPostClick, dataSource }) =>
  <Table
    dataSource={dataSource}
    showHeader={false}
    pagination={false}
    size="middle"
    locale={{
      emptyText: '暫無數據',
    }}
  >
    <Column title="日期" dataIndex="date" key="date" width="40px" />
    <Column title="作者" dataIndex="author" key="author" width="100px" />
    <Column
      title="遊戲"
      dataIndex="title"
      key="title"
      render={(text, { link, read }) =>
        <Badge dot={!read}>
          <Link
            url={link}
            style={{ paddingRight: 4 }}
            handleClick={onPostClick.bind(null, postKey, link)}
          >
            {text}
          </Link>
        </Badge>}
    />
  </Table>;

export default PostTable;
