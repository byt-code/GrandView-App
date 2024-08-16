import React from 'react'
import LeadSheet from '../components/tabs/LeadSheet'

const renderTabContent = (activeTab) => {
  switch (activeTab) {
    case 'lead-sheet':
      return <LeadSheet />
    default:
      return (
        <div className="text-center font-mono text-orange-600">
          Build and Link the tab first
        </div>
      )
  }
}

export default renderTabContent
