import Button from '../UI/Button';
import Card from '../UI/Card';

const ScoreEntryForm = (props) => {
  const onClose = (e) => {
    e.preventDefault();
    props.onClose(e, e.target.score.value);
  }
  return <form onSubmit={onClose}><Card><label>Enter Score: </label><input name="score" />
    <Button>
      Save Score
    </Button>
  </Card>
  </form>
}
export default ScoreEntryForm;