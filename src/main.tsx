import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./components/views/Main.tsx";
import Proyectos from "./components/views/Proyectos.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
