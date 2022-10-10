import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Sidecontrol = ({ power, handlerSlide, value }) => {

  
  // console.log(slide)
  // const [bank, setBank] = useState(true)
  // function bankHandler (){
  //   setBank(prevBank => !prevBank)
  // }
  return (
    <div>
      <div className="container rounded-lg" id="sideControl">
        <h4>Power</h4>
        <div className="bg-dark" id="powerCase" style={power ? {justifyContent: "end"} : {justifyContent: "start"}}>
          <button onClick={handlerSlide} id="powerButton" style={power ? {backgroundColor: "green"} : {backgroundColor: "white"}}></button>
        </div>
        <div className id="display-volume">{`volume: ${Math.floor(value * 100)}`}</div>
      </div>
    </div>
  )
}

export default Sidecontrol