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
    <Button>
      Save Score
    </Button><br/>
    <Button onClick={removeGolferHandler}>Remove Tee</Button>
  </Card>
  </form>
}
export default ScoreEntryForm;