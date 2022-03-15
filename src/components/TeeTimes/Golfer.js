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
    setShowModal(false);
    const reload = () => {
      window.location.reload();
    }
    setTimeout(reload, 1000);
  }
  const saveScore = (e, score) => {
    golfer.score = score;
    updateGolfer(golferUrl, golfer);
    setShowModal(false);
  };
  const editGolfer =() => {
    setShowModal(true);
  }
  const golferScore = (golfer.score ? ' - ' + golfer.score : '');
  return <span className={classes.golfer} onClick={editGolfer}>{golfer.name}{golferScore}<Modal show={showModal}><ScoreEntryForm saveScore={saveScore} removeGolfer={removeGolferFromTeeTime} golfer={golfer}/></Modal></span>
};
export default Golfer;