import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./components/views/Main.tsx";
import Proyectos from "./components/views/Proyectos.tsx";
import Proyecto1 from "./components/views/Proyecto1.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyecto1" element={<Proyecto1 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
