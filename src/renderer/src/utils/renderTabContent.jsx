import React from 'react'
import LeadSheet from '../components/tabs/LeadSheet'
import QuoteSheet from '../components/tabs/QuoteSheet'
import navItems from '../constants/navItems'

const renderTabContent = (activeTab) => {
  switch (activeTab) {
    case 'lead-sheet':
      return <LeadSheet />
      case 'quote-sheet':
      return <QuoteSheet />
    default:
      return (
        <div className="text-center font-mono text-orange-600">
         <p className="text-lg">
            This is the {navItems.find((item) => item.id === activeTab)?.label} page content.
           
          </p>
        </div>
      )
  }
}

export default renderTabContent
