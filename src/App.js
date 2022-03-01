import "./App.css";
import Card from "./components/UI/Card";
import TeeTimes from "./components/TeeTimes/TeeTimes";
import NewTeeTimeForm from "./components/TeeTimes/NewTeeTimeForm";
import { useContext } from "react";
import TeeTimeTableContext from "./store/tee-time-table";
import { getFormattedPreviousThursdayDate, getFormattedNextThursdayDate } from './components/Util/utils';
import { addTeeTime } from './components/Util/addteetime';
function App(props) {
  const ctx = useContext(TeeTimeTableContext);
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
  addTeeTime(email, name, teeNbr, comingThursday, ctx.teeTimeTable[teeNbr]);
  return (
    <Card>
      <NewTeeTimeForm teeTimeDate={comingThursday} teeTimeTable={ctx.teeTimeTable} />
      <h3>Golf Tee Time(s) For {comingThursday}</h3>
      <TeeTimes key="1" teeTimeDate={comingThursday} />
      <h4>Previous Golf Tee Time(s) For {previousThursday}</h4>
      <TeeTimes key="2" teeTimeDate={previousThursday} />
    </Card>
  );
}

export default App;
