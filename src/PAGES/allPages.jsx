import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../MyComponents/homePage";
import ViewCommit from "../MyComponents/viewCommit";
import LoadingPage from "../MyComponents/loadingPage";
// import ViewCommitsPage from "../MyComponents/commit";

const AllPages = () => {



  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/view-commit/" element={<ViewCommit/>} />
      <Route path="/loading/" element={<LoadingPage/>} />
      {/* <Route path="/commit" element={<ViewCommitsPage/>} /> */}
      {/* <Route path="/view-commit/:viewcommitId" element={<ViewCommit/>} /> */}
    
    </Routes>
  );
};

export default AllPages;
