// Actions
const READ = 'gamesale-agent/quests/READ';
const DELETE = 'gamesale-agent/quests/DELETE';
const CREATE = 'gamesale-agent/quests/CREATE';

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
  let questIndex;
  switch (action.type) {
    case READ:
      questIndex = state.findIndex(quest => quest.key === action.payload.questKey);
      return [
        ...state.slice(0, questIndex),
        Object.assign({}, state[questIndex], {
          readPosts: [...state[questIndex].readPosts, action.payload.postKey],
        }),
        ...state.slice(questIndex + 1),
      ];
    case DELETE:
      questIndex = state.findIndex(quest => quest.key === action.payload.questKey);
      return [...state.slice(0, questIndex), ...state.slice(questIndex + 1)];
    case CREATE:
      return [...state, action.payload.quest];
    default:
      return state;
  }
}

// Action Creators
export function readQuest(questKey, postKey) {
  return {
    type: READ,
    payload: {
      questKey,
      postKey,
    },
  };
}

export function deleteQuest(questKey) {
  return {
    type: DELETE,
    payload: {
      questKey,
    },
  };
}

export function createQuest(quest) {
  return {
    type: CREATE,
    payload: {
      quest,
    },
  };
}
