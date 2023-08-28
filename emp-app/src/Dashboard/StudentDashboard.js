import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./StudentDashboard.css";
import { Link, useNavigate } from "react-router-dom";

function StudentDashboard() {
  const studentId = window.sessionStorage.getItem("studentId");
  const nav = useNavigate();
  const handleLogout = () => {
    window.sessionStorage.removeItem("studentId");
    nav("/StudentSignIn"); 
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
    <div className="student-dashboard">
      <main className="student-main">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="student-card shadow">
                <Card.Body className="text-center">
                  <h5 className="card-title">View Result</h5>
                  <Link
                    className="btn btn-primary"
                    to={`/ViewResult/${studentId}`}
                  >
                    View Result
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="student-card shadow">
                <Card.Body className="text-center">
                  <h5 className="card-title">View Attendance</h5>
                  <Link
                    className="btn btn-success"
                    to={`/ViewAttendance/${studentId}`}
                  >
                    View Attendance
                  </Link>

                  <Button variant=""></Button>
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

export default StudentDashboard;
