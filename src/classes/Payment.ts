import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {} //shortcut

    format() {
        return `${this.recipient} should receive $${this.amount} for ${this.details}`;
    }
}
