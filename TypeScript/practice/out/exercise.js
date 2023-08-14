"use strict";
function getHiddenCard(cardNumber, starsCount = 4) {
    let result = "";
    let cardNumberArr = cardNumber.split("").splice(-4);
    let startArr = Array(starsCount).fill("*");
    result = startArr.concat(cardNumberArr).join("");
    return result;
}
console.log(getHiddenCard('1234567812345678', 3));
console.log(getHiddenCard('1234567812345678', 5));
//# sourceMappingURL=exercise.js.map