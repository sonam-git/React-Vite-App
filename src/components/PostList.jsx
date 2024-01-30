import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

const PostList = () => {
// state for modal to display and hide
  const [modelVisible, setModelVisible] = useState(true);
//state for input text
  const [inputText, setInputText] = useState("");
//state for author name
  const [author, setAuthor] = useState("");

  function hideModalHandler() {
    setModelVisible(false);
  }

  function changeBodyHandler(event) {
    setInputText(event.target.value);
  }
  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }
  return (
    <>
      {modelVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorchange={changeAuthorHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={author} body={inputText} />
        <Post author="Max" body="This is Max Post" />
      </ul>
    </>
  );
};

export default PostList;
