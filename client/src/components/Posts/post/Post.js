import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import moment from 'moment'


export default function Post({ post, setCurrentId }) {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));


  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><AiFillLike size={24} />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><AiOutlineLike size={24} />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><AiOutlineLike size={24} />&nbsp;Like</>;
  };

  return (
    <aside key={post._id}>
      <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} alt='post' />
      <div>
        <h1 className=''>{post.name}</h1>
        <h1 className=''>{moment(post.createdAt).fromNow()}</h1>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div>
          <button style={{ color: 'white' }} onClick={() => setCurrentId(post._id)} >
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      )}
      <div>
        <h1 className=''>{post.tags.map((tag) => `#${tag}`)}</h1>
      </div>
      <h1 className=''>{post.title}</h1>
      <article>
        <h1 className=''>{post.message}</h1>
      </article>
      <div>
        <button disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <button onClick={() => dispatch(deletePost(post._id))}>
            <MdDelete />
            Delete
          </button>
        )}
      </div>
    </aside>
  );
}

