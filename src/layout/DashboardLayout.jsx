import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import useAuth from '../hooks/useAuth'

const DashboardLayout = () => {
  const {darkMode} = useAuth()
  return (
    <div className={`${darkMode ? "bg-[#061f31]  h-full text-white" : ""} dark:bg-[#0F172A] `}>
        <div className='relative min-h-screen md:flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet --> Dynamic content */}
      <div className='flex-1 md:ml-64'>
        <div className='p-5'>
            thia is dash bord
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default DashboardLayout
