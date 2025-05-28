export default function AppointmentCard({pic,name,time,drName,color,active}){
    return(
        <div style={{display:'flex',flexDirection:'column',backgroundColor:color,padding:'20px 20px 20px 20px',borderRadius:'30px',color:'white',maxWidth:'300px'}}>
            <div style={{display:'flex',justifyContent:"space-between",alignItems:'center',gap:'50px'}}>
                <h5 style={{margin:'0px',color:active?'white':"black",fontWeight:"bolder"}}>{name}</h5>
                <img src={pic} style={{width:'25px',height:'25px'}}></img>
            </div>
            <div>
                <h6 style={{margin:'10px 0px 0px 0px',display:'flex',justifyContent:"flex-start",color:active?'white':"black",fontWeight:"normal"}}>{time}</h6>
                {drName && <h6 style={{margin:'0px',display:'flex',justifyContent:"flex-start",color:active?'white':"black",fontWeight:"normal"}}>Dr. {drName}</h6>}
            </div>
        </div>
    )
}