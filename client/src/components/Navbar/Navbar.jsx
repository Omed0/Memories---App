import { useState, useEffect } from "react";
import Memories from "../../images/memories.png";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"

export default function Navbar() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        window.history.go('/')
        setUser(null)
    }

    const location = window.location;
    useEffect(() => {
        const token = user?.token;

        //JWT...
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <div className="w-full h-14 relative shadow flex items-center justify-between shadow-slate-400 rounded-xl mx-auto px-4 mt-6">
            <div className="flex justify-center items-center cursor-pointer gap-3">
                <h1 className="lg:text-4x md:text-2xl text-xl text-blue-500 font-serif font-semibold">
                    Memories
                </h1>
                <img className="w-10 h-10 hover:scale-105 duration-75" src={Memories} alt="Memoreis" />
            </div>
            <div>
                {
                    user ? (
                        <div className="flex items-center gap-6">
                            <img className="" alt={user.result.name} src={user.result.imageUrl} />
                            <h4 className="">{user.result.name}</h4>
                            <button onClick={logout} className="p-2 px-4 shadow-md active:bg-red-800 active:scale-95 hover:bg-red-600 hover:scale-105 duration-300 rounded-lg text-white bg-red-700">Logout</button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/auth"><button className="p-2 px-4 shadow-md active:bg-blue-800 active:scale-95 hover:bg-blue-600 hover:scale-105 duration-300 rounded-lg text-white bg-blue-700">Sign In</button></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
