new Promise(resolve => setTimeout(resolve)).then(() => console.log("setTimeout from first promis"))

let prom = new Promise((resolve, reject) => {
  resolve("🤡")
})

prom
  .then((smile) => { console.log(smile) })

Promise.resolve("🎅").then((santa) => {
  console.log(santa)
  return santa
})
  .then(() => Promise.reject("no santa"))
  .finally(() => { console.log("from finally") })
  .catch((error) => {
    console.log(error)
    return "hello world"
  }).then((
    santa
  ) => { console.log(santa) })
