import { FullMovieInfo, QueryParams, RateMovieRequest, RateMovieResponse, SearchResponse } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3030/api/v1'

export const filmpoiskAPI = createApi({
  reducerPath: 'filmpoiskAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFilmsList: builder.query<SearchResponse, void>({
      query: () => `/search`,
    }),
    getFilmById: builder.query<FullMovieInfo, string>({
      query: (id: string) => `/movie/${id}`,
    }),
    getFilmsSearch: builder.query<SearchResponse, QueryParams>({
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

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers) => {
      const accessToken = localStorage.getItem('token');

      if (accessToken) {
          headers.set('authorization', `Bearer ${accessToken}`);
      }

      return headers;
  },
});



export const movieApiWithAuth = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
      rateMovie: builder.mutation<RateMovieResponse, RateMovieRequest>({
          query: (request) => ({
              url: 'rateMovie',
              method: 'POST',
              body: request,
          }),
          async onQueryStarted(request, { dispatch, queryFulfilled }) {
              try {
                  const {
                      data: { newAverageRate, movieId },
                  } = await queryFulfilled;

                  const storedRatings = localStorage.getItem('ratings');
                  const parsedObject = storedRatings
                      ? JSON.parse(storedRatings)
                      : {};

                  parsedObject[movieId] = request.user_rate;
                  localStorage.setItem('ratings',
                      JSON.stringify(parsedObject)
                  );

                  dispatch(
                    filmpoiskAPI.util.updateQueryData(
                          'getFilmById',
                          movieId,
                          (draft) => {
                              draft.rating = newAverageRate;
                          }
                      )
                  );
              } catch {
                  throw new Error(
                      `Error during pessimistic updates. MovieId: ${request.movieId}`
                  );
              }
          },
      }),
  }),
});


export const { useRateMovieMutation } = movieApiWithAuth;

export const {
  useGetFilmsListQuery,
  useGetFilmByIdQuery,
  useGetFilmsSearchQuery,
} = filmpoiskAPI;

export default filmpoiskAPI;
