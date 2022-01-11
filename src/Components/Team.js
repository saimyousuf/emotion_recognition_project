import Teamcard from "./Teamcard";
import React from "react";

function Team(){


    return <div className="container">
            
            <div>
        <img className="music_img" src="data:image/png;base64,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" ></img>
         </div>
        <div className="container">
        <div className="section-title">
            <h1 style={{color:"white"}}>Team Members</h1>
        </div>

        <tb>
            <tr>
            <td>
            <Teamcard name="Md Saim Yousuf" description="Engineer" email="saimyousuf@gmail.com" src_img="https://i.ibb.co/5RrCrSJ/20211012160639-IMG-7136-1.jpg" />
            </td>
            <td><Teamcard name="Huzaifa Chaiwala" description="Engineer" email="hchai52@gmail.com" src_img="https://i.ibb.co/pv5KYJr/Whats-App-Image-2022-01-11-at-1-31-46-AM.jpg"/></td>

            <td><Teamcard name="Aishee De Sarkar" description="Engineer" email="aishee2000@gmail.com" src_img="https://i.ibb.co/V33t1bk/Whats-App-Image-2022-01-11-at-1-31-43-AM.jpg" /></td>
            </tr>
            <tr>
            <td><Teamcard name="Syed Altmash Ashraf" description="Engineer" email="altumerc@gmail.com" src_img="https://i.ibb.co/R9dtnMr/Whats-App-Image-2022-01-11-at-1-24-13-AM.jpg" /></td>
            <td><Teamcard name="Kanishka" description="Engineer" email="kanishka0322@gmail.com" src_img="https://i.ibb.co/5WMbkr5/Whats-App-Image-2022-01-11-at-1-31-46-AM-1.jpg" /></td>
            <td><Teamcard name="Naved Shamsi" description="Engineer" email="navedshamsi.cal@gmail.com" src_img="https://i.ibb.co/k1vSjv1/Whats-App-Image-2022-01-11-at-1-34-55-AM.jpg" /></td>
        </tr>
        </tb>
            </div>
            </div>;
}
export default Team;