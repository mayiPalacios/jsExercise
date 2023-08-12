function exercise(arr) {
  let newArray = [];
  let lastElemt = [];
  function getValueArr(arrElement) {
    if (arrElement != undefined) {
      for (let i = 0; i < arrElement.length; i++) {
        if (i !== arrElement.length - 1) {
          while (arrElement.length > 2) {
            insertValue(arrElement[Math.floor(arrElement.length / 2)]);
            arrElement.splice(Math.floor(arrElement.length / 2), 1);
          }

          insertValue(arrElement[i]);
          lastElemt.unshift(arrElement[arrElement.length - 1]);
        }
      }
    }
  }

  function insertValue(value) {
    newArray.push(...value);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      insertValue(arr[i][0]);
    } else {
      getValueArr(arr[i]);
    }
  }
  insertValue(lastElemt);
  return newArray.join("");
}

arr = [["a", "d", "k"], ["b", "f"], ["h"]];
arr1 = [["a", "d", "k", "l"], ["b", "t", "w", "f"], ["h"]];

console.log(exercise(arr1));
