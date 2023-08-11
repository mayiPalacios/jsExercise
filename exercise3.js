const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers); // 2

function distributeGifts(packOfGifts, reindeers) {
  let weightPack = 0;
  let weightReindeer = 0;
  let counter = 0;

  for (let pack of packOfGifts) {
    weightPack += pack.length;
  }
  for (let reindeer of reindeers) {
    weightReindeer += reindeer.length * 2;
  }
  counter = Math.floor(weightReindeer / weightPack);
  console.log(counter);
  return counter;
}
