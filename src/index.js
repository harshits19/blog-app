import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./App/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./Features/Users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchPosts } from "./Features/Posts/postsSlice";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
