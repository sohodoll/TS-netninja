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

type StringOrNum = string | number; //creating type aliases
type objWithName = { name: string; uid: StringOrNum };

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

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {} //shortcut

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
