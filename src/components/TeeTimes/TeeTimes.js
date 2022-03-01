import TeeTime from "./TeeTime";
import Card from "../UI/Card";
import React, { useState, useEffect } from "react";
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
      <TeeTime key={teeNbr} golfers={golfersTee1} teeNbr={teeNbr} />
    );
  }
  if (golfersTee2.length > 0) {
    teeNbr = 2;
    teeTimes.push(
      <TeeTime key={teeNbr} golfers={golfersTee2} teeNbr={teeNbr} />
    );
  }
  if (golfersTee3.length > 0) {
    teeNbr = 3;
    teeTimes.push(
      <TeeTime key={teeNbr} golfers={golfersTee3} teeNbr={teeNbr} />
    );
  }
  if (golfersTee4.length > 0) {
    teeNbr = 4;
    teeTimes.push(
      <TeeTime key={teeNbr} golfers={golfersTee4} teeNbr={teeNbr} />
    );
  }
  return teeTimes;
};
const TeeTimes = (props) => {
  const teeTimeDate = props.teeTimeDate;
  const [golfers, setGolfers] = useState();
  let teeTimes = getTeeTimes(golfers);
  let teeTimesUl = "";
  if (teeTimes) {
    teeTimesUl = (
      <Card>
        <ul>{teeTimes}</ul>
      </Card>
    );
  }
  const fetchTeeTimes = () => {
    fetch("https://jtowngolf-default-rtdb.firebaseio.com/teetimes.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const keys = Object.keys(jsonData);
        const tees = keys.map((key) => {
          const tee = jsonData[key];
          if (tee.date === teeTimeDate.toString()) {
            return {
              id: tee.id,
              name: tee.name,
              time: tee.time,
              teeNbr: tee.teeNbr,
              date: tee.date,
              email: tee.email,
            };
          }
          return null;
        });
        const teesInDb = tees.filter((tee) => {
          return tee != null;
        });
        setGolfers(teesInDb);
      })
      .catch((error) => {
        console.log("we got an error", error);
      });
  };
  useEffect(() => {
    fetchTeeTimes();
  }, []);
  return <React.Fragment>{teeTimesUl}</React.Fragment>;
};
export default TeeTimes;
