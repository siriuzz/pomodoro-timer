import React from 'react'

const FormButton = ({text,  ...rest}) => {
  return (
    <div className='mb-3'>
        <button className='bg-blue-200 text-blue-600 font-bold w-full rounded-lg p-3'>
            {text}
        </button>

    </div>
  )
}

export default FormButton;
