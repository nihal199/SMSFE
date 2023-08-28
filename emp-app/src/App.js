import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import NotFound from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";
//import AddEmployee from './components/AddEmployee';
import StudentSignin from "./components/StudentComponent/studentlogin";
import ViewResult from "./components/StudentComponent/StudentResult";
import ViewAttendance from "./components/StudentComponent/StudentAttendance";
import StudentSignup from "./components/AdminComponents/EnrollStudent";
import ParentDataDisplay from "./components/AdminComponents/ViewParentDetails";
import ParentUpdate from "./components/AdminComponents/ParentUpdate";
import StudentDataDisplay from "./components/AdminComponents/ViewStudentData";
import TeacherDataDisplay from "./components/AdminComponents/ViewTeacherData";
import StudentUpdate from "./components/AdminComponents/StudentUdpate";
import TeacherUpdate from "./components/AdminComponents/TeacherUpdate";
import AddResult from "./components/TeacherComponents/AddResult";
import AddAttendance from "./components/TeacherComponents/AddAttendance";
import AddTimeTable from "./components/TeacherComponents/AddTimeTable";
import ViewIssue from "./components/TeacherComponents/ViewIssue";
import TeacherSignin from "./components/TeacherComponents/TeacherLogin";
import ViewTimeTable from "./components/AdminComponents/ViewTimeTable";
import ViewStuResult from "./components/StudentComponent/StudentResult";
import AddTeacher from "./components/AdminComponents/EnrollTeacher";
import AddParent from "./components/AdminComponents/EnrollParent";
import ParentSignin from "./components/ParentComponent/ParentLogin";
import ViewChildResult from "./components/ParentComponent/ParentViewResult";
import ViewChildAttendance from "./components/ParentComponent/ParentViewAttendance";
import IssueForm from "./components/ParentComponent/AddIssue";
import ImagePage from "./components/Landing";
import AboutUs from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AdminSignin from "./components/AdminComponents/AdminLogin";
import AdminDashboard from "./Dashboard/AdminDashboard";
import StudentDashboard from "./Dashboard/StudentDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard";
import ParentDashboard from "./Dashboard/ParentDashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route exact path="/ViewResult/:id" element={<ViewResult />} />
            <Route
              exact
              path="/ViewAttendance/:id"
              element={<ViewAttendance />}
            />
            <Route exact path="/StudentSignin" element={<StudentSignin />} />
            <Route exact path="/StudentSignup" element={<StudentSignup />} />
            <Route exact path="/ParentDisplay" element={<ParentDataDisplay />} />
            <Route exact path="/ParentUpdate" element={<ParentUpdate />} />
            <Route exact path="/StudentDisplay" element={<StudentDataDisplay />} />
            <Route exact path="/StudentUpdate" element={<StudentUpdate />} />
            <Route exact path="/TeacherDisplay" element={<TeacherDataDisplay />} />
            <Route exact path="/TeacherUpdate" element={<TeacherUpdate />} />
            <Route path='/AddResult' element={<AddResult />} />
            <Route path='/AddAttendance' element={<AddAttendance />} />
            <Route path='/AddTimetable' element={<AddTimeTable />} />
            <Route path='/ViewIssue' element={<ViewIssue />} />
            <Route exact path='/TeacherSignin' element={< TeacherSignin/>} />
            <Route exact path='/ViewTimeTable' element={< ViewTimeTable/>} />
            <Route exact path='/ViewResult/:id' element={< ViewStuResult/>} />
            <Route exact path='/ViewAttendance/:id' element={< ViewAttendance/>} />
            <Route exact path='/TeacherSignup' element={< AddTeacher/>} />
            <Route exact path='/ParentSignup' element={< AddParent/>} />
            <Route exact path='/ParentSignin' element={< ParentSignin/>} />
            <Route exact path='/ParResult/:id' element={< ViewChildResult/>} />
            <Route exact path='/ParAttend/:id' element={< ViewChildAttendance/>} />
            <Route exact path='/AddIssue/:id' element={< IssueForm/>} />
            <Route exact path='/' element={< ImagePage/>} />
            <Route exact path='/About' element={< AboutUs/>} />
            <Route exact path='/Contact' element={< ContactUs/>} />
            <Route exact path='/AdminD' element={< AdminDashboard/>} />
            <Route exact path='/StudentD' element={< StudentDashboard/>} />
            <Route exact path='/TeacherD' element={< TeacherDashboard/>} />
            <Route exact path='/ParentD' element={< ParentDashboard/>} />
            <Route exact path='/AdminSignIn' element={< AdminSignin/>} />

            




            <Route exact path='/Landing' element={< ImagePage/>} />
            
          </Routes>
          <Footer></Footer>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
