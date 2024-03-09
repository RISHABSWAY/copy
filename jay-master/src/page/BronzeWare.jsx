import React from 'react'
import { Link } from "react-router-dom"
import BB1 from "../BronzeProduct/BB1.png"
import DS from "../BronzeProduct/DS.png"
import G1 from "../BronzeProduct/G1.png"
import JU1 from "../BronzeProduct/JU1.png"
import S1 from "../BronzeProduct/S1.png"
import Navbar from '../components/Navbar'

function BronzeWare() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="card">
          <Link to="/Bowl" style={{ textDecoration: "none" }}>
            <img src={BB1} alt="ed"></img>
            <p>Bowl</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BrGlass" style={{ textDecoration: "none" }}>
            <img src={G1} alt="ed"></img>
            <p>Glass</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Spoon" style={{ textDecoration: "none" }}>
            <img src={S1} alt="ed"></img>
            <p>Spoon</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Jug" style={{ textDecoration: "none" }}>
            <img src={JU1} alt="ed"></img>
            <p>Jug</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/DinnerSet" style={{ textDecoration: "none" }}>
            <img src={DS} alt="ed"></img>
            <p>DinnerSet</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BronzeWare