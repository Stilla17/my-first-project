import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
    return (
        <div className='w-[20%] h-[100vh] bg-orange-300 fixed'>
            <div>
                <img src="" alt="" />
            </div>
            <ul>
                <li>
                    <Link to="/"><img src="" alt="" />Home</Link>
                </li>
                <li>
                    <Link to="/"><img src="" alt="" />Shop</Link>
                </li>
                <li>
                    <Link to="/"><img src="" alt="" />Settings</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar