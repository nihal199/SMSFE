import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import employeeService from '../../services/employee.service';


export default function ViewAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [att, setAtt] = useState();
  const { id } = useParams();

  useEffect(() => {
    loadAttendance();
  }, [id]); // Include 'id' in the dependency array

  const loadAttendance = () => {
    employeeService.getStuAttendance(id)
    .then((resp)=>{
      const modifiedAttendance = resp.data.map(attend => ({
        ...attend,
        status: attend.status ? 'P' : 'A',
      }));
      setAttendance(modifiedAttendance);

    })
    
    .catch ((error)=> {
      console.error('Error loading attendance:', error);
      setAttendance({
    sfirstName: '',
    slastName: '',
    status: '',
    date: '',
        error: 'Error loading result. Please try again later.',
      });
    })
  };

  return (
    <div className='content container  mt-5'>
      <h2>Student Attendance</h2>
      
      <table className="table table-bordered">
      <thead>
    <tr>
     
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
     
      
    </tr>
  </thead>
  <tbody>
            {attendance.map((attend) => (
              <tr key={attend.id} class="table-success">
                
                <td >{attend.sfirstName}</td>

               <td >{attend.slastName}</td>  

               <td >{attend.status}</td>

            <td >{attend.date}</td>
              </tr>
            ))}
          </tbody>
        
      </table>

      <Link className="btn btn-warning" to="/StudentD" >Back to Dashboard</Link>

    </div>
  );
}