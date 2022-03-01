export function addTeeTime(email, name, teeNbr, date, time) {
  if (!time) {
    return;
  }
  if (!teeNbr) {
    teeNbr = 1;
  }
  if (name && email) {
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
