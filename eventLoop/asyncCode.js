console.log("start")
const btn = document.getElementById("btn")

function someFunction() {
  setTimeout(() => {
    console.log("Inside setTimeout")
  }, 3000)
  console.log("Inside Some function")
}

btn.addEventListener("click", someFunction)

someFunction()

console.log("end")
