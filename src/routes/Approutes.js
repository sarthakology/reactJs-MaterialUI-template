import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

import E404Page from "../pages/E404Page";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Loader from "../components/Loader";

const AppRoutes = () => {
  const { loader } = useContext(GlobalContext);

  return (
    <Router>
      {/* Loader Component */}
      {loader && <Loader />}

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* 404 Page */}
        <Route path="*" element={<E404Page />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
