import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import FileBase from 'react-file-base64'


export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value })
  }

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };



  return (
    <div className="max-w-[90%] w-10/12 float-right shadow-lg rounded overflow-x-hidden">
      <form className="flex flex-col mx-auto items-center w-11/12" autoComplete="off" noValidate onSubmit={handleSubmit} >
        <h2 className="font-sans mt-4 mb-1 text-xl">Creating a Memory</h2>
        <input className="w-[80%] mt-1 p-3 shadow-sm shadow-zinc-600 rounded-md border-[1px] border-stone-300" name="creator" type="text" placeholder="Creator" onChange={handleChange} value={postData.creator} />
        <input className="w-[80%] mt-3 p-3 shadow-sm shadow-zinc-600 rounded-md border-[1px] border-stone-300" name="title" type="text" placeholder="Title" onChange={handleChange} value={postData.title} />
        <input className="w-[80%] mt-3 p-3 shadow-sm shadow-zinc-600 rounded-md border-[1px] border-stone-300" name="message" type="text" placeholder="Message" onChange={handleChange} value={postData.message} />
        <input className="w-[80%] mt-3 p-3 shadow-sm shadow-zinc-400 rounded-md border-[1px] border-stone-300" name="tags" type="text" placeholder="Tags" onChange={handleChange} value={postData.tags} />
        <div className="my-3 mx-auto w-11/12">
          <FileBase type="file" multiple={false} onDone={(base64) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <button className="mb-3 p-1 w-11/12 rounded-md bg-[#2E4CA7] text-white font-sans uppercase text-xl" type="submit">Submit</button>
        <button className="mb-4 p-1 w-11/12 rounded-md bg-[#F3214C] text-white font-sans uppercase" type="button" onClick={clear}>Clear</button>
      </form>
    </div>
  );
}

