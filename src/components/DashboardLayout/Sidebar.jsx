import { NavLink } from "react-router-dom";
import {
  ArrowUpDown,
  Calendar,
  ChartLine,
  LayoutDashboard,
  MessageCircle,
  Phone,
  Settings,
  SquarePlus,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div>
        <h2>
          Health<span>care.</span>
        </h2>
      </div>

      <div>
        <h5>General</h5>
        <nav className="list">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <LayoutDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/History"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <ArrowUpDown />
            <span>History</span>
          </NavLink>

          <NavLink
            to="/Calendar"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Calendar />
            <span>Calendar</span>
          </NavLink>

          <NavLink
            to="/Appointments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <SquarePlus />
            <span>Appointments</span>
          </NavLink>

          <NavLink
            to="/Statistics"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <ChartLine />
            <span>Statistics</span>
          </NavLink>
        </nav>
      </div>

      <div style={{ flex: 1 }}>
        <h5>Tools</h5>
        <nav className="list">
          <NavLink
            to="/chat"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MessageCircle />
            <span>Chat</span>
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Phone />
            <span>Support</span>
          </NavLink>
        </nav>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Settings />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}
