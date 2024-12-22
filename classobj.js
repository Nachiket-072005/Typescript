var device = /** @class */ (function () {
    function device() {
        this.name = "lg";
        this.model = "lg123";
        this.price = 10000;
        this.warranty = 1;
    }
    return device;
}());
// let d1 = new device();
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Milton", 1200);
