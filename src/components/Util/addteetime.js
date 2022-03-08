const timeofteeurl = "https://jtowngolf-default-rtdb.firebaseio.com/timeoftee.json";

export function getTeeTimeTable() {
  const syncFetch = require('sync-fetch');
  const jsonData = syncFetch(timeofteeurl, {
    headers: {
      Accept: 'application/json'
    }
  }).json();
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
  teeTimes.split(",").forEach(teeTime => addTimeOfTee(timeofteeurl, teeTime, teeNbr++));
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
  await fetch(
    url,
    postAttributes
  );
}
export function removeTeeOffTimes() {
  const deleteAttributes = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }
  fetch(
    timeofteeurl,
    deleteAttributes
  );
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
    async function addTeeTimeInner(postAttributes) {
      await fetch(
        "https://jtowngolf-default-rtdb.firebaseio.com/teetimes.json",
        postAttributes
      );
    }
    addTeeTimeInner(postAttributes);
  }
}
export function removeGolfer(url) {
  const deleteAttributes = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  async function removeGolferInner(url, deleteAttributes) {
    await fetch(
      url,
      deleteAttributes
    );
  }
  removeGolferInner(url, deleteAttributes);
}