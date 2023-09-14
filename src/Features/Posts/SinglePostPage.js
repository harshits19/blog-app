import { useSelector } from "react-redux";
import { getPostById } from "./postsSlice";
import { useParams, Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((store) => getPostById(store, Number(postId)));
  if (!post) {
    return (
      <section>
        <h2>Post not found !</h2>
      </section>
    );
  }
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${postId}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default SinglePostPage;
