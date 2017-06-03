export const displayNotification = () => {
  if (!chrome || !chrome.notifications) {
    return;
  }

  chrome.notifications.create({
    type: 'basic',
    iconUrl: chrome.runtime.getURL('images/48.png'),
    title: 'foo titoe',
    message: 'asdfasdfasdfasf',
  });
};

export const updateBadge = ({ unreadCount }) => {
  if (!chrome || !chrome.browserAction) {
    return;
  }

  chrome.browserAction.setBadgeText({
    text: unreadCount ? `${unreadCount}` : '',
  });
};
