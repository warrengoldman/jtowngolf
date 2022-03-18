import React, { useContext, useState } from "react";
import TeeTimeTableContext from "../../store/tee-time-table";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Radio from "../UI/Radio";
import { addTeeTime } from "../Util/addteetime";
import classes from "./NewTeeTimeForm.module.css";
const NewTeeTimeForm = (props) => {
  const showTeeTimesHandler = props.showTeeTimesHandler;
  const ctx = useContext(TeeTimeTableContext);
  const date = props.teeTimeDate;
  const teeTimeTable = props.teeTimeTable;
  const teeTime1 = teeTimeTable[1];
  const teeTime2 = teeTimeTable[2];
  const teeTime3 = teeTimeTable[3];
  const teeTime4 = teeTimeTable[4];
  const [state1, setState1] = useState(false);
  const [msg, setMsg] = useState("");
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
  const [isSubmitted, setSubmitted] = useState(false);
  const golferTextField = <input id="golfer" name="golfer" />;
  const submitHandler = (event) => {
    event.preventDefault();

    const teeTimeValue = event.target.teeTime.value.split("-");
    const teeNbr = teeTimeValue[0];
    const time = teeTimeValue[1];
    const name = event.target.golfer.value;
    let email = ctx.golferEmailsMap[name];
    if (!email) {
      email = "";
    }
    if (name && time) {
      addTeeTime(email, name, teeNbr, date, time);
      setValid(true);
      setState1(false);
      setState2(false);
      setState3(false);
      setState4(false);
      document.getElementById('golfer').value="";
      setSubmitted(true);
    } else {
      setValid(false);
      setSubmitted(false);
    }
  };

  return (
    <Card visible={props.visible} name='NewTeeTimeForm' >
      <h3>Sign up for tee spot on {date}</h3>
      <h4>Select tee time</h4>
      <form onSubmit={submitHandler}>
        {teeTime1 && (
          <Radio
            id={teeTime1}
            checked={state1}
            onChange={radioHandler1}
            name="teeTime"
            value={`1-${teeTime1}`}
            text={teeTime1}
          />
        )}
        {teeTime2 && (
          <Radio
            id={teeTime2}
            checked={state2}
            onChange={radioHandler2}
            name="teeTime"
            value={`2-${teeTime2}`}
            text={teeTime2}
          />
        )}
        {teeTime3 && (
          <Radio
            id={teeTime3}
            checked={state3}
            onChange={radioHandler3}
            name="teeTime"
            value={`3-${teeTime3}`}
            text={teeTime3}
          />
        )}
        {teeTime4 && (
          <Radio
            id={teeTime4}
            checked={state4}
            onChange={radioHandler4}
            name="teeTime"
            value={`4-${teeTime4}`}
            text={teeTime4}
          />
        )}
        <p className={classes.paragraph}>
        <label className={classes.label}>Your name: </label>
        {golferTextField}
        </p>
        <Button>Add Golfer</Button>
        <Button type='button' onClick={showTeeTimesHandler}>Show Golfers</Button>
        <p className={classes.error}>{`${
          !isValid ? "Please select a time and enter a name" : (isSubmitted ? "Tee Time Added" : "")
        }`}</p>
      </form>
    </Card>
  );
};
export default NewTeeTimeForm;
