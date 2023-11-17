import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewLoading from "../MyComponents/viewLoading";
import Benawad from "../MyComponents/benawad";
import HomePage from "../MyComponents/homePage";
import Django from "../MyComponents/django";
import Jezen from "../MyComponents/jezen";
import ViewCommit from "../MyComponents/viewCommit";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/viewLoading" element={ViewLoading()} />
      <Route path="/" element={HomePage()} />
      <Route path="/django" element={Django()} />
      <Route path="/jezen" element={Jezen()} />
      <Route path="/benawad" element={Benawad()} />
      <Route path="/viewCommit" element={ViewCommit()} />
    </Routes>
  );
};

export default AllPages;
