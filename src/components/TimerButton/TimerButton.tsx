import React from 'react';
import './TimerButton.css';
import { Button } from '@material-ui/core';

const TimerButton = ({ buttonAction, buttonValue,name }:any) => {
  return(
  <div>
    <Button 
    color="secondary" 
    variant="contained" 
    className={name} 
    onClick={()=>{buttonAction()}}
    >
      <p>
        {buttonValue}
      </p>
    </Button>
  </div>
  );
}

export default TimerButton;