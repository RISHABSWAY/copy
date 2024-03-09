import React from 'react'
import JS2 from "../CooperProduct/jug set/JS2.png"
import JS3 from "../CooperProduct/jug set/JS3.png"
import JS4 from "../CooperProduct/jug set/JS4.png"
import JS5 from "../CooperProduct/jug set/JS5.png"
import JS6 from "../CooperProduct/jug set/JS6.png"
import JS7 from "../CooperProduct/jug set/JS7.png"


function WaterJugset() {
  return (
    <>
    <div className="icontainer">
        <div className="icard">
          <img src={JS2} alt="ed"></img>
          <p>Patterned & Simple Jug Set</p>
        </div>
        <div className="icard">
          <img src={JS3} alt="ed"></img>
          <p>Half-Hammered Jug Set</p>
        </div>
        <div className="icard">
          <img src={JS4} alt="ed"></img>
          <p>Hammered Jug Set</p>
        </div>
        <div className="icard">
          <img src={JS5} alt="ed"></img>
          <p>Silver Touch Jug Set</p>
        </div>
        <div className="icard">
          <img src={JS6} alt="ed"></img>
          <p>Simple Plain Jug Set</p>
        </div>
        <div className="icard">
          <img src={JS7} alt="ed"></img>
          <p>Hammered Jug Set</p>
        </div>
        </div>
    </>
  )
}

export default WaterJugset