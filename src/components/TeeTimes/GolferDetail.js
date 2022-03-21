import Card from '../UI/Card';
import { removeGolfer, updateGolfer } from '../Util/addteetime';
import GolferEntryForm from './GolferEntryForm';
import GolferScores from './GolferScores';
import classes from './GolferDetail.module.css';
const GolferDetail = (props)=> {
  const golfer = props.golfer;
  if (golfer) {
    const showTeeTimesButton = props.showTeeTimesButton;
    const golferUrl = 'https://jtowngolf-default-rtdb.firebaseio.com/teetimes/' + golfer.key + '.json';
    const removeGolferFromTeeTime = (e) => {
      e.preventDefault();
      removeGolfer(golferUrl);
      props.showTeeTimesHandler();
    }
    const saveScoreHandler = (e, score) => {
      golfer.score = score;
      updateGolfer(golferUrl, golfer);
      props.showTeeTimesHandler();
    };

    return <Card visible={props.golferDetailVisible} name='gef'>{showTeeTimesButton}
    <p className={classes.golferName}>{golfer.name}</p>
    <GolferEntryForm saveScore={saveScoreHandler} removeGolfer={removeGolferFromTeeTime} golfer={golfer}/>
    <GolferScores golfer={golfer} />
    </Card>
  } else {
    return '';
  }
}
export default GolferDetail;