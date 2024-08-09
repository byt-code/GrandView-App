import React, { useState } from 'react'
import {
  Sun,
  Moon,
  Menu,
  X,
  Bell,
  User,
  Settings as Settingsicon,
  Home,
  FileText,
  FileSpreadsheet,
  Package,
  Truck,
  DollarSign,
  BarChart2
} from 'lucide-react'

const Sidebar = ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => (
  <div
    className={`fixed left-0 top-0 h-full bg-blue-100 dark:bg-blue-900 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} overflow-hidden`}
  >
    <div className="flex justify-between items-center p-4">
      <h1 className={`text-xl font-bold ${isOpen ? '' : 'hidden'}`}>GrandView</h1>
      <button onClick={toggleSidebar} className="text-gray-600 dark:text-gray-300">
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
          className={`flex items-center w-full p-4 hover:bg-blue-200 dark:hover:bg-blue-800 ${activeTab === item.id ? 'bg-blue-200 dark:bg-blue-800' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.icon}
          <span className={`ml-4 ${isOpen ? '' : 'hidden'}`}>{item.label}</span>
        </button>
      ))}
    </nav>
  </div>
)

const LeadSheet = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Lead Sheet</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <input
        type="tel"
        placeholder="Mobile"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <input
        type="text"
        placeholder="Suburbs"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="flex justify-between">
        <select className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
          <option value="">Select Lead Source</option>
          <option value="website">Website</option>
          <option value="referral">Referral</option>
          <option value="advertisement">Advertisement</option>
        </select>
        <select className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
          <option value="">Select Customer Type</option>
          <option value="general">General (Refit)</option>
          <option value="cod">Cash on Delivery (COD)</option>
          <option value="trade">Trade</option>
        </select>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded">Print</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </form>
  </div>
)

const QuoteSheet = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Quote Sheet</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Customer Name"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <input
        type="text"
        placeholder="Job Description"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          placeholder="Quote Date"
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="text"
          placeholder="Quote Number"
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <textarea
        placeholder="Items and Pricing"
        rows="4"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      ></textarea>
      <input
        type="number"
        placeholder="Total Amount"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded">Save Draft</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Send Quote</button>
      </div>
    </form>
  </div>
)

const Inventory = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search by code or description"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2 text-left">Code</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Quantity</th>
            <th className="p-2 text-left">Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">GL001</td>
            <td className="p-2">Clear Glass 4mm</td>
            <td className="p-2">500</td>
            <td className="p-2">m²</td>
          </tr>
          <tr>
            <td className="p-2">AL001</td>
            <td className="p-2">Aluminum Frame</td>
            <td className="p-2">200</td>
            <td className="p-2">m</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Add New Item</button>
      </div>
    </div>
  </div>
)

const JobOrders = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Job Orders</h2>
    <div className="space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search by job number or address"
          className="flex-grow p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2 text-left">Job Number</th>
            <th className="p-2 text-left">Customer</th>
            <th className="p-2 text-left">Address</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">JO001</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">123 Main St, Cityville</td>
            <td className="p-2">In Progress</td>
          </tr>
          <tr>
            <td className="p-2">JO002</td>
            <td className="p-2">Jane Smith</td>
            <td className="p-2">456 Oak Ave, Townsburg</td>
            <td className="p-2">Completed</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Create New Job Order</button>
      </div>
    </div>
  </div>
)

const Billing = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Billing</h2>
    <div className="space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search by invoice number or customer"
          className="flex-grow p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2 text-left">Invoice Number</th>
            <th className="p-2 text-left">Customer</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">INV001</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">$1,500.00</td>
            <td className="p-2">Paid</td>
          </tr>
          <tr>
            <td className="p-2">INV002</td>
            <td className="p-2">Jane Smith</td>
            <td className="p-2">$2,750.00</td>
            <td className="p-2">Pending</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Create New Invoice</button>
      </div>
    </div>
  </div>
)

const Reports = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Reports</h2>
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Sales Overview</h3>
          <p>Total Sales: $50,000</p>
          <p>Number of Orders: 25</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Inventory Status</h3>
          <p>Low Stock Items: 5</p>
          <p>Out of Stock Items: 2</p>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded">Generate Report</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Export Data</button>
      </div>
    </div>
  </div>
)

const DashboardHome = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Total Sales</h3>
        <p className="text-3xl font-bold">$125,000</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Open Jobs</h3>
        <p className="text-3xl font-bold">15</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Pending Quotes</h3>
        <p className="text-3xl font-bold">8</p>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-2">
        <li>New lead: John Doe (Website)</li>
        <li>Quote sent: Jane Smith - $2,500</li>
        <li>Job completed: Mike Johnson - JO003</li>
        <li>Payment received: Sarah Brown - $1,800</li>
        <li>New inventory item added: Tinted Glass 6mm</li>
      </ul>
    </div>
  </div>
)

const Notifications = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Notifications</h2>
    <ul className="space-y-4">
      <li className="flex items-center justify-between">
        <div>
          <p className="font-semibold">New quote request</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">From: John Doe</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
      </li>
      <li className="flex items-center justify-between">
        <div>
          <p className="font-semibold">Low inventory alert</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Item: Clear Glass 4mm</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">1 day ago</span>
      </li>
      <li className="flex items-center justify-between">
        <div>
          <p className="font-semibold">Payment received</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">From: Jane Smith - $2,500</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">3 days ago</span>
      </li>
    </ul>
  </div>
)

const Profile = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">User Profile</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="office">Office</option>
        <option value="factory">Factory/Assembly</option>
      </select>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded">Change Password</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Update Profile</button>
      </div>
    </form>
  </div>
)

const Settings = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-2">Company Name</label>
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block mb-2">Business Address</label>
        <textarea
          placeholder="Business Address"
          rows="3"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        ></textarea>
      </div>
      <div>
        <label className="block mb-2">Contact Email</label>
        <input
          type="email"
          placeholder="Contact Email"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block mb-2">Contact Phone</label>
        <input
          type="tel"
          placeholder="Contact Phone"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block mb-2">Auto-save Interval (seconds)</label>
        <input
          type="number"
          placeholder="15"
          min="5"
          max="60"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Save Settings</button>
      </div>
    </form>
  </div>
)

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />
      case 'lead-sheet':
        return <LeadSheet />
      case 'quote-sheet':
        return <QuoteSheet />
      case 'inventory':
        return <Inventory />
      case 'job-orders':
        return <JobOrders />
      case 'billing':
        return <Billing />
      case 'reports':
        return <Reports />
      case 'notifications':
        return <Notifications />
      case 'profile':
        return <Profile />
      case 'settings':
        return <Settings />
      default:
        return <DashboardHome />
    }
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}
        >
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">GrandView Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <Bell size={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <User size={24} />
              </button>
            </div>
          </header>
          <main className="p-6">{renderTabContent()}</main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
