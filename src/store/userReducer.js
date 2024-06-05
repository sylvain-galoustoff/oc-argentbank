import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: "",
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateUser: (state, action) => {
      console.log(action.payload);
      state.email = action.payload?.email;
      state.firstName = action.payload?.firstName;
      state.lastName = action.payload?.lastName;
    },
  },
});

export const { updateToken, updateUser } = userSlice.actions;
export default userSlice.reducer;
