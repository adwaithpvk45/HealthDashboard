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
    <div style={{ display: "flex",width:'100%'}}>
      <div style={{ padding: "66px 30px 0px 30px",width:'50%' }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <SearchBar />
          {/* <AvatarIcon /> */}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "#3E36C9" }}>Dashboard</h2>
            <div>
              <label htmlFor="drop"></label>
              <select
                name="drop"
                id="drop"
                style={{
                  border: "none",
                  backgroundColor: "inherit",
                  color: "blue",
                  fontSize: "12px",
                }}
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex",width:'100%',height:'40%'}}>
            <div
              style={{
                margin: "0px 20px 40px 20px",
                backgroundColor: "#f8fbff",
                borderRadius: "30px",
                height:'100%',
                width:'60%'
              }}
            >
              {" "}
              <div style={{ display: "flex", justifyContent: "flex-end",margin:'20px 20px 0px 20px ' }}>
                <ZoomIn color="grey"/>
              </div>
              <div
                style={{
                  height: "90%",
                  width: "100%",
                  padding: "0px 70px 20px 70px",
                  borderRadius: "30px",
                }}
              >
                <img src={anatomy} width={"100%"} height={"100%"} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column",width:'40%'}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <HealthStatusCard
                  color="red"
                  pic={tooth}
                  name="Teeth"
                  date="26 Oct 2021"
                />
                <HealthStatusCard
                  color="green"
                  pic={lungs}
                  name="Lungs"
                  date="26 Oct 2021"
                />
                <HealthStatusCard
                  color="orange"
                  pic={Bone}
                  name="Bone"
                  date="26 Oct 2021"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    padding: "0px",
                    backgroundColor: "inherit",
                  }}
                >
                  <h6 style={{ color: "#3E36C9", fontWeight: "normal" }}>
                    Details
                  </h6>{" "}
                  <ArrowRight
                    size={20}
                    strokeWidth={1.75}
                    style={{ padding: "0px 0px 0px 10px", color: "#3E36C9" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ActivityCard />
      </div>
      <Schedule />
    </div>
  );
}
