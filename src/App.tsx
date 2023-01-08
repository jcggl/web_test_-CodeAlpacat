import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, Technology, Product, Team } from "@/pages";
import { GlobalLayout } from "@/components/Common";

function App() {
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
