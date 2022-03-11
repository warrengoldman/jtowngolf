import { useState } from 'react';
import Modal from '../UI/Modal';
import { removeGolfer, updateGolfer } from '../Util/addteetime';
import classes from './Golfer.module.css';
import ScoreEntryForm from './ScoreEntryForm';
const Golfer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const golfer = props.golfer;
  const golferUrl = 'https://jtowngolf-default-rtdb.firebaseio.com/teetimes/' + golfer.key + '.json';
  const removeGolferFromTeeTime = () => {
    removeGolfer(golferUrl);
    const reload = () => {
      window.location.reload();
    }
    setTimeout(reload, 1000);
  }
  const onClose = (e, score) => {
    golfer.score = score;
    updateGolfer(golferUrl, golfer);
    setShowModal(false);
  };
  const addScore =() => {
    setShowModal(true);
  }
  const golferScore = (golfer.score ? 'Score: ' + golfer.score : 'Enter Score');
  const scoreAction = (golfer.score ? 'Update' : 'Add');
  return <span className={classes.golfer}>{golfer.name} <br/> - <span className={classes.golferremove} onClick={removeGolferFromTeeTime} title="Click to remove">Remove</span> <br/> - <span className={classes.golferscore} onClick={addScore} title={scoreAction}>{golferScore}</span><Modal show={showModal}><ScoreEntryForm onClose={onClose}/></Modal> </span>
};
export default Golfer;