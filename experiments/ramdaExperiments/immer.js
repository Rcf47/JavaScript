const { produce } = require("immer")

const object = { ref: { data: {} } }
const immutable = produce(object, (draft) => {
  draft.ref.boom = '💥';
})

console.log(immutable)
console.log(object)
