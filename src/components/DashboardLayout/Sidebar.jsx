import { NavLink } from "react-router-dom";
import "../style.css";
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
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#f8fbff",
          padding: "50px 30px 80px 70px",
          // borderTopLeftRadius: "50px",
          // borderBottomLeftRadius: "50px",
          flexDirection: "column",
          height: "100vh",
          overflowY: "auto",
          // position:'sticky'
          width: "400px",
          minWidth: "250px",
          top: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <h2 style={{ color: "turquoise", marginBottom: "10px" }}>
            Health<span style={{ color: "#3E36C9" }}>care.</span>
          </h2>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <h5
            style={{
              color: "lightgray",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            General
          </h5>
          <nav className="list">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#3E36C9",
              }}
            >
              <LayoutDashboard style={{ marginRight: "20px" }} />
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "lightgrey",
              }}
            >
              <ArrowUpDown style={{ marginRight: "20px" }} /> History
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "lightgrey",
              }}
            >
              <Calendar style={{ marginRight: "20px" }} />
              Calender
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "lightgrey",
              }}
            >
              <SquarePlus style={{ marginRight: "20px" }} /> Appointments
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "lightgrey",
              }}
            >
              <ChartLine style={{ marginRight: "20px" }} /> Statistics
            </NavLink>
          </nav>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <h5
            style={{
              color: "lightgray",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Tools
          </h5>
          <nav className="list">
            <NavLink
              to="/chat"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "lightgrey",
              }}
            >
              <MessageCircle style={{ marginRight: "20px" }} /> Chat
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "40px",
                color: "lightgrey",
              }}
            >
              <Phone style={{ marginRight: "20px" }} />
              Support
            </NavLink>
          </nav>
          {/* <nav className="list" style={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>  */}
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{
              display: "flex",
              flexDirection: "column",
              color: "lightgrey",
              flex: 1,
              paddingTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "lightgrey",
                flex: 1,
                paddingTop: "30px",
                alignItems: "flex-end",
              }}
            >
              <Settings style={{ marginRight: "20px" }} />
              Setting
            </div>
          </NavLink>
          {/* </nav> */}
        </div>
      </div>
    </>
  );
}
