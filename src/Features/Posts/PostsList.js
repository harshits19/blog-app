import { useSelector } from "react-redux";
import { selectAllPosts, getPostsError, getPostsStatus } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  // useEffect(() => {
  //   if (postStatus === "idle") dispatch(fetchPosts());
  // }, [postStatus, dispatch]);

  /* const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.data));
  const renderedPosts = orderedPost.map((post) => {return (<PostsExcerpt key={post.id || post.userId} post={post}/>);}); */
  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content ? content : <h2>No posts found</h2>}
    </section>
  );
};
export default PostsList;
