export function getFormattedPreviousThursdayDate() {
  let date = new Date();
  let difference = date.getDay() - 4;
  if (difference <= 0) {
    difference = 7 - -1 * difference;
  }
  date.setDate(date.getDate() - difference);
  return formatDate(date);
}
export function getFormattedNextThursdayDate() {
  let date = new Date();
  let difference = 4 - date.getDay();
  if (difference < 0) {
    difference = 7 + difference;
  }
  date.setDate(date.getDate() + difference);
  return formatDate(date);
}
export function formatDate(date) {
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  let year = date.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [month, day, year].join("-");
}