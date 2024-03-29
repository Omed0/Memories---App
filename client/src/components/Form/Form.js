import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import FileBase from 'react-file-base64'


export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

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
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <div>
        <text>
          Please Sign In to create your own memories and like other's memories.
        </text>
      </div>
    )
  }



  return (
    <div className="min-w-[16rem] w-9/12 md:w-full mx-auto md:float-right shadow-lg rounded overflow-x-hidden">
      <form className="flex flex-col mx-auto items-center w-11/12" autoComplete="off" noValidate onSubmit={handleSubmit} >
        <h2 className="font-sans mt-4 mb-2 text-xl font-semibold">Creating a Memory</h2>
        <input className="w-[80%] mt-1 p-3 shadow-sm shadow-zinc-600 rounded-md border-[1px] border-stone-300 outline-none" name="creator" type="text" placeholder="Creator" onChange={handleChange} value={postData.creator} />
        <input className="w-[80%] mt-3 p-3 shadow-sm shadow-zinc-600 rounded-md border-[1px] border-stone-300 outline-none" name="title" type="text" placeholder="Title" onChange={handleChange} value={postData.title} />
        <input className="w-[80%] mt-3 p-3 shadow-sm shadow-zinc-600 rounded-md border-[1px] border-stone-300 outline-none" name="message" type="text" placeholder="Message" onChange={handleChange} value={postData.message} />
        <input className="w-[80%] mt-3 p-3 shadow-sm shadow-zinc-400 rounded-md border-[1px] border-stone-300 outline-none" name="tags" type="text" placeholder="Tags" onChange={handleChange} value={postData.tags} />
        <div className="my-4 mx-auto w-11/12">
          <FileBase type="file" multiple={false} onDone={(base64) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <button className="mb-2 p-1 w-11/12 hover:bg-[#2e4ca7db] hover:scale-105 duration-300 rounded-md bg-[#2E4CA7] text-white font-sans uppercase text-xl shadow-md active:bg-[#264297] active:scale-95" type="submit">Submit</button>
        <button className="mb-4 p-1 w-11/12 hover:bg-[#f3214bcb] hover:scale-105 duration-300 rounded-md bg-[#F3214C] text-white font-sans uppercase shadow-md active:bg-[#ef1b45] active:scale-95" type="button" onClick={clear}>Clear</button>
      </form>
    </div>
  );
}

