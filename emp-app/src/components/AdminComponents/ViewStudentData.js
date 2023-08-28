import React, { useState, useEffect } from "react";
import axios from "axios";
import employeeService from "../../services/employee.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import studentUpdate from './StudentUpdate';
import { useNavigate } from "react-router-dom";

function StudentDataDisplay() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    employeeService
      .viewAllStudent()
      .then((response) => {
        console.log(response.data);
        setStudentData(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const HandleDelete=(id)=>{
    console.log(id)
    employeeService.deleteStudent(id)
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
      <h1 className="mb-4">Student Data</h1>
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
                    <th>Parent Name</th>
                    <th>Standard</th>
                    <th>Division</th>

                    {/* <th colSpan={2}>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((student) => (
                    <tr key={student.studentId}>
                      <td hidden>{student.studentId}</td>
                      <td>{student.email}</td>
                      <td>{student.password}</td>
                      <td>{student.dob}</td>
                      <td>{student.gender}</td>
                      <td>{student.address}</td>
                      <td>{student.mobileNo}</td>
                      <td>{student.sfirstName}</td>
                      <td>{student.slastName}</td>
                      <td>{student.dateOfJoin}</td>
                      <td>{student.pfirstName}</td>
                      <td>{student.std}</td>
                      <td>{student.division}</td>
                      <td>
                        <Link
                          className="btn btn-warning"
                          to={`/studentUpdate?id=${student.studentId}`}
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        {/* <Link
                          className="btn btn-danger"
                          onClick={()=>HandleDelete(student.studentId)}
                        >
                          Delete
                        </Link> */}
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

export default StudentDataDisplay;
