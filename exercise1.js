const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);

function wrapping(gifts) {
  let wrapped = [];

  for (let gift of gifts) {
    const wrapGift = wrapGifts(gift);
    wrapped.push(wrapGift);
  }

  return wrapped;
}

function wrapGifts(gifts) {
  let wrappWidth = gifts.length + 2;

  let topWrap = "*".repeat(wrappWidth);
  let middle = `*${gifts}*`;

  return [topWrap, middle, topWrap].join("\n");
}
