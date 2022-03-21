import { getGolferRounds } from '../Util/addteetime';
const GolferScores = (props) => {
  const golferListItems = [];
  const golferRounds = getGolferRounds(props.golfer.name);
  golferRounds.forEach( (golferRound) => {
    golferListItems.push(<li key={Math.random()}>Date: {golferRound.date} - Score: {golferRound.score}</li>);
  });
  return <ul>{golferListItems}</ul>;
}
export default GolferScores;