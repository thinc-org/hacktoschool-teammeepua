import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ID: 0,
  CreatedAt: "date",
  UpdatedAt: "date",
  DeletedAt: "date",
  email: "email",
  firstName: "firstName",
  lastName: "lastName",
  displayName: "displayName",
  role: "role",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, actions) {
      // state.name = actions.payload;
      state = {
        ...state,
        ...actions.payload,
      };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
