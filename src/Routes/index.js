import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import NoPage from "../Component/NoPage";
import Login from "../Component/Login/Login";
import Header from "../Component/Header/Header";
import Dashboard from "../Component/Dashboard";

const RoutesPage = () => {
  const data = localStorage?.getItem("Data");
  console.log("data", data);
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route
            path="/"
            element={data ? <Navigate to={"/dashboard"} /> : <Login />}
          />
          <Route
            path="/dashboard"
            element={data ? <Dashboard /> : <Navigate to={"/"} />}
          />
          <Route
            path="/home"
            element={data ? <Home /> : <Navigate to={"/"} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
