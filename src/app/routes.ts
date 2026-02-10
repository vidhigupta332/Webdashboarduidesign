import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { DashboardHome } from "./pages/DashboardHome";
import { Alerts } from "./pages/Alerts";
import { MapView } from "./pages/MapView";
import { Remedies } from "./pages/Remedies";
import { Devices } from "./pages/Devices";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardHome },
      { path: "alerts", Component: Alerts },
      { path: "map", Component: MapView },
      { path: "remedies", Component: Remedies },
      { path: "devices", Component: Devices },
    ],
  },
]);
