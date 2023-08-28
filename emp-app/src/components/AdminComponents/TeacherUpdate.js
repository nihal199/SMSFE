import axios from 'axios';
import React, { useEffect, useState } from 'react';
import employeeService from '../../services/employee.service';
import { useLocation, useNavigate } from 'react-router-dom';


function TeacherUpdate() {
  var  [teacherAll, setTeacherAll] = useState([]);
  var navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

    var [formData, setFormData] = useState({
        email: '',
        password: '',
        dob: '',
        gender: '',
        address: '',
        mobileNo: '',
        teacherId: '',
        tfirstName: '',
        tlastName: '',
        dateOfJoin:'',
        stdDiv:[{std:''
        ,division:''}]
      });
      

      useEffect(() => {
        fetchData();
      }, []);
    
    
    
      const fetchData = async () => {

        try {
          
          const response = await employeeService.viewAllTeacher();
          teacherAll = response.data;
          setTeacherAll([...teacherAll]);
          console.log(teacherAll);
          var selectedTeacher = teacherAll.find(teacher => teacher.teacherId === parseInt(id));
         
          formData = selectedTeacher;

          setFormData({...formData});
            console.log("form data"+formData);

        } catch (error) {
          console.log('Something went wrong', error);
        }
        
      };
    
      
      var handleInputChange=(event)=>{
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
        
    }

    
      const handleSubmit =  async (event) => {
        event.preventDefault();
    
        await employeeService.updateTeacher(formData)
        .then((response) => {
          console.log(formData);

          console.log(response.data);
          navigate("/TeacherDisplay")
          
        })
        .catch((error) => {
          console.log('Something went wrong', error);
        });
        
      };
      const nav = useNavigate();
      const handleLogout = () => {
        window.sessionStorage.removeItem("adminId");
        nav("/AdminSignIn"); // Replace with your logout route
      };
    
return(
 <div>
   <header className="dashboard-header">
        <div className="logout-container">
          <button className="btn btn-danger logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <div className="container content mt-5">
      <h1>Teacher Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input type="email" className="form-control" onChange={handleInputChange} name="email" value={formData.email || ''} />
              </td>
              <td>Password</td>
              <td>
                <input type="text" className="form-control" onChange={handleInputChange} name="password" value={formData.password || ''}/>
              </td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>
                <input type="date" className="form-control" onChange={handleInputChange} name="dob" value={formData.dob || ''}/>
              </td>
              <td>Gender</td>
              <td>
                <select className="form-control" onChange={handleInputChange} name="gender" value={formData.gender || ''}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td colSpan="3">
                <textarea className="form-control" onChange={handleInputChange} name="address" value={formData.address || ''} rows="3"></textarea>
              </td>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <td>
                <input type="tel" className="form-control" onChange={handleInputChange} name="mobileNo" value={formData.mobileNo || ''} />
              </td>
              <td>teacher ID</td>
              <td>
                <input type="number" className="form-control" onChange={handleInputChange} name="teacherId" value={formData.teacherId || ''}/>
              </td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>
                <input type="text" className="form-control" onChange={handleInputChange} name="tfirstName" value={formData.tfirstName || ''} />
              </td>
              <td>Last Name</td>
              <td>
                <input type="text" className="form-control" onChange={handleInputChange} name="tlastName" value={formData.tlastName || ''}/>
              </td>
            </tr>
            <tr>
              <td>Date of Join</td>
              <td>
                <input type="date" className="form-control" onChange={handleInputChange} name="dateOfJoin" value={formData.dateOfJoin || ''} />
              </td>
              <td>Standard</td>
              <td>
                <input type="text" className="form-control" onChange={handleInputChange} name="std" value={formData.stdDiv[0].std || ''}/>
              </td>
              <td>Division</td>
              <td>
                <input type="text" className="form-control" onChange={handleInputChange} name="division" value={formData.stdDiv[0].division || ''}/>
              </td> 
            </tr>
          </tbody>
        </table>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
 </div>
  );
}



export default TeacherUpdate;