import React, { useMemo } from 'react'
import navItems from '../../constants/navItems'
import renderTabContent from '../../utils/renderTabContent'

const MainContent = React.memo(({ isSidebarOpen, activeTab }) => {
  const activeTabLabel = useMemo(() => {
    return navItems.find((item) => item.id === activeTab)?.label
  }, [activeTab])

  const contentClass = useMemo(() => {
    return `flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-16'}`
  }, [isSidebarOpen])

  return (
    <div className={contentClass}>
      <main className="p-6  max-h-screen overflow-auto">
        <h2 className="rounded-md p-2 text-center text-3xl font-bold mb-4">{activeTabLabel}</h2>
        {renderTabContent(activeTab)}
      </main>
    </div>
  )
})

MainContent.displayName = 'MainContent'

export default MainContent
