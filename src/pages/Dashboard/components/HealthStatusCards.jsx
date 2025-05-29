
export default function HealthStatusCard({color,pic,name,date}){
console.log("🚀 ~ HealthStatusCard ~ color:", color)

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',backgroundColor:'#f8fbff',padding:'5px 10px 20px 10px',borderRadius:'35px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <img src={pic} style={{width:'50px',height:'35px'}}/>
                <h4 style={{color:'#3e36c9'}}>{name}</h4>                
            </div>
            <h6 style={{color:"grey",margin:'0px 0px 0px 14px'}}>
                Date:{" "}{date}
            </h6>
            <div>
                <progress id="progress"  value="70" max={100} style={{height:"40%",width:'75%',margin:'0px 0px 0px 0px'}}></progress>
            </div>
        </div>
    )
}