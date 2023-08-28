import { useState } from 'react';
//import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import employeeService from '../../services/employee.service';
import { Link } from 'react-router-dom';


const AddTimeTable = () => {
    const [formData, setFormData] = useState({
        std: '',
        day: '',
     time: '',
   //  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
     subject: '',
     division: '',
      });
    const [invalidCredentials, setInvalidCredentials] = useState(false);

  
  const addtimetable=(e)=>{
    e.preventDefault();
    
   
    employeeService.addttable(formData)
    .then((response)=>{
        
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
    var copyOfTimeTable = {...formData};
    copyOfTimeTable[args.target.name] = 
                args.target.value;
   setFormData(copyOfTimeTable);
}

  useEffect(() => {
    
   // login();
    
  }, []);

  return (
    <div className="content container jumbotron mt-5">
    <h2>Add TimeTable </h2>
    <form onSubmit={addtimetable}>
      <div className="mb-3">
        <label htmlFor="std" className="form-label">Standard</label>
        <input
          type="text"
          className="form-control"
          id="std"
          name="std"
          value={formData.std}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="division" className="form-label">Division</label>
        <input
          type="text"
          className="form-control"
          id="division"
          name="division"
          value={formData.division}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="day" className="form-label">Day</label>
        <input
          type="text"
          className="form-control"
          id="day"
          name="day"
          value={formData.day}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="time" className="form-label">Time</label>
        <input
          type="time"
          className="form-control"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
        />
      </div>
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

export default AddTimeTable;