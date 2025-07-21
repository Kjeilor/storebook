import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../scenes/storebook/pages/dashboard/Dashboard';
import Customers from '../scenes/storebook/pages/customers/Customers';
import Orders from '../scenes/storebook/pages/orders/Orders';

const StorebookRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="customers" element={<Customers />} />
    <Route path="orders" element={<Orders />} />
    {/* Default route when user lands on /Storebook */}
    <Route index element={<Dashboard />} />
  </Routes>
);

export default StorebookRoutes;
