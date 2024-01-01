import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const navigations = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'ABOUT',
    path: '/about'
  },
  {
    name: 'CONTACT US',
    path: '/contact'
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Grace</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
          
        </nav>
        <HiOutlineUser /> 
        <HiBars3 />
        <HiOutlineShoppingBag />
        <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header