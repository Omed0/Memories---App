import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

import Memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

export default function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <section className='w-9/12 mx-auto'>
      <div className='w-full h-14 flex items-center justify-center gap-4 shadow-md shadow-slate-400 rounded-xl mx-auto mt-6'>
        <h1 className='text-4xl text-blue-500 font-serif font-semibold'>Memories</h1>
        <img className='w-10 h-10' src={Memories} alt="Memoreis" />
      </div>

      <aside className='p-5'>
        <div>
          <section className='grid grid-cols-2 justify-between items-stretch gap-3 font-serif'>
            <div className='col-span-1'>
              <Posts />
            </div>
            <div className='col-span-1'>
              <Form />
            </div>
          </section>
        </div>
      </aside>

    </section>
  );
}

