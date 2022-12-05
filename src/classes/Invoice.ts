import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
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

//----------INTERFACES----------//

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Sean',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        return amount * 10;
    },
};

const greetPerson = (person: IsPerson) => {
    console.log('hey', person.name);
};

console.log(greetPerson(me));
