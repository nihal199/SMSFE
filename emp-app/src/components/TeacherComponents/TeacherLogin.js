//import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import employeeService from '../../services/employee.service';

const TeacherSignin = () => {

     var navigate=useNavigate();
 
    const [teacher, setteacher] =   
    useState({email: "", password: ""});
    const [invalidCredentials, setInvalidCredentials] = useState(false);

  
  const login=(e)=>{
    e.preventDefault();
    console.log("inlogin function")
   
    employeeService.teacherLogin(teacher)
    .then((response)=>{

      window.sessionStorage.setItem("teacherId",response.data.teacherId)
        
         console.log(response.data)
        console.log("Loginsuccessfully")
        navigate("/TeacherD");
       
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
    var copyOfTeacher = {...teacher};
    copyOfTeacher[args.target.name] = 
                args.target.value;
    setteacher(copyOfTeacher);
}

  useEffect(() => {
    
   // login();
    
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 ">
        <h3 className="mb-4">Teacher Login</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={teacher.email}
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
              value={teacher.password}
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
            <p className="text-center mt-2" style={{ color: "red" }}>
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

export default  TeacherSignin;


