import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./GolferEntryForm.module.css";
import React from "react";
const GolferEntryForm = (props) => {
  const removeGolferHandler = props.removeGolfer;

  const onClose = (e) => {
    e.preventDefault();
    props.saveScore(e, e.target.score.value);
  };
  return (
    <form onSubmit={onClose}>
      <Card>
        <label className={classes.label}>Enter Score: </label>
        <input name="score" />
        <p>
          <Button>Save Score</Button>
        </p>
        <Button onClick={removeGolferHandler}>Remove Golfer</Button>
      </Card>
    </form>
  );
};
export default GolferEntryForm;
