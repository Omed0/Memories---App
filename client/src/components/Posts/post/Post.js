import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiFillLike } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import moment from 'moment'


export default function Post({ post, setCurrentId }) {

  const dispatch = useDispatch();

  return (
    <aside>
      <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} alt='post' />
      <div>
        <h1 className=''>{post.creator}</h1>
        <h1 className=''>{moment(post.createdAt).fromNow()}</h1>
      </div>
      <div>
        <button style={{ color: 'white' }} onClick={() => setCurrentId(post._id)} >
          <HiOutlineDotsHorizontal />
        </button>
      </div>
      <div>
        <h1 className=''>{post.tags.map((tag) => `#${tag}`)}</h1>
      </div>
        <h1 className=''>{post.title}</h1>
      <article>
        <h1 className=''>{post.message}</h1>
      </article>
      <div>
        <button onClick={() => dispatch(likePost(post._id))}>
          <AiFillLike/>
          Like
          {post.likeCount}
        </button>
        <button onClick={() => dispatch(deletePost(post._id))}>
          <MdDelete/>
          Delete
        </button>
      </div>
    </aside>
  );
}

