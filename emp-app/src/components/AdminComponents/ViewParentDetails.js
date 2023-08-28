

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import employeeService from '../../services/employee.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ParentUpdate from './ParentUpdate';
import { useNavigate } from 'react-router-dom';

function ParentDataDisplay() {
  const [parentData, setParentData] = useState([]);
  
  
  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = () => {
    employeeService
      .viewAllParent()
      .then((response) => {
        // console.log(response.data);
        setParentData(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  const HandleDelete=(id)=>{
    console.log(id)
    employeeService.deleteParent(id)
    .then((resp)=>{
      console.log(resp.data);
      fetchData();
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
      <h1 className="mb-4">Parent Data</h1>
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
                    {/* <th colSpan={2}>Action</th> */}
                    
                  </tr>
                </thead>
                <tbody>
                  {parentData.map((parent) => (
                    <tr key={parent.parentId}>
                      <td hidden>{parent.parentId}</td>
                      <td>{parent.email}</td>
                      <td>{parent.password}</td>
                      <td>{parent.dob}</td>
                      <td>{parent.gender}</td>
                      <td>{parent.address}</td>
                      <td>{parent.mobileNo}</td>
                      <td>{parent.pfirstName}</td>
                      <td>{parent.plastName}</td>
                      <td>
                        <Link className="btn btn-warning" to={`/ParentUpdate?id=${parent.parentId}`}>
                          Update
                        </Link>
                      </td>
                      <td>
                      <Link className="btn btn-danger" onClick={()=>HandleDelete(parent.parentId)}>
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

export default ParentDataDisplay;
