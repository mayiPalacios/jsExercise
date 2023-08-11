function checkPart(part) {
  let noEqual = "";
  let newEle2 = "";
  let auxPalin = "";
  let isPalindrome = "";
  function isPalindroFunction(newEle) {
    let isPalindrom = "";
    isPalindrom = newEle.split("").reverse().join("");
    return isPalindrom;
  }

  let newEle = part.toLowerCase().replace(/\s/g, "");
  isPalindrome = isPalindroFunction(newEle);
  if (isPalindrome === newEle) {
    return true;
  } else {
    for (let i = 0; i < newEle.length; i++) {
      if (isPalindrome[i] !== newEle[i]) {
        noEqual = isPalindrome[i];
        newEle2 = isPalindrome.replace(noEqual, "");

        auxPalin = isPalindroFunction(newEle2);

        if (auxPalin === newEle2) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return false;
}

const frases = ["midu"];

console.log(checkPart("zzzoonzzz"));
