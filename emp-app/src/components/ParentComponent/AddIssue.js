import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import employeeService from '../../services/employee.service';
import { useNavigate } from 'react-router-dom';

function IssueForm() {
  const parentId = window.sessionStorage.getItem("parentId");
  const [issue, setIssue] = useState({
    
    pfirstName: '',
    type: '',
    details: '',
    resolved: false
  });
  const nav = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
     employeeService.postIssue(id,issue)
     .then((resp)=>{
        setIssue({
    pfirstName: '',
    type: '',
    details: '',
    resolved: false

        });
nav("/ParentD")
        console.log(resp.data);
     })
    
    .catch ((error)=>{
      console.error('Error adding issue:', error);
    })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssue((prevIssue) => ({
      ...prevIssue,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Add New Issue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input type="text" className="form-control" name="pfirstName" value={issue.pfirstName} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Type:</label>
          <input type="text" className="form-control" name="type" value={issue.type} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Details:</label>
          <textarea className="form-control" name="details" value={issue.details} onChange={handleInputChange} required/>
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Is Resolved:</label>
          <select className="form-select" name="resolved" required value={issue.resolved} onChange={handleInputChange}>
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
        <br></br>
      <Link className="btn btn-success" to="/ParentD" >Back to Dashboard</Link>
      <br></br>
      <br></br>
      <br></br>
      </form>
    </div>
  );
}

export default IssueForm;
