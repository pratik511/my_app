import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import NoPage from "../Component/NoPage";
import Login from "../Component/Login/Login";
import Header from "../Component/Header/Header";
import Dashboard from "../Component/Dashboard";
import About from "../Component/About";
import Contact from "../Component/Contact";
import SignUp from "../Component/SignUp/SignUp";
import { getToken } from "../utils/auth.util";

const RoutesPage = () => {
  const data = getToken();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            // element={<Login />}
            element={data ? <Navigate to={"/dashboard"} /> : <Login />}
          />
          <Route
            path="/signup"
            // element={<SignUp />}
            element={data ? <Navigate to={"/dashboard"} /> : <SignUp />}
          />
          <Route
            path="/dashboard"
            // element={<Dashboard />}
            element={data ? <Dashboard /> : <Navigate to={"/"} />}
          />
          <Route
            path="/home"
            // element={<Home /> }
            element={data ? <Home /> : <Navigate to={"/"} />}
          />
          <Route
            path="/about"
            // element={<About />}
            element={data ? <About /> : <Navigate to={"/"} />}
          />
          <Route
            path="/contact"
            // element={<Contact />}
            element={data ? <Contact /> : <Navigate to={"/"} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
