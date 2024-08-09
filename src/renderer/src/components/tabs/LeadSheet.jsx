import React from 'react'

function LeadSheet() {
  return (
    <>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Lead Management</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Customer Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-gray-700"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Contact Number</label>
            <input
              type="tel"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-gray-700"
              placeholder="+1 234 567 890"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Lead Source</label>
            <select className="w-full p-2 rounded bg-white bg-opacity-20 text-gray-700">
              <option>Website</option>
              <option>Referral</option>
              <option>Advertisement</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Customer Type</label>
            <select className="w-full p-2 rounded bg-white bg-opacity-20 text-gray-700">
              <option>General (Refit)</option>
              <option>Cash on Delivery (COD)</option>
              <option>Trade</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
          >
            Save Lead
          </button>
        </form>
      </div>
    </>
  )
}

export default LeadSheet
