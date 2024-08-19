import React, { useState } from 'react'


const QuoteSheet = () => {
  // State for form inputs and validation errors
  const [formData, setFormData] = useState({
    clientName: '',
    date: '',
    email: '',
    mobile: '',
    address: '',
    order: '',
    deliveryDate: '',
    source: ''
  })
  const [errors, setErrors] = useState({})

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    // Check required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        isValid = false
        newErrors[key] = 'This field is required'
      }
    })

    // Validate email
    if (formData.email && !isValidEmail(formData.email)) {
      isValid = false
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate phone
    if (formData.mobile && !isValidPhone(formData.mobile)) {
      isValid = false
      newErrors.mobile = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      alert('Quote submitted successfully!')
      setFormData({
        clientName: '',
        date: '',
        email: '',
        mobile: '',
        address: '',
        order: '',
        deliveryDate: '',
        source: ''
      })
    }
  }

  const printForm = () => {
    window.print()
  }

  // Helper functions for validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isValidPhone = (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ''))

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-[95%] mx-auto">
      <form id="quoteForm" onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.clientName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.clientName && <p className="mt-1 text-red-500 text-sm">{errors.clientName}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.mobile && <p className="mt-1 text-red-500 text-sm">{errors.mobile}</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.address && <p className="mt-1 text-red-500 text-sm">{errors.address}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="order" className="block text-sm font-medium text-gray-700">
              Order
            </label>
            <input
              type="text"
              id="order"
              name="order"
              value={formData.order}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.order ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.order && <p className="mt-1 text-red-500 text-sm">{errors.order}</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
              Delivery Date
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.deliveryDate && (
              <p className="mt-1 text-red-500 text-sm">{errors.deliveryDate}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="source" className="block text-sm font-medium text-gray-700">
              Source
            </label>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.source ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.source && <p className="mt-1 text-red-500 text-sm">{errors.source}</p>}
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600"
            onClick={printForm}
          >
            Print
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default QuoteSheet