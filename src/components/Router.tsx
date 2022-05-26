import { Route, Routes } from "react-router-dom";
import { Results } from "./Results";
import React from "react";
import { Home } from "./Home";
import { Info } from "./Info/Info";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="results" element={<Results />} />
    </Routes>
  );
};
