import {createSelector} from 'reselect';

const POST_AMOUT_PER_QUEST = 5;

const questsSelector = state => state.quests;
const postsSelector = state => state.posts;
export const uiSelector = state => state.ui;
export const postLengthSelector = createSelector(postsSelector, posts => posts.length);

const buyQuestsSelector = createSelector(questsSelector, quests =>
  quests.filter(quest => quest.type === 'buy')
);

const sellQuestsSelector = createSelector(questsSelector, quests =>
  quests.filter(quest => quest.type === 'sell')
);

const toSellPostsSelector = createSelector(postsSelector, posts =>
  posts.filter(post => post.title.indexOf('售') !== -1)
);

const toBuyPostsSelector = createSelector(postsSelector, posts =>
  posts.filter(post => post.title.indexOf('徵') !== -1)
);

const formatQuest = posts => quest => {
  const newPosts = posts
    .filter(({platform}) => !quest.platform || platform === quest.platform)
    .filter(({title}) => title.indexOf(quest.query) !== -1)
    .slice(0, POST_AMOUT_PER_QUEST)
    .map(post =>
      Object.assign({}, post, {
        read: quest.readPosts.indexOf(post.link) !== -1,
      })
    );
  const read = newPosts.reduce((acc, post) => acc && post.read, true);

  return Object.assign({}, quest, {
    posts: newPosts,
    read,
  });
};

export const displayBuyQuestsSelector = createSelector(
  buyQuestsSelector,
  toSellPostsSelector,
  (quests, posts) => {
    return quests.map(formatQuest(posts));
  }
);

export const displaySellQuestsSelector = createSelector(
  sellQuestsSelector,
  toBuyPostsSelector,
  (quests, posts) => {
    return quests.map(formatQuest(posts));
  }
);
