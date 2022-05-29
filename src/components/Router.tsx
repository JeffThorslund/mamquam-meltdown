import { Routes, Route } from "react-router-dom";
import { EventTypeTabs } from "./Results";
import React from "react";
import { Home } from "./Home";
import { Routes as RoutesEnum } from "../types";

export const Router = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Home} element={<Home />} />
      <Route path={RoutesEnum.Results} element={<EventTypeTabs />} />
    </Routes>
  );
};
