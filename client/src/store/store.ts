import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice';
import filmpoiskAPI, { movieApiWithAuth } from '../api/services/filmpoiskAPI';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authorizationAPI } from '@/api/services/authAPI';
import { authorizationSlice } from './reducers/authSlice';

const rootReducer = combineReducers({
  searchReducer,
  [filmpoiskAPI.reducerPath]: filmpoiskAPI.reducer,
  [movieApiWithAuth.reducerPath]: movieApiWithAuth.reducer,
  [authorizationAPI.reducerPath]: authorizationAPI.reducer,
  authorization: authorizationSlice.reducer,
});

export const setupStore: () => Store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        filmpoiskAPI.middleware,
        movieApiWithAuth.middleware,
        authorizationAPI.middleware,
      ]),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<typeof setupStore> =
  useSelector;
