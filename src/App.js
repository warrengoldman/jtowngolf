import "./App.css";
import NewTeeTimeForm from "./components/TeeTimes/NewTeeTimeForm";
import TeeTimes from "./components/TeeTimes/TeeTimes";
import Card from "./components/UI/Card";
import { addTeeTime, getTeeTimeTable } from './components/Util/addteetime';
import { getFormattedNextThursdayDate, getFormattedPreviousThursdayDate } from './components/Util/utils';
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
  return (
    <Card>
      <NewTeeTimeForm teeTimeDate={comingThursday} teeTimeTable={teeTimeTable} />
      <h3>Golf Tee Time(s) And Players For {comingThursday}</h3>
      <TeeTimes key="1" teeTimeDate={comingThursday} />
      <h4>Previous Golf Tee Time(s) And Players For {previousThursday}</h4>
      <TeeTimes key="2" teeTimeDate={previousThursday} />
    </Card>
  );
}

export default App;
