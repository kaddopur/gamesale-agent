import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs} from 'antd';
import QuestTable from './components/QuestTable';
import PostTable from './components/PostTable';
import {displayBuyQuestsSelector, displaySellQuestsSelector} from './selectors';
import './App.css';

const {TabPane} = Tabs;

class App extends Component {
  render() {
    const {buyQuests, sellQuests, onPostClick} = this.props;

    return (
      <div className="App">
        <Tabs>
          <TabPane tab="買遊戲" key="1">
            <QuestTable
              dataSource={buyQuests}
              expandedRowRender={({key, posts}) => (
                <PostTable dataSource={posts} postKey={key} onPostClick={onPostClick} />
              )}
            />
          </TabPane>
          <TabPane tab="賣遊戲" key="2">
            <QuestTable
              dataSource={sellQuests}
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

const readPost = (questKey, postKey) => ({
  type: 'READ_POST',
  payload: {
    questKey,
    postKey,
  },
});

const mapStateToProps = state => {
  return {
    buyQuests: displayBuyQuestsSelector(state),
    sellQuests: displaySellQuestsSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPostClick: (questKey, postKey) => {
      dispatch(readPost(questKey, postKey));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
