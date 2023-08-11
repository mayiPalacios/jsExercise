function findMaxSum(giftsCities, maxGifts, maxCities) {
  let maxSumValue = 0;
  let arrayElement = [];
  function generateCombination(start, currentSum, currentElements, array) {
    if (currentSum > maxGifts || currentElements > maxCities) {
      return;
    }
    if (currentSum > maxGifts) {
      arrayElement = [...array];
    }

    maxSumValue = Math.max(maxSumValue, currentSum);

    for (let i = start; i < giftsCities.length; i++) {
      const arraynew = [...array, giftsCities[i]];
      console.log(arraynew);
      generateCombination(
        i + 1,
        currentSum + giftsCities[i],
        currentElements + 1,
        arraynew
      );
    }
  }

  generateCombination(0, 0, 0, []);
  console.log(arrayElement);
  return maxSumValue;
}

const giftsCities = [12, 7, 11, 5, 3];
const maxGifts = 20;
const maxCities = 3;

const maxCombinationSum = findMaxSum(giftsCities, maxGifts, maxCities);

console.log(`Maximum combination sum: ${maxCombinationSum}`);
