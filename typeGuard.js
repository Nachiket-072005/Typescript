function check(arg) {
    if (typeof arg === 'number') {
        console.log('It is a number'); // Showing me only number method
    }
    else if (typeof arg === 'string') {
        console.log('It is a string'); // Showing me only string method
    }
    else {
        throw new Error('Invalid type');
    }
}
check(5);
check('Hello');
// Type Narrowing
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.switchTvOff = function () {
        console.log("Tv off!");
    };
    return Tv;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchCarOff = function () {
        console.log("Car off!");
    };
    return Car;
}());
var tv = new Tv();
var car = new Car();
function switchOff(device) {
    if (device instanceof Tv) {
        device.switchTvOff();
    }
    else if (device instanceof Car) {
        device.switchCarOff();
    }
    else {
        throw new Error("Dosen't apply!");
    }
}
switchOff(tv);
switchOff(car);
