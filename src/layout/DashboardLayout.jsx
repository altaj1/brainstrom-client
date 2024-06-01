import { Outlet } from 'react-router-dom'
// import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex'>
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Outlet --> Dynamic content */}
      <div className='flex-1 md:ml-64'>
        <div className='p-5'>
            thia is dash bord
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
