import { FETCH_SUCCESS } from './posts';

// Actions
const CHANGE_TAB = 'gamesale-agent/ui/CHANGE_TAB';
const TOGGLE_ROW = 'gamesale-agent/ui/TOGGLE_ROW';

// Reducer
const defaultState = {
  activeTabKey: 'buy',
  expandedRows: [],
  previousPage: '',
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, {
        activeTabKey: action.payload.activeKey,
      });
    case TOGGLE_ROW:
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
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        previousPage: action.payload.previousPage,
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

export function toggleRow(expanded, questKey) {
  return {
    type: TOGGLE_ROW,
    payload: {
      expanded,
      questKey,
    },
  };
}
