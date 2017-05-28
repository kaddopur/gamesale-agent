import {combineReducers} from 'redux';

const mockQuests = [
  {
    key: '1',
    name: '人中之龍6',
    type: 'buy',
    platform: 'PS4',
    aliases: ['人龍6'],
  },
  {
    key: '2',
    name: '地平線',
    type: 'buy',
    platform: 'PS4',
    aliases: ['鐵7'],
    unreadPostCount: 8,
  },
];

const mockPosts = [
  {
    key: '11',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
    read: false,
  },
  {
    key: '12',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
    read: false,
  },
  {
    key: '13',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '14',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '15',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '16',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '17',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '18',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '19',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
  {
    key: '20',
    name: '[PS4 ] 售 地平線-期待黎明 中文版',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495960713.A.5AA.html',
    date: '5/28',
    author: 'leepeter121',
  },
];

const quests = (state = mockQuests, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const posts = (state = mockPosts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const gameAgentApp = combineReducers({
  quests,
  posts,
});

export default gameAgentApp;
