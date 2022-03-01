import classes from "./TeeTime.module.css";
import { useContext } from 'react';
import TeeTimeTableContext from '../../store/tee-time-table';
import Golfer from './Golfer';
const TeeTime = (props) => {
  const ctx = useContext(TeeTimeTableContext);
  const teeTime = ctx.teeTimeTable[props.teeNbr];
  const names = props.golfers.map(golfer => <Golfer key={golfer.key} golfer={golfer} />);
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
