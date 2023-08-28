//import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import employeeService from '../../services/employee.service';

const AdminSignin = () => {

     var navigate=useNavigate();
 
    const [admin, setAdmin] =   
    useState({email: "", password: ""});
    const [invalidCredentials, setInvalidCredentials] = useState(false);

  
  const login=(e)=>{
    e.preventDefault();
    console.log("inlogin function")
   
    employeeService.adminLogin(admin)
    .then((response)=>{
        window.sessionStorage.setItem("adminId",response.data.adminId)
         console.log(response.data)
        console.log("Loginsuccessfully")
        navigate("/AdminD");
       
    })
    .catch((error) => {
        console.log('Something went wrong', error);
        setInvalidCredentials(true);

        setTimeout(() => {
          setInvalidCredentials(false);
        }, 3000);
      });

  }

  var handleInputChange=(args)=>{
    var copyOfadmin = {...admin};
    copyOfadmin[args.target.name] = 
                args.target.value;
    setAdmin(copyOfadmin);
}

  useEffect(() => {
    
   // login();
    
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h3 className="mb-4">Admin Login</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={admin.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={admin.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="text-center">
            <button onClick={login} className="btn btn-primary">
              LOGIN
            </button>
          </div>
          {invalidCredentials && (
            <p className="text-center mt-2" style={{ color: 'red' }}>
              Invalid Credentials
            </p>
          )}
        </form>
        <div className="text-center mt-3">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default  AdminSignin;


