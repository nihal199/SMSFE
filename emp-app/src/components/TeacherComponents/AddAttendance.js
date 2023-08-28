import { useState } from 'react';
//import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import employeeService from '../../services/employee.service';
import { Link } from 'react-router-dom';


const AddAttendance = () => {
  
   const teaId = window.sessionStorage.getItem("teacherId")

    const [formData, setFormData] = useState({
        teacherId: teaId,
        sfirstName: '',
     date: '',
     status: '',
     
      });
     
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [attendanceAdded, setAttendanceAdded] = useState(false); 

  
  const addattendance=(e)=>{
    e.preventDefault();
    
   
    employeeService.addAttend(formData)
    .then((response)=>{
      setFormData({
        teacherId: teaId,
        sfirstName: '',
     date: '',
     status: '',
     
      });
        
         console.log(response.data) 
         setAttendanceAdded(true); // Set the attendance added flag

         setTimeout(() => {
           setAttendanceAdded(false); // Reset the flag after a certain time
         }, 3000);
       
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
    var copyOfAttendance = {...formData};
    copyOfAttendance[args.target.name] = 
                args.target.value;
   setFormData(copyOfAttendance);
}

  useEffect(() => {
    
    // formData.teacherId = teaId;
   // login();
    
  }, []);

  return (
    <div className="content container jumbotron mt-5">
    <h2>Student Attendance Form</h2>
    <form onSubmit={addattendance}>
      <div className=" mb-3">
        {/* <label htmlFor="teacherId" className="form-label">Teacher Id</label> */}
        <input
          type="number"
          className="form-control"
          id="teacherId"
          name="teacherId"
          readOnly
          value={formData.teacherId}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="sFirstName" className="form-label">Student Name</label>
        <input
          type="text"
          className="form-control"
          id="sFirstName"
          name="sfirstName"
          value={formData.sfirstName}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
  <label htmlFor="status" className="form-label">Status</label>
  <select
    className="form-select form-control"
    id="status"
    name="status"
    value={formData.status}
    onChange={handleInputChange}
  >
    <option value="false">Absent</option>
    <option value="true">Present</option>
    
  </select>
</div>

{attendanceAdded && (
        <div className="text-success mt-4 ">
          Attendance added successfully! 
        </div>
      )}

      <button type="submit"  className="btn btn-primary">Add Attendance</button>
      <br></br>
      <Link className="btn btn-success" to="/TeacherD" >Back to Dashboard</Link>
      <br></br>
      <br></br>
      <br></br>
    </form>
  </div>
  );
};

export default AddAttendance;