//import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import employeeService from '../../services/employee.service';

const AddTeacher = () => {

     var navigate=useNavigate();
 
     const [teacherData, setTeacherData] = useState({
        email: '',
        password: '',
        dob: '',
        gender: '',
        address: '',
        mobileNo: '',
        dateOfJoin: '',
        tfirstName: '',
        tlastName: '',
        std: '',
        division: '',
      });
    const [invalidCredentials, setInvalidCredentials] = useState(false);

  
  const teacherSignup=(e)=>{
    e.preventDefault();
    
   
    employeeService.teacherRegister(teacherData)
    .then((response)=>{
        setTeacherData({
            email: '',
            password: '',
            dob: '',
            gender: '',
            address: '',
            mobileNo: '',
            dateOfJoin: '',
            tFirstName: '',
            tLastName: '',
            std: '',
            division: '',
          });
         console.log(response.data) 
       
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
    var copyOfTeacher = {...teacherData};
    copyOfTeacher[args.target.name] = 
                args.target.value;
    setTeacherData(copyOfTeacher);
}

  useEffect(() => {
    
   // login();
    
  }, []);
  const adminId = window.sessionStorage.getItem("adminId");
    const nav = useNavigate();
      const handleLogout = () => {
        window.sessionStorage.removeItem("adminId");
        nav("/AdminSignIn"); // Replace with your logout route
      };
  return (
   <div>
     <header className="dashboard-header">
        <div className="logout-container">
          <button className="btn btn-danger logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
    <div className="container content mt-5">
      <h2>Add Teacher</h2>
      <form onSubmit={teacherSignup}>
      <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={teacherData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={teacherData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={teacherData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            name="gender"
            value={teacherData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            className="form-control"
            name="address"
            value={teacherData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            name="mobileNo"
            value={teacherData.mobileNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Joining</label>
          <input
            type="date"
            className="form-control"
            name="dateOfJoin"
            value={teacherData.dateOfJoin}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="tfirstName"
            value={teacherData.tfirstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="tlastName"
            value={teacherData.tlastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Standard</label>
          <input
            type="number"
            className="form-control"
            name="std"
            value={teacherData.std}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Division</label>
          <input
            type="text"
            className="form-control"
            name="division"
            value={teacherData.division}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Teacher
        </button>

        <br></br>
      <Link className="btn btn-success" to="/AdminD" >Back to Dashboard</Link>
      <br></br>
      <br></br>
      <br></br>
      </form>
    </div>
   </div>
  );
};

export default AddTeacher;