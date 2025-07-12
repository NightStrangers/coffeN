import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  items: Set<string>;
}

const initialState: FavoritesState = {
  items: new Set(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const newSet = new Set(state.items);
      if (newSet.has(action.payload)) {
        newSet.delete(action.payload);
      } else {
        newSet.add(action.payload);
      }
      state.items = newSet;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;