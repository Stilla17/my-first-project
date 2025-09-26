import React from 'react'

const Menu = () => {
    return (
        <>
            <div class="flex h-screen bg-gray-100">

                <nav class="w-64 bg-white shadow-lg flex flex-col">
                    <div class="p-4 border-b border-gray-200">
                        <div class="flex items-center space-x-3">
                            <div>
                                <h1 class="text-lg font-semibold text-gray-900">Dashboard v1</h1>
                            </div>
                        </div>
                    </div>

                    <ul class="flex-1 px-2 py-4 space-y-1">
                        <li>
                            <a href="#" class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i class="fas fa-tachometer-alt w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i class="fas fa-box w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Product</span>
                                <i class="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center px-3 py-2 bg-purple-100 text-purple-700 rounded-lg">
                                <i class="fas fa-users w-5 h-5 mr-3 text-purple-600"></i>
                                <span>Customers</span>
                                <i class="fas fa-chevron-right ml-auto text-xs text-purple-500"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i class="fas fa-chart-line w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Income</span>
                                <i class="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </a>
                        </li>


                        <li>
                            <a href="#" class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i class="fas fa-bullhorn w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Promote</span>
                                <i class="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <i class="fas fa-question-circle w-5 h-5 mr-3 text-gray-500"></i>
                                <span>Help</span>
                                <i class="fas fa-chevron-right ml-auto text-xs text-gray-400"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu