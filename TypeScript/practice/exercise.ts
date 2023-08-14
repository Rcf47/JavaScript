function getHiddenCard(cardNumber: string, starsCount = 4): string {
  let result = ""
  let cardNumberArr = cardNumber.split("").splice(-4)
  let starArr: string[] = Array(starsCount).fill("*")
  result = starArr.concat(cardNumberArr).join("")
  return result
}

//console.log(getHiddenCard('1234567812345678', 3))
//console.log(getHiddenCard('1234567812345678', 5))


function filterAnagrams(word: string, list: string[]): string[] {
  const sortedWord = word.toLowerCase().split("").sort().join("")
  return list.filter(item => {
    const sortedItem = item.toLowerCase().split("").sort().join("")
    return sortedItem === sortedWord
  })
}
