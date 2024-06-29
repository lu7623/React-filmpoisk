import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchStr: '',
  },
  reducers: {
    newSearch(state, action: PayloadAction<string>) {
      state.searchStr = action.payload;
    },
  },
});

export default searchSlice.reducer;