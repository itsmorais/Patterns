// Classe de processamento de pagamento SEM o padrão Strategy
class PaymentProcessor {
    processPayment(method: string, amount: number) {
        if (method === 'credit_card') {
            console.log(`Pagamento de R$${amount} realizado com Cartão de Crédito.`);
        } else if (method === 'paypal') {
            console.log(`Pagamento de R$${amount} realizado com PayPal.`);
        } else {
            console.log('Método de pagamento inválido.');
        }
    }
}

// Uso da classe
const processor = new PaymentProcessor();
processor.processPayment('credit_card', 100); // Pagamento com cartão de crédito
processor.processPayment('paypal', 200); // Pagamento com PayPal
