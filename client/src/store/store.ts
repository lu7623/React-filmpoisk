import { useDispatch, useSelector } from 'react-redux';
import { filmpoiskAPI, movieApiWithAuth } from '../api/services/filmpoiskAPI';
import { configureStore } from '@reduxjs/toolkit';
import { authorizationSlice } from './reducers/authSlice';
import { authorizationAPI } from '../api/services/authAPI';

export const store = configureStore({
    reducer: {
        [filmpoiskAPI.reducerPath]: filmpoiskAPI.reducer,
        [movieApiWithAuth.reducerPath]: movieApiWithAuth.reducer,
        [authorizationAPI.reducerPath]: authorizationAPI.reducer,
        authorization: authorizationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
          filmpoiskAPI.middleware,
            movieApiWithAuth.middleware,
            authorizationAPI.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();