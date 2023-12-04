import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../Screen/HomePage";
import StackPage from "../Screen/DataStructures/StackPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/stack" element={<StackPage/>}/>
    </Routes>
  );
};

export default Router;