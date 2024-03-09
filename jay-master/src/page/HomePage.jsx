import React from 'react'
import "./homepage.css"
import WC2 from "../CooperProduct/watercontainer/WC2.png"
import G12 from "../BrassProduct/Glass/G12.png"
import BT5 from "../BronzeProduct/BT5.png"
import TH3 from "../PujaProduct/Aarti Thali/TH3.png"
import S4 from "../idols/S4.png"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

function HomePage() {
  return (

    <>
    <Navbar />
    <div className="box">
      <div className="cont-hp">
      <a href="/CopperWare">
        <img src={WC2} alt="Copper Products" />
        <p>Copper Products</p>
        </a>
      </div>
      <div className="cont-hp">
      <a href="/Brassware">
        <img src={G12} alt="Brass Products" />
        <p>Brass Products</p>
        </a>
      </div>
      <div className="cont-hp">
      <a href="/Bronzeware">
        <img src={BT5} alt="Bronze Products" />
        <p>Bronze Products</p>
        </a>
      </div>
      <div className="cont-hp">
      <a href="/PujaUtensils">
        <img src={TH3} alt="Puja Utensils" />
        <p>Puja Utensils</p>
      </a>
      </div>
      <div className="cont-hp">
      <a href="/Idols">
        <img src={S4} alt="Idols" />
        <p>Idols</p>
        </a>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage