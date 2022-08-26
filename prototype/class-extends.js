// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}
console.log("是否有constructor：" + Rectangle.prototype.hasOwnProperty("constructor"))
console.log(Rectangle.prototype.constructor)
// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

console.log("是否有constructor：" + Rectangle.prototype.hasOwnProperty("constructor"))
console.log(Rectangle.prototype["constructor"])

// Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();
// console.log(rect.constructor)
