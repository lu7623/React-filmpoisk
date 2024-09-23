import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type AuthorizationParams = {
  username: string;
  password: string;
};

type AuthorizationResponse = {
  token: string;
};

export const authorizationAPI = createApi({
  reducerPath: 'authorizationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/v1' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<AuthorizationResponse, AuthorizationParams>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const loginUserMutation = authorizationAPI.endpoints.loginUser.initiate;
