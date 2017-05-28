import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs, message} from 'antd';
import QuestTable from './components/QuestTable';
import PostTable from './components/PostTable';
import {displayBuyQuestsSelector, displaySellQuestsSelector, uiSelector} from './selectors';
import {readQuest, deleteQuest} from './ducks/quests';
import {changeTab, toggleRow} from './ducks/ui';
import './App.css';

const {TabPane} = Tabs;

class App extends Component {
  render() {
    const {
      buyQuests,
      sellQuests,
      ui,
      onPostClick,
      onTabClick,
      onExpand,
      onQuestDelete,
    } = this.props;

    return (
      <div className="App">
        <Tabs
          activeKey={ui.activeTabKey}
          onTabClick={onTabClick}
          animated={false}
          tabBarStyle={{
            marginBottom: 0,
          }}>
          <TabPane tab="買遊戲" key="buy">
            <QuestTable
              dataSource={buyQuests}
              expandedRowKeys={ui.expandedRows}
              onExpand={onExpand}
              onQuestDelete={onQuestDelete}
              expandedRowRender={({key, posts}) => (
                <PostTable dataSource={posts} postKey={key} onPostClick={onPostClick} />
              )}
            />
          </TabPane>
          <TabPane tab="賣遊戲" key="sell">
            <QuestTable
              dataSource={sellQuests}
              expandedRowKeys={ui.expandedRows}
              onExpand={onExpand}
              onQuestDelete={onQuestDelete}
              expandedRowRender={({key, posts}) => (
                <PostTable dataSource={posts} postKey={key} onPostClick={onPostClick} />
              )}
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
    sellQuests: displaySellQuestsSelector(state),
    ui: uiSelector(state),
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
    onExpand: (expanded, {key}) => {
      dispatch(toggleRow(expanded, key));
    },
    onQuestDelete: key => {
      dispatch(deleteQuest(key));
      message.success('已成功刪除任務');
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
