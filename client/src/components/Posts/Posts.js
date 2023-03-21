import { useSelector } from 'react-redux';
import { GrInProgress } from 'react-icons/gr';
import Post from './post/Post';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <GrInProgress /> : (
      <aside className='' >
        {posts.map((post) => (
          <div key={post._id} >
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </aside>
    )
  );
};

export default Posts;