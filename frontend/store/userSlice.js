import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    ID: 0,
    email: "email",
    firstName: "firstName",
    lastName: "lastName",
    displayName: "displayName",
    role: "role",
    isLoggedIn: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload }) {
      state.data = payload;
      state.data.isLoggedIn = true;
    },
    logout(state) {
      state.data.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
