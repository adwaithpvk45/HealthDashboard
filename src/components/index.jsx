import { Outlet } from "react-router-dom";
import Sidebar from "./DashboardLayout/Sidebar";

export default function Index() {
  return (
    <div className="layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
