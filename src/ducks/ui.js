// Actions
const CHANGE_TAB = 'gamesale-agent/ui/CHANGE_TAB';

// Reducer
const defaultState = {
  activeTabKey: 'buy',
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, {
        activeTabKey: action.payload.activeKey,
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
