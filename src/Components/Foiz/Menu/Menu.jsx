import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
    return (
        <>
            <div className="flex h-screen bg-gray-100">

                <nav className="w-64 bg-white shadow-lg flex flex-col fixed">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div>
                                <h1 className="text-lg font-semibold text-gray-900">Dashboard v1</h1>
                            </div>
                        </div>
                    </div>

                    <ul className="flex-1 px-2 py-4 space-y-1">
                        <li>
                            <Link to="/" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i className="fas fa-tachometer-alt w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/product" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i className="fas fa-box w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Product</span>
                                <i className="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Customers" className="flex items-center px-3 py-2 bg-purple-100 text-purple-700 rounded-lg">
                                <i className="fas fa-users w-5 h-5 mr-3 text-purple-600"></i>
                                <span>Customers</span>
                                <i className="fas fa-chevron-right ml-auto text-xs text-purple-500"></i>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Income" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i className="fas fa-chart-line w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Income</span>
                                <i className="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </Link>
                        </li>


                        <li>
                            <Link to="/Promote" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i className="fas fa-bullhorn w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Promote</span>
                                <i className="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Help" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i className="fas fa-question-circle w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Help</span>
                                <i className="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </Link>
                            
                        </li>
                        
                       
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu