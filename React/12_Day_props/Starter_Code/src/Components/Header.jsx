import React from 'react'

const Header = ({YourName}) => {
  return (
    <div className='w-full h-[10vh] bg-black text-white p-2 text-xl'>
        {YourName}
    </div>
  )
}

export default Header