import React from 'react'
import SB1 from "./Box-Background/SB1.png"
import SB2 from "./Box-Background/SB2.png"
import SB3 from "./Box-Background/SB3.png"


function SpiceBox() {
  return (
    <>
    
    <div className="icontainer">
        <div className="icard">
          <img src={SB1} alt="ed"></img>
          <p>Itching Spice Box</p>
        </div>
        <div className="icard">
          <img src={SB2} alt="ed"></img>
          <p>Plain Spice Box</p>
        </div>
        <div className="icard">
          <img src={SB3} alt="ed"></img>
          <p>Color-Print Spice Box</p>
        </div>
      </div></>
  )
}

export default SpiceBox