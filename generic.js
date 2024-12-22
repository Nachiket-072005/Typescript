// Generic
function identity(arg) {
    return arg;
}
var output = identity("myString");
console.log(output);
var output1 = identity(100);
console.log(output1);
var output2 = identity(true);
console.log(output2);
function log(val) {
    console.log(val);
}
log("Hello");
log(100);
