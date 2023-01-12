import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "Alex" };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, actions) {
      state.name = actions.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
