import React from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
import Radio from '../UI/Radio';
import { addTeeTime } from '../Util/addteetime';
import { useContext } from "react";
import TeeTimeTableContext from "../../store/tee-time-table";
import { useState } from 'react';
import classes from './NewTeeTimeForm.module.css';
const NewTeeTimeForm = (props) => {
  const ctx = useContext(TeeTimeTableContext);
  const date = props.teeTimeDate;
  const teeTimeTable = props.teeTimeTable;
  const teeTime1 = teeTimeTable[1];
  const teeTime2 = teeTimeTable[2];
  const teeTime3 = teeTimeTable[3];
  const teeTime4 = teeTimeTable[4];
  const [state1, setState1] = useState(false);
  const radioHandler1 = () => {
    if (!state1) {
      setState2(false);
      setState3(false);
      setState4(false);
    }
    setState1(!state1);
  };
  const [state2, setState2] = useState(false);
  const radioHandler2 = () => {
    if (!state2) {
      setState1(false);
      setState3(false);
      setState4(false);
    }
    setState2(!state2);
  };
  const [state3, setState3] = useState(false);
  const radioHandler3 = () => {
    if (!state3) {
      setState1(false);
      setState2(false);
      setState4(false);
    }
    setState3(!state3);
  };
  const [state4, setState4] = useState(false);
  const radioHandler4 = () => {
    if (!state4) {
      setState1(false);
      setState2(false);
      setState3(false);
    }
    setState1(!state4);
  };
  const [isValid, setValid] = useState(true);
  const submitHandler = (event) => {
    const teeTimeValue = event.target.teeTime.value.split('-');
    const teeNbr = teeTimeValue[0];
    const time = teeTimeValue[1];
    const name = event.target.golfer.value;
    let email = ctx.golferEmailsMap[name];
    if (!email) {
      email = '';
    }
    if (name && time) {
      addTeeTime(email, name, teeNbr, date, time);
      setValid(true);
    } else {
      setValid(false);
      event.preventDefault();
    }
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h3>Sign up for tee spot on {date}</h3>
        <h4>Select tee time</h4>
        {teeTime1 && <Radio id={teeTime1} checked={state1} onChange={radioHandler1} name="teeTime" value={`1-${teeTime1}`} text={teeTime1}/>}
        {teeTime2 && <Radio id={teeTime2} checked={state2} onChange={radioHandler2} name="teeTime" value={`2-${teeTime2}`} text={teeTime2}/>}
        {teeTime3 && <Radio id={teeTime3} checked={state3} onChange={radioHandler3} name="teeTime" value={`3-${teeTime3}`} text={teeTime3}/>}
        {teeTime4 && <Radio id={teeTime4} checked={state4} onChange={radioHandler4} name="teeTime" value={`4-${teeTime4}`} text={teeTime4}/>}
        <label>Your name:  </label><input id='golfer' name='golfer' />
        <Button>Add Yourself</Button>
        <p className={classes.error}>{`${!isValid ? 'Please select a time and enter a name' : ''}`}</p>
      </form>
    </Card>
  );
};
export default NewTeeTimeForm;
