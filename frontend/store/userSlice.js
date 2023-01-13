import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const createSession = (data) => {
  let expired = new Date();
  expired.setHours(expired.getHours() + 6);

  let session = {
    ID: data.ID,
    expired: expired.toISOString(),
  };

  localStorage.setItem("session", JSON.stringify(session));

  console.log(`Session created for ID:${data.ID}`);
};

const clearSession = () => {
  localStorage.removeItem("session");

  console.log("Session cleared");
};

const initialState = {
  data: {
    ID: 0,
    email: "email",
    firstName: "firstName",
    lastName: "lastName",
    displayName: "displayName",
    role: "role",
    socialFacebook: "",
    socialYoutube: "",

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

      createSession(state.data);
    },
    logout(state) {
      state.data.isLoggedIn = false;

      clearSession();
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
