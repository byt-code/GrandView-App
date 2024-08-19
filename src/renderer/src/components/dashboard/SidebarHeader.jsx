import React, { memo, useCallback } from 'react'
import { Menu, SquareChevronLeft } from 'lucide-react'

const SidebarHeader = memo(({ isSidebarOpen, toggleSidebar }) => {
  const handleToggle = useCallback(() => {
    toggleSidebar()
  }, [toggleSidebar])

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className={`text-xl text-center font-bold ${isSidebarOpen ? '' : 'hidden'}`}>Menu</h1>
      <button onClick={handleToggle} className="text-slate-700">
        {isSidebarOpen ? <SquareChevronLeft size={24} /> : <Menu size={24} />}
      </button>
    </div>
  )
})

SidebarHeader.displayName = 'SidebarHeader'

export default SidebarHeader
