// Actions
const READ = 'gamesale-agent/quests/READ';
const DELETE = 'gamesale-agent/quests/DELETE';
const CREATE = 'gamesale-agent/quests/CREATE';

// Reducer
export default function reducer(state = [], action = {}) {
  let questIndex;
  switch (action.type) {
    case READ:
      questIndex = state.findIndex(
        quest => quest.key === action.payload.questKey,
      );
      return [
        ...state.slice(0, questIndex),
        Object.assign({}, state[questIndex], {
          readPosts: [...state[questIndex].readPosts, action.payload.postKey],
        }),
        ...state.slice(questIndex + 1),
      ];
    case DELETE:
      questIndex = state.findIndex(
        quest => quest.key === action.payload.questKey,
      );
      return [...state.slice(0, questIndex), ...state.slice(questIndex + 1)];
    case CREATE:
      return [...state, action.payload.quest];
    default:
      return state;
  }
}

// Action Creators
export const readQuest = (questKey, postKey) => ({
  type: READ,
  payload: {
    questKey,
    postKey,
  },
});

export const deleteQuest = questKey => ({
  type: DELETE,
  payload: {
    questKey,
  },
});

export const createQuest = quest => ({
  type: CREATE,
  payload: {
    quest,
  },
});
