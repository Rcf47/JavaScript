function getHiddenCard(cardNumber, starsCount) {
    if (starsCount === void 0) { starsCount = 4; }
    var result = "";
    var cardNumberArr = cardNumber.split("").splice(-4);
    result = cardNumberArr.fill("*", 0, starsCount).join("");
    return result;
}
console.log(getHiddenCard('1234567812345678', 3));
console.log(getHiddenCard('1234567812345678', 5));
