import React from 'react';
import { useFetchPosts } from '../hooks/useFetchPosts';

export const PostList = () => {
  const posts = useFetchPosts();

  return (
    <React.Fragment>
      <ul>
        {posts.map((post) => (
          <li key={`post-key-${post.id}`}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
