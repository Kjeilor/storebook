import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../scenes/login/Login";

import Updates from "../scenes/updates/Updates";
import Inbox from "../scenes/updates/Pages/inbox/Inbox";
import Track from "../scenes/updates/Pages/track/Track";

import General from "../scenes/general/General";
import Settings from "../scenes/general/pages/settings/Settings";
import Billing from "../scenes/general/pages/billing/Billing";
import Support from "../scenes/general/pages/support/Support";

import Explore from "../scenes/explore/Explore";

import Storefront from "../scenes/storefront/Storefront";
import Dashboard from "../scenes/storefront/pages/dashboard/Dashboard";
import Customers from "../scenes/storefront/pages/customers/Customers";
import Orders from "../scenes/storefront/pages/orders/Orders";

import Teams from "../scenes/teams/Teams";

import Catalogue from "../scenes/catalogue/Catalogue";
import Products from "../scenes/catalogue/pages/products/Products";
import Services from "../scenes/catalogue/pages/services/Services";

import Marketing from "../scenes/marketing/Marketing";
import Campaigns from "../scenes/marketing/pages/campaigns/Campaigns";
import Programs from "../scenes/marketing/pages/programs/Programs";
import Assets from "../scenes/marketing/pages/assets/Assets";

import SupplyDock from "../scenes/supplydock/SupplyDock";
import Suppliers from "../scenes/supplydock/pages/suppliers/Suppliers";
import Dock from "../scenes/supplydock/pages/dock/Dock";

import Documents from "../scenes/documents/Documents";
import Reports from "../scenes/documents/pages/reports/Reports";
import Archive from "../scenes/documents/pages/archive/Archive";

const Router = () => {
  return (
    <Routes>
      <Route path="updates" element={<Updates />}>
        <Route index element={<Navigate to="inbox" />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="track" element={<Track />} />
      </Route>

      <Route path="general" element={<General />}>
        <Route index element={<Navigate to="settings" />} />
        <Route path="settings" element={<Settings />} />
        <Route path="billing" element={<Billing />} />
        <Route path="support" element={<Support />} />
      </Route>

      <Route path="explore" element={<Explore />} />

      <Route
        path="/"
        element={<Navigate to="storefront" element={<Storefront />} />}
      >
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="storefront" element={<Storefront />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      <Route path="teams" element={<Teams />} />

      <Route path="catalogue" element={<Catalogue />}>
        <Route index element={<Navigate to="products" />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
      </Route>

      <Route path="marketing" element={<Marketing />}>
        <Route index element={<Navigate to="campaigns" />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="programs" element={<Programs />} />
        <Route path="assets" element={<Assets />} />
      </Route>

      <Route path="supplydock" element={<SupplyDock />}>
        <Route index element={<Navigate to="suppliers" />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="dock" element={<Dock />} />
      </Route>

      <Route path="documents" element={<Documents />}>
        <Route index element={<Navigate to="reports" />} />
        <Route path="reports" element={<Reports />} />
        <Route path="archive" element={<Archive />} />
      </Route>
    </Routes>
  );
};

export default Router;
