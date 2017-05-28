import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs} from 'antd';
import QuestTable from './components/QuestTable';
import PostTable from './components/PostTable';
import {displayBuyQuestsSelector, displaySellQuestsSelector, uiSelector} from './selectors';
import {readPost} from './ducks/quests';
import {changeTab, toggleQuest} from './ducks/ui';
import './App.css';

const {TabPane} = Tabs;

class App extends Component {
  render() {
    const {buyQuests, sellQuests, ui, onPostClick, onTabClick, onExpand} = this.props;

    return (
      <div className="App">
        <Tabs activeKey={ui.activeTabKey} onTabClick={onTabClick}>
          <TabPane tab="買遊戲" key="buy">
            <QuestTable
              dataSource={buyQuests}
              expandedRowKeys={ui.expandedRows}
              onExpand={onExpand}
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
      dispatch(readPost(questKey, postKey));
    },
    onTabClick: activeKey => {
      dispatch(changeTab(activeKey));
    },
    onExpand: (expanded, {key}) => {
      dispatch(toggleQuest(expanded, key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
