//import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import employeeService from '../../services/employee.service';


const AddResult = () => {
    const [formData, setFormData] = useState({
        marks: '',
     sfirstName: '',
     subjectName: '',
     examName: '',
      });
    const [invalidCredentials, setInvalidCredentials] = useState(false);

  
  const addresult=(e)=>{
    e.preventDefault();
    
   
    employeeService.addResult(formData)
    .then((response)=>{
      setFormData({
        marks: '',
        sfirstName: '',
        subjectName: '',
        examName: '',
      })
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
    var copyOfResult = {...formData};
    copyOfResult[args.target.name] = 
                args.target.value;
   setFormData(copyOfResult);
}

  useEffect(() => {
    
   // login();
    
  }, []);

  return (
    <div className="content container jumbotron mt-5">
    <h2>Student Result Form</h2>
    <form onSubmit={addresult}>
      <div className="mb-3">
        <label htmlFor="marks" className="form-label">Marks</label>
        <input
          type="text"
          className="form-control"
          id="marks"
          name="marks"
          value={formData.marks}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sFirstName" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="sFirstName"
          name="sfirstName"
          value={formData.sfirstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
  <label htmlFor="subjectName" className="form-label">Subject</label>
  <input
    type="text"
    className="form-control"
    id="subjectName"
    name="subjectName"
    value={formData.subjectName}
    onChange={handleInputChange}
    required
  />
  </div>
  <div className="mb-3">
  <label htmlFor="examName" className="form-label">Exam Name</label>
  <input
    type="text"
    className="form-control"
    id="examName"
    name="examName"
    value={formData.examName}
    onChange={handleInputChange}
    required
  />
</div>

      <button type="submit" className="btn btn-primary">Submit</button>
      <br></br>
      <Link className="btn btn-success" to="/TeacherD" >Back to Dashboard</Link>
      <br></br>
      <br></br>
      <br></br>


    </form>
  </div>
  );
};

export default AddResult;