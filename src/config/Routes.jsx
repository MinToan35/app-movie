import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" element={<Home />} />
    </Switch>
  );
};

export default Routes;
