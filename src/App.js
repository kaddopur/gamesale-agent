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
    const {buyQuests, sellQuests} = this.props;

    return (
      <div className="App">
        <Tabs>
          <TabPane tab="買遊戲" key="1">
            <QuestTable
              dataSource={buyQuests}
              expandedRowRender={({posts}) => <PostTable dataSource={posts} />}
            />
          </TabPane>
          <TabPane tab="賣遊戲" key="2">
            <QuestTable
              dataSource={sellQuests}
              expandedRowRender={({posts}) => <PostTable dataSource={posts} />}
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
  };
};

export default connect(mapStateToProps)(App);
