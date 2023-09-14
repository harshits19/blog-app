import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import AddPostForm from "./Features/Posts/AddPostForm";
import PostsList from "./Features/Posts/PostsList";
import SinglePostPage from "./Features/Posts/SinglePostPage";
import EditPostForm from "./Features/Posts/EditPostForm";
import UserPage from "./Features/Users/UserPage";
import UsersList from "./Features/Users/UsersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
