import React from "react";
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Dashboard />, // Redirect to Dashboard
  },
  {
    type: "collapse",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Dashboard />, // Redirect to Dashboard
  },
  {
    type: "collapse",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Dashboard />, // Redirect to Dashboard
  },
  {
    type: "collapse",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Dashboard />, // Redirect to Dashboard
  },
  {
    type: "collapse",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <Dashboard />, // Redirect to Dashboard
  },
  {
    type: "collapse",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <Dashboard />, // Redirect to Dashboard
  },
];

export default routes;
