import React, { useState } from 'react'
import { useEffect } from 'react'


const Buttons = ({ button, volume, text, power, mapOne }) => {

    const buttonStyle = {
        backgroundColor: "whitesmoke",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "5px",
        boxShadow: "2px 2px #888888",
    }
    
    const [active, setActive] = useState(false)
    
    function buttonClick (){
      const audioTag = document.getElementById(button.keyTrigger);
      if(power){
        text(prevText => prevText = button.id)
        setActive(true)
        setTimeout(()=> {
          setActive(false)
        },200)
        audioTag.currentTime = 0;
        audioTag.volume = volume;
        audioTag.play();
      } else {
        audioTag.volume = 0;
      }
      
    }

    useEffect(()=>{
      document.addEventListener("keydown", pressHandler);
      return () => {
        document.removeEventListener("keydown", pressHandler)
      }

    },[])
    const pressHandler = (e) =>{
      if(e.keyCode === button.keyCode){
        buttonClick()
      }
    }
  return (
    <div id="buttons" className="drum-pad">
        <div style={buttonStyle} onClick={buttonClick}  className={`${active && "bg-warning"}`}>
            {button.keyTrigger}
            <audio src={button.url} id={button.keyTrigger} className="clip"></audio>
        </div>
        
    </div>
  )
}

export default Buttons