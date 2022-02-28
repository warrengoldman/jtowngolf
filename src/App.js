import './App.css';
import Card from './components/UI/Card';
import TeeTimes from './components/TeeTimes/TeeTimes';

function App() {
  const comingThursday = '03-27-2022';
  const previousThursday = '03-24-2022';
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
