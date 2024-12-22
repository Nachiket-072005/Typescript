// Type Inference
let b = 10; // Type Inference
// * TypeScript automatically assigns the type of the variable based on the value assigned to it.
// * In the above example, TypeScript automatically assigns the type of the variable a as number.


// Type Annotations

let a: number = 10; // Type Annotation

// * TypeScript allows you to specify the type of a variable explicitly.
// * In the above example, we have specified the type of the variable a as number.


// Type Inference vs Type Annotations

// * Type Inference is when TypeScript automatically assigns the type of the variable based on the value assigned to it.
// * Type Annotations is when you specify the type of the variable explicitly.

// * Type Inference is preferred over Type Annotations because it reduces the amount of code you have to write.

// In function, Type annotations are used to specify the type of the parameters and the return type of the function. 
// For example, in the following code snippet, we have specified the type of the parameters a and b as number and the return type of the function as number.
function add(a: number, b: number): number {
    return a + b;
}