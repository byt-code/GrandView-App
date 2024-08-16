import React from 'react'
import NavItem from './NavItem'
import navItems from '../../constants/navItems'

const Navigation = ({ isSidebarOpen, activeTab, setActiveTab }) => (
  <nav>
    {navItems.map((item) => (
      <NavItem
        key={item.id}
        item={item}
        isSidebarOpen={isSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    ))}
  </nav>
)

export default Navigation
