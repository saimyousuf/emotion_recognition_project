import React from "react";

function Teamcard(props){
    return(
        <div>
        <div className="column">
        <div className="team">
            <div className="team-img">
                <img src={props.src_img} alt="Team Image"></img>
            </div>
            <div class="team-content">
                <h2>{props.name}</h2>
                {/* <h3>{props.role}</h3> */}
                <p>{props.description}</p>
                <h4>{props.email}</h4>
            </div>
        </div>
    </div>
    </div>);}

export default Teamcard;
