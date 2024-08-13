import React, { useState } from 'react'
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
  SquareChevronLeft,
  Settings as SettingsIcon
} from 'lucide-react'

const navItems = [
  { icon: <Home size={24} />, label: 'Dashboard', id: 'dashboard' },
  { icon: <FileText size={24} />, label: 'Lead Sheet', id: 'lead-sheet' },
  { icon: <FileSpreadsheet size={24} />, label: 'Quote Sheet', id: 'quote-sheet' },
  { icon: <Package size={24} />, label: 'Inventory', id: 'inventory' },
  { icon: <Truck size={24} />, label: 'Job Orders', id: 'job-orders' },
  /* { icon: <DollarSign size={24} />, label: 'Billing', id: 'billing' }, */
  /* { icon: <BarChart2 size={24} />, label: 'Reports', id: 'reports' }, */
  /* { icon: <Bell size={24} />, label: 'Notifications', id: 'notifications' }, */
  { icon: <User size={24} />, label: 'Profile', id: 'profile' },
  { icon: <SettingsIcon size={24} />, label: 'Settings', id: 'settings' }
]

function SideNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <>
      {/* <div className="font-sans bg-gray-100  flex flex-col"> */}
      {/* Header */}
      {/* <header className="bg-white shadow-md p-4 flex justify-between items-center z-10">
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
      </div> */}

      <div className="flex text-lg text-gray-900">
        {/* Sidebar */}
        <aside
          className={`fixed left-0  h-full border-r-[1px] border-white-500 bg-slate-200 bg-opacity-50 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'w-64' : 'w-16'
          } overflow-hidden drop-shadow-xl`}
        >
          <div className="flex justify-between items-center p-4">
            <h1
              className={`text-xl text-center 
            font-bold ${isSidebarOpen ? '' : 'hidden'}`}
            >
              Menu
            </h1>
            <button onClick={toggleSidebar} className="text-gray-900 ">
              {isSidebarOpen ? <SquareChevronLeft size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Navigation Bar */}
          <nav>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center w-full p-4  rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-300 ${
                  activeTab === item.id
                    ? 'bg-blizzard-blue-300 bg-opacity-70 text-blizzard-blue-600 shadow-md rounded-lg '
                    : ''
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
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-16'
          }`}
        >
        
          <main className="p-6">
            <h2 className="text-3xl font-bold mb-4">
              {navItems.find((item) => item.id === activeTab)?.label}
            </h2>
            <p className="text-lg">
              This is the {navItems.find((item) => item.id === activeTab)?.label} page content.
            </p>
          </main>
        </div>
      </div>
      </>
    
  )
}

export default SideNavBar
