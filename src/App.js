import "./App.css";
import Card from "./components/UI/Card";
import TeeTimes from "./components/TeeTimes/TeeTimes";
import { useContext } from "react";
import TeeTimeTableContext from "./store/tee-time-table";
import { getFormattedPreviousThursdayDate, getFormattedNextThursdayDate } from './components/Util/utils';
function addTeeTime(email, name, teeNbr, date, time) {
  const teeTime = {
    id: Math.random().toString(),
    email: email,
    name: name,
    teeNbr: teeNbr,
    date: date,
    time: time,
  };
  const postAttributes = {
    method: "POST",
    body: JSON.stringify(teeTime),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  async function addTeeTimeInner(postAttributes) {
    console.log(postAttributes.body);
    await fetch(
      "https://jtowngolf-default-rtdb.firebaseio.com/teetimes.json",
      postAttributes
    );
  }
  addTeeTimeInner(postAttributes);
}
function App(props) {
  const ctx = useContext(TeeTimeTableContext);
  const comingThursday = getFormattedNextThursdayDate();
  const urlParams = new URLSearchParams(window.location.search);
  let email = urlParams.get("email");
  let name = urlParams.get("name");
  if (!name) {
    name = email;
  }
  if (!email) {
    email = name;
  }
  let teeNbr = urlParams.get("teeNbr");
  if (!teeNbr) {
    teeNbr = 1;
  }
  if (name && email) {
    addTeeTime(email, name, teeNbr, comingThursday, ctx.teeTimeTable[teeNbr]);
  }
  const previousThursday = getFormattedPreviousThursdayDate();
  return (
    <Card>
      <h3>Golf Tee Time(s) For {comingThursday}</h3>
      <TeeTimes key="1" teeTimeDate={comingThursday} />
      <h4>Previous Golf Tee Time(s) For {previousThursday}</h4>
      <TeeTimes key="2" teeTimeDate={previousThursday} />
    </Card>
  );
}

export default App;
