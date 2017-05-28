// Actions
const READ = 'gamesale-agent/quests/READ';

// Reducer
const mockQuests = [
  {
    key: '1',
    query: '快打旋風2',
    type: 'sell',
    platform: 'NS',
    readPosts: [],
  },
  {
    key: '2',
    query: '地平線',
    type: 'buy',
    platform: 'PS4',
    readPosts: [],
  },
];

export default function reducer(state = mockQuests, action = {}) {
  switch (action.type) {
    case READ:
      const index = state.findIndex(quest => quest.key === action.payload.questKey);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          readPosts: [...state[index].readPosts, action.payload.postKey],
        }),
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
}

// Action Creators
export function readPost(questKey, postKey) {
  return {
    type: READ,
    payload: {
      questKey,
      postKey,
    },
  };
}
