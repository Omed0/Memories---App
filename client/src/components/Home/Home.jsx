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
    )
}
