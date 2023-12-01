import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.find((item) => item.product._id === product._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const index = state.findIndex((item) => item.product._id === product._id);

      if (index !== -1) {
        state[index].quantity -= 1;

        if (state[index].quantity === 0) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
