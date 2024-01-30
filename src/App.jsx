import { useState } from 'react';
import MainHeader from './components/MainHeader'
import PostList from './components/PostList'
function App() {
  // state for modal to display and hide
  const [modelVisible, setModelVisible] = useState(false);

  function showModalHandler(){
    setModelVisible(true)
  }
  function hideModalHandler() {
    setModelVisible(false);
  }
  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
    <PostList isPosting={modelVisible} onStopPost = {hideModalHandler}/>
    </main>
    </>
  )
}

export default App
