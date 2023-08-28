
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';
import { Link, useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const adminId = window.sessionStorage.getItem("adminId");
  const nav = useNavigate();
    const handleLogout = () => {
      window.sessionStorage.removeItem("adminId");
      nav("/AdminSignIn"); // Replace with your logout route
    };
  return (
    <div>
      <header className="dashboard-header">
        <div className="logout-container" >
          <button className="btn btn-danger logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
    <div className="admin-dashboard">
      
      
      <main className="dashboard-main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">Enroll Student</h5>
                  <Link className="btn btn-primary btn-custom" to="/StudentSignup" >Enroll Student</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">Enroll Teacher</h5>
                  <Link className="btn btn-success btn-custom" to="/TeacherSignup" >Enroll Teacher</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">Enroll Parent</h5>
                  <Link className="btn btn-info btn-custom" to="/ParentSignup" >Enroll Parent</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">View Student</h5>
                  <Link className="btn btn-primary btn-custom" to="/StudentDisplay" >View Student</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">View Teacher</h5>
                  <Link className="btn btn-primary btn-custom" to="/TeacherDisplay" >View Teacher</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">View Parent</h5>
                  <Link className="btn btn-primary btn-custom" to="/ParentDisplay" >View Parent</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">View Timetable</h5>
                  <Link className="btn btn-success btn-custom" to="/ViewTimeTable" >View Timetable</Link>

                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card dashboard-card">
                <div className="card-body">
                  <h5 className="card-title">View Attendance</h5>
                  <Link className="btn btn-info btn-custom" to="/AdminD" >View Attendance</Link>

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

export default AdminDashboard;
