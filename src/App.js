import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs} from 'antd';
import QuestTable from './components/QuestTable';
import PostTable from './components/PostTable';
import './App.css';

const {TabPane} = Tabs;

class App extends Component {
  render() {
    const {quests, posts} = this.props;

    return (
      <div className="App">
        <Tabs>
          <TabPane tab="買遊戲" key="1">
            <QuestTable
              dataSource={quests.filter(row => row.type === 'buy')}
              expandedRowRender={({name}) => (
                <PostTable dataSource={posts.filter(row => row.name.indexOf(name) !== -1)} />
              )}
            />
          </TabPane>
          <TabPane tab="賣遊戲" key="2">
            <QuestTable
              dataSource={quests.filter(row => row.type === 'sell')}
              expandedRowRender={({name}) => (
                <PostTable dataSource={posts.filter(row => row.name.indexOf(name) !== -1)} />
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = ({quests, posts}) => {
  return {
    quests,
    posts,
  };
};

export default connect(mapStateToProps)(App);
