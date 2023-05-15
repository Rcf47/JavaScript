var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.width = w;
        this.height = h;
    }
    Rectangle.prototype.calcArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rect = new Rectangle(4, 5);
console.log(rect.calcArea());
