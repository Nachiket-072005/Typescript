// TypeScript Type Assersion
let num: any = 5;

(<number>num).toFixed(2);

// Type Casting

let num1: any = 5;

(num1 as number).toFixed(2);

// Non-null assertion operator

let num2: null | undefined | number;

num2!.toFixed(2); // This will throw an error if num2 is null or undefined