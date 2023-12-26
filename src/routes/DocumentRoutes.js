import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Documents from "../scenes/documents/Documents";
import Reports from "../scenes/documents/pages/reports/Reports";
import Archive from "../scenes/documents/pages/archive/Archive";

const DocumentsRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Documents />}>
        <Route index element={<Navigate to="Reports" />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="Archive" element={<Archive />} />
      </Route>
    </Routes>
    </div>
  );
};

export default DocumentsRoutes;
