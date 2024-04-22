import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from '../context/Context';

const Header = () => {

  const { filterItems,count } = useContext(GlobalContext);

  const handleChange = (e) => {
    filterItems(e.target.value)
  }
  return (
    <div className='flex justify-between p-5 sticky top-0 z-50 bg-slate-300'>
      <Link to={'/'}>
        <div><h1>Ecommerce</h1></div>
      </Link>

      <div className='flex items-center gap-2'><input onChange={handleChange} type="text" placeholder='search' className='px-3 py-2 border rounded-lg w-20 sm:w-full' /><FaSearch /></div>
      <div className='flex gap-3'>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>
            Cart
            <div className={`badge badge-secondary ${!count && "hidden"}`}>{count}</div>
        </Link>
      </div>
    </div>
  )
}

export default Header