// Intefaces and Type Aliases

interface User {
    name: string;
    age: number;
    email: string;
    password: string;
    gender?: string;
}

interface Admin extends User {
    role: string;
    admin: boolean;
}

function getObjData(obj: User) {
    console.log(obj);
}

function getAdminData(admin: Admin) {
    console.log(admin);
}

getObjData({ name: "Nachiket", age: 21, email: "nachiket014@gamil.com", password: "123456" });
getObjData({ name: "Angela", age: 21, email: "angela@gmail.com", password: "45678", gender: "Female" })


// Aliases

type sankhya = number;

let d: sankhya;

type value = string | number | null;

let e: value;

// Intersection Types

type User1 = {
    name: string;
    email: string;
}

type Admin1 = User1 & {
    getDetails(user: string): void
}

function abc(a: Admin1) {
    a.getDetails("Nachiket");
}