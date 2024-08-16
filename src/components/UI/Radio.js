import React from "react";
import classes from "./Radio.module.css";
const Radio = (props) => {
  const id = props.id;
  const value = props.value;
  const text = props.text;
  const name = props.name;
  const radioHandler = props.onChange;
  const golferInput = props.golferInput;
  return (
    <div
      className={`${props.checked ? classes.radioselected : classes.radio}`}
      onClick={radioHandler}
    >
      <input
        id={id}
        value={value}
        name={name}
        type="radio"
        checked={props.checked}
        onChange={radioHandler}
        onClick={radioHandler}
      />
      <label>{text}&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <label className={classes.label}>Your name: </label>
      {golferInput}
    </div>
  );
};
export default Radio;
