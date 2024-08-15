import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 1000, // Set your initial balance
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    recharge: (state, action) => {
      state.balance += action.payload; // Increase balance by payload
    },
    withdraw: (state, action) => {
      state.balance -= action.payload; // Decrease balance by payload
    },
  },
});

export const { recharge, withdraw } = balanceSlice.actions;
export default balanceSlice.reducer;
