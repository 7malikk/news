import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles/articles';

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
