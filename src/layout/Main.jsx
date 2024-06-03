import { Outlet } from 'react-router-dom'

// import Footer from '../components/Shared/Footer/Footer'
import NavBar from '../components/Shared/NavBar/NavBar'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
const Main = () => {
    // const [darkMode, setDarkMode] = useState(false);
    const {darkMode, setDarkMode} = useAuth()
  return (
    <div className={`${darkMode ? "bg-[#061f31]  h-full text-white" : ""} dark:bg-[#0F172A] `} >
      <NavBar />

      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Main
