function findSumCombinations(arr, targetSum) {
  let arrayElement = [];
  function generateCombinations(arr, start, currentSum, arrTarget) {
    if (currentSum > targetSum) {
      return;
    }
    if (currentSum === targetSum) {
      sumMax = currentSum;
      arrayElement = [...arrTarget];
    }

    for (let i = start; i < arr.length; i++) {
      let newArray = [...arrTarget, arr[i]];
      generateCombinations(arr, i + 1, currentSum + arr[i], newArray);
    }
  }

  generateCombinations(arr, 0, 0, []);
  return arrayElement;
}

const numbers = [2, 4, 6, 8];
const target = 10;

const sumCombinations = findSumCombinations(numbers, target);
console.log(sumCombinations);
