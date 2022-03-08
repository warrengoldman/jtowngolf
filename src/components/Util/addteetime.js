export function getTeeTimeTable() {
  const url = "https://jtowngolf-default-rtdb.firebaseio.com/timeoftee.json";
  const syncFetch = require('sync-fetch');
  const jsonData = syncFetch(url, {
    headers: {
      Accept: 'application/json'
    }
  }).json();
  const teeTimeTable = [];
  const keys = Object.keys(jsonData);
  keys.forEach((key) => {
    const timeOfTee = jsonData[key];
    teeTimeTable[timeOfTee.teeNbr] = timeOfTee.teeTime;
  });

  return teeTimeTable;
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