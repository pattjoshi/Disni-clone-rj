// initial state means stating stage

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  // app start keep everything "Empty"
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      // reducer is hear that,login "rember" all this stuf
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;

      // Logout 'null'
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
// get access
export default userSlice.reducer;
