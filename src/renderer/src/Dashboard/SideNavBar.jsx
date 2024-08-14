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
import LeadSheet from '../components/tabs/LeadSheet'

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'lead-sheet':
        return <LeadSheet />

      default:
        return (
          <div className="text-center font-mono text-orange-600">
            Build and Link the the tab first
          </div>
        )
    }
  }

  return (
    <>
      <div className="flex text-lg  text-gray-900">
        {/* Sidebar */}
        <aside
          className={`fixed left-0  text-slate-700 h-full border-r-[1px] backdrop-blur-md border-white-500 bg-primary-900 bg-opacity-10
             transition-all duration-300 ease-in-out ${
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
            <button onClick={toggleSidebar} className="text-slate-700 ">
              {isSidebarOpen ? <SquareChevronLeft size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Navigation Bar */}
          <nav>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center w-full p-4  rounded-lg cursor-pointer hover:shadow-custom-hover
                     ${
                       activeTab === item.id
                         ? ' text-accent-400 shadow-custom-hover bg-primary-900 bg-opacity-90 backdrop-blur-md  rounded-lg '
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
          className={`flex-1  transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-16'
          }`}
        >
          <main className="p-6">
            <h2 className="   rounded-md p-2 text-center text-3xl font-bold mb-4">
              {navItems.find((item) => item.id === activeTab)?.label}
            </h2>
            {renderTabContent()}
          </main>
        </div>
      </div>
    </>
  )
}

export default SideNavBar
