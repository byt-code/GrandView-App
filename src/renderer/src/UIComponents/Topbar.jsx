import React from 'react'
import { Bell, MessageCircle, Search, User } from 'lucide-react'

function Header() {
  return (
    <header className="bg-white bg-opacity-20 backdrop-blur-md shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-slate-800">GrandView Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <button className="p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition-colors">
          <Bell size={20} className="text-slate-700" />
        </button>
        <button className="p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition-colors">
          <MessageCircle size={20} className="text-slate-700" />
        </button>
        <button className="p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition-colors">
          <User size={20} className="text-slate-700" />
        </button>
      </div>
    </header>
  )
}

export default Header
