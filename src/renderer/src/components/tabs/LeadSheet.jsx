import React, { useState } from 'react'

// Helper functions for validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const isValidPhone = (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ''))

const LeadSheet = () => {
  // State for form data and errors
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    suburbs: '',
    postcode: '',
    appointmentSchedule: '',
    source: '',
    colour: '',
    angels: [],
    reveals: '',
    size: '',
    jobType: '',
    glass: ''
  })
  const [errors, setErrors] = useState({})

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked ? [...prevState[name], value] : prevState[name].filter((v) => v !== value)
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    // Check required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim() && key !== 'angels') {
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

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      alert('Form submitted successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        suburbs: '',
        postcode: '',
        appointmentSchedule: '',
        source: '',
        colour: '',
        angels: [],
        reveals: '',
        size: '',
        jobType: '',
        glass: ''
      })
    }
  }

  // Print form
  const printForm = () => {
    window.print()
  }

  return (
    <div className="main-content flex-grow p-5">
      <div className="bg-white bg-opacity-0  p-6 rounded-lg shadow-lg">
        <form id="leadForm" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <label htmlFor="firstName" className="block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="mobile" className="block mb-2">
                Phone/Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <label htmlFor="suburbs" className="block mb-2">
                Suburbs
              </label>
              <input
                type="text"
                id="suburbs"
                name="suburbs"
                value={formData.suburbs}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.suburbs ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.suburbs && <p className="text-red-500 text-sm">{errors.suburbs}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="postcode" className="block mb-2">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.postcode ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.postcode && <p className="text-red-500 text-sm">{errors.postcode}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <label htmlFor="appointmentSchedule" className="block mb-2">
                Appointment Schedule
              </label>
              <input
                type="text"
                id="appointmentSchedule"
                name="appointmentSchedule"
                value={formData.appointmentSchedule}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.appointmentSchedule ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.appointmentSchedule && (
                <p className="text-red-500 text-sm">{errors.appointmentSchedule}</p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="source" className="block mb-2">
                Source
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.source ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.source && <p className="text-red-500 text-sm">{errors.source}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <label htmlFor="colour" className="block mb-2">
                Colour
              </label>
              <input
                type="text"
                id="colour"
                name="colour"
                value={formData.colour}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.colour ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.colour && <p className="text-red-500 text-sm">{errors.colour}</p>}
            </div>
            <div className="flex-1">
              <label className="block mb-2">Angels:</label>
              <div className="flex">
                {['75/25', '50/25', '25/12'].map((value) => (
                  <label key={value} className="mr-4">
                    <input
                      type="radio"
                      name="angels"
                      value={value}
                      checked={formData.angels.includes(value)}
                      onChange={handleChange}
                    />{' '}
                    {value}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-4">
              <label htmlFor="reveals" className="block mb-2">
                Reveals:
              </label>
              <select
                id="reveals"
                name="reveals"
                value={formData.reveals}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.reveals ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select an option</option>
                <option value="Meranti">Meranti</option>
                <option value="PrimedPine">PrimedPine</option>
              </select>
              {errors.reveals && <p className="text-red-500 text-sm">{errors.reveals}</p>}
            </div>
            <div className="flex-1 mr-4">
              <label htmlFor="size" className="block mb-2">
                Size:
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.size ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select an option</option>
                <option value="110">110</option>
                <option value="140">140</option>
              </select>
              {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="jobType" className="block mb-2">
                Job type:
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.jobType ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select an option</option>
                <option value="Insert">Insert</option>
                <option value="Full Take-out">Full Take-out</option>
              </select>
              {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1">
              <label htmlFor="glass" className="block mb-2">
                Glass:
              </label>
              <select
                id="glass"
                name="glass"
                value={formData.glass}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.glass ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select an option</option>
                <option value="Float">Float</option>
                <option value="ClearLam">ClearLam</option>
                <option value="TransLam">TransLam</option>
                <option value="Other">Other</option>
              </select>
              {errors.glass && <p className="text-red-500 text-sm">{errors.glass}</p>}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
              onClick={printForm}
            >
              Print
            </button>
            <button
              type="submit"
              className=" bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LeadSheet