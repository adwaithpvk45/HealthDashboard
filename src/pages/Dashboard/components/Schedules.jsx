import AvatarIcon from "../../../components/commonui/Avatar";
import tooth from "../../../assets/Tooth.webp";
import AppointmentCard from "./AppointmentCards";
import Date from "../../../components/commonui/Date";
import { ArrowLeft, ArrowRight } from "lucide-react";

const calendarData = [
  {
    day: "Mon",
    date: 25,
    active: false,
    times: ["10:00", "11:00", "12:00"],
    live: null,
  },
  {
    day: "Tues",
    date: 26,
    active: true, // highlighted column
    times: ["08:00", "09:00", "10:00"],
    live: "09:00", // highlighted time
  },
  {
    day: "Wed",
    date: 27,
    active: false,
    times: ["12:00", "13:00"],
    live: null,
  },
  {
    day: "Thurs",
    date: 28,
    active: false,
    times: ["11:00"], // highlighted
    live: "11:00",
  },
  {
    day: "Fri",
    date: 29,
    active: false,
    times: ["10:00", "14:00", "16:00"],
    live: null,
  },
  {
    day: "Sat",
    date: 30,
    active: false,
    times: ["12:00", "14:00", "15:00"],
    live: "12:00", // highlighted
  },
  {
    day: "Sun",
    date: 31,
    active: false,
    times: ["09:00", "10:00", "11:00"],
    live: "09:00", // highlighted
  },
];

export default function Schedule() {
  return (
    <div
      style={{
        padding: "66px 30px 0px 30px",
        backgroundColor: "#f8fbff",
        borderTopRightRadius: "50px",
        borderBottomRightRadius: "50px",
        // height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "50px",
          margin:'0px 10px 0px 0px'
        }}
      >
        <AvatarIcon />
        <div
          style={{
            display: "flex",
            width: "50px",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            backgroundColor: "#3E36C9",
            borderRadius: "15px",
            marginLeft: "20px",
            color: "white",
          }}
        >
          +
        </div>
      </div>
      <div>
        <div>
          <div style={{ display:'flex',justifyContent:'space-between'}}>
            <h5 style={{margin:'20px 0px 0px 25px',color:'#3E36C9'}}>October 2021</h5>
            <div style={{display:'flex',alignItems:'flex-end'}}>
              <ArrowLeft size={20} color="#613583" strokeWidth={1.75} />
              <ArrowRight size={20} color="#613583" strokeWidth={1.75} />
            </div>
          </div>
          <div style={{display:'flex',justifyContent:"space-between"}}>
            {...calendarData.map((item) => {
              return (<Date
                key={item?.day}
                day={item?.day}
                date={item?.date}
                active={item?.active}
                time={item?.times}
                live={item?.live}
              />
              )
})}
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", padding:'20px' }}>
          <AppointmentCard
            pic={tooth}
            name={"Dentist"}
            time={"09:00-12:00"}
            drName={"Cameron Williamson"}
            color={"#3E36C9"}
            active="active"
          />
          <AppointmentCard
            pic={tooth}
            name={"Physiotherapy Appointment"}
            time={"11:00-12:00"}
            drName={"Kevin Djones"}
            color={"#e0e6ff"}
          />
        </div>
      </div>
      <div style={{ marginTop: "0px" }}>
        <h3 style={{ display: "flex", justifyContent: "flex-start",margin:'0px 0px' }}>
          The Upcoming Schedule
        </h3>
        <div>
          <h5 style={{ display: "flex",color:'grey' }}>On {"Thursday"}</h5>
          <div style={{ display: "flex", gap: "40px" }}>
            <AppointmentCard
              pic={tooth}
              name={"Physiotherapy Appointment"}
              time={"11:00 AM"}
              color={"#e0e6ff"}
            />
            <AppointmentCard
              pic={tooth}
              name={"Physiotherapy Appointment"}
              time={"2:00 PM"}
              color={"#e0e6ff"}
            />
          </div>
        </div>
        <div>
          <h5 style={{ display: "flex",color:'grey'  }}>On {"Saturday"}</h5>
          <div style={{ display: "flex", gap: "40px" }}>
            <AppointmentCard
              pic={tooth}
              name={"Physiotherapy Appointment"}
              time={"11:00 AM"}
              color={"#e0e6ff"}
            />
            <AppointmentCard
              pic={tooth}
              name={"Neurologist"}
              time={"12:00 AM"}
              color={"#e0e6ff"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
