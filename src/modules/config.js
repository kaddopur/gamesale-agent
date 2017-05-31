// Reducer
const defaultState = {
  POST_FETCH_INTERVEL_MS: 1000,
  MAX_POSTS: 200,
  POST_PER_QUEST: 6,
  BACKGROUND_CHECK_INTERVEL_MS: 1000,
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
