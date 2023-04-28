import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
import { useState, useEffect } from 'react'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

export default function Home() {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <aside className='p-5 flex justify-center'>
            <div>
                <section className='flex flex-col items-center md:grid md:grid-cols-3 md:justify-between md:items-stretch gap-3 font-serif'>
                    <div className='col-span-2'>
                        <Posts setCurrentId={setCurrentId} />
                    </div>
                    <div className='col-span-1'>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </section>
            </div>
        </aside>
    )
}
