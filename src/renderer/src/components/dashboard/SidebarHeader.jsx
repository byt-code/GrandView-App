import React from 'react'
import { Menu, SquareChevronLeft } from 'lucide-react'

const SidebarHeader = ({ isSidebarOpen, toggleSidebar }) => (
  <div className="flex justify-between items-center p-4">
    <h1 className={`text-xl text-center font-bold ${isSidebarOpen ? '' : 'hidden'}`}>Menu</h1>
    <button onClick={toggleSidebar} className="text-slate-700">
      {isSidebarOpen ? <SquareChevronLeft size={24} /> : <Menu size={24} />}
    </button>
  </div>
)

export default SidebarHeader
