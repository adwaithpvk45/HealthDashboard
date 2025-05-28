export default function Date({ day, date,active,time,live }) {
  console.log("🚀 ~ Date ~ time:", time)
  return (
    <div style={{backgroundColor:active?"#f4f8fe":"inherit",padding:'10px 15px 6px 15px',borderRadius:'15px'}}>
      <h6 style={{color:"#613583",margin:'10px 0px 0px 0px'}}>{day||"--"}</h6>
      <h3 style={{color:"#613583",margin:'0px 0px 10px 0px'}}>{date||"--"}</h3>
      <h6 style={{backgroundColor:live===time[0]?"#3E36C9":"inherit",color:live===time[0]?"white":"#613583", padding:'5px 10px 5px 10px',borderRadius:'15px',margin:'3px 0px 0px 0px'}}>{time[0]||"--"}</h6>
      <h6 style={{backgroundColor:live===time[1]?"#3E36C9":"inherit",color:live===time[1]?"white":"#613583", padding:'5px 10px 5px 10px',margin:'3px 0px 0px 0px',borderRadius:'15px'}}>{time[1]||"--"}</h6>
      <h6 style={{backgroundColor:live===time[2]?"#3E36C9":"inherit",color:live===time[2]?"white":"#613583", padding:'5px 10px 5px 10px',margin:'3px 0px 0px 0px',borderRadius:'15px'}}>{time[2]||"--"}</h6>
    </div>
  );
}
