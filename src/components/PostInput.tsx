import { gql, useMutation } from '@apollo/client';
import { FormEvent } from 'react';

const CREATE_POST = gql`
  mutation ($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
    }
  }
`;

export const PostInput = () => {
  const [createPost] = useMutation(CREATE_POST);

  //投稿ボタン押すとこの関数が動く
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // 入力データ取得
    const data = new FormData(event.currentTarget);
    createPost({
      variables: {
        title: data.get('title'),
        content: data.get('content'),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        title:
        <input type="text" name="title" defaultValue="" />
      </label>
      <br />
      <label>
        content:
        <input type="text" name="content" defaultValue="" />
      </label>
      <br />
      <input type="submit" value="投稿" />
    </form>
  );
};
