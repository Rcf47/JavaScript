new Promise(resolve => setTimeout(resolve)).then(() => console.log(4))
Promise.resolve(5).then(console.log)
