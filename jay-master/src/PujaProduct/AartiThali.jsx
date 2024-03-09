import React from 'react'
import TH1 from "./Aarti Thali/TH1.png"
import TH2 from "./Aarti Thali/TH2.png"
import TH3 from "./Aarti Thali/TH3.png"
import TH4 from "./Aarti Thali/TH4.png"
import TH5 from "./Aarti Thali/TH5.png"
import TH6 from "./Aarti Thali/TH6.png"
import TH7 from "./Aarti Thali/TH7.png"


function AartiThali() {
  return (
    <>
    <div className="icontainer">
        <div className="icard">
          <img src={TH1} alt="ed"></img>
          <p>Plain Aarti Thali</p>
        </div>
        <div className="icard">
          <img src={TH2} alt="ed"></img>
          <p>5-section Thali</p>
        </div>
        <div className="icard">
          <img src={TH3} alt="ed"></img>
          <p>3-Section Thali</p>
        </div>
        <div className="icard">
          <img src={TH4} alt="ed"></img>
          <p>Flower Itching Thali</p>
        </div>
        <div className="icard">
          <img src={TH5} alt="ed"></img>
          <p>Round Nakshi Thali</p>
        </div>
        <div className="icard">
          <img src={TH6} alt="ed"></img>
          <p>Itching Thali</p>
        </div>
        <div className="icard">
          <img src={TH7} alt="ed"></img>
          <p>Flower Plain Thali</p>
        </div>
      </div>
    </>
  )
}

export default AartiThali;