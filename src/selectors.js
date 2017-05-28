import {createSelector} from 'reselect';

const POST_AMOUT_PER_QUEST = 5;

const questsSelector = ({quests = []}) => quests;
const postsSelector = ({posts = []}) => posts;

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
  quest.posts = posts
    .filter(({platform, title}) => platform === quest.platform && title.indexOf(quest.query) !== -1)
    .slice(0, POST_AMOUT_PER_QUEST);
  return quest;
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
