const timeofteeurl =
  "https://jtowngolf-default-rtdb.firebaseio.com/timeoftee.json";

export function runFetch(url, attributes) {
  const syncFetch = require("sync-fetch");
  let jsonData = {};
  if (attributes) {
    jsonData = syncFetch(url, attributes).json();
  } else {
    jsonData = syncFetch(url).json();
  }
  return jsonData;
}
export function getTeeTimeTable() {
  const jsonData = runFetch(timeofteeurl, {
    headers: {
      Accept: "application/json",
    },
  });
  let teeTimeTable = [];
  if (jsonData) {
    const keys = Object.keys(jsonData);
    keys.forEach((key) => {
      const timeOfTee = jsonData[key];
      teeTimeTable[timeOfTee.teeNbr] = timeOfTee.teeTime;
    });
  }

  if (teeTimeTable.length === 0) {
    teeTimeTable = ["junkoffset", "3:27", "3:36", "3:45"];
  }
  return teeTimeTable;
}
export function updateTeeTimes(teeTimes) {
  if (!teeTimes) {
    return;
  }
  let teeNbr = 1;
  teeTimes
    .split(",")
    .forEach((teeTime) => addTimeOfTee(timeofteeurl, teeTime, teeNbr++));
}
async function addTimeOfTee(url, teeTime, teeNbr) {
  const timeOfTee = {
    id: Math.random().toString(),
    teeTime: teeTime,
    teeNbr: teeNbr,
  };

  const postAttributes = {
    method: "POST",
    body: JSON.stringify(timeOfTee),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  runFetch(url, postAttributes);
}
export function removeTeeOffTimes() {
  const deleteAttributes = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  runFetch(timeofteeurl, deleteAttributes);
}
export function addTeeTime(email, name, teeNbr, date, time) {
  if (!time) {
    return;
  }
  if (!teeNbr) {
    teeNbr = 1;
  }
  if (name) {
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
    runFetch(
      "https://jtowngolf-default-rtdb.firebaseio.com/teetimes.json",
      postAttributes
    );
  }
}
export function removeGolfer(url) {
  const deleteAttributes = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  runFetch(url, deleteAttributes);
}
export function updateGolfer(url, golfer) {
  const putAttributes = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(golfer),
  };
  runFetch(url, putAttributes);
}
export function getGolferRounds(golferName) {
  const golferUrl =
    "https://jtowngolf-default-rtdb.firebaseio.com/teetimes.json";
  const allGolferRounds = runFetch(golferUrl);
  let golferRounds = [];
  if (allGolferRounds) {
    const keys = Object.keys(allGolferRounds);
    keys.forEach((key) => {
      let golferRound = allGolferRounds[key];
      if (golferRound.name === golferName) {
        golferRounds.push(golferRound);
      }
    })
  }
  return golferRounds;
}
