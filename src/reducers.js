import {combineReducers} from 'redux';

const mockQuests = [
  {
    key: '1',
    name: '瑪利歐',
    type: 'buy',
    platform: '3DS',
  },
  {
    key: '2',
    name: '實況野球2016',
    type: 'buy',
    platform: 'PS4',
  },
];

const mockPosts = [
  {
    author: 'RandyWATA',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495970376.A.4CF.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495970376.A.4CF.html',
    platform: 'NS',
    title: '[NS  ] 徵 Nintendo Switch主機',
  },
  {
    author: 'marioli',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495971598.A.C50.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495971598.A.C50.html',
    platform: '3DS',
    title: '[3DS ] 售 異域神劍 日版',
  },
  {
    author: 'marioli',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495971637.A.427.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495971637.A.427.html',
    platform: '3DS',
    title: '[3DS ] 售 桃太郎電鐵2017',
  },
  {
    author: 'Raidenhsu',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495971696.A.9BA.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495971696.A.9BA.html',
    platform: '3DS',
    title: '[3DS ] 瑪利歐體壇全明星Amiibo卡片交換或交易',
  },
  {
    author: 'sidcheng',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495971778.A.C7C.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495971778.A.C7C.html',
    platform: 'PS4',
    title: '[PS4 ] 售 實況野球2016',
  },
  {
    author: 'Bugatti777',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495971937.A.9B1.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495971937.A.9B1.html',
    platform: 'PS4',
    title: '[PS4 ] 徵 七龍珠異戰2 潛龍 原爆點、幻痛合輯',
  },
  {
    author: 'kj528321',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495972177.A.A3D.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495972177.A.A3D.html',
    platform: 'PS4',
    title: '[PS4 ] 徵 榮耀戰魂 含運700元',
  },
  {
    author: 'star1416',
    date: '12/13',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1449941741.A.7E9.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1449941741.A.7E9.html',
    platform: undefined,
    title: '★[提醒] oodiefishoo，交易經驗分享(05/08)更新',
  },
  {
    author: 'yuan7890',
    date: '8/16',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1439740414.A.DDA.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1439740414.A.DDA.html',
    platform: '公告',
    title: '[公告] Gamesale 二手遊戲交易板 看板板規',
  },
  {
    author: 'yuan7890',
    date: '8/16',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1439740709.A.0EF.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1439740709.A.0EF.html',
    platform: '公告',
    title: '[公告] 黑名單與不良行為名單',
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
