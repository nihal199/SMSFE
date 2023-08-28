import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './TeacherDashboard.css'; 
 
function TeacherDashboard() {
  const nav = useNavigate();
  const handleLogout = () => {
    window.sessionStorage.removeItem("teacherId");
    nav("/TeacherSignIn"); 
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
    <div className="teacher-dashboard">
      

      <main className="teacher-main">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="teacher-card shadow">
                <Card.Body className="text-center">
                  <h5 className="card-title">Add Results</h5>
                  <Link className="btn btn-primary" to="/AddResult" >Add Results</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="teacher-card shadow">
                <Card.Body className="text-center">
                  <h5 className="card-title">Add Attendance</h5>
                  <Link className="btn btn-success" to="/AddAttendance" >Add Attendance</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="teacher-card shadow">
                <Card.Body className="text-center">
                  <h5 className="card-title">View and Handle Issue</h5>
                  <Link className="btn btn-info" to="/ViewIssue" >View and Handle Issue</Link>

                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="teacher-card shadow">
                <Card.Body className="text-center">
                  <h5 className="card-title">Add TimeTable</h5>
                  <Link className="btn btn-warning" to="/AddTimetable" >Add TimeTable</Link>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      
    </div>
   </div>
  );
}

export default TeacherDashboard;