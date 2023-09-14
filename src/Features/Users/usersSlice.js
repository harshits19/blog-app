import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

/* 
const initialState = [
  { id: "0", name: "Harshit" },
  { id: "1", name: "Shubham" },
  { id: "2", name: "Ankit" },
]; */

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get(FETCH_URL);
  return res.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const selectAllUsers = (store) => store.users;
export const selectUserById = (store, userId) =>
  store.users.find((user) => user.id === userId);

export default usersSlice.reducer;
