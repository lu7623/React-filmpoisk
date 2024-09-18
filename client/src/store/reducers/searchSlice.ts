import { Genres, QueryParams, Years } from '../../api/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initState: QueryParams = {
  order: 'desc',
  sort_by: 'rating',
  limit: 10,
  page: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initState,
  reducers: {
    newSearch(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        delete state.title;
      }
      state.title = action.payload;
    },
    newFilterByGenge(state, action: PayloadAction<Genres>) {
      if (action.payload === '0') {
        delete state.genre;
      }
      state.genre = action.payload;
    },
    newFilterByYears(state, action: PayloadAction<Years>) {
      if (action.payload === '0') {
        delete state.release_year;
      }
      state.release_year = action.payload;
    },
    newPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { newSearch, newFilterByGenge, newFilterByYears, newPage } =
  searchSlice.actions;
export default searchSlice.reducer;
