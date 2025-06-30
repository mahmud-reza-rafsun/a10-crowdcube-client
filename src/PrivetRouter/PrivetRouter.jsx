import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(user){
        return <Navigate state={{from: location?.pathname}} to="/sign-in"/>
    }
    if(loading){
        return <div className="flex justify-center items-center min-h-[60vh]">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    return children
};

export default PrivetRouter;