import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

const PostList = ({isPosting, onStopPost}) => {
const [posts, setPosts] = useState([])

function addPostHandler(postData){
  setPosts((existingPosts) => [postData, ...existingPosts]);
}
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPost}>
          <NewPost
            onCancel={onStopPost}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
{posts.length > 0 && (
      <ul className={classes.posts}>
      {
        posts.map((post, index)=> <Post key={index} author={post.author} body={post.body}/>)
      }
      </ul>
      )} 
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2> There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
