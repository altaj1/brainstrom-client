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
import SubmitPage from '../pages/User/SubmitPage'
import MyParticipatedContest from '../pages/User/MyParticipatedContest'
import ContestSubmittedPages from '../pages/Creator/ContestSubmittedPages'
import Profile from '../components/Profile/Profile'
import DeclareContest from '../pages/Creator/DeclareContest'
import MyWinningContest from '../pages/User/MyWinningContest'
import ErrorPage from '../pages/ErrorPage'
import AllContests from '../components/Home/AllContests/AllContests'
import LeaderBoard from '../pages/LeaderBoard'
import CreatorRoutes from './CreatorRoutes'
import AdminRoute from './AdminRoute'







export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
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
      {
        path: '/submitPage/:id',
        element: (
          <PrivateRoute>
          <SubmitPage></SubmitPage>
          </PrivateRoute>
        ),
      },
      {
        path: '/all-Contest',
        element: (
         <AllContests></AllContests>
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
            <LeaderBoard></LeaderBoard>
          </PrivateRoute>
        ),
      },
      {
        path: 'Add-Contest',
        element: (
          <PrivateRoute>
            <CreatorRoutes><AddContest></AddContest></CreatorRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: 'MyCreatedContest',
        element: (
          <PrivateRoute>
            <CreatorRoutes><MyCreatedContest></MyCreatedContest></CreatorRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
           <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'ManageContest',
        element: (
          <PrivateRoute>
            <AdminRoute>
            <ManageContest></ManageContest></AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'MyParticipatedContest',
        element: (
          <PrivateRoute>
            <MyParticipatedContest></MyParticipatedContest>
          </PrivateRoute>
        ),
      },
      {
        path: 'ContestSubmitted',
        element: (
          <PrivateRoute>
          <CreatorRoutes><ContestSubmittedPages></ContestSubmittedPages></CreatorRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
         <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: 'ContestSubmitted/DeclareContest/:id',
        element: (
          <PrivateRoute>
          <CreatorRoutes><DeclareContest></DeclareContest></CreatorRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: 'myWinningContest',
        element: (
          <PrivateRoute>
         <MyWinningContest></MyWinningContest>
          </PrivateRoute>
        ),
      },
    ],
  },
])
