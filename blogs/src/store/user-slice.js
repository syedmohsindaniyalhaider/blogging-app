import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser() {},
    removeUser() {},
    applyForVerification() {},
    acceptUser() {},
    rejectUser() {},
  },
});

export const userAction = userSlice.actions; // export action to use it in other components
export default userSlice.reducer; // export reducer
