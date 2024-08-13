import React, { useState } from 'react'
import SideNavBar from './SideNavBar'
import Header from './Header'

function DashBoard() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header />
      <SideNavBar />
    </>
  )
}

export default DashBoard
