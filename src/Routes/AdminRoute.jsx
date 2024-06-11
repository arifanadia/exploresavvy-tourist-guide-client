import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";


const AdminRoute = ({ children }) => {
    const [role] = useRole();

    if(role === 'admin'){
        return children
    }
    return <Navigate to="/dashboard"></Navigate>
};

export default AdminRoute;