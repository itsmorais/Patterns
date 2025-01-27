// Interface para definir estratégias de pagamento
interface PaymentStrategy {
    pay(amount: number): void;
}

// Estratégia de pagamento via cartão de crédito
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Pagamento de R$${amount} realizado com Cartão de Crédito.`);
    }
}

// Estratégia de pagamento via PayPal
class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Pagamento de R$${amount} realizado com PayPal.`);
    }
}

// Processador de pagamentos que aceita qualquer estratégia
class PaymentProcessor {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    executePayment(amount: number) {
        this.strategy.pay(amount);
    }
}

// Uso do Strategy Pattern
const processor = new PaymentProcessor(new CreditCardPayment());
processor.executePayment(100); // Pagamento com cartão de crédito

processor.setStrategy(new PayPalPayment());
processor.executePayment(200); // Pagamento com PayPal
