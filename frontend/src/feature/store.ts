import { configureStore } from '@reduxjs/toolkit';
import { categoryApi } from './services/categoryApi';
import { sloganApi } from './services/sloganApi';
import { jokesApi } from './services/jokesApi';

export const store = configureStore({
  reducer: {
    [jokesApi.reducerPath]: jokesApi.reducer,
    [sloganApi.reducerPath]: sloganApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokesApi.middleware, sloganApi.middleware, categoryApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
