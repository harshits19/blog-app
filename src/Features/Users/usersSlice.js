import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Harshit" },
  { id: "1", name: "Shubham" },
  { id: "2", name: "Ankit" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state = action.payload;
    },
  },
});
export const selectAllUsers = (store) => store.users;
export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
