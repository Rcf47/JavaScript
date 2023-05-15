class Rectangle {
  width: number;
  height: number;

  constructor(w: number, h: number) {
    this.width = w;
    this.height = h
  }

  calcArea() {
    return this.width * this.height
  }

}

const rect = new Rectangle(4, 5)

console.log(rect.calcArea())
