import { Outlet } from 'react-router-dom'

// import Footer from '../components/Shared/Footer/Footer'
import NavBar from '../components/Shared/NavBar/NavBar'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import Footer from '../components/Footer/Footer'
const Main = () => {
    // const [darkMode, setDarkMode] = useState(false);
    const {darkMode, setDarkMode} = useAuth()
  return (
    <div className={`${darkMode ? "bg-[#061f31]  h-full text-white" : ""} dark:bg-[#0F172A] font-serif text-opacity-85`} >
      <NavBar />

      <div className='pt-20 min-h-[calc(100vh-30px)]'>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
