import axios from "axios";
import React, { useEffect, useState } from "react";
import employeeService from "../../services/employee.service";
import { useLocation, useNavigate } from "react-router-dom";

function StudentUpdate() {
  var [studentAll, setStudentAll] = useState([]);
  var navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  var [formData, setFormData] = useState({
    email: "",
    password: "",
    dob: "",
    gender: "",
    address: "",
    mobileNo: "",
    studentId: "",
    sfirstName: "",
    slastName: "",
    dateOfJoin: "",
    pfirstName: "",
    std: "",
    division: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await employeeService.viewAllStudent();
      studentAll = response.data;
      setStudentAll([...studentAll]);
      console.log(studentAll);
      var selectedStudent = studentAll.find(
        (student) => student.studentId === parseInt(id)
      );

      formData = selectedStudent;

      setFormData({ ...formData });
      console.log("form data" + formData);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  var handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await employeeService
      .updateStudent(formData)
      .then((response) => {
        console.log(response.data);
        navigate("/StudentDisplay");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const nav = useNavigate();
  const handleLogout = () => {
    window.sessionStorage.removeItem("adminId");
    nav("/AdminSignIn"); // Replace with your logout route
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
    <div className="container content mt-5">
      <h1>student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  onChange={handleInputChange}
                  name="email"
                  value={formData.email || ""}
                />
              </td>
              <td>Password</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  name="password"
                  value={formData.password || ""}
                />
              </td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>
                <input
                  type="date"
                  className="form-control"
                  onChange={handleInputChange}
                  name="dob"
                  value={formData.dob || ""}
                />
              </td>
              <td>Gender</td>
              <td>
                <select
                  className="form-control"
                  onChange={handleInputChange}
                  name="gender"
                  value={formData.gender || ""}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td colSpan="3">
                <textarea
                  className="form-control"
                  onChange={handleInputChange}
                  name="address"
                  value={formData.address || ""}
                  rows="3"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <td>
                <input
                  type="tel"
                  className="form-control"
                  onChange={handleInputChange}
                  name="mobileNo"
                  value={formData.mobileNo || ""}
                />
              </td>
              <td>student ID</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleInputChange}
                  name="studentId"
                  value={formData.studentId || ""}
                />
              </td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  name="sfirstName"
                  value={formData.sfirstName || ""}
                />
              </td>
              <td>Last Name</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  name="slastName"
                  value={formData.slastName || ""}
                />
              </td>
              <td>Date of Join</td>
              <td>
                <input
                  type="date"
                  className="form-control"
                  onChange={handleInputChange}
                  name="dateOfJoin"
                  value={formData.dateOfJoin || ""}
                /></td>
              {/* <td>Parent Name</td> */}
              <td>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  name="pfirstName"
                  value={formData.pfirstName || ""}
                />
              </td><td>Standard</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  name="std"
                  value={formData.std || ""}
                />
              </td>
              <td>Division</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  name="division"
                  value={formData.division || ""}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default StudentUpdate;
