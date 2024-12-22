function check(arg: number | string) {
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

class Tv {
    switchTvOff() {
        console.log("Tv off!");
    }
}

class Car {
    switchCarOff() {
        console.log("Car off!");
    }
}

let tv = new Tv();
let car = new Car();

function switchOff(device: Tv | Car) {
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