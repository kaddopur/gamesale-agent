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

const formatQuest = posts => quest => {
  quest.posts = posts
    .filter(({platform, title}) => platform === quest.platform && title.indexOf(quest.query) !== -1)
    .slice(0, POST_AMOUT_PER_QUEST);
  return quest;
};

export const displayBuyQuestsSelector = createSelector(
  buyQuestsSelector,
  postsSelector,
  (quests, posts) => {
    return quests.map(formatQuest(posts));
  }
);

export const displaySellQuestsSelector = createSelector(
  sellQuestsSelector,
  postsSelector,
  (quests, posts) => {
    return quests.map(formatQuest(posts));
  }
);
