import './App.css';
import Card from './components/UI/Card';
import TeeTimes from './components/TeeTimes/TeeTimes';

function formatDate(d) {
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [month, day, year].join('-');
}
function getPreviousThursdayDate() {
  let date = new Date();
  let difference =  date.getDay() - 4;
  if (difference < 0 ) 
  {
     difference = 7 - (-1*difference);
  }
  date.setDate( date.getDate() - difference );
  return date;
}
function getNextThursdayDate() {
  let date = new Date();
  let difference =  4 - date.getDay(); 
  if (difference < 0 ) 
  {
     difference = 7 + difference;
  }
  date.setDate( date.getDate() + difference );
  return date;
}
function App() {
  
  const previousThursday = formatDate(getPreviousThursdayDate());
  const comingThursday = formatDate(getNextThursdayDate());
  return (
    <Card>
      <h3>Golf Tee Time(s) For {comingThursday}</h3>
      <TeeTimes teeTimeDate={comingThursday} />
      <h4>Previous Golf Tee Time(s) For {previousThursday}</h4>
      <TeeTimes teeTimeDate={previousThursday} />
    </Card>
  );
}

export default App;
