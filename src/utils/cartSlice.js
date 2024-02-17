import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(
        (arr) => arr?.card?.info?.id !== itemIdToRemove
      );
    },
    emptyItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, emptyItem } = cartSlice.actions;

export default cartSlice.reducer;
