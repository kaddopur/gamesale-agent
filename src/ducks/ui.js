// Actions
const CHANGE_TAB = 'gamesale-agent/ui/CHANGE_TAB';
const TOGGLE_QUEST = 'gamesale-agent/ui/TOGGLE_QUEST';

// Reducer
const defaultState = {
  activeTabKey: 'buy',
  expandedRows: [],
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, {
        activeTabKey: action.payload.activeKey,
      });
    case TOGGLE_QUEST:
      if (action.payload.expanded) {
        return Object.assign({}, state, {
          expandedRows: [...state.expandedRows, action.payload.questKey],
        });
      }
      const index = state.expandedRows.indexOf(action.payload.questKey);
      return Object.assign({}, state, {
        expandedRows: [
          ...state.expandedRows.slice(0, index),
          ...state.expandedRows.slice(index + 1),
        ],
      });
    default:
      return state;
  }
}

// Action Creators
export function changeTab(activeKey) {
  return {
    type: CHANGE_TAB,
    payload: {
      activeKey,
    },
  };
}

export function toggleQuest(expanded, questKey) {
  return {
    type: TOGGLE_QUEST,
    payload: {
      expanded,
      questKey,
    },
  };
}
