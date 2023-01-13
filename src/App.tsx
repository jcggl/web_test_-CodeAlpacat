import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, Technology, Product, Team } from "@/pages";
import { GlobalLayout } from "@/components/Common";
import useRouteChecker from "@/hooks/useRouteChecker";

function App() {
  //동적라우팅 Google Analytics 적용
  useRouteChecker();
  
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
