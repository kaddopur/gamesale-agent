import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs} from 'antd';
import QuestTable from './components/QuestTable';
import PostTable from './components/PostTable';
import {buyQuestsSelector, sellQuestsSelector} from './selectors';
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
    buyQuests: buyQuestsSelector(state),
    sellQuests: sellQuestsSelector(state),
  };
};

export default connect(mapStateToProps)(App);
