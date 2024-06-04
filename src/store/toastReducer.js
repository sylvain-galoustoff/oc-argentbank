import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  type: null,
  message: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    updateToast: (state, action) => {
      state.show = action.payload.show;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

export const { updateToast } = toastSlice.actions;
export default toastSlice.reducer;
