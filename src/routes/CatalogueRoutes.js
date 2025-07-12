import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Catalogue from "../scenes/catalogue/Catalogue";
import ListingsPage from "../scenes/catalogue/pages/listings/ListingsPage.jsx";

const CatalogueRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />}>
      <Route index element={<Navigate to="listings" />} />
      <Route path="listings" element={<ListingsPage />} />    
      </Route>
    </Routes>
  );
};

export default CatalogueRoutes;
