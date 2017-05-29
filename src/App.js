import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs, message} from 'antd';
import QuestTable from './components/QuestTable';
import PostTable from './components/PostTable';
import ActionButton from './components/ActionButton';
import {
  configSelector,
  displayBuyQuestsSelector,
  displaySellQuestsSelector,
  postLengthSelector,
  uiSelector,
} from './selectors';
import {readQuest, deleteQuest, createQuest} from './modules/quests';
import {fetchPost} from './modules/posts';
import {changeTab, toggleRow} from './modules/ui';
import './App.css';

const {TabPane} = Tabs;

class App extends Component {
  componentWillReceiveProps({config, ui, postLength, fetchPost}) {
    if (postLength < config.MAX_POSTS) {
      fetchPost(ui.previousPage);
    }
  }

  render() {
    const {
      buyQuests,
      sellQuests,
      ui,
      onPostClick,
      onTabClick,
      onExpand,
      onQuestDelete,
      onQuestCreate,
    } = this.props;

    return (
      <div className="App">
        <Tabs
          activeKey={ui.activeTabKey}
          onTabClick={onTabClick}
          animated={false}
          tabBarExtraContent={<ActionButton type={ui.activeTabKey} onQuestCreate={onQuestCreate} />}
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
    config: configSelector(state),
    postLength: postLengthSelector(state),
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
    onQuestCreate: quest => {
      dispatch(createQuest(quest));
      dispatch(toggleRow(true, quest.key));
      message.success('已成功新增任務');
    },
    fetchPost: postUrl => {
      dispatch(fetchPost(postUrl));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
