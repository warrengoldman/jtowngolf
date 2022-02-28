import "./App.css";
import Card from "./components/UI/Card";
import TeeTimes from "./components/TeeTimes/TeeTimes";
import { useContext } from "react";
import TeeTimeTableContext from "./store/tee-time-table";

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
    method: 'POST',
    body: JSON.stringify(teeTime),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  async function addTeeTimeInner(postAttributes) {
    await fetch('https://jtowngolf-default-rtdb.firebaseio.com/teetimes.json', postAttributes);
  }
  addTeeTimeInner(postAttributes);
}
function formatDate(d) {
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("-");
}
function getPreviousThursdayDate() {
  let date = new Date();
  let difference = date.getDay() - 4;
  if (difference < 0) {
    difference = 7 - -1 * difference;
  }
  date.setDate(date.getDate() - difference);
  return date;
}
function getNextThursdayDate() {
  let date = new Date();
  let difference = 4 - date.getDay();
  if (difference < 0) {
    difference = 7 + difference;
  }
  date.setDate(date.getDate() + difference);
  return date;
}
function App(props) {
  const ctx = useContext(TeeTimeTableContext);
  const comingThursday = formatDate(getNextThursdayDate());
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
  const previousThursday = formatDate(getPreviousThursdayDate());
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
