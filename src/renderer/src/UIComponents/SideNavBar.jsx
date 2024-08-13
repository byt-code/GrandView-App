import React, { useState } from 'react';
import {
  Menu,
  Home,
  FileText,
  FileSpreadsheet,
  Package,
  Truck,
  User,
  Settings as SettingsIcon,
  SquareChevronLeft,
  Bell,
  Search,
  MessageCircle
} from 'lucide-react';

const navItems = [
  { icon: <Home size={24} />, label: 'Dashboard', id: 'dashboard' },
  { icon: <FileText size={24} />, label: 'Lead Sheet', id: 'lead-sheet' },
  { icon: <FileSpreadsheet size={24} />, label: 'Quote Sheet', id: 'quote-sheet' },
  { icon: <Package size={24} />, label: 'Inventory', id: 'inventory' },
  { icon: <Truck size={24} />, label: 'Job Orders', id: 'job-orders' },
  { icon: <User size={24} />, label: 'Profile', id: 'profile' },
  { icon: <SettingsIcon size={24} />, label: 'Settings', id: 'settings' }
];

function SideNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
      <div className="absolute inset-0 bg-green-900 bg-opacity-40 backdrop-blur-sm"></div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-green-800 bg-opacity-70 backdrop-blur-md shadow-lg z-50 transition-all duration-300 ease-in-out p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Forest Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 bg-green-700 bg-opacity-50 border border-green-600 rounded-full text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-300" size={20} />
            </div>
            <button className="p-2 rounded-full bg-green-700 bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200 relative">
              <Bell size={20} className="text-white" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <button className="p-2 rounded-full bg-green-700 bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200">
              <MessageCircle size={20} className="text-white" />
            </button>
            <button className="p-2 rounded-full bg-green-700 bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200">
              <User size={20} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } overflow-hidden bg-green-900 bg-opacity-70 backdrop-blur-md shadow-lg z-40`}
      >
        <div className="flex justify-between items-center p-4 mt-16">
          <h2 className={`text-xl font-bold text-white ${isSidebarOpen ? '' : 'hidden'}`}>
            Menu
          </h2>
          <button onClick={toggleSidebar} className="text-white hover:text-green-300 transition-colors duration-200">
            {isSidebarOpen ? <SquareChevronLeft size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center w-full p-4 transition-all duration-200 
                ${
                  activeTab === item.id
                    ? 'text-white bg-green-700 bg-opacity-50 shadow-lg transform scale-105'
                    : 'text-green-200 hover:bg-green-800 hover:bg-opacity-50 hover:text-white'
                }`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="transform transition-transform duration-200 hover:scale-110">{item.icon}</span>
              <span className={`ml-4 ${isSidebarOpen ? '' : 'hidden'}`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
        } mt-20 p-6`}
      >
        <main className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {navItems.find((item) => item.id === activeTab)?.label}
          </h2>
          <p className="text-lg text-green-100">
            This is the {navItems.find((item) => item.id === activeTab)?.label} page content.
            Add your specific dashboard components here for a more interactive experience.
          </p>
        </main>
      </div>
    </div>
  );
}

export default SideNavBar;