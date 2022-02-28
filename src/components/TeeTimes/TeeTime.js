import classes from "./TeeTime.module.css";
const TeeTime = (props) => {
  return (
    <li className={classes.teetime}>
      <div>
        <div className={classes.time}>{props.teeTime.time}</div>
        <h3>{props.teeTime.name}</h3>
        <div className={classes.teeNbr}>{props.teeTime.teeNbr}</div>
      </div>
    </li>
  );
};
export default TeeTime;