import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../MyComponents/homePage";
import ViewCommit from "../MyComponents/viewCommit";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/view-commit" element={<ViewCommit/>} />
    </Routes>
  );
};

export default AllPages;
