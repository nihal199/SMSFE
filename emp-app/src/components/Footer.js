import React from 'react';
import './Footer.css';
import myfacebook from "/home/hitesh/Desktop/Final_Backend/SchoolManagementSystem/MyFrontEndWorkspace/React Front end app/emp-app/src/components/Twitter.png";
import myTwitter from "/home/hitesh/Desktop/Final_Backend/SchoolManagementSystem/MyFrontEndWorkspace/React Front end app/emp-app/src/components/Facebook.png";
import myInstagram from "/home/hitesh/Desktop/Final_Backend/SchoolManagementSystem/MyFrontEndWorkspace/React Front end app/emp-app/src/components/Instagram.jpeg";




function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#" ></a></li>
              <li><a href="#"><img src={myTwitter} id='twitter' ></img></a></li>
              <li><a href="#"><img src={myInstagram}id='twitter'></img></a></li>
              <li><a href="#"><img src={myfacebook}id='twitter'></img></a></li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
