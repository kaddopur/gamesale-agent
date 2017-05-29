// Actions

// Reducer
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
    title: '[3DS ] 換 瑪利歐體壇全明星Amiibo卡片交換或交易',
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
    author: 'RedG5566',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495972571.A.F10.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495972571.A.F10.html',
    platform: 'PS4',
    title: '[PS4 ] 售 仁王 絕地戰兵 (售出',
  },
  {
    author: 'kkkk10467',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495973023.A.244.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495973023.A.244.html',
    platform: 'PS4',
    title: '[PS4 ] 售 台帳PSN 2000點9折 (售出)',
  },
  {
    author: 'zero1227',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495973816.A.89E.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495973816.A.89E.html',
    platform: 'NS',
    title: '[NS  ] 售 1-2 switch',
  },
  {
    author: 'joeabu',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495975011.A.BDF.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495975011.A.BDF.html',
    platform: 'NS',
    title: '[NS  ] 徵 快打旋風2 最後挑戰者 樂高小城',
  },
  {
    author: 'LosGatos',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495975108.A.6C3.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495975108.A.6C3.html',
    platform: 'PS4',
    title: '[PS4 ] 售 秘境探險4',
  },
  {
    author: 'foxofking',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495975254.A.D76.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495975254.A.D76.html',
    platform: 'PS4',
    title: '[PS4 ]售 聖騎士之戰Xrd Rev2 閃亂神樂PBS 暗黑3',
  },
  {
    author: 'songcry',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495975496.A.2A1.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495975496.A.2A1.html',
    platform: 'PS4',
    title: '[PS4 ] 售PS4 PRO用 原廠HDMI / PS4原廠單耳耳機',
  },
  {
    author: 'sohappy1989',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495975864.A.78D.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495975864.A.78D.html',
    platform: undefined,
    title: '徵 PS4 二手手把X2',
  },
  {
    author: 'M1006',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495976119.A.611.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495976119.A.611.html',
    platform: 'PS4',
    title: '[PS4 ] 售 全新PS4 Slim 500G 2017A 黑色主機',
  },
  {
    author: 'jessieppp',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495976711.A.6AA.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495976711.A.6AA.html',
    platform: 'PS4',
    title: '[PS4 ] 售 地平線：期待黎明',
  },
  {
    author: 'a6031195',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495976889.A.8E9.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495976889.A.8E9.html',
    platform: 'PS4',
    title: '[PS4 ] 售 刀劍神域 虛空幻界 東京幻都',
  },
  {
    author: 'Belic',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495977005.A.80D.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495977005.A.80D.html',
    platform: 'PS4',
    title: '[PS4 ] 售 蝙蝠俠 阿卡漢騎士',
  },
  {
    author: 'dukeman888',
    date: '5/28',
    key: 'https://www.ptt.cc/bbs/Gamesale/M.1495977464.A.B54.html',
    link: 'https://www.ptt.cc/bbs/Gamesale/M.1495977464.A.B54.html',
    platform: 'PS4',
    title: '[PS4  ] 售/換 最後生還者',
  },
]
  .sort()
  .reverse();

export default function(state = mockPosts, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Action Creators
