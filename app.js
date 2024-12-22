// let a = 10;
// let b = 20;
// function add(a: number, b: number) {
//     return a + b;
// }
// console.log(add(a, b));
var arr = [1, 2, 3, "Nachiket"];
var arr1 = [1, 2, 3, 4, 5];
// Tuple
var arr2 = [1, "Nachiket"];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
