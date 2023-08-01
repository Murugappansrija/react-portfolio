import { Link } from "react-router-dom"
import "./Mainimage.css"
import React from "react"
import introimage from "../assets/james-wheeler-ZOA-cqKuJAA-unsplash.jpg"

const Mainimage =  ()=>{
    return(
        <div  className = "main">
            <div className="mask">
            <img className="into-img"src={introimage} alt="homepage-image"/>

          </div>  
        <div className="content" >
            <p>HI , I AM MURUGAPPAN</p>
            <h1>FULLSTACK WEB DEVELOPER</h1>
        <div >
            <Link to={"/project"} className="btn">PROJECTS</Link>
            <Link to={"/contact"} className="btn btn-light">CONTACT</Link>
         
        </div>
        </div>
        </div>
        
    )
}
export default Mainimage