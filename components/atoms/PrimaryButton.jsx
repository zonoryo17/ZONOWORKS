import React from 'react';


const PrimaryButton = (props) => {
  return (
    
    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      {props.value}
    </button>
  )
}

export default PrimaryButton