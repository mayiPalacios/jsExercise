const year = 2000;
const holidays = ["01/01"]; // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.
console.log(countHours(year, holidays));

function countHours(year, holidays) {
  let day;
  let countHour = 0;
  for (const count of holidays) {
    day = new Date(`${count}/${year}`);
    console.log(day.getDate);
    if (day.getDay() !== 6 && day.getDay() !== 0) {
      countHour += 1;
    }
  }

  return countHour * 2;
}
