import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import employeeService from "../../services/employee.service";

export default function ViewChildResult() {
  const [result, setResult] = useState({
    marks: 0,
    percentage: 0,
    sfirstName: "",
    slastName: "",
    std: 0,
    examName: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadResult();
  }, [id]); // Include 'id' in the dependency array

  const loadResult = () => {
    employeeService
      .getStuResult(id)
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
        // setTempemp(response.data);
        //  console.warn(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
        setResult({
          marks: 0,
          percentage: 0,
          sfirstName: "",
          slastName: "",
          std: 0,
          examName: "",
          error: "Error loading result. Please try again later.",
        });
      });
  };

  return (
    <div className="content">
      <h2>Infant's Result</h2>

      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Exam</th>
            <th scope="col">Marks</th>
            <th scope="col">Percentage</th>
            <th scope="col">Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-success">
            <td>{result.sfirstName}</td>

            <td>{result.slastName}</td>

            <td>{result.examName}</td>

            <td>{result.marks}</td>

            <td>{result.percentage}</td>

            <td>{result.std}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <Link className="btn btn-success" to="/ParentD" >Back to Dashboard</Link>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
