import { runFetch } from "../Util/addteetime.js";
import Card from "../UI/Card.js";
import TeeTimeDisplay from "./TeeTimeDisplay.js";
import { useState } from "react";
const getTeeTimes = (golfers) => {
  if (!golfers) {
    return;
  }
  const golfersTee1 = golfers.filter((golfer) => golfer.teeNbr === "1");
  const golfersTee2 = golfers.filter((golfer) => golfer.teeNbr === "2");
  const golfersTee3 = golfers.filter((golfer) => golfer.teeNbr === "3");
  const golfersTee4 = golfers.filter((golfer) => golfer.teeNbr === "4");
  const teeTimes = [];
  let teeNbr = 1;
  if (golfersTee1.length > 0) {
    teeTimes.push(
      <TeeTimeDisplay key={teeNbr} golfers={golfersTee1} teeNbr={teeNbr} />
    );
  }
  if (golfersTee2.length > 0) {
    teeNbr = 2;
    teeTimes.push(
      <TeeTimeDisplay key={teeNbr} golfers={golfersTee2} teeNbr={teeNbr} />
    );
  }
  if (golfersTee3.length > 0) {
    teeNbr = 3;
    teeTimes.push(
      <TeeTimeDisplay key={teeNbr} golfers={golfersTee3} teeNbr={teeNbr} />
    );
  }
  if (golfersTee4.length > 0) {
    teeNbr = 4;
    teeTimes.push(
      <TeeTimeDisplay key={teeNbr} golfers={golfersTee4} teeNbr={teeNbr} />
    );
  }
  return teeTimes;
};
const TeeTimesDisplay = (props) => {
  const teeTimeDate = props.teeTimeDate;
  let tees = [];
  const jsonData = runFetch(
    "https://jtowngolf-default-rtdb.firebaseio.com/teetimes.json"
  );
  if (jsonData) {
    const keys = Object.keys(jsonData);
    tees = keys.map((key) => {
      const tee = jsonData[key];
      if (tee.date === teeTimeDate.toString()) {
        return {
          key: key,
          id: tee.id,
          name: tee.name,
          time: tee.time,
          teeNbr: tee.teeNbr,
          date: tee.date,
          email: tee.email,
          score: tee.score,
        };
      }
      return null;
    });
  }

  const [teesInDb] = useState(
    tees.filter((tee) => {
      return tee != null;
    })
  );

  // const removeGolferHandler = (golferKey) => {
  //   setTeesInDb(teesInDb.filter((tee) => {
  //     return tee.key !== golferKey;
  //   }))
  // };

  let teeTimes = getTeeTimes(teesInDb);
  let teeTimesUl = "";
  if (teeTimes) {
    teeTimesUl = (
      <Card>
        <ul>{teeTimes}</ul>
      </Card>
    );
  }

  return <div>{teeTimesUl}</div>;
};
export default TeeTimesDisplay;
