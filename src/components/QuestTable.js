import React from 'react';
import {Table, Badge} from 'antd';
import PlatformTag from './PlatformTag';

const {Column} = Table;

const QuestTable = ({dataSource, expandedRowRender}) => (
  <Table
    className="components-table-demo-nested"
    dataSource={dataSource}
    pagination={false}
    size="middle"
    expandedRowRender={expandedRowRender}
    locale={{
      emptyText: '暫無數據',
    }}>
    <Column
      title="目標字串"
      dataIndex="query"
      key="query"
      render={(text, {read}) => (
        <Badge dot={!read}>
          <span style={{paddingRight: 4}}>{text}</span>
        </Badge>
      )}
    />
    <Column
      title="平台"
      dataIndex="platform"
      key="platform"
      width="100px"
      render={platform => <PlatformTag platform={platform} />}
    />
  </Table>
);

export default QuestTable;
