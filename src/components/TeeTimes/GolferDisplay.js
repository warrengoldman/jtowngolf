import classes from './Golfer.module.css';
const Golfer = (props) => {
  const golfer = props.golfer;
  const golferScore = (golfer.score ? ' - ' + golfer.score : '');
  return <span className={classes.golfer}>{golfer.name}{golferScore}</span>
};
export default Golfer;