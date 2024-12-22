// Generic

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
console.log(output);

let output1 = identity<number>(100);
console.log(output1);

let output2 = identity<boolean>(true);
console.log(output2);


function log<T>(val: T) {
    console.log(val);
}

log<string>("Hello");

log(100);