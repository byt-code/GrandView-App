import React, { useState, useCallback, useMemo } from 'react'

// Helper functions for validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const isValidPhone = (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ''))

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  countryCode: '+1',
  suburbs: '',
  postcode: '',
  appointmentSchedule: '',
  source: '',
  colour: '',
  angles: [],
  reveals: '',
  size: '',
  jobType: '',
  glass: ''
}

const LeadSheet = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [focusedField, setFocusedField] = useState('')

  const countryCodes = useMemo(
    () => [
      { code: '+61', country: 'Australia' }
      // Add more country codes as needed
    ],
    []
  )

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }))

    setFormData((prevState) => {
      if (type === 'checkbox') {
        return {
          ...prevState,
          [name]: checked ? [...prevState[name], value] : prevState[name].filter((v) => v !== value)
        }
      }
      return {
        ...prevState,
        [name]: value
      }
    })
  }, [])

  const handleFocus = useCallback((e) => {
    setFocusedField(e.target.name)
  }, [])

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }))
    } else if (name === 'email' && !isValidEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address'
      }))
    } else if (name === 'mobile' && !isValidPhone(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: 'Please enter a valid phone number'
      }))
    }
  }, [])

  const validateForm = useCallback(() => {
    const newErrors = {}
    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length === 0) {
        isValid = false
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
      } else if (typeof value === 'string' && !value.trim()) {
        isValid = false
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
      }
    })

    if (formData.email && !isValidEmail(formData.email)) {
      isValid = false
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.mobile && !isValidPhone(formData.mobile)) {
      isValid = false
      newErrors.mobile = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return isValid
  }, [formData])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (validateForm()) {
        alert('Form submitted successfully!')
        handleReset()
      }
    },
    [validateForm]
  )

  const handleReset = useCallback(() => {
    setFormData(initialFormData)
    setErrors({})
    setFocusedField('')
  }, [])

  const printForm = useCallback(() => {
    window.print()
  }, [])

  const renderInput = useCallback(
    (name, label, type = 'text') => (
      <div className="flex-1 mr-4">
        <label htmlFor={name} className="block mb-2">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            focusedField === name ? 'border-blue-500' : ''
          } ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
      </div>
    ),
    [formData, errors, focusedField, handleChange, handleFocus, handleBlur]
  )

  const renderSelect = useCallback(
    (name, label, options) => (
      <div className="flex-1 mr-4">
        <label htmlFor={name} className="block mb-2">
          {label}
        </label>
        <select
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 border rounded-md ${
            focusedField === name ? 'border-blue-500' : ''
          } ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
      </div>
    ),
    [formData, errors, focusedField, handleChange, handleFocus, handleBlur]
  )

  return (
    <div className="main-content flex-grow p-5">
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <form id="leadForm" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            {renderInput('firstName', 'First Name')}
            {renderInput('lastName', 'Last Name')}
          </div>
          <div className="flex mb-4">
            {renderInput('email', 'Email', 'email')}
            <div className="flex-1">
              <label htmlFor="mobile" className="block mb-2">
                Phone/Mobile
              </label>
              <div className="flex">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`mr-2 px-3 py-2 border rounded-md ${
                    focusedField === 'countryCode' ? 'border-blue-500' : ''
                  } ${errors.countryCode ? 'border-red-500' : 'border-gray-300'}`}
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>
                      {country} ({code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`flex-1 px-3 py-2 border rounded-md ${
                    focusedField === 'mobile' ? 'border-blue-500' : ''
                  } ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            {renderInput('suburbs', 'Suburbs')}
            {renderInput('postcode', 'Postcode')}
          </div>
          <div className="flex mb-4">
            {renderInput('appointmentSchedule', 'Appointment Schedule', 'datetime-local')}
            {renderInput('source', 'Source')}
          </div>
          <div className="flex mb-4">
            {renderInput('colour', 'Colour')}
            <div className="flex-1">
              <label className="block mb-2">Angles</label>
              <div className="flex flex-wrap">
                {['75/25', '50/25', '25/12'].map((angel) => (
                  <label key={angel} className="mr-4">
                    <input
                      type="radio"
                      name="angles"
                      value={angel}
                      checked={formData.angles.includes(angel)}
                      onChange={handleChange}
                    />
                    <span className="ml-1">{angel}</span>
                  </label>
                ))}
              </div>
              {errors.angles && <p className="text-red-500 text-sm">{errors.angles}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            {renderInput('reveals', 'Reveals')}
            {renderInput('size', 'Size')}
          </div>
          <div className="flex mb-4">
            {renderSelect('jobType', 'Job Type', ['Job1', 'Job2', 'Job3'])}
            {renderSelect('glass', 'Glass', ['Glass1', 'Glass2', 'Glass3'])}
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={printForm}
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
            >
              Print
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LeadSheet
