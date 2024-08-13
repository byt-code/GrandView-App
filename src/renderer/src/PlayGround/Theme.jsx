import React from 'react'

function Theme() {
  return (
    <>
    
    <div class="bg-primary-500 text-neutral-50">
  This is a primary background with light text
</div>

<button class="bg-accent-600 text-white hover:bg-accent-700">
  This is an accent button
</button>

<p class="text-neutral-700">
  This is some neutral body text
</p>
<div class="bg-neutral-900 text-white">
  <div class="bg-blue-500">Chart 1</div>
  <div class="bg-green-500">Chart 2</div>
</div>
<div class="bg-gray-100 text-gray-800">
  <div class="bg-blue-200">Widget 1</div>
  <div class="bg-green-200">Widget 2</div>
</div>
<div class="bg-gradient-to-r from-blue-400 to-indigo-500 text-white">d Header
</div>
<div class="bg-blue-100">
  <div class="bg-blue-700 text-white">Main Content</div>
  <div class="bg-yellow-500">Accent Element</div>
</div>
<div class="bg-green-50 text-green-900">
  <div class="bg-green-700 text-white">Forest Chart</div>
  <div class="bg-blue-500 text-white">Water Usage</div>
</div>
<div class="p-8 space-y-6">
  
</div>
<div class="bg-gray-100 dark:bg-gray-900 min-h-screen">
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">Cool Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
        <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Widget 1</h2>
       
      </div>
      <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-md p-6 text-white">
        <h2 class="text-xl font-semibold mb-4">Widget 2</h2>
        
      </div>
      
    </div>
  </div>
</div>


    
    </>
  )
}

export default Theme