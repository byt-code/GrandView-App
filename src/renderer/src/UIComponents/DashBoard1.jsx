import React, { useState, useEffect } from 'react'
import {
  Menu,
  Home,
  FileText,
  FileSpreadsheet,
  Package,
  Truck,
  DollarSign,
  BarChart2,
  Bell,
  User,
  Search,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Settings as SettingsIcon
} from 'lucide-react'

const navItems = [
  { icon: <Home size={24} />, label: 'Dashboard', id: 'dashboard' },
  { icon: <FileText size={24} />, label: 'Lead Sheet', id: 'lead-sheet' },
  { icon: <FileSpreadsheet size={24} />, label: 'Quote Sheet', id: 'quote-sheet' },
  { icon: <Package size={24} />, label: 'Inventory', id: 'inventory' },
  { icon: <Truck size={24} />, label: 'Job Orders', id: 'job-orders' },
  { icon: <DollarSign size={24} />, label: 'Billing', id: 'billing' },
  { icon: <BarChart2 size={24} />, label: 'Reports', id: 'reports' },
  { icon: <Bell size={24} />, label: 'Notifications', id: 'notifications' },
  { icon: <User size={24} />, label: 'Profile', id: 'profile' },
  { icon: <SettingsIcon size={24} />, label: 'Settings', id: 'settings' }
]

function SideNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [notifications, setNotifications] = useState(0)

  useEffect(() => {
    const fetchNotifications = () => {
      setNotifications(Math.floor(Math.random() * 10))
    }
    fetchNotifications()
    const intervalId = setInterval(fetchNotifications, 60000)
    return () => clearInterval(intervalId)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center z-10">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-indigo-700">GrandView Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-200 relative">
            <Bell size={20} className="text-gray-600" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <MessageCircle size={20} className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <User size={20} className="text-gray-600" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-indigo-800 text-white transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'w-64' : 'w-20'
          } overflow-y-auto`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className={`text-xl font-bold ${isSidebarOpen ? '' : 'hidden'}`}>
              GrandView
            </h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </button>
          </div>
          {/* Navigation Bar */}
          <nav className="mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center w-full p-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-indigo-700 ${
                  activeTab === item.id
                    ? 'bg-indigo-900 text-white'
                    : 'text-indigo-200'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span>{item.icon}</span>
                <span className={`ml-4 ${isSidebarOpen ? '' : 'hidden'}`}>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800">
            {navItems.find((item) => item.id === activeTab)?.label}
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg text-gray-700">
              This is the {navItems.find((item) => item.id === activeTab)?.label} page content.
              Add your specific content for each page here.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SideNavBar