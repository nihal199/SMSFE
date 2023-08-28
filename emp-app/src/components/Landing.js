import React from "react";
import "./Landind.css"; // Import your custom stylesheet
import myImage from "/home/hitesh/Desktop/Final_Backend/SchoolManagementSystem/MyFrontEndWorkspace/React Front end app/emp-app/src/components/back5.jpg";
import { Link } from "react-router-dom";

function ImagePage() {
  return (
    <div className="content">
      <div className="image-page " style={{ background: { myImage } }}>
        <div className="image-container">
          {/* <img src={myImage} alt="Full Page Background" /> */}
          <div className="quote-overlay">
            <h2>
              "Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today." - Malcolm X
            </h2>
          </div>
        </div>

        <div className="buttons-overlay">
          <div className="buttons-container">
            <div
              className="btn-group-vertical"
              role="group"
              aria-label="User Buttons"
            >
              <Link to="/TeacherSignin" className="btn-custom-land">
                Teacher
              </Link>
              <br />
              <Link to="/StudentSignin" className="btn-custom-land">
                Student
              </Link>
              <br />
              <Link to="/ParentSignin" className="btn-custom-land">
                Parent
              </Link>
            </div>
          </div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}

export default ImagePage;
