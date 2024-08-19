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
  angels: [],
  reveals: '',
  size: '',
  jobType: '',
  glass: ''
}

const LeadSheet = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [focusedField, setFocusedField] = useState('')

  const countryCodes = useMemo(() => [
    { code: '+61', country: 'Australia' }
    // Add more country codes as needed
  ], [])

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
          [name]: checked
            ? [...prevState[name], value]
            : prevState[name].filter((v) => v !== value)
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

  const validateForm = useCallback(() => {
    const newErrors = {}
    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length === 0) {
        isValid = false
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is empty`
      } else if (typeof value === 'string' && !value.trim()) {
        isValid = false
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is empty`
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

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (validateForm()) {
      alert('Form submitted successfully!')
      handleReset()
    }
  }, [validateForm])

  const handleReset = useCallback(() => {
    setFormData(initialFormData)
    setErrors({})
    setFocusedField('')
  }, [])

  const printForm = useCallback(() => {
    window.print()
  }, [])

  const renderInput = useCallback((name, label, type = 'text') => (
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
        className={`w-full px-3 py-2 border rounded-md ${focusedField === name ? 'border-blue-500' : ''
        } ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
    </div>
  ), [formData, errors, focusedField, handleChange, handleFocus])

  const renderSelect = useCallback((name, label, options) => (
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
  ), [formData, errors, focusedField, handleChange, handleFocus])

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
              <label className="block mb-2">Angels:</label>
              <div className="flex">
                {['75//25', '25/12'].map((value) => (
                  <label key={value} className="mr-4">
                    <input
                      type="radio"
                      name="angels"
                      value={value}
                      checked={formData.angels.includes(value)}
                      onChange={handleChange}
                      onFocus={handleFocus}
                    />{' '}
                    {value}
                  </label>
                ))}
              </div>
              {errors.angels && <p className="text-red-500 text-sm">{errors.angels}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            {renderSelect('reveals', 'Reveals:', ['Meranti', 'PrimedPine'])}
            {renderSelect('size', 'Size:', ['110', '140'])}
            {renderSelect('jobType', 'Job type:', ['Insert', 'Full Take-out'])}
          </div>
          <div className="flex mb-4">
            {renderSelect('glass', 'Glass:', ['Float', 'ClearLam', 'TransLam', 'Other'])}
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
              onClick={printForm}
            >
              Print
            </button>
            <div className="flex gap-2">
              <button
                type="reset"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LeadSheet
