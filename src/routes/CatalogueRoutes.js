import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Catalogue from "../scenes/catalogue/Catalogue"
import Products from "../scenes/catalogue/pages/products/Products";
import Services from "../scenes/catalogue/pages/services/Services";

const CatalogueRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />}>
        <Route index element={<Navigate to="products" />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default CatalogueRoutes;
