import { Outlet } from "react-router-dom";
import Sidebar from "./DashboardLayout/Sidebar";

export default function Index() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <main
        style={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
