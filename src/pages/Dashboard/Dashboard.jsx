import SearchBar from "../../components/commonui/SearchBar";
import HealthStatusCard from "./components/HealthStatusCards";
import ActivityCard from "./components/ActivityCard";
import Schedule from "./components/Schedules";
import tooth from "../../assets/Tooth.webp";
import lungs from "../../assets/Lungs.png";
import Bone from "../../assets/Bone.webp";
import { ArrowRight, ZoomIn } from "lucide-react";
import anatomy from "../../assets/anatomy.png";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="search-bar-container">
          <SearchBar />
        </div>

        <div  className="dashboard-header">
          <h2>Dashboard</h2>
          <select name="drop" id="drop">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="dashboard-main">
          <div className="anatomy-card">
            <div className="zoom-icon">
              <ZoomIn color="grey" />
            </div>
            <div className="anatomy-img">
              <img src={anatomy} alt="anatomy" />
            </div>
          </div>

          <div className="health-cards">
            <div className="health-card-list">
              <HealthStatusCard color="red" pic={tooth} name="Teeth" date="26 Oct 2021" />
              <HealthStatusCard color="green" pic={lungs} name="Lungs" date="26 Oct 2021" />
              <HealthStatusCard color="orange" pic={Bone} name="Bone" date="26 Oct 2021" />
            </div>
            <div className="details-button">
              <button>
                <h6>Details</h6>
                <ArrowRight size={20} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>

        <ActivityCard />
      </div>

      <Schedule />
    </div>
  );
}
