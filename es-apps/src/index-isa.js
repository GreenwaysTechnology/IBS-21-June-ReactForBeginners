//IS - Inheritance

class SuperAccount {
    constructor(id) {
        this.id = id;
        console.log('super account')
    }
    withdraw() {
        return 0
    }
}
class Account extends SuperAccount {
    constructor(id = 'A00010000') {
        super(id)
        console.log('account')
    }
    deposit() {
        return 1.5;
    }
}
class SavingsAccount extends Account {
    constructor(id) {
        super(id);
        console.log('savings account')
    }
    //overrid
    deposit() {
        return 4000 * super.deposit();
    }
}
let sb = new SavingsAccount('B00013444');
console.log(`id ${sb.id} Amount deposited ${sb.deposit()} ${sb.withdraw()} `)