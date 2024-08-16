import React from "react";
import classes from "./Golfer.module.css";
const Golfer = (props) => {
  const golfer = props.golfer;
  const golferScore = golfer.score ? " - " + golfer.score : "";
  const editGolferClicked = (e) => {
    props.editGolferHandler(e, golfer, true);
  };
  return (
    <span className={classes.golfer} onClick={editGolferClicked}>
      {golfer.name}
      {golferScore}
    </span>
  );
};
export default Golfer;
