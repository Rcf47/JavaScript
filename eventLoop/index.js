let firstFunction = () => {
  console.log("log1")
  console.log("log2")
}

let secondFunction = () => {
  console.log("log3")
  firstFunction()
}

secondFunction()
