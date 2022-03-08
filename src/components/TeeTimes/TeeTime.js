import { getTeeTimeTable } from '../Util/addteetime';
import Golfer from './Golfer';
import classes from "./TeeTime.module.css";
const TeeTime = (props) => {
  const teeTime = getTeeTimeTable()[props.teeNbr];
  const names = props.golfers.map(golfer => <Golfer key={golfer.key} golfer={golfer} />);
  return (
    <li className={classes.teetime}>
      <div>
        <div className={classes.time}>
          Tee time: {teeTime} Number:{props.teeNbr}
        </div>
        <p className={classes.golfername}>{names}</p>
      </div>
    </li>
  );
};
export default TeeTime;
