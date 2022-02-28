import classes from "./TeeTime.module.css";
import { useContext } from 'react';
import TeeTimeTableContext from '../../store/tee-time-table';
const TeeTime = (props) => {
  const ctx = useContext(TeeTimeTableContext);
  const teeTime = ctx.teeTimeTable[props.teeNbr];
  const names = props.golfers.map(golfer => golfer.name).join(", ");
  return (
    <li className={classes.teetime}>
      <div>
        <div className={classes.time}>
          Tee time: {teeTime} Number:{props.golfers.length}
        </div>
        <p className={classes.golfername}>{names}</p>
      </div>
    </li>
  );
};
export default TeeTime;
