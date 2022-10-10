import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Data from './Data';
import Buttons from './components/Buttons';
import Sidecontrol from './components/Sidecontrol';
// import { Form } from 'react-bootstrap'
import { useState } from 'react';


const App = () => {

  
  // const [text, setText] = useState("")
  const [volume, setVolume] = useState(1)
  const [power, setPower] = useState(true)
  const [text, setText] = useState("")

  function slideHandler (){
    setPower(prevPower => !prevPower)
  }

  // const dataMap = Data.map(data => )
  
  
  return (
    <div className="container" id="drum-machine">
      <div className="row">
        <div className="col-8" id="buttons">
          <div id="buttons" className="drum drum-pad">
            {Data.map(button => {
            return <Buttons 
            key={button.id}
            button={button}
            volume={volume}
            text={setText}
            power={power}
            />
            })}
            <div id="display">{text}</div>
          </div>
          <input
          type="range" 
          value={volume}
          step="0.01"
          min="0"
          max="1"
          onChange={(e) => setVolume(e.target.value)}
          className="w-50"/>
        </div>
        <div className="col-4 col-xs-2" id="sidebar">
          <Sidecontrol 
          handlerSlide={slideHandler}
          power={power}
          value={volume}
          />
        </div>
      </div>
    </div>
  )
}

export default App
