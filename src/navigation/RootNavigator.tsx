import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "../components/Layouts/AppNavbar";

const HomePage = React.lazy(() => import("../screens/home"));

const RootNavigator: React.FC = () => {
  return (
    <BrowserRouter>
      <AppNavbar />
      
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default RootNavigator;
