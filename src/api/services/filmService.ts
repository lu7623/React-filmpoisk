import { FullMovieInfo, IQueryParams, IResponse } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmpoiskAPI = createApi({
  reducerPath: 'filmpoiskAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/v1' }),
  endpoints: (builder) => ({
    getFilmsList: builder.query<IResponse, void>({
      query: () => `/search`,
    }),
    getFilmById: builder.query<FullMovieInfo, string>({
      query: (id: string) => `/movie/${id}`,
    }),
    getFilmsSearch: builder.query<IResponse, IQueryParams>({
      query: ({
        title,
        release_year,
        genre,
        page = 1,
        limit = 10,
        order = 'desc',
        sort_by = 'rating',
      }) => ({
        url: '/search',
        params: {
          title: title,
          release_year: release_year,
          genre: genre,
          order: order,
          limit: limit,
          page: page,
          sort_by: sort_by,
        },
      }),
    }),
  }),
});

export const {
  useGetFilmsListQuery,
  useGetFilmByIdQuery,
  useGetFilmsSearchQuery,
} = filmpoiskAPI;

export default filmpoiskAPI;
