import styles from "../styles/Post.module.css";

function Post(props) {
  console.log(props.post);
  return (
    <div className={styles.container}>
      <h1>{props.post.id}</h1>
      <h1>UserID: {props.post.userId}</h1>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  );
}
export default Post;
