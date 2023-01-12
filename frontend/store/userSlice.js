import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    ID: 0,
    email: "email",
    firstName: "firstName",
    lastName: "lastName",
    displayName: "displayName",
    role: "role",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.data = payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
