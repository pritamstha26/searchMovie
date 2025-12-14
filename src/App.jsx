import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import CardList from "./page/CardList/CardList";
import router from "./route/route";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      {router.map((rou, index) => {
        return <Route key={index} path={rou.path} element={rou.element} />;
      })}
    </Routes>
  );
}
