import React from 'react'
import { Link } from "react-router-dom"
import D27 from "../PujaProduct/Diva/D27.png"
import TH3 from "../PujaProduct/Aarti Thali/TH3.png"
import G7 from "../PujaProduct/Ghanti/G7.png"
import B1 from "../PujaProduct/Basket/B1.png"
import S6 from "../PujaProduct/Stick-Holder/S6.png"
import Navbar from '../components/Navbar'

function PujaPage() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="card">
          <Link to="/Diva" style={{ textDecoration: "none" }}>
            <img src={D27} alt="ed"></img>
            <p>Diva</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/AartiThali" style={{ textDecoration: "none" }}>
            <img src={TH3} alt="ed"></img>
            <p>Aarti Thali</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Bell" style={{ textDecoration: "none" }}>
            <img src={G7} alt="ed"></img>
            <p>Bell</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Basket" style={{ textDecoration: "none" }}>
            <img src={B1} alt="ed"></img>
            <p>Basket</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/StickHolder" style={{ textDecoration: "none" }}>
            <img src={S6} alt="ed"></img>
            <p>Stick Holder</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default PujaPage