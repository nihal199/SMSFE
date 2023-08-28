// import React, { useState, useEffect } from 'react';
// //import axios from 'axios';
// import employeeService from '../services/employee.service';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useParams } from 'react-router-dom';
// //import ParentUpdate from './ParentUpdate';
// //import { useNavigate } from 'react-router-dom';

// function ViewIssue() {
//   const [issueData, setIssueData] = useState([]);

//   const {id}=useParams();
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     employeeService
//       .viewAllIssue()
//       .then((response) => {
//         console.log(response.data);
//         setIssueData(response.data);
//       })
//       .catch((error) => {
//         console.log('Something went wrong', error);
//       });
//   };

//   const HandleIssue = (id,issueData) => {
//     employeeService
//       .handleIssue(id,issueData)
//       .then((response) => {
//         console.log(response.data);
//         setIssueData(response.data);
//       })
//       .catch((error) => {
//         console.log('Something went wrong', error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">All Issues</h1>
//       <div className="row">
//         <div className="col">
//           <div className="card shadow">
//             <div className="card-header bg-primary text-white">
//               Issue List
//             </div>
//             <div className="card-body">
//               <table className="table table-striped table-bordered table-hover">
//                 <thead>
//                   <tr>
//                     <th>Parent Name</th>
//                     <th>Type</th>
//                     <th>Issue Detail</th>
//                     <th>Issue Resolved</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {issueData.map((issue) => (
//                     <tr key={issue.issueId}>
//                       <td>{issue.pfirstName}</td>
//                       <td>{issue.type}</td>
//                       <td>{issue.details}</td>
//                       <td>{issue.resolved ? 'Yes' : 'No'}</td>
//                       <td>
//                       <button className="btn btn-warning"
//                            onClick={() => HandleIssue(issue.issueId, issueData)}
//                                 > Handle Issue</button>

//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default ViewIssue;

import React, { useState, useEffect } from "react";
import employeeService from "../../services/employee.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

function ViewIssue() {
  const [issueData, setIssueData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    employeeService
      .viewAllIssue()
      .then((response) => {
        console.log(response.data);
        setIssueData(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const handleIssue = (id, issue) => {
    const requestData = {
      pfirstName: issue.pfirstName,
      type: issue.type,
      details: issue.details,
      resolved: true, // Change this to your logic for resolving the issue
    };

    employeeService
      .handleIssue(id, requestData)
      .then((response) => {
        console.log(response.data);
        // You might want to update the specific issue's data instead of fetching all issues again
        // For example, you can update only the 'resolved' property for the specific issue
        setIssueData((prevData) =>
          prevData.map((item) =>
            item.issueId === issue.issueId ? { ...item, resolved: true } : item
          )
        );
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container content jumbotron mt-5">
      <h1 className="mb-4">All Issues</h1>
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">Issue List</div>
            <div className="card-body">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Parent Name</th>
                    <th>Type</th>
                    <th>Issue Detail</th>
                    <th>Issue Resolved</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {issueData.map((issue) => (
                    <tr key={issue.issueId}>
                      <td>{issue.pfirstName}</td>
                      <td>{issue.type}</td>
                      <td>{issue.details}</td>
                      <td>{issue.resolved ? "Yes" : "No"}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleIssue(issue.issueId, issue)}
                        >
                          Handle Issue
                        </button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br></br>
                        <Link className="btn btn-success" to="/TeacherD">
                          Back to Dashboard
                        </Link>
                        <br></br>
                        <br></br>
                        <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewIssue;
