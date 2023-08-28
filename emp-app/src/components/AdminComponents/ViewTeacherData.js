

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import employeeService from '../../services/employee.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import teacherUpdate from './teacherUpdate';
import { useNavigate } from 'react-router-dom';

function TeacherDataDisplay() {
  const [teacherData, setTeacherData] = useState([]);
  
  
  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = () => {
    employeeService
      .viewAllTeacher()
      .then((response) => {
        console.log(response.data);
        setTeacherData(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  const HandleDelete=(std,div,id)=>{
    console.log(std+div+id)
    employeeService.deleteTeacher(std,div,id)
    .then((resp)=>{
      console.log(resp.data);
      fetchData();
    })
    .catch((error) => {
      console.log('Something went wrong', error);
    });
  }
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
      <h1 className="mb-4">Teacher Data</h1>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    
                    <th>Email</th>
                    <th>Password</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Mobile No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Join</th>
                    <th>Std</th>
                    <th>Div</th>
                    {/* <th colSpan={2}>Action</th> */}
                    
                  </tr>
                </thead>
                <tbody>
                  {teacherData.map((teacher) => (
                    <tr key={teacher.teacherId}>
                      <td hidden>{teacher.teacherId}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.password}</td>
                      <td>{teacher.dob}</td>
                      <td>{teacher.gender}</td>
                      <td>{teacher.address}</td>
                      <td>{teacher.mobileNo}</td>
                      <td>{teacher.tfirstName}</td>
                      <td>{teacher.tlastName}</td>
                      <td>{teacher.dateOfJoin}</td>
                      <td>{teacher.stdDiv[0].std}</td>
                      <td>{teacher.stdDiv[0].division}</td>



                      <td>
                        <Link className="btn btn-warning" to={`/teacherUpdate?id=${teacher.teacherId}`}>
                          Update
                        </Link>
                      </td>
                      <td>
                      <Link className="btn btn-danger" onClick={()=>HandleDelete(teacher.stdDiv[0].std,teacher.stdDiv[0].division,teacher.teacherId)}>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Link className="btn btn-success" to="/AdminD" >Back to Dashboard</Link>
      <br></br>
      <br></br>
      <br></br>
    </div>
   </div>
  );
}

export default TeacherDataDisplay;
