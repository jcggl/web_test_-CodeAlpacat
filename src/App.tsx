import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "pages";
import { GlobalLayout } from "components/Common";

const About = lazy(() => import("pages/About/About"));
const Technology = lazy(() => import("pages/Technology/Technology"));
const Product = lazy(() => import("pages/Product/Product"));
const Team = lazy(() => import("pages/Team/Team"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
