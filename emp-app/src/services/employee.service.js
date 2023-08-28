import httpClient from "../http-common";

const viewAllStudent = () => {
  return httpClient.get("/admin/students");
};

const viewAllTeacher = () => {
  return httpClient.get("/admin/teacher");
};

const viewAllParent = () => {
  return httpClient.get("/admin/parent");
};
const updateStudent = (data) => {
  return httpClient.put("/admin/students", data);
};
const updateTeacher = (data) => {
  return httpClient.put("/admin/teacher", data);
};
const updateParent = (data) => {
  return httpClient.put("/admin/parent", data);
};

const deleteStudent = (id) => {
  return httpClient.delete(`/admin/students/${id}`);
};
const deleteTeacher = (std, div, id) => {
  return httpClient.delete(`/admin/teacher/${std}/${div}/${id}`);
};
const deleteParent = (id) => {
  return httpClient.delete(`/admin/parent/${id}`);
};

const studentLogin = (data) => {
  return httpClient.post("/students/login", data);
};

const studentRegister = (data) => {
  return httpClient.post("/admin/students", data);
};


const viewAllTimeTable = () => {
  return httpClient.get("/admin/timetable");
};

const viewAllIssue = () => {
  return httpClient.get("/teachers/issue");
};

const handleIssue = (id, data) => {
  return httpClient.put(`/teachers/issue/${id}`, data);
};

const addResult = (data) => {
  return httpClient.post("/teachers/result", data);
};

const addAttend = (data) => {
  return httpClient.post("/teachers/attendance", data);
};

const addttable = (data) => {
  return httpClient.post("/teachers/timetable", data);
};

const deleteTimetable = (id) => {
  return httpClient.delete(`/admin/timetable/${id}`);
};

const parentLogin = (data) => {
  return httpClient.post("/parent/signIn", data);
};
const teacherLogin = (data) => {
  return httpClient.post("/teachers/login", data);
};

const teacherRegister = (data) => {
  return httpClient.post("/admin/teacher", data);
};

const parentRegister = (data) => {
  return httpClient.post("/admin/parent", data);
};

const postIssue = (id, data) => {
  return httpClient.post(`/parent/issue/${id}`, data);
};

const getStuAttendance = (id) => {
  return httpClient.get(`/parent/attendance/${id}`);
};

const getAttendance = (id) => {
  return httpClient.get(`/students/attendance/${id}`);
};

const getResult = (id) => {
  return httpClient.get(`/parent/results/${id}`);
};

const getStuResult = (id) => {
  return httpClient.get(`/students/results/${id}`);
};

const adminLogin = (data) => {
  return httpClient.post('/admin/adminLogin',data);
};


export default {
  adminLogin,
  studentLogin,
  studentRegister,
  getAttendance,
  viewAllStudent,
  viewAllParent,
  updateParent,
  viewAllTeacher,
  updateStudent,
  updateTeacher,
  deleteParent,
  deleteStudent,
  deleteTeacher,
  viewAllTimeTable,
  viewAllIssue,
  handleIssue,
  deleteTimetable,
  getResult,
  addResult,
  addAttend,
  addttable,
  postIssue,
  parentLogin,
  teacherRegister,
  parentRegister,
  getStuAttendance,
  getStuResult,
  teacherLogin
};
