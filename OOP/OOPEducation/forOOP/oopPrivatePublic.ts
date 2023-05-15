class RectanglePrivate {
  private _width: number;
  private _height: number;

  constructor(w: number, h: number) {
    this._width = w;
    this._height = h
  }
  public get width() {
    return this._width
  }

  public get height() {
    return this._height
  }

  public set width(value) {
    this._width = value
  }

  public calcArea() {
    return this._width * this._height
  }

  public calcPerimeter() {
    return (this._width + this._height) * 2
  }
}

const rect = new RectanglePrivate(4, 5)

console.log(rect.calcArea())
console.log(rect.calcPerimeter())
