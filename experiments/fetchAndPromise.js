//fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//  .then(response => response.json())
//  .then(result => console.log(result))
//  .catch(error => console.log('error', error));

//fetch("https://catfact.ninja/fact")
//  .then(res => res.json())
//  .then(data => console.log(data.fact))
//  .catch(error => console.log("error", error));

let promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      error ? reject("Run Forest Run") : resolve("Looks good")
    }, 3000)
  })
}

promise()
  .then(res => console.log(res))
  .catch(rej => console.log(rej))

fetch("https://www.boredapi.com/api/activity")
  .then(data => data.json())
  .then(data => console.log(data.activity))
  .catch(error => console.log("error", error))
