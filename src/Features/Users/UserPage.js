import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostbyUser } from "../Posts/postsSlice";
import { selectUserById } from "./usersSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((store) => selectUserById(store, Number(userId)));
  /* const postsForUser = useSelector((store) => {
    const allPosts = selectAllPosts(store);
    return allPosts.filter((post) => post.userId === Number(userId));
  }); */
  const postsForUser = useSelector((state) =>
    getPostbyUser(state, Number(userId))
  );
  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
};
export default UserPage;
