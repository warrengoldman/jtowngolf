import Golfer from './Golfer';
import classes from "./TeeTime.module.css";
const TeeTime = (props) => {
  const golfers = props.golfers;
  const teeTime = golfers[0].time;
  const names = golfers.map(golfer => <Golfer key={golfer.key} golfer={golfer} />);
  return (
    <li className={classes.teetime}>
      <div>
        <div className={classes.time}>
          Tee time: {teeTime} Number:{props.teeNbr}
        </div>
        <div className={classes.golfername}>{names}</div>
      </div>
    </li>
  );
};
export default TeeTime;
