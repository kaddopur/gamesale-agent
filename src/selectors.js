import {createSelector} from 'reselect';

const questsSelector = state => state.quests;
const postsSelector = state => state.posts;

const formatQuest = posts => quest => {
  quest.posts = posts
    .filter(post => post.platform === quest.platform)
    .filter(post => post.title.indexOf(quest.name) !== -1);
  return quest;
};

export const buyQuestsSelector = createSelector(questsSelector, postsSelector, (quests, posts) => {
  const formatter = formatQuest(posts);
  return quests.filter(quest => quest.type === 'buy').map(formatter);
});

export const sellQuestsSelector = createSelector(questsSelector, postsSelector, (quests, posts) => {
  const formatter = formatQuest(posts);
  return quests.filter(quest => quest.type === 'sell').map(formatter);
});
