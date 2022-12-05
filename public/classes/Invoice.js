export class Invoice {
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
const me = {
    name: 'Sean',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount * 10;
    },
};
const greetPerson = (person) => {
    console.log('hey', person.name);
};
console.log(greetPerson(me));
