import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import styles from "../styles/PostList.module.css";

function PostList() {
  // загрузку, хранение и отображение списка постов.
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPagNumber] = useState(1);
  const [startNumberOfPosts, setStartNumberOFPosts] = useState(0);

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts?_start=${startNumberOfPosts}&_limit=${4}`;
    axios
      .get(url)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error.response))
      .finally(() => {
        console.log("завершшение преложения");
      });
  }, [pageNumber, startNumberOfPosts]);

  return (
    <div className={styles.container}>
      <p className={styles.numerPage}>Page№{pageNumber}</p>
      {posts.map((post, ind) => {
        return <Post key={ind} post={post} />;
      })}
      <div className={styles.btnContainer}>
        <button
          className={styles.btn}
          onClick={() => {
            setPagNumber(pageNumber + 1);
            setStartNumberOFPosts(startNumberOfPosts + 4);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostList;
