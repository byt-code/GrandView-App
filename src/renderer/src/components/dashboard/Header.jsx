import React, { useState, useCallback, useMemo } from 'react'
import { User, Search, Bell } from 'lucide-react'

import logo from '../../assets/logo.png'

const Header = React.memo(() => {
  const [notifications, setNotifications] = useState(3)

  const handleSearch = useCallback((e) => {
    console.log('Searching for:', e.target.value)
  }, [])

  const handleNotificationClick = useCallback(() => {
    setNotifications(0)
  }, [])

  const notificationBadge = useMemo(() => {
    return notifications > 0 ? (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {notifications}
      </span>
    ) : null
  }, [notifications])

  return (
    <header className="bg-primary-900 backdrop-blur-md shadow-lg p-4 flex justify-between items-center z-10">
      <div className="flex items-center ml-2">
         <img src={logo} alt="Logo" className="h-10 w-auto mr-2 rounded-sm" />
        <h1 className="text-white text-2xl font-bold">GrandView Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blizzard-blue-500"
            onChange={handleSearch}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <button
          className="p-2 rounded-full hover:bg-accent-400 relative"
          onClick={handleNotificationClick}
        >
          <Bell size={20} className="text-white" />
          {notificationBadge}
        </button>
        <button className="p-2 rounded-full hover:bg-accent-400">
          <User size={20} className="text-white" />
        </button>
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
