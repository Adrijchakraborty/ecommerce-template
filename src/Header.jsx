import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between p-5'>
        <div><h1>Ecommerce</h1></div>
        <div className='flex gap-3'>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>Cart</Link>
        </div>
    </div>
  )
}

export default Header