import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("../screens/home"));

const RootNavigator: React.FC = () => {
  return (
    <BrowserRouter>
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
