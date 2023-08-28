import { Route } from "react-router-dom";
// import Dashboard from "./DashboardV6";
import Login from "./Login";

function ProtectedRoute(props) {
    var isUserLoggedIn=window.sessionStorage.getItem("isUserLoggedIn");
    // var isUserLoggedIn=false
    if(isUserLoggedIn)
    {
        return <Route exact path={props.path} component={props.component}></Route>
    }else{
        return <Login ></Login>

    }

    
    
}

export default ProtectedRoute;