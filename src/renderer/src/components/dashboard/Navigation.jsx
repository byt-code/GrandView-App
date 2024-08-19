import React, { useCallback, memo } from 'react'
import NavItem from './NavItem'
import navItems from '../../constants/navItems'

const Navigation = memo(({ isSidebarOpen, activeTab, setActiveTab }) => {
  const handleSetActiveTab = useCallback((tabId) => {
    setActiveTab(tabId)
  }, [setActiveTab])

  return (
    <nav>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isSidebarOpen={isSidebarOpen}
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
        />
      ))}
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation
