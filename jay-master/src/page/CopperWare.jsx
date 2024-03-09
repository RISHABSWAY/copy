import React from 'react'
import { Link } from "react-router-dom"
import BE1 from "../CooperProduct/watercontainer/BE1.png"
import WC2 from "../CooperProduct/watercontainer/WC2.png"
import CB1 from "../CooperProduct/copperbottle/CB1.png"
import JS4 from "../CooperProduct/jug set/JS4.png"
import G9 from "../CooperProduct/glass/G9.png"
import BP14 from "../CooperProduct/bedroompot/BP14.png"
import Navbar from '../components/Navbar'

function CopperWare() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="card">
          <Link to="/CopperBottle" style={{ textDecoration: "none" }}>
            <img src={CB1} alt="ed"></img>
            <p>Copper Bottle</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/WaterContainer" style={{ textDecoration: "none" }}>
            <img src={WC2} alt="ed"></img>
            <p>Water Container</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Beda" style={{ textDecoration: "none" }}>
            <img src={BE1} alt="ed"></img>
            <p>Beda</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BedRoom" style={{ textDecoration: "none" }}>
            <img src={BP14} alt="ed"></img>
            <p>Bedroom Pot</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Glass" style={{ textDecoration: "none" }}>
            <img src={G9} alt="ed"></img>
            <p>Glass</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/WaterJugset" style={{ textDecoration: "none" }}>
            <img src={JS4} alt="ed"></img>
            <p>Water Jug Set</p>
          </Link>
        </div>
      </div>

    </>
  )
}

export default CopperWare