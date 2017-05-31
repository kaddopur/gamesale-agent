import configureStore from './configureStore';

const store = configureStore();

console.log(store.getState());
