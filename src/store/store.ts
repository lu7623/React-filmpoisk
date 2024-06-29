import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/slice';
import filmpoiskAPI from '../services/filmService';

const rootReducer = combineReducers({
  searchReducer,
  [filmpoiskAPI.reducerPath]: filmpoiskAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(filmpoiskAPI.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
