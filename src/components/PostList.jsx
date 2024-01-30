import Post from './Post';
import classes from './PostList.module.css';

const PostList = () => {
  return (
    <ul className={classes.posts}>
 <Post author = "Sonam" body = "This is Sonam's Post"/>
 <Post author = "Max" body = "This is Max Post"/>
    </ul>
   
  )
}

export default PostList