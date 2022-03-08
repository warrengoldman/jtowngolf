const timeofteeurl = "https://jtowngolf-default-rtdb.firebaseio.com/timeoftee.json";
let timeOfTees = [];

export function getTimeOfTees() {
  if (timeOfTees.length === 0) {
    // const response = await fetch(timeofteeurl);
    // const json = await response.json();
    // if (json) {
    //   timeOfTees[0] = "ssdf";
    //   const keys = Object.keys(json);
    //   const tees = keys.map((key) => {
    //     const timeOfTee = json[key];
    //     timeOfTees[parseInt(timeOfTee.teeNbr)] = timeOfTee.teeTime;
    //   });
    // }
  }
  return ['ssdf', '3:27', '3:36', '3:46'];
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