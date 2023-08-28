

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Table, Button } from 'react-bootstrap'; // Import Bootstrap components

import employeeService from '../../services/employee.service';

function ViewTimeTable() {
  const [timeTableData, setTimeTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    employeeService
      .viewAllTimeTable()
      .then((response) => {
        console.log(response.data);
        setTimeTableData(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  const HandleDelete=(id)=> {
    employeeService.deleteTimetable(id)
    .then((response) => {
        console.log(response.data);
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
      <h1 className="mb-4">Time Table Data</h1>
      <div className="row">
        <div className="col">
          <Card>
            <Card.Body>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Standard</th>
                    <th>Division</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Subject Name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {timeTableData.map((timetable) => (
                    <tr key={timetable.ttId}>
                      <td>{timetable.std}</td>
                      <td>{timetable.division}</td>
                      <td>{timetable.day}</td>
                      <td>{timetable.time}</td>
                      <td>{timetable.subjectName}</td>
                      <td>
                        <Button variant="danger" onClick={()=>HandleDelete(timetable.ttId)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
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

export default ViewTimeTable;
