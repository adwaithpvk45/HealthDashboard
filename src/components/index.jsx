import { Outlet } from "react-router-dom";
import Sidebar from "./DashboardLayout/Sidebar";

export default function Index(){
    return (
        <div style={{display:'flex'}}>
            <Sidebar/>
      {/* <div style={{ padding: '1rem', flexGrow: 1 }}>                <Topbar/> */}
                <main >
                   <Outlet/>
                </main>
            {/* </div> */}
        </div>
    )

}