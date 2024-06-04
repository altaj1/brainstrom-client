import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Login from '../pages/Login'
import DashboardLayout from '../layout/DashboardLayout'
import PrivateRoute from './PrivateRoute'
import SignUp from '../pages/SingUp'
import AddContest from '../pages/addContest/AddContest'
import MyCreatedContest from '../pages/MyCreatedContest/MyCreatedContest'
import ManageUsers from '../pages/Admin/ManageUsers'
import { ManageContest } from '../pages/Admin/ManageContest'
import Home from '../components/Home/Home'
import ContestDetails from '../components/Details/ContestDetails'




export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/contestDetails/:id',
        element: (
          <PrivateRoute>
           <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            {/* <Statistics /> */}
          </PrivateRoute>
        ),
      },
      {
        path: 'Add-Contest',
        element: (
          <PrivateRoute>
            <AddContest></AddContest>
          </PrivateRoute>
        ),
      },
      {
        path: 'MyCreatedContest',
        element: (
          <PrivateRoute>
            <MyCreatedContest></MyCreatedContest>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
           <ManageUsers></ManageUsers>
          </PrivateRoute>
        ),
      },
      {
        path: 'ManageContest',
        element: (
          <PrivateRoute>
            <ManageContest></ManageContest>
          </PrivateRoute>
        ),
      },
    //   {
    //     path: 'manage-bookings',
    //     element: (
    //       <PrivateRoute>
    //         <HostRoute>
    //           <ManageBookings />
    //         </HostRoute>
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: 'profile',
    //     element: (
    //       <PrivateRoute>
    //         <Profile />
    //       </PrivateRoute>
    //     ),
    //   },
    ],
  },
])
