let homework = {
  study() {
    console.log(`Please study ${this.topic}`)
  }
}
let experimentObject = new Object()
experimentObject.topic = "experiment"

let jsHomework = Object.create(homework)
jsHomework.topic = "JS"
jsHomework.study()

let mathHomework = { topic: "Math" }

let someObject = Object.create(homework)
homework.study.call(mathHomework)
someObject.study.call(experimentObject);


