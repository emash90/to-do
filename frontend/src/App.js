import React from "react";
import "./App.css";
import Home from "./components/HomeComponents/Home";
import Login from "./components/AuthComponents/Login";
import Register from "./components/AuthComponents/Register";
import NavBar from "./components/NavComponent/NavBar";
import Tasks from "./components/TasksComponents/Tasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/task" element={<Tasks />} />
                    </Routes>
                </BrowserRouter>
                <ToastContainer />
            </div>
        </>
    );
}

export default App;
