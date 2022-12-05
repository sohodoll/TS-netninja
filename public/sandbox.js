"use strict";
//----------TYPES----------
// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => console.log(input));
// let age = '30';
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// };
// console.log(circ(500)); //it is checked now, during development, not at runtime
// let names = ['luigi', 'mario', 'roshi'];
// names.push('toad');
// names.push(123); //does not work
// let mixed = ['ken', 4, 'chic', 2, true];
// mixed.push({}); //returns error!
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30,
// };
// ninja.age = 40;
// ninja.isTrue = true; //cannot do that
// ninja = {
//     name: 'sad',
//     belt: 'wr',
//     age: '213', //error! should match the initial structure
// };
//----------EXPLICIT TYPES----------
// let character: string;
// let age: number;
// let isLogged: boolean;
// let ninjas: string[] = [];
//----------UNION TYPES----------
// let mixed: (string | number)[] = [];
// let uid: string | number; //normal variable
//----------OBJECTS----------
// let ninja: {
//     name: string;
//     age: number;
// };
// let ninjaTwo: object; //can be an array!
// console.log('test');
//----------FUNCTION TYPE----------
// let greet = () => {
//     console.log('fwe');
// };
// greet = 'sdf'; //can't
// let greet: Function;
// greet = () => {
//     console.log('fwe');
// };
// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a + b);
// };
// //c? is option argument / c = 10 means default is 10 (use one or the other)
// add(5, 10);
// const minus = (a: number, b: number): number => {
//     //we can specify the function return type
//     return a + b;
// };
// let result = minus(10, 7); //TS knows it is a number
//----------TYPE ALIASES----------
// type StringOrNum = string | number; //creating type aliases
// type objWithName = { name: string; uid: StringOrNum };
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
// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     // constructor(c: string, d: string, a: number) {
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ) {} //shortcut
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`;
//     }
// }
//------------GENERICS------------
// const addUID = <T extends { name: string }>(obj: T) => {
//     //<T> captures what properties are on the object so we have access to them
//     let uid = Math.floor(Math.random() * 100); //it does not know that .name exists!
//     return { ...obj, uid }; //return a new object with UID attached
// };
// let docOne = addUID({ name: 'mario', age: 69 });
// // let docTwo = addUID('13'); //does not work because 'extends object'
//generics and interfaces
// interface Resource<T> {
//     //T!!!
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<string> = {
//     //STRING!!!
//     uid: 1,
//     resourceName: 'person',
//     data: 'SEAN',
// };
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'list',
//     data: ['cey', 'may'],
// };
//------ENUMS--------
//Special type to store keywords and associate them with numeric values
// interface Resource<T> {
//     uid: number;
//     resourceType: number;
//     data: T;
// }
// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: 3,
//     data: { title: 'brothers' },
// };
// const docTwo: Resource<object> = {
//     uid: 1,
//     resourceType: 4,
//     data: { title: 'mario' },
// };
// enum ResourceType {
//     BOOK,
//     AUTHOR,
//     FILM,
//     DIRECTOR,
//     PERSON,
// }
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: { title: 'brothers' },
// };
// const docTwo: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.PERSON,
//     data: { title: 'mario' },
// };
//----------TUPLES----------
let arr = ['ryu', 25, true];
arr[0] = false; // works!
let tup = ['tuy', 24, true]; //each position is defined now, can;t change it to another type value
