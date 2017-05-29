// Reducer
const defaultState = {
  FETCH_INTERVEL_MS: 1000,
  MAX_POSTS: 200,
  POST_PER_QUEST: 6,
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
