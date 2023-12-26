import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Storebook from "../scenes/storebook/Storebook";
import Dashboard from "../scenes/storebook/pages/dashboard/Dashboard";
import Customers from "../scenes/storebook/pages/customers/Customers";
import Orders from "../scenes/storebook/pages/orders/Orders";

const StorebookRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Storebook />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default StorebookRoutes;
