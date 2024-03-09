import React from 'react'
import BT5 from "./BT5.png"
import DS from "./DS.png"


function DinnerSet() {
  return (
    <>
    <div className="icontainer">
        <div className="icard">
          <img src={BT5} alt="ed"></img>
          <p>Bronze Thali Set </p>
        </div>
        <div className="icard">
          <img src={DS} alt="ed"></img>
          <p>Bronze Dinner Set</p>
        </div>
      </div>
    </>
  )
}

export default DinnerSet