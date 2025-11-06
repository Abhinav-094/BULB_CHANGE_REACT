import { useState } from 'react'
import './App.css'
import IMG from './IMG/off_button.jpg';
import RED_IMAGE from "./IMG/red_bulb.jpg";
import GREEN_COLOR from "./IMG/gree_bulb.jpg";
import BLUE_BULB from "./IMG/blue_bulb.jpg";
import "./style.css";
//app function
function App() {
  const [bulb , setbulb]=useState(IMG);
  const [color , setcolor]=useState("");
  const [on_btn_diabled , on_btn_setenabled]=useState(true)
  const [off_btn_diabled, off_btn_setenabled] = useState(true);
  function on_bulb()
  {
   
     if(color=="red")
     {
        setbulb(RED_IMAGE);
     }
     else if (color =="green")
     {
        setbulb(GREEN_COLOR)
     }
     else if (color =="blue")
     {
       setbulb(BLUE_BULB)
     }
     else if (color== "")
     {
      on_btn_diabled(true)
     }
      on_btn_setenabled(true);
      off_btn_setenabled(false)

  }
//bulb off function
  function off_bulb(event)
  {
    setbulb(IMG)
    off_btn_setenabled(true);
    setcolor("");
  }

  //select color function
  function select_color(event)
  {
    setcolor(event.target.value);
    if(event.target.value=="red")
    {
       on_btn_setenabled(false);   
       off_btn_setenabled(true)    
    }
    else if (event.target.value=="green")
    {
      on_btn_setenabled(false);
      off_btn_setenabled(true);    
    }
    else if (event.target.value=="blue")
    {
      on_btn_setenabled(false);
      off_btn_setenabled(true);    
    }
    else if (event.target.value=="")
    {
      on_btn_setenabled(true);
      setbulb(IMG)
      off_btn_setenabled(true);
    }
  }
  return (
    <>
      <div id='main_div'>
        <img src={bulb} width="250px" height="250px" alt="Bulb" />
        <br />
        <br />
        <br></br>
        <br></br>
        <button id="on_btn" onClick={on_bulb} disabled={on_btn_diabled}>
          ON
        </button>
        &nbsp;&nbsp;&nbsp;
        <button id="off_btn" onClick={off_bulb} disabled={off_btn_diabled}>
          OFF
        </button>
        &nbsp;&nbsp;&nbsp;
        <select id="select_id" onChange={select_color} value={color}>
          <option value={""}>Select Bulb Color</option>
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
        </select>
      </div>
    </>
  );
}

export default App
