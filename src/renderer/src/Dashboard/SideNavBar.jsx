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
  ChevronFirst,
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
      <div className="flex text-lg text-gray-900">
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full border-r-[1px] border-white-500 bg-slate-200 bg-opacity-50 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'w-64' : 'w-16'
          } overflow-hidden drop-shadow-xl`}
        >
          <div className="flex justify-between items-center p-4">
            <h1
              className={`text-xl 
            font-bold ${isSidebarOpen ? '' : 'hidden'}`}
            >
              GrandView
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
        </div>
      </div>
    </>
  )
}

export default SideNavBar
