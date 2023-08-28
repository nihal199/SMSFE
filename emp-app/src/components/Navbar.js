// import React, { Component } from 'react';
// import myLogo from "/home/sunbeam/Desktop/MyFrontEndWorkspace/React Front end app/emp-app/src/components/logo.png";
// import "./NavbarStyles.css";
// import { useState } from 'react';
// class Navbar extends Component{

//     state = {clicked : false}

//     handleClick = ()=>{
//         this.setState({
//             clicked : !this.state.clicked
//         })
//     }

//     render(){
//     return(
//         <>
//         <h1>

//         <nav>
//             <a href="index.html">
//                 <img src={myLogo} alt="LOGO" /> 

//             </a><a href='index.html' id='Title'>School Management System</a>
//             <div>
//                 <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
//                     <li>
//                     <a href='index.html' className='active'>Home</a>
//                     </li>
//                     <li>
//                     <a href='index.html'>About</a>
//                     </li>
//                     <li>
//                     <a href='index.html'>Contact</a>
//                     </li>
//                     <li>
//                     <a href='index.html'>Login</a>
//                     </li>
//                 </ul>
//             </div>
//             <div id='mobile' onClick={this.handleClick}>
//                 <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
//             </div>
//         </nav>

//         </h1>
//         </>
//     )
// }
// }

// export default Navbar;




// import React, { useState } from 'react';
// import myLogo from "/home/sunbeam/Desktop/MyFrontEndWorkspace/React Front end app/emp-app/src/components/logo.png";
// import "./NavbarStyles.css";

// // ...imports...

// function Navbar() {
//     const [clicked, setClicked] = useState(false);

//     const handleClick = () => {
//         setClicked(!clicked);
//     };

//     return (
//         <nav>
//             <a href="index.html">
//                 <img src={myLogo} alt="LOGO" id="mylogo" />
//             </a>
//             <a href='index.html' id='Title'><h1>SCHOOL MANAGEMENT SYSTEM</h1></a>
//             <div>
//                 <ul id='navbar' className={clicked ? 'active' : ''}>
//                     <li>
//                         <a href='index.html' className='active'>Home</a>
//                     </li>
//                     <li>
//                         <a href='index.html'>About</a>
//                     </li>
//                     <li>
//                         <a href='index.html'>Contact</a>
//                     </li>
//                     <li className="dropdown">
//                         <a href="#" className="dropdown-toggle">
//                             Login
//                         </a>
//                         <div className="dropdown-menu">
//                             <a href='/StudentSignup' className="dropdown-item">Student Signup</a>
//                             <a href='/TeacherSignup' className="dropdown-item">Teacher Signup</a>
//                             <a href='/ParentSignup' className="dropdown-item">Parent Signup</a>
//                             <a href='/AdminSignup' className="dropdown-item">Admin Signup</a>
//                         </div>
//                     </li>

//                 </ul>
//             </div>
//             <div id='mobile' onClick={handleClick}>
//                 <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
//             </div>
//         </nav>
//     );
// }

//export default Navbar;

import React, { useState } from 'react';
import myLogo from "/home/hitesh/Desktop/Final_Backend/SchoolManagementSystem/MyFrontEndWorkspace/React Front end app/emp-app/src/components/logo.png";
import "./NavbarStyles.css";

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav>
            <a href="/">
                <img src={myLogo} alt="LOGO" id="mylogo" />
            </a>
            <a href='/' id='Title'><h1>SCHOOL MANAGEMENT SYSTEM</h1></a>
            <div>
                <ul id='navbar' className={clicked ? 'active' : ''}>
                    <li>
                        <a href='/' className='active'>Home</a>
                    </li>
                    <li>
                        <a href='/About'>About</a>
                    </li>
                    <li>
                        <a href='/Contact'>Contact</a>
                    </li>
                    <li>
                        <a href='/AdminSignIn'>Admin Login</a>
                    </li>
                    
                </ul>
            </div>
            <div id='mobile' onClick={handleClick}>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
        </nav>
    );
}

export default Navbar;


