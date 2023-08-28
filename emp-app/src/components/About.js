import React from 'react';
import './About.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import  myAbout from '/home/hitesh/Desktop/Final_Backend/SchoolManagementSystem/MyFrontEndWorkspace/React Front end app/emp-app/src/components/About.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              Welcome to our School Management System! We are dedicated to providing the best education
              experience for students, parents, and teachers. Our system streamlines administrative tasks,
              facilitates communication, and enhances the overall learning process.
            </p>
            <p>
              With a team of passionate educators and technologists, we are committed to innovation and
              excellence in education. Our platform empowers schools to efficiently manage their operations
              and enables students to make the most out of their learning journey.
            </p>
          </div>
          <div className="col-md-6">
            <div className="img-container">
              <img src={myAbout} alt="School Building" className="school-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
