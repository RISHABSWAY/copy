import React from 'react'
import G2 from "./Glass/G2.png"
import G3 from "./Glass/G3.png"
import G4 from "./Glass/G4.png"
import G5 from "./Glass/G5.png"
import G6 from "./Glass/G6.png"
import G7 from "./Glass/G7.png"
import G8 from "./Glass/G8.png"
import G9 from "./Glass/G9.png"
import G10 from "./Glass/G10.png"
import G11 from "./Glass/G11.png"
import G12 from "./Glass/G12.png"
import G13 from "./Glass/G13.png"

function BGlass() {
  return (
    <>
    <div className="icontainer">
        <div className="icard">
          <img src={G2} alt="ed"></img>
          <p>Plain Glass</p>
        </div>
        <div className="icard">
          <img src={G3} alt="ed"></img>
          <p>Coloured-Printed Glass</p>
        </div>
        <div className="icard">
          <img src={G4} alt="ed"></img>
          <p>Art-Printed Glass</p>
        </div>
        <div className="icard">
          <img src={G5} alt="ed"></img>
          <p>Half-Hammered Glass</p>
        </div>
        <div className="icard">
          <img src={G6} alt="ed"></img>
          <p>Hammered Glass</p>
        </div>
        <div className="icard">
          <img src={G7} alt="ed"></img>
          <p>Bangal Glass</p>
        </div>
        <div className="icard">
          <img src={G8} alt="ed"></img>
          <p>Plain Glass</p>
        </div>
        <div className="icard">
          <img src={G9} alt="ed"></img>
          <p>Pear-Shaper Plain Glass</p>
        </div>
        <div className="icard">
          <img src={G10} alt="ed"></img>
          <p>Antique Glass</p>
        </div>
        <div className="icard">
          <img src={G11} alt="ed"></img>
          <p>Coloured Glass</p>
        </div>
        <div className="icard">
          <img src={G12} alt="ed"></img>
          <p>Antique Wine Glass</p>
        </div>
        <div className="icard">
          <img src={G13} alt="ed"></img>
          <p>Antique Brass Glass</p>
        </div>
      </div>
    </>
  )
}

export default BGlass