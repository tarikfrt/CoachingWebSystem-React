import React from "react";
import StudentList from "../pages/StudentList";

import { Route, Routes } from "react-router-dom";
import StudentDetail from "../pages/StudentDetail";
import CoachList from "../pages/CoachList";
import Login from "../pages/LoginPage";
import SignIn from "../pages/SignInPage";
import Information from "./Information";
import SignedIn from "./SignedIn";
import StudentSignInPage from "../pages/StudentSignInPage"
import CoachSignInPage from "../pages/CoachSignInPage"
import StudentLoginPage from "../pages/StudentLoginPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import CoachLoginPage from "../pages/CoachLoginPage";
import StudentPage from "../pages/StudentPage";
import CoachPage from "../pages/CoachPage";
import AdminPage from "../pages/AdminPage";
import CoachDetail from "../pages/CoachDetail";
import CoachUpdatePage from "../pages/CoachUpdatePage";
import CoachDeletePage from "../pages/CoachDeletePage";
import StudentUpdatePage from "../pages/StudentUpdatePage";
import StudentDeletePage from "../pages/StudentDeletePage";
import AddPlan from "../pages/AddPlan";
import ReadStudentMessage from "../pages/ReadStudentMessage";
import SendMessageFromStudent from "../pages/SendMessageFromStudent";
import ReadCoachMessage from "../pages/ReadCoachMessage";
import SendMessageFromCoach from "../pages/SendMessageFromCoach";




export default function Dashboard() {
  return (
    <div>
      <Routes>
      <Route exact path="/" Component={Information}/>
        <Route exact path="/students" Component={StudentList}/>
        <Route exact path="/students/:id" Component={StudentDetail}/>
        <Route exact path="/coaches/:id" Component={CoachDetail}/>
        <Route exact path="/signedIn/:id" Component={SignedIn}/>
        <Route exact path="/coaches" Component={CoachList}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/signin" Component={SignIn}/>
        <Route exact path="/login/admin" Component={AdminLoginPage}/>
        <Route exact path="/login/student" Component={StudentLoginPage}/>
        <Route exact path="/login/coach" Component={CoachLoginPage}/>
        <Route exact path="/signin/coach"   Component={CoachSignInPage}/>
        <Route exact path="/signin/student" Component={StudentSignInPage}/>
        <Route exact path="/login/student/:id" Component={StudentPage}/>
        <Route exact path="/login/coach/:id" Component={CoachPage}/>
        <Route exact path="/admin" Component={AdminPage}/>
        <Route exact path="/admin/coach/update" Component={CoachUpdatePage}/>
        <Route exact path="/admin/coach/delete" Component={CoachDeletePage}/>
        <Route exact path="/admin/student/update" Component={StudentUpdatePage}/>
        <Route exact path="/admin/student/delete" Component={StudentDeletePage}/>
        <Route exact path="/login/student/update/:id" Component={StudentUpdatePage}/>
        <Route exact path="/login/coach/update/:id" Component={CoachUpdatePage}/>
        <Route exact path="/admin/coach/addPlan" Component={AddPlan}/>
        <Route exact path="/login/student/getMessage" Component={ReadStudentMessage}/>
        <Route exact path="/login/student/setMessage" Component={SendMessageFromStudent}/>
        <Route exact path="/login/coach/getMessage" Component={ReadCoachMessage}/>
        <Route exact path="/login/coach/setMessage" Component={SendMessageFromCoach}/>

        

      </Routes>

    </div>
  );
}
