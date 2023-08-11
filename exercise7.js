function getGiftsToRefill(a1, a2, a3) {
  let newArray = a1.filter(
    (value) => !a2.includes(value) && !a3.includes(value)
  );

  let newArray3 = a2.filter(
    (value) => !a1.includes(value) && !a3.includes(value)
  );

  let newArray2 = a3.filter(
    (value) => !a1.includes(value) && !a2.includes(value)
  );
  let give = [...newArray, ...newArray2, ...newArray3];
  let give2 = give.reduce((acumulator, current) => {
    if (!acumulator.includes(current)) {
      acumulator.push(current);
    }
    return acumulator;
  }, []);

  return give2.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      return String(a).localeCompare(String(b));
    }
  });
}

const arr = ["d", "f", "c", "a"];
const newarr = arr.sort();
console.log(newarr);
const a1 = [1, 2, 3, 4];
const a2 = [2, 1, 4, 3];
const a3 = [6, 1, 2];

const gifts = getGiftsToRefill(a1, a2, a3);

console.log(gifts);
