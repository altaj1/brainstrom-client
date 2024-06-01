import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Login from '../pages/Login'
import DashboardLayout from '../layout/DashboardLayout'
import PrivateRoute from './PrivateRoute'
import SignUp from '../pages/SingUp'




export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
    //   {
    //     path: '/',
    //     element: <Home />,
    //   },
    //   {
    //     path: '/room/:id',
    //     element: (
    //       <PrivateRoute>
    //         <RoomDetails />
    //       </PrivateRoute>
    //     ),
    //   },
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
    // children: [
    //   {
    //     index: true,
    //     element: (
    //       <PrivateRoute>
    //         <Statistics />
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: 'add-room',
    //     element: (
    //       <PrivateRoute>
    //         <HostRoute>
    //           <AddRoom />
    //         </HostRoute>
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: 'my-listings',
    //     element: (
    //       <PrivateRoute>
    //         <HostRoute>
    //           <MyListings />
    //         </HostRoute>
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: 'manage-users',
    //     element: (
    //       <PrivateRoute>
    //         <AdminRoute>
    //           <ManageUsers />
    //         </AdminRoute>
    //       </PrivateRoute>
    //     ),
    //   },
    //   {
    //     path: 'my-bookings',
    //     element: (
    //       <PrivateRoute>
    //         <MyBookings />
    //       </PrivateRoute>
    //     ),
    //   },
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
    // ],
  },
])
