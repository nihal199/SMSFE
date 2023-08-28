import {Route} from 'react-router-dom';
import ImagePage from './Landing';
function ProtectedRoute(props)
{
    var isAdminLoggedIn = 
    window.sessionStorage.getItem("isAdminLoggedIn")

    var role = 
    window.sessionStorage.getItem("role")
 
    if(isAdminLoggedIn != null && 
        isAdminLoggedIn!='undefined' && isAdminLoggedIn=="true")
    {
        if(role != null && 
            role!='undefined' && role=="ADMIN")
            {
                return <Route exact path={props.path} 
                component={props.component}/>;
            }
        
        
    }
    else
    {
        return <ImagePage></ImagePage>
    }
}

export default ProtectedRoute