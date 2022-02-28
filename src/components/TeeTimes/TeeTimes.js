import classes from "./TeeTimes.module.css";
import TeeTime from "./TeeTime";
import Card from "../UI/Card";
import React, { useState, useEffect } from "react";
const getTeeTimes = (golfers) => {
  if (!golfers) {
    return;
  }
  const teeTimeInfo = [];
  if (golfers.length <= 5) {
    teeTimeInfo.push(golfers.length);
  } else if (golfers.length < 11) {
    let nbrGolfersTee1 = 3;
    let nbrGolfersTee2 = 3;
    if (golfers.length === 7) {
      nbrGolfersTee2 = 4;
    }
    if (golfers.length === 8 || golfers.length === 9) {
      nbrGolfersTee1 = 4;
      nbrGolfersTee2 = 4;
      if (golfers.length === 9) {
        nbrGolfersTee2 = 5;
      }
    } else if (golfers.length === 10) {
      nbrGolfersTee1 = 5;
      nbrGolfersTee2 = 5;
    }
    teeTimeInfo.push(nbrGolfersTee1);
    teeTimeInfo.push(nbrGolfersTee2);
  } else if (golfers.length < 16) {
    let nbrGolfersTee1 = 4;
    let nbrGolfersTee2 = 4;
    let nbrGolfersTee3 = 3;
    if (golfers.length === 12) {
      nbrGolfersTee3 = 4;
    }
    if (golfers.length === 13 || golfers.length === 14) {
      nbrGolfersTee3 = 5;
      if (golfers.length === 14) {
        nbrGolfersTee2 = 5;
      }
    } else if (golfers.length === 15) {
      nbrGolfersTee1 = 5;
      nbrGolfersTee2 = 5;
      nbrGolfersTee3 = 5;
    }
    teeTimeInfo.push(nbrGolfersTee1);
    teeTimeInfo.push(nbrGolfersTee2);
    teeTimeInfo.push(nbrGolfersTee3);
  }
  let golferCount = 0;
  const golfersByTeeTime = [];
  teeTimeInfo.forEach((nbrGolfers) => {
    golfersByTeeTime.push(golfers.slice(golferCount, golferCount + nbrGolfers));
    golferCount = golferCount + nbrGolfers;
  });
  const nonNullGolfers = golfersByTeeTime.filter((golfersArray) => {
    return golfersArray[0] != null;
  });
  let teeNbr = 1;
  const retVal = nonNullGolfers.map((golfersArray) => (
    <TeeTime key={teeNbr} golfers={golfersArray} teeNbr={teeNbr++} />
  ));
  if (retVal.length !== 0) {
    return retVal;
  }
  return null;
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
        const teesInDb = tees.filter(tee => { return tee != null });
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
