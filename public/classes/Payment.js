export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    } //shortcut
    format() {
        return `${this.recipient} should receive $${this.amount} for ${this.details}`;
    }
}
