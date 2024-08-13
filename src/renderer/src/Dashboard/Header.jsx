import React, { useState } from 'react'
import { User, Search, MessageCircle, Bell } from 'lucide-react'

function Header() {
  return (
    <>
      {/* Header */}
      <header className="bg-slate-200 bg-opacity-40 shadow-sm p-4 flex justify-between items-center z-10">
        <div className="flex items-center">
          <h1 className=" ml-10 text-2xl font-bold text-blizzard-blue-500">GrandView Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className=" pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blizzard-blue-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
              size={20}
            />
          </div>
          {/* <button className="p-2 rounded-full hover:bg-gray-200 relative">
            <Bell size={20} className="text-gray-600" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button> */}
          {/* <button className="p-2 rounded-full hover:bg-gray-200">
            <MessageCircle size={20} className="text-gray-600" />
          </button> */}
          <button className="p-2 rounded-full hover:bg-gray-200">
            <User size={20} className="text-gray-600" />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
