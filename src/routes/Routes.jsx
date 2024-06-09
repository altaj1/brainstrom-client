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
          <ContestSubmittedPages></ContestSubmittedPages>
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
          <DeclareContest></DeclareContest>
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
