import { FullMovieInfo, IQueryParams, IResponse } from '@/api/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmpoiskAPI = createApi({
  reducerPath: 'filmpoiskAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/v1' }),
  endpoints: (builder) => ({
    getFilmsList: builder.query<IResponse, void>({
      query: () => `/search`,
      //   transformResponse: (resp: { flavor_text_entries: PokemonDesc[] }) =>
      //     resp.flavor_text_entries
      //       .filter((item: PokemonDesc) => {
      //         return item.language.name === 'en';
      //       })[0]
      //       .flavor_text.replace(/[^a-zA-Z é . , ']/g, ' '),
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
      //   transformResponse: (resp: { results: PokemonType[] }) => resp.results,
    }),
  }),
});

export const {
  useGetFilmsListQuery,
  useGetFilmByIdQuery,
  useGetFilmsSearchQuery,
} = filmpoiskAPI;

export default filmpoiskAPI;
