import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, message } from 'antd';
import QuestTable from './components/QuestTable';
import PostTable from './components/PostTable';
import ActionButton from './components/ActionButton';
import {
  configSelector,
  displayBuyQuestsSelector,
  displaySellQuestsSelector,
  postLengthSelector,
  uiSelector,
  unreadPostCountSelector,
} from './selectors';
import { readQuest, deleteQuest, createQuest } from './modules/quests';
import { changeTab, toggleRow } from './modules/ui';
import { syncBackground } from './modules/chrome';
import './App.css';

const { TabPane } = Tabs;

export class App extends Component {
  componentWillReceiveProps({ posts }) {
    if (posts !== this.props.posts) {
      return;
    }

    this.props.syncBackground();
  }

  render() {
    const {
      buyQuests,
      sellQuests,
      ui: { activeTabKey, expandedRows } = {},
      onPostClick,
      onTabClick,
      onExpand,
      onQuestDelete,
      onQuestCreate,
    } = this.props;

    return (
      <div className="App">
        <Tabs
          activeKey={activeTabKey}
          onTabClick={onTabClick}
          animated={false}
          tabBarExtraContent={
            <ActionButton type={activeTabKey} onQuestCreate={onQuestCreate} />
          }
          tabBarStyle={{
            marginBottom: 0,
          }}
        >
          <TabPane tab="買遊戲" key="buy">
            <QuestTable
              dataSource={buyQuests}
              expandedRowKeys={expandedRows}
              onExpand={onExpand}
              onQuestDelete={onQuestDelete}
              expandedRowRender={({ key, posts }) =>
                <PostTable
                  dataSource={posts}
                  postKey={key}
                  onPostClick={onPostClick}
                />}
            />
          </TabPane>
          <TabPane tab="賣遊戲" key="sell">
            <QuestTable
              dataSource={sellQuests}
              expandedRowKeys={expandedRows}
              onExpand={onExpand}
              onQuestDelete={onQuestDelete}
              expandedRowRender={({ key, posts }) =>
                <PostTable
                  dataSource={posts}
                  postKey={key}
                  onPostClick={onPostClick}
                />}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buyQuests: displayBuyQuestsSelector(state),
    config: configSelector(state),
    postLength: postLengthSelector(state),
    sellQuests: displaySellQuestsSelector(state),
    ui: uiSelector(state),
    unreadCount: unreadPostCountSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPostClick: (questKey, postKey) => {
      dispatch(readQuest(questKey, postKey));
    },
    onTabClick: activeKey => {
      dispatch(changeTab(activeKey));
    },
    onExpand: (expanded, { key }) => {
      dispatch(toggleRow(expanded, key));
    },
    onQuestDelete: key => {
      dispatch(deleteQuest(key));
      message.success('已成功刪除任務');
    },
    onQuestCreate: quest => {
      dispatch(createQuest(quest));
      dispatch(toggleRow(true, quest.key));
      message.success('已成功新增任務');
    },
    syncBackground: () => {
      dispatch(syncBackground());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
