import Post from './post/Post'
import { useSelector } from 'react-redux';

export default function Posts() {

  const posts = useSelector((state)=>state.posts)
  console.log(posts);

  return (
    <div>

      <h1 className="text-2xl font-semibold">Posts</h1>
      <Post />
      <Post />

    </div>
  );
}

