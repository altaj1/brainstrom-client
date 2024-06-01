import { Outlet } from 'react-router-dom'

// import Footer from '../components/Shared/Footer/Footer'
import NavBar from '../components/Shared/NavBar/NavBar'
import { useState } from 'react'
const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <NavBar darkMode = {darkMode} setDarkMode={setDarkMode}/>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Main
