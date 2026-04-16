class BankTransferStrategy {
    process(amount) {
        return {
            success: true,
            method: 'Bank Transfer',
            message: `Transfer successful: $${amount}`
        };
    }
}

class CreditCardStrategy {
    process(amount) {
        return {
            success: true,
            method: 'Credit Card',
            message: `Card payment successful: $${amount}`
        };
    }
}

class StrategyFactory {
    static create(method) {
        switch (method) {
            case 'Bank Transfer':
                return new BankTransferStrategy();
            case 'Credit Card':
                return new CreditCardStrategy();
            default:
                throw new Error('Invalid payment method');
        }
    }
}

class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    execute(amount) {
        return this.strategy.process(amount);
    }
}

module.exports = {
    PaymentContext,
    StrategyFactory
};