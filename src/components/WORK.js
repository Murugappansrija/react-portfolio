import React from "react";
import "./Mywork.css"
import Mywork from "./Mywork";
import WorkcardData from "./WorkcardData"

const Work =()=>{
    return(
        <div className="work-container">
         <h1 className="project-heading">Projects</h1>
         <div className="project-container">
         
         {WorkcardData.map((val,ind)=>{
            return(
                <Mywork
                key ={ind}
                imgsrc = {val.imgsrc}

                title ={val.title}
                Skills={val.skills}
                text = {val.text}
                view = {val.view}
                source = {val.source}
                />
            )
               
         })}
         </div>
        </div>
    
    )
}
export default Work;
   
