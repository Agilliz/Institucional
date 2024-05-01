import React from 'react'

function SelectBox({options, value, onChange, label}) {
  return (
    
<form>
  <label for="countries" class="block mb-2 text-sm font-medium text-agilzorange"><strong>{label}</strong></label>
  <select onChange={onChange} value={value} id="countries" class="w-full bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-agilzorange focus:border-agilzorange outline-none block p-2.5">
    {options.map(option => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ))}
  </select>
</form>

  )
}

export default SelectBox