import { use } from "react";
import { AuthContext } from "../firebase/AuthContext";
import { Navigate, useLocation} from "react-router";
import Loading from "./Loading";


const PrivateRoute = ({children}) => {
    const{user,loading}=use(AuthContext)
    const Location=useLocation()
   
    
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    else{
        return <Navigate state={Location.pathname} to='/signIn'></Navigate>
    }
}

export default PrivateRoute;