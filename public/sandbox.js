"use strict";
//----------TYPES----------
//----------FUNCTION SIGNATURES----------
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(name, greeting);
// };
// //
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === 'add') {
//         return numOne + numTwo;
//     } //error because if action is not add we are NOT returning a number as specified
//     else {
//         return numOne - numTwo;
//     }
// };
// //
// type person = { name: string; age: number };
// let logDetails: (obj: person) => void;
// logDetails = (ninja: person) => {
//     console.log(ninja.name, ninja.age);
// };
//----------CLASSES----------
// class Invoice {
//     client: string;
//     details: string;
//     amount: number;
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`;
//     }
// }
// const invOve = new Invoice('mario', 'work', 300);
// const invTwo = new Invoice('luigi', 'study', 200);
// console.log(invOve, invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOve, invTwo);
// console.log(invoices);
//----------PUBLIC, PRIVATE, READONLY----------
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } //shortcut
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
