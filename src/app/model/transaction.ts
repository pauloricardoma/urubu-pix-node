export class Transaction {
  constructor(public type: string, public value: number) {
    this.type = type;
    this.value = value;
  }
}
