import { useSelector } from 'react-redux';
import { GrInProgress } from 'react-icons/gr';
import Post from './post/Post';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <>
      <h2 className='text-center text-2xl font-sans font-bold mt-8'>Create a Post...</h2>
      <GrInProgress size={40} className='animate-bounce mx-auto mt-10' />
    </> : (
      <aside className='' >
        {posts.map((post) => (
          <div key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </aside>
    )
  );
};

export default Posts;