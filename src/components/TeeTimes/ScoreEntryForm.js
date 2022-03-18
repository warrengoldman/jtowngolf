import Button from '../UI/Button';
import Card from '../UI/Card';

const ScoreEntryForm = (props) => {
  const removeGolferHandler = props.removeGolfer;

  const onClose = (e) => {
    e.preventDefault();
    props.saveScore(e, e.target.score.value);
  }
  return <form onSubmit={onClose}>
    <Card><label>Enter Score: </label><input name="score" />
    <p>
    <Button>
      Save Score
    </Button>
    </p>
    <Button onClick={removeGolferHandler}>Remove Golfer</Button>
  </Card>
  </form>
}
export default ScoreEntryForm;