import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import employeeService from '../../services/employee.service';

const AddParent = () => {

     var navigate=useNavigate();
 
     const [parentData, setParentData] = useState({
        email: '',
        password: '',
        dob: '',
        gender: '',
        address: '',
        mobileNo: '',
        pfirstName: '',
        plastName: '',
      });
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const adminId = window.sessionStorage.getItem("adminId");
    const nav = useNavigate();
      const handleLogout = () => {
        window.sessionStorage.removeItem("adminId");
        nav("/AdminSignIn"); // Replace with your logout route
      };
  
  const teacherSignup=(e)=>{
    e.preventDefault();
    
   
    employeeService.parentRegister(parentData)
    .then((response)=>{
        setParentData({
        email: '',
        password: '',
        dob: '',
        gender: '',
        address: '',
        mobileNo: '',
        pfirstName: '',
        plastName: '',
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
    var copyOfParent = {...parentData};
    copyOfParent[args.target.name] = 
                args.target.value;
                setParentData(copyOfParent);
}

  useEffect(() => {
    
   // login();
    
  }, []);
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
      <h2>Add Parent</h2>
      <form onSubmit={teacherSignup}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={parentData.email}
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
            value={parentData.password}
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
            value={parentData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            name="gender"
            value={parentData.gender}
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
            value={parentData.address}
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
            value={parentData.mobileNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Parent's First Name</label>
          <input
            type="text"
            className="form-control"
            name="pfirstName"
            value={parentData.pfirstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Parent's Last Name</label>
          <input
            type="text"
            className="form-control"
            name="plastName"
            value={parentData.plastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Student
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

export default AddParent;