import React from 'react'
import error from '../../assets/error.png'
function NotFound() {
  return (
    <>
      <div className='container mx-auto'>
        <img src={error} alt="not found img" className='w-100' />
      </div>
    </>
  )
}

export default NotFound
