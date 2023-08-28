import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import employeeService from "../../services/employee.service";

const ParentSignin = () => {
  var navigate = useNavigate();

  const [parent, setParent] = useState({ email: "", password: "" });
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log("in login function");

    employeeService
      .parentLogin(parent)
      .then((response) => {
        console.log(response.data);
        console.log("Login successfully");
        window.sessionStorage.setItem("parentId", response.data.parentId);

        navigate("/ParentD");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
        setInvalidCredentials(true);

        setTimeout(() => {
          setInvalidCredentials(false);
        }, 3000);
      });
  };

  var handleInputChange = (args) => {
    var copyOfParent = { ...parent };
    copyOfParent[args.target.name] = args.target.value;
    setParent(copyOfParent);
  };

  useEffect(() => {
    // login();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 ">
        <h3 className="mb-4">Parent Login</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={parent.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={parent.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="text-center">
            <button onClick={login} className="btn btn-primary">
              LOGIN
            </button>
          </div>
          {invalidCredentials && (
            <p className="text-center mt-2" style={{ color: "red" }}>
              Invalid Credentials
            </p>
          )}
        </form>
        <div className="text-center mt-3">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ParentSignin;
