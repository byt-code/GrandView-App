import React from 'react'
import {
  Menu,
  X,
  Home,
  FileText,
  FileSpreadsheet,
  Package,
  Truck,
  DollarSign,
  BarChart2,
  Bell,
  User,
  Settings as Settingsicon
} from 'lucide-react'

const Sidebar = ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => (
  <div
    className={`fixed left-0 top-0 h-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg transition-all duration-300 ease-in-out ${
      isOpen ? 'w-64' : 'w-16'
    } overflow-hidden shadow-lg`}
  >
    <div className="flex justify-between items-center p-4">
      <h1 className={`text-xl font-bold text-gray-800 ${isOpen ? '' : 'hidden'}`}>GrandView</h1>
      <button onClick={toggleSidebar} className="text-gray-600">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    <nav>
      {[
        { icon: <Home size={24} />, label: 'Dashboard', id: 'dashboard' },
        { icon: <FileText size={24} />, label: 'Lead Sheet', id: 'lead-sheet' },
        { icon: <FileSpreadsheet size={24} />, label: 'Quote Sheet', id: 'quote-sheet' },
        { icon: <Package size={24} />, label: 'Inventory', id: 'inventory' },
        { icon: <Truck size={24} />, label: 'Job Orders', id: 'job-orders' },
        { icon: <DollarSign size={24} />, label: 'Billing', id: 'billing' },
        { icon: <BarChart2 size={24} />, label: 'Reports', id: 'reports' },
        { icon: <Bell size={24} />, label: 'Notifications', id: 'notifications' },
        { icon: <User size={24} />, label: 'Profile', id: 'profile' },
        { icon: <Settingsicon size={24} />, label: 'Settings', id: 'settings' }
      ].map((item) => (
        <button
          key={item.id}
          className={`flex items-center w-full p-4 hover:bg-white hover:bg-opacity-30 ${
            activeTab === item.id ? 'bg-white bg-opacity-30' : ''
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          <span className="text-gray-800">{item.icon}</span>
          <span className={`ml-4 text-gray-800 ${isOpen ? '' : 'hidden'}`}>{item.label}</span>
        </button>
      ))}
    </nav>
  </div>
)

export default Sidebar
