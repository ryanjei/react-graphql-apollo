import { gql, useQuery } from "@apollo/client"
import { PostType } from "../types/PostType";

const GET_POSTS = gql`
query {
  posts{
    id
    title
    content
    created_at
    updated_at
  }
}
`

export const useFetchPosts = (): PostType[] => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return []
  }
  if (error) {
    console.error(error);
    return []
  }

  return data.posts;

}