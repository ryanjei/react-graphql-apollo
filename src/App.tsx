import React from 'react';
import { PostList } from './components/PostList';
import { PostInput } from './components/PostInput';

function App() {
  return (
    <React.Fragment>
      <PostInput />
      <PostList />
    </React.Fragment>
  );
}

export default App;
