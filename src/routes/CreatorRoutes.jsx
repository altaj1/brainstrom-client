import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole"
import LoadingSpinner from "../components/Shared/LoadingSpinner";


const CreatorRoutes = ({ children }) => {
    const [role, isLoading] = useRole()

    if (isLoading) return <LoadingSpinner />
    if (role === 'ContestCreator') return children
    return <Navigate to='/dashboard' />

};

export default CreatorRoutes;