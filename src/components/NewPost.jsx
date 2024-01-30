import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost}) {
  //state for input text
  const [inputText, setInputText] = useState("");
//state for author name
  const [author, setAuthor] = useState("");

  function changeBodyHandler(event) {
    setInputText(event.target.value);
  }
  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }
  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: inputText,
      author: author
    };
  onAddPost(postData)
    onCancel();

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
