import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

import Memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

export default function App() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


  return (
    <section className='w-9/12 mx-auto'>
      <div className='w-full h-14 flex items-center justify-center gap-4 shadow-md shadow-slate-400 rounded-xl mx-auto mt-6'>
        <h1 className='text-4xl text-blue-500 font-serif font-semibold'>Memories</h1>
        <img className='w-10 h-10' src={Memories} alt="Memoreis" />
      </div>

      <aside className='p-5'>
        <div>
          <section className='grid grid-cols-3 justify-between items-stretch gap-3 font-serif'>
            <div className='col-span-2'>
              <Posts setCurrentId={setCurrentId} />
            </div>
            <div className='col-span-1'>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </section>
        </div>
      </aside>

    </section>
  );
}

