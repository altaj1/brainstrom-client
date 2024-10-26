import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from '../components/Shared/LoadingSpinner'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  console.log(location)

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute
