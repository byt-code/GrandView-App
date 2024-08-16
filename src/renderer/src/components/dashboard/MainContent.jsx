import React from 'react'
import navItems from '../../constants/navItems'
import renderTabContent from '../../utils/renderTabContent'

const MainContent = ({ isSidebarOpen, activeTab }) => (
  <div
    className={`flex-1 transition-all duration-300 ease-in-out ${
      isSidebarOpen ? 'ml-64' : 'ml-16'
    }`}
  >
    <main className="p-6 bg-slate-200 min-h-screen">
      <h2 className="rounded-md p-2 text-center text-3xl font-bold mb-4">
        {navItems.find((item) => item.id === activeTab)?.label}
      </h2>
      {renderTabContent(activeTab)}
    </main>
  </div>
)

export default MainContent
