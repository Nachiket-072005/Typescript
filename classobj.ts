class device {
    name = "lg";
    model = "lg123";
    price = 10000;
    warranty = 1;
}

// let d1 = new device();

class BottleMaker {
    constructor(public name: string, public price: number) { }
}

// let b1 = new BottleMaker("Milton", 1200);

class HumanMaker {
    age = 0;
    constructor(public name: string, public isHandsome: boolean) {

    }
}

let h1 = new HumanMaker("Nachiket", true);