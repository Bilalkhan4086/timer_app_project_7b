import React, { Component } from "react";
import TimerButton from "../TimerButton/TimerButton";
import "./Timer.css";

class Timer extends Component {
  constructor(props: any) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  state: {
    minutes: number;
    seconds: number;
    isOn: boolean;
    timer: any;
  } = {
    minutes: 25,
    seconds: 0,
    isOn: false,
    timer: "",
  };

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }

    let Interval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }: any) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(Interval);
        } else {
          this.setState(({ minutes }: any) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
    this.setState({ timer: Interval });
  }

  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <h1 style={{textAlign:"center" ,color: "rgb(190, 32, 111)" }}>Timer App</h1>
        <div
          style={{
            // border: "3px solid #d3cadb",
            width: "90px",
            height: "70px",
            borderRadius: "100%",
            border:"3px solid rgb(190, 32, 111)",
            padding: "10%",
            display:"flex",
            margin:'auto'
                
          }}
        >
          <h1 className="headTime">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>
        <br/>
        <br/>
        <div className="timer-button-container">
          <TimerButton name="start-timer" buttonAction={this.startTimer} buttonValue='Start'/>
          <TimerButton name="stop-timer" buttonAction={this.stopTimer}  buttonValue='Stop'/>
          <TimerButton name="reset-timer" buttonAction={this.resetTimer} buttonValue='Reset'/>
            
        </div>
        <div>
        </div>
      </div>
    );
  };
}

export default Timer;