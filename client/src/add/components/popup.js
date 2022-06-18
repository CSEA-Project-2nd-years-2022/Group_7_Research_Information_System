import React from 'react'
import "../styles.css";

function Popup(props) {
    return(props.trigger) ? (
      <div 
      className="popup" >
          <div className="popup-inner" style={{ borderRadius:"8px",border:"0px"}}>
            <p className="popupnote"><b>NOTE:</b></p>
            <p className="popuppassword" >{props.popupStr}</p>
            <button 
            
            className="ok-btn" onClick={() => props.setTrigger(false) }>OK</button>
            {props.children}
          </div>
      </div>
    ) : "";
  }
  
  export default Popup