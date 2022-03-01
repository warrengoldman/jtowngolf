import classes from './Golfer.module.css';
import { removeGolfer } from '../Util/addteetime';
const Golfer = (props) => {
  const golfer = props.golfer;
  const removeGolferFromTeeTime = () => {
    const deleteUrl = 'https://jtowngolf-default-rtdb.firebaseio.com/teetimes/' + golfer.key + '.json';
    console.log(deleteUrl);
    removeGolfer(deleteUrl);
    setTimeout(window.location.reload(false), 1000);
  }
  return <span className={classes.golfer} onClick={removeGolferFromTeeTime} title="Click to remove">{golfer.name}</span>
};
export default Golfer;