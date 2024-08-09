import React, { useState } from 'react'
import {
  Menu,
  Sun,
  Moon,
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

const Test = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'w-64' : 'w-16'
          } overflow-hidden shadow-lg`}
        >
          <div className="flex justify-between items-center p-4">
            <h1 className={`text-xl font-bold ${isSidebarOpen ? '' : 'hidden'}`}>GrandView</h1>
            <button onClick={toggleSidebar} className="text-gray-600 dark:text-gray-300">
              {isSidebarOpen ? <ChevronFirst size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center w-full p-4 hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  activeTab === item.id ? 'bg-gray-200 dark:bg-gray-700' : ''
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="text-gray-600 dark:text-gray-300">{item.icon}</span>
                <span className={`ml-4 ${isSidebarOpen ? '' : 'hidden'}`}>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-16'
          }`}
        >
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">GrandView Dashboard</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </header>
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
    </div>
  )
}

export default Test
