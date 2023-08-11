function countTime(leds) {
  let counter = 0;
  let auxArray = [];

  if (itsAlready(leds)) {
    return 0;
  }

  function itsAlready(arrLeds) {
    for (let i = 0; i < arrLeds.length; i++) {
      if (arrLeds[i] === 0) {
        return false;
      }
    }
    return true;
  }

  function fitArray(arr, currentCounter) {
    let counterArray = [...arr];
    for (let i = 0; i < leds.length; i++) {
      if (arr[leds.length - 1] == 1 && arr[0] === 0 && i === leds.length - 1) {
        counterArray[0] = 1;
      }
      if (arr[i - 1] === 1 && arr[i] === 0) {
        counterArray[i] = 1;
      }
    }
    let newArray = [...counterArray];
    currentCounter += 7;
    if (itsAlready(newArray)) {
      auxArray = [...newArray];
      counter = currentCounter;
      return;
    }

    fitArray(newArray, currentCounter);
  }

  fitArray(leds, 0);

  return counter;
}

const leds = [1, 1, 1, 1];

console.log(countTime(leds));
