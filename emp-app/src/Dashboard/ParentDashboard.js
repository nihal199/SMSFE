// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./ParentDashboard.css";
// // import { Link } from "react-router-dom";

// // function ParentDashboard() {
// //   const parentId = window.sessionStorage.getItem("parentId");

// //   return (
// //     <div className="parent-dashboard">
// //       <main className="dashboard-main">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-md-6 mb-4">
// //               <div className="card dashboard-card">
// //                 <div className="card-body">
// //                   <h5 className="card-title">View Result</h5>
// //                   <p className="card-text">
// //                     View your child's academic results.
// //                   </p>
// //                   <Link
// //                     className="btn btn-success btn-custom"
// //                     to={`/ParResult/${parentId}`}
// //                   >
// //                     View Result
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-md-6 mb-4">
// //               <div className="card dashboard-card">
// //                 <div className="card-body">
// //                   <h5 className="card-title">View Child Info</h5>
// //                   <p className="card-text">
// //                     Access and update your child's information.
// //                   </p>
// //                   <Link
// //                     className="btn btn-success btn-custom"
// //                     to={`/ParResult/${parentId}`}
// //                   >
// //                     View Child Info
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //             <br/>
// //             <div className="col-md-6 mb-4">
// //               <div className="card dashboard-card">
// //                 <div className="card-body">
// //                   <h5 className="card-title">View Attendance</h5>
// //                   <p className="card-text">
// //                     Monitor your child's attendance records.
// //                   </p>
// //                   <Link
// //                     className="btn btn-warning btn-custom"
// //                     to={`/ParAttend/${parentId}`}
// //                   >
// //                     View Attendance
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-md-6 mb-4">
// //               <div className="card dashboard-card">
// //                 <div className="card-body">
// //                   <h5 className="card-title">Raise Issue</h5>
// //                   <p className="card-text">
// //                     Raise concerns or issues regarding your child's education.
// //                   </p>
// //                   <Link
// //                     className="btn btn-warning btn-custom"
// //                     to={`/AddIssue/${parentId}`}
// //                   >
// //                     Add Issue
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // export default ParentDashboard;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./ParentDashboard.css";
// import { Link } from "react-router-dom";

// function ParentDashboard() {
//   const parentId = window.sessionStorage.getItem("parentId");

//   return (
//     <div className="parent-dashboard">
//       <main className="dashboard-main">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 mb-4">
//               <div className="card dashboard-card">
//                 
//               </div>
//             </div>
//             <div className="col-md-6 mb-4">
//               <div className="card dashboard-card">
                
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-4">
//               <div className="card dashboard-card">
                
//               </div>
//             </div>
//             <div className="col-md-6 mb-4">
//               <div className="card dashboard-card">
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ParentDashboard;import React from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ParentDashboard.css";
import { Link, useNavigate } from "react-router-dom";

function ParentDashboard() {
  
  const parentId = window.sessionStorage.getItem("parentId");
const nav = useNavigate();
  const handleLogout = () => {
    window.sessionStorage.removeItem("parentId");
    nav("/ParentSignIn"); // Replace with your logout route
  };

  return (<div>
    <header className="dashboard-header">
        <div className="logout-container">
          <button className="btn btn-danger logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
    <div className="parent-dashboard">
      
      <main className="dashboard-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card dashboard-card">
              <div className="card-body text-center">
                  <h5 className="card-title">View Result</h5>
                   <p className="card-text">
                     View your child's academic results.
                   </p>
                   <Link
                    className="btn btn-success btn-custom"
                    to={`/ParResult/${parentId}`}
                  >
                    View Result
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card dashboard-card">
              <div className="card-body text-center">
                  <h5 className="card-title">View Child Info</h5>
                  <p className="card-text">
                    Access and update your child's information.
                  </p>
                  <Link
                    className="btn btn-success btn-custom"
                    to={`/ParResult/${parentId}`}
                  >
                    View Child Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card dashboard-card">
              <div className="card-body text-center">
                  <h5 className="card-title">View Attendance</h5>
                  <p className="card-text">
                    Monitor your child's attendance records.
                  </p>
                  <Link
                    className="btn btn-warning btn-custom"
                    to={`/ParAttend/${parentId}`}
                  >
                    View Attendance
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card dashboard-card">
              <div className="card-body text-center">
                  <h5 className="card-title">Raise Issue</h5>
                  <p className="card-text">
                    Raise concerns or issues regarding your child's education.
                  </p>
                  <Link
                    className="btn btn-warning btn-custom"
                    to={`/AddIssue/${parentId}`}
                  >
                    Add Issue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}

export default ParentDashboard;
