import React from 'react'
import { Link } from "react-router-dom"
import SB3 from "../BrassProduct/Box-Background/SB3.png"
import G12 from "../BrassProduct/Glass/G12.png"
import J6 from "../BrassProduct/Jug Set/J6.png"
import L2 from  "../BrassProduct/Lota/L2.png"
import MS7 from "../BrassProduct/Mukwass Set/MS7.png"
import Navbar from '../components/Navbar'

function BrassWare() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="card">
          <Link to="/SpiceBox" style={{ textDecoration: "none" }}>
            <img src={SB3} alt="ed"></img>
            <p>Spice box</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BGlass" style={{ textDecoration: "none" }}>
            <img src={G12} alt="ed"></img>
            <p>Glass</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BjugSet" style={{ textDecoration: "none" }}>
            <img src={J6} alt="ed"></img>
            <p>Jug</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Lota" style={{ textDecoration: "none" }}>
            <img src={L2} alt="ed"></img>
            <p>Lota</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Mukwass" style={{ textDecoration: "none" }}>
            <img src={MS7} alt="ed"></img>
            <p>Mukawass</p>
          </Link>
        </div>
      </div>

    </>
  )
}

export default BrassWare