import React from 'react'
import B1 from "./Basket/B1.png"
import B2 from "./Basket/B2.png"
import B3 from "./Basket/B3.png"

function Basket() {
  return (
    <>
    <div className="icontainer">
        <div className="icard">
          <img src={B1} alt="ed"></img>
          <p>Round Basket with Stand</p>
        </div>
        <div className="icard">
          <img src={B2} alt="ed"></img>
          <p>Round Basket without Stand</p>
        </div>
        <div className="icard">
          <img src={B3} alt="ed"></img>
          <p>Shatbhuj Basket</p>
        </div>
      </div>
    </>
  )
}

export default Basket