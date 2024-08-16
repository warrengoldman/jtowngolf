import React from "react";
import classes from "./Golfer.module.css";
import { removeGolfer } from "../Util/addteetime";
import Button from "../UI/Button";
const Golfer = (props) => {
  const golfer = props.golfer;
  const golferUrl =
    "https://jtowngolf-default-rtdb.firebaseio.com/teetimes/" +
    golfer.key +
    ".json";
  const removeGolferInt = () => {
    removeGolfer(golferUrl);
    document.location.reload();
  };
  const golferScore = golfer.score ? " - " + golfer.score : "";
  return (
    <table className={classes.golfer}>
      <tbody>
        <tr>
          <td width="200px">
            {golfer.name}
            {golferScore}
          </td>
          <td width="100px">
            <Button className="buttonSmall" onClick={removeGolferInt}>
              Remove
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Golfer;
