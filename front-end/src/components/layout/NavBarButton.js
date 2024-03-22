import Link from 'next/link';
import React from 'react'

const NavBarButton = ({text, href, ...rest}) => {
  return (
    <div className='m-2'>
      <Link href={href}>
        <button className='font-bold w-full rounded-lg  p-3 border-2 border-blue-500'>
            {text}
        </button>
      </Link>
    </div>
  )
}

export default NavBarButton;
