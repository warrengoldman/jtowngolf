import "./App.css";
import NewTeeTimeForm from "./components/TeeTimes/NewTeeTimeForm";
import TeeTimes from "./components/TeeTimes/TeeTimes";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
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
  const currentTeeTimesHeader = (
    <h3>Golf Tee Time(s) For {comingThursday}</h3>
  );
  const [currentTeeTimes, setCurrentTeeTimes] = useState(
    <TeeTimes
      key="1"
      teeTimeDate={comingThursday}
      header={currentTeeTimesHeader}
    />
  );
  const previousTeeTimesHeader = (
    <h4>Previous Golf Tee Time(s) And Players For {previousThursday}</h4>
  );
  const previousTeeTimes = (
    <TeeTimes
      key="2"
      teeTimeDate={previousThursday}
      header={previousTeeTimesHeader}
    />
  );

  const [teeTimesVisible, setTeeTimesVisible] = useState(false);
  const [newTeeTimeFormVisible, setNewTeeTimeFormVisible] = useState(true);
  const showTeeTimesHandler = () => {
    const key = Math.random().toString();
    setCurrentTeeTimes(<TeeTimes
      key={key}
      teeTimeDate={comingThursday}
      header={currentTeeTimesHeader}
    />);
    setTeeTimesVisible(true);
    setNewTeeTimeFormVisible(false);
  };
  const enterTeeTimeHandler = () => {
    setTeeTimesVisible(false);
    setNewTeeTimeFormVisible(true);
  };
  const teeEntryText = '<< Tee Entry';
  return (
    <Card>
      <NewTeeTimeForm
        teeTimeDate={comingThursday}
        teeTimeTable={teeTimeTable}
        showTeeTimesHandler={showTeeTimesHandler}
        visible={newTeeTimeFormVisible}
      />
      <Card visible={teeTimesVisible}>
        <div align="center">
          <Button type='button' onClick={enterTeeTimeHandler}>{teeEntryText}</Button>
        </div>
        {currentTeeTimes}
        {/* {previousTeeTimes} */}
      </Card>
    </Card>
  );
}

export default App;
