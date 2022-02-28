import classes from "./TeeTime.module.css";
const TeeTime = (props) => {
  const names = props.golfers.map(golfer => golfer.name).join(", ");
  return (
    <li className={classes.teetime}>
      <div>
        <div className={classes.time}>
          Tee time: {props.golfers[0].time} Number:{props.golfers.length}
        </div>
        <p className={classes.golfername}>{names}</p>
      </div>
    </li>
  );
};
export default TeeTime;
