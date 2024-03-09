import React from 'react'
import G1 from "./glass/G1.png"
import G2 from "./glass/G2.png"
import G3 from "./glass/G3.png"
import G4 from "./glass/G4.png"
import G5 from "./glass/G5.png"
import G6 from "./glass/G6.png"
import G7 from "./glass/G7.png"
import G8 from "./glass/G8.png"
import G9 from "./glass/G9.png"


function Glass() {
  return (
    <>
    <div className="icontainer">
        <div className="icard">
          <img src={G1} alt="ed"></img>
          <p>Half-Hammered Glass</p>
        </div>
        <div className="icard">
          <img src={G2} alt="ed"></img>
          <p>Antique Glass</p>
        </div>
        <div className="icard">
          <img src={G3} alt="ed"></img>
          <p>Half-Hammered Glass</p>
        </div>
        <div className="icard">
          <img src={G4} alt="ed"></img>
          <p>Copper Steel Glass</p>
        </div>
        <div className="icard">
          <img src={G5} alt="ed"></img>
          <p>Antique Glass</p>
        </div>
        <div className="icard">
          <img src={G6} alt="ed"></img>
          <p>Copper Mug Set</p>
        </div>
        <div className="icard">
          <img src={G7} alt="ed"></img>
          <p>DinnerSet</p>
        </div>
        <div className="icard">
          <img src={G8} alt="ed"></img>
          <p>Copper Mug</p>
        </div>
        <div className="icard">
          <img src={G9} alt="ed"></img>
          <p>Hammered Glass Set</p>
        </div>
      </div>
    </>
  )
}

export default Glass