import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import NoPage from "../Component/NoPage";
import Login from "../Component/Login/Login";
import Header from "../Component/Header/Header";

const RoutesPage = () => {
  const data = localStorage?.getItem("Data");
  console.log("data", data);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={data ? <Navigate to={"/home"} /> : <Login />}
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
