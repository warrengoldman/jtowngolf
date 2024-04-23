import "./App.css";
import NewTeeTimeForm from "./components/TeeTimes/NewTeeTimeForm";
import TeeTimes from "./components/TeeTimes/TeeTimes";
import TeeTimesDisplay from "./components/TeeTimes/TeeTimesDisplay";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import GolferDetail from './components/TeeTimes/GolferDetail';
import {
  addTeeTime,
  getTeeTimeTable,
  removeTeeOffTimes,
  updateTeeTimes,
} from "./components/Util/addteetime";
import {
  getFormattedNextThursdayDate,
  getFormattedPreviousThursdayDate,
} from "./components/Util/utils";
import { useState } from "react";
function App(props) {
  const comingThursday = getFormattedNextThursdayDate();
  const previousThursday = getFormattedPreviousThursdayDate();
  console.log(previousThursday);
  const urlParams = new URLSearchParams(window.location.search);
  let email = urlParams.get("email");
  let name = urlParams.get("name");
  if (!name) {
    name = email;
  }
  if (!email) {
    email = name;
  }
  const teeNbr = urlParams.get("teeNbr");
  const teeTimeTable = getTeeTimeTable();
  addTeeTime(email, name, teeNbr, comingThursday, teeTimeTable[teeNbr]);
  const teeTimes = urlParams.get("teetimes");
  updateTeeTimes(teeTimes);
  if (urlParams.get("removeteetimes")) {
    removeTeeOffTimes();
  }
  const currentTeeTimesHeader = <h3>Golf Tee Time(s) For {comingThursday}</h3>;
  const [currentTeeTimes, setCurrentTeeTimes] = useState(
    <TeeTimes
      key="1"
      teeTimeDate={comingThursday}
      header={currentTeeTimesHeader}
    />
  );
  const [currentTeeTimesDisplay] = useState(
    <TeeTimesDisplay
      teeTimeDate={comingThursday}
    />
  );
  // const previousTeeTimesHeader = (
  //   <h4>Previous Golf Tee Time(s) And Players For {previousThursday}</h4>
  // );
  // const previousTeeTimes = (
  //   <TeeTimes
  //     key="2"
  //     teeTimeDate={previousThursday}
  //     header={previousTeeTimesHeader}
  //   />
  // );

  const [teeTimesVisible, setTeeTimesVisible] = useState(false);
  const [newTeeTimeFormVisible, setNewTeeTimeFormVisible] = useState(true);
  const [golferDetailVisible, setGolferDetailVisible] = useState(false);
  const [golfer, setGolfer] = useState();
  const editGolferHandler = (e, golfer, visible) => {
    setTeeTimesVisible(!visible);
    setNewTeeTimeFormVisible(!visible);
    setGolferDetailVisible(visible);
    if (golfer) {
      setGolfer(golfer);
    }
  }
  const showTeeTimesHandler = () => {
    const key = Math.random().toString();
    setCurrentTeeTimes(
      <TeeTimes
        key={key}
        teeTimeDate={comingThursday}
        header={currentTeeTimesHeader}
        editGolferHandler={editGolferHandler}
      />
    );
    setTeeTimesVisible(true);
    setNewTeeTimeFormVisible(false);
    setGolferDetailVisible(false);
  };
  const showTeeTimesButton = <Button type='button' onClick={showTeeTimesHandler}>Show Golfers</Button>
  const enterTeeTimeHandler = () => {
    setTeeTimesVisible(false);
    setNewTeeTimeFormVisible(true);
    setGolferDetailVisible(false);
  };
  const teeEntryText = "<< Tee Entry";
  const enterTeeTimesButton = 
  <Button type="button" onClick={enterTeeTimeHandler}>
    {teeEntryText}
  </Button>;
  return (
    <Card>
      <NewTeeTimeForm
        teeTimeDate={comingThursday}
        teeTimeTable={teeTimeTable}
        showTeeTimesButton={showTeeTimesButton}
        visible={newTeeTimeFormVisible}
      />
      <Card visible={!teeTimesVisible}>
        {currentTeeTimesDisplay}
      </Card>
      <Card visible={teeTimesVisible}>
        <div align="center">
          {enterTeeTimesButton}
        </div>
        {currentTeeTimes}
        {/* {previousTeeTimes} */}
      </Card>
      <GolferDetail golferDetailVisible={golferDetailVisible} onClick={enterTeeTimeHandler} showTeeTimesButton={showTeeTimesButton} showTeeTimesHandler={showTeeTimesHandler} golfer={golfer}>

      </GolferDetail>
    </Card>
  );
}

export default App;
