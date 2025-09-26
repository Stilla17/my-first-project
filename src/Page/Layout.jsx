import React from 'react'
import Menu from '../Component/Menu'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <div className="flex">
                <Menu />
                <div className="flex-1 p-6 ">
                    <div className='mb-4 flex items-center justify-between ml-64'>
                        <h1 className='text-2xl font-semibold text-gray-900'>Hello Evano 👋🏼,</h1>
                        <input className='mt-2 p-2 border border-gray-300 rounded-lg' type="text" placeholder="Type something..." />
                    </div>

                    <Outlet />

                </div>
            </div>

        </div>
    )
}

export default Layout