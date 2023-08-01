function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}
var reel = {
  symbols: [
    "X", "Y", "Z", "W", "$", "*", "<", "@"
  ],
  spin() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      );
    }
    this.position = (
      this.position + 100 + randMax(100)
    ) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      );
    }
    return this.symbols[this.position];
  }
};
let reel1 = Object.create(reel)
let reel2 = Object.create(reel)
let reel3 = Object.create(reel)
var slotMachine = {
  reels: [reel1, reel2, reel3
    // потребуются 3 отдельных объекта reel
    // подсказка: Object.create(..)
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    // TODO
    //not working
    let displayArrayTop = [reel1.display.call(reel), reel2.display.call(reel), reel3.display.call(reel)]
    let displayArray = [reel1.display(), reel2.display(), reel3.display()]
    console.log(displayArrayTop)
    console.log(displayArray)
  }
};
slotMachine.spin();
slotMachine.display();
