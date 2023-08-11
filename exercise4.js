function fitsInOneBox(boxes) {
  boxes.sort((a, b) => {
    // Compare based on volume (length * width * height)
    const volumeA = a.l * a.w * a.h;
    const volumeB = b.l * b.w * b.h;
    return volumeB - volumeA;
  });

  for (let i = 1; i < boxes.length; i++) {
    if (!canFit(boxes[i], boxes[i - 1])) {
      return false;
    }
  }
  function canFit(boxA, boxB) {
    return boxA.l < boxB.l && boxA.w < boxB.w && boxA.h < boxB.h;
  }

  return true;
}
const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

fitsInOneBox(boxes1); // true
