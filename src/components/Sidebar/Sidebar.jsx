
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import MenuItem from './Menu/Menuitem'

import { BsGraphUp } from 'react-icons/bs'
import { FcHome, FcSettings } from 'react-icons/fc'
import { GrLogout } from 'react-icons/gr'
import UserMenu from './Menu/UserMenu'
import AdminMenu from './Menu/AdminMenu'
import CreatorMenu from './Menu/CreatorMenu'

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [toggle, setToggle] = useState(true)
//   const [role, isLoading] = useRole()
     const role = 'creatorMenu'
//   console.log(role, isLoading)
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
            <div className="flex items-center justify-center">
          <Link to='/'><img
          
            className=" lg:h-16 md:h-16 h-11 pt-2 "
            src="https://i.ibb.co/FgwgMQV/logo-removebg-preview.png"
            alt=""
          /></Link>
          <h1 className="text-2xl font-bold lg:block hidden inline-block  text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">BrainStrom</h1>
        </div>
              
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem
                label='Statistics'
                address='/dashboard'
                icon={BsGraphUp}
              />
              {role === 'user' && <UserMenu/>}

              
              {role === 'creatorMenu' && <CreatorMenu></CreatorMenu>}
              
              {role === 'admin' && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            label='Profile'
            address='/dashboard/profile'
            icon={FcSettings}
          />
          <MenuItem
            label='Home'
            address='/'
            icon={FcHome}
          />

          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
