import { BellRingIcon, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "10px",
        padding: "10px 5px 10px 15px",
        borderRadius: "10px",
        border: "1px lightgrey solid",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div  style={{
        display: "flex",
        borderRadius: "10px",
        alignItems: "center",
        width: "100%",
      }}>
        <Search />
        <input type="text" placeholder="Search" style={{ border: "0px",width:'100%',padding:'0px 10px'}} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0px 16px",
          alignItems: "center",
        }}
      >
        <BellRingIcon color="#3E36C9" />
      </div>
    </div>
  );
}
