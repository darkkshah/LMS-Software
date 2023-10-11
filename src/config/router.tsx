import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import SignUp from "../pages/Signup";
import Protected from "../pages/Protected";
import DashBoard from "../pages/Dashboard";
import { useState } from 'react'
import AdminDashBoard from "../pages/AdminPanel/AdminDashboard";
import InstituteDashBoard from "../pages/Institute/InstituteDashboard";



export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<Protected role={"student"} Screen={DashBoard} />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/signup" element={<SignUp />} /> */}
                    <Route path="/admin/*" element={<Protected role={"admin"} Screen={AdminDashBoard} />} />
                    <Route path="/institute/*" element={<Protected role={"institute"} Screen={InstituteDashBoard} />} />
                </Routes>
            </Router>
        </>
    )
}
