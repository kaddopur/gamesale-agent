import React from 'react';
import {Table, Badge, Popconfirm} from 'antd';
import PlatformTag from './PlatformTag';

const {Column} = Table;

const QuestTable = ({dataSource, expandedRowKeys, onExpand, expandedRowRender, onQuestDelete}) => (
  <Table
    className="components-table-demo-nested"
    dataSource={dataSource}
    pagination={false}
    size="middle"
    showHeader={false}
    expandedRowKeys={expandedRowKeys}
    onExpand={onExpand}
    expandedRowRender={expandedRowRender}
    locale={{
      emptyText: '暫無數據',
    }}>
    <Column
      title="平台"
      dataIndex="platform"
      key="platform"
      width="80px"
      render={platform => <PlatformTag platform={platform || '不拘'} />}
    />
    <Column
      title="目標字串"
      dataIndex="query"
      key="query"
      render={(text, {read}) => (
        <Badge dot={!read}>
          <span style={{paddingRight: 4}}>{text || '( 空字串 )'}</span>
        </Badge>
      )}
    />
    <Column
      title="動作"
      dataIndex="action"
      key="action"
      width="50px"
      render={(text, {key}) => (
        <Popconfirm
          title="你確定要刪除這個任務嗎？"
          placement="left"
          onConfirm={() => onQuestDelete(key)}
          okText="刪除"
          cancelText="取消">
          <a href="#">刪除</a>
        </Popconfirm>
      )}
    />
  </Table>
);

export default QuestTable;
