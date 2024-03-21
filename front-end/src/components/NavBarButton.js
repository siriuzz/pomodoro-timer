import React from 'react'

export const NavBarButton = ({text,  ...rest}) => {
  return (
    <div className='m-2'>
        <button className='font-bold w-full rounded-lg  p-3 border-2 border-blue-500'>
            {text}
        </button>

    </div>
  )
}
