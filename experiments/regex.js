let string = "titanic";
let regex = /t[a-z]*i/;
let result = string.match(regex)

//console.log(result)

let string2 = "<h1>Winter is coming</h1>";
let regex2 = /<.*?>/;
let result2 = string2.match(regex2)

//console.log(result2)
let quoteSample = "The five boxing wizards jump qUickly9.";
let alphabetRegexV2 = /\W/g; // Change this line
let result3 = quoteSample.match(alphabetRegexV2).length;
//console.log(result3);

//challenge
let challengeString = "R32899";
let regexChallenge = /^\w{2,}[^0-8]\d*$/
let challengeResult = challengeString.match(regexChallenge);

//console.log(challengeResult)

//challenge 2
let password = 'ad1fs'
let pwReg = /(?=\w{5})(?=\D+)/
let check = password.match(pwReg)
let check2 = pwReg.test(password)

//console.log(check)
//console.log(check2)

let repeatNum = "42 a42 a42";
let reRegex = /^(\d+)\s(\w+)\1\s\2\1$/; // Change this line
let result4 = repeatNum.match(reRegex);

console.log(result4)
