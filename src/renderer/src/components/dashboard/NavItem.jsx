import React from 'react'

const NavItem = ({ item, isSidebarOpen, activeTab, setActiveTab }) => (
  <button
    className={`flex mb-2 items-center w-full p-4 rounded-lg cursor hover:transition-all duration-300 ease-in-out hover:shadow-custom-hover hover:border-inner-white
      ${
        activeTab === item.id
          ? 'text-accent-400 shadow-custom-hover bg-primary-900 bg-opacity-90 backdrop-blur-md  rounded-lg'
          : ''
      }`}
    onClick={() => setActiveTab(item.id)}
  >
    <span>{React.createElement(item.icon, { size: 24 })}</span>
    <span className={`ml-4 ${isSidebarOpen ? '' : 'hidden'}`}>{item.label}</span>
  </button>
)

export default NavItem
