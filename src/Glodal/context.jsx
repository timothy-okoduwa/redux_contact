import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const context = createSlice({
  name: "mycounter",
  timothy: "null",
  initialState,
  reducers: {
    addCount: (state) => {
      state.count += 1;
    },
    minusCount: (state) => {
      state.count -= 1;
    },
    timothy: (state, action) => {
      state.timothy = action.payload;
    },
  },
});

// export const {} = context.actions;

export const { addCount, minusCount, timothy } = context.actions;
export default context.reducer;
