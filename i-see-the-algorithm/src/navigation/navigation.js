import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../Screen";
import {StackPage} from "../Screen/DataStructures";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/stack" element={<StackPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;