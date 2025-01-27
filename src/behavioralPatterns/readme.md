# **Padrões de Projeto Comportamentais**

Os **padrões de projeto comportamentais** focam na maneira como **objetos e classes interagem** entre si, distribuindo responsabilidades de forma flexível e promovendo a **desacoplagem do fluxo de controle**. Eles permitem que sistemas sejam mais organizados e extensíveis, facilitando a modificação do comportamento sem alterar a estrutura das classes.

## **1. O Problema que os Padrões Comportamentais Resolvem**

À medida que sistemas crescem, o fluxo de comunicação entre objetos pode se tornar complexo e difícil de seguir. Os padrões comportamentais ajudam a:

✅ **Desacoplar classes** – Reduzindo dependências diretas e tornando o código mais modular.
✅ **Melhorar a flexibilidade** – Permitem a alteração do comportamento do sistema sem grandes mudanças.
✅ **Tornar o código mais reutilizável** – Padronizam a forma como objetos interagem.

Esses padrões podem ser divididos em **dois tipos**:
1. **Baseados em classes** – Utilizam **herança** para distribuir comportamentos.
2. **Baseados em objetos** – Utilizam **composição** para organizar interações entre objetos.

A seguir, exploramos dois padrões comportamentais amplamente utilizados: **Strategy** e **Observer**.

---

## **2. Padrões Comportamentais: Strategy & Observer**

### **🔹 Strategy**
- **Objetivo**: Permite definir **diferentes algoritmos** e alterná-los dinamicamente sem modificar a classe que os utiliza.
- **Uso comum**: Quando há múltiplas maneiras de realizar uma mesma operação e queremos trocar a estratégia em tempo de execução.

#### **Exemplo (TypeScript)**
```typescript
// Interface para definir estratégias
interface PaymentStrategy {
    pay(amount: number): void;
}

// Estratégia de pagamento via cartão de crédito
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Pagamento de $${amount} realizado com Cartão de Crédito.`);
    }
}

// Estratégia de pagamento via PayPal
class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Pagamento de $${amount} realizado com PayPal.`);
    }
}

// Contexto que usa diferentes estratégias
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
```

### **🔹 Observer**
- **Objetivo**: Define uma relação **um-para-muitos** entre objetos, garantindo que quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente.
- **Uso comum**: Implementação de **eventos e notificações**, como um sistema de mensagens, notificações de UI, ou atualização automática de estados.

#### **Exemplo (TypeScript)**
```typescript
// Interface do Observer
interface Observer {
    update(message: string): void;
}

// Classe concreta do Observer
class User implements Observer {
    constructor(private name: string) {}
    
    update(message: string): void {
        console.log(`${this.name} recebeu a notificação: ${message}`);
    }
}

// Classe do Subject (Publicador de eventos)
class NotificationSystem {
    private observers: Observer[] = [];
    
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }
    
    notify(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

// Uso do Observer Pattern
const notificationSystem = new NotificationSystem();
const user1 = new User('Alice');
const user2 = new User('Bob');

notificationSystem.addObserver(user1);
notificationSystem.addObserver(user2);

notificationSystem.notify('Nova atualização disponível!');
// Alice recebeu a notificação: Nova atualização disponível!
// Bob recebeu a notificação: Nova atualização disponível!
```

---

## **3. Benefícios dos Padrões Comportamentais**
✅ **Redução do acoplamento** – Objetos interagem de forma mais independente.
✅ **Código mais flexível** – Comportamentos podem ser alterados dinamicamente.
✅ **Maior reutilização** – Estratégias e observadores podem ser reutilizados em múltiplos contextos.
✅ **Facilidade de manutenção** – Separação clara das responsabilidades facilita a evolução do código.

---

## **4. Conclusão**
Os **padrões comportamentais** são fundamentais para garantir que **objetos se comuniquem de maneira eficiente e flexível**. Eles ajudam a organizar a lógica do sistema, tornando a manutenção e escalabilidade mais fáceis.

- O **Strategy Pattern** é ideal para **intercambiar algoritmos dinamicamente**.
- O **Observer Pattern** é excelente para **sistemas de eventos e notificações automáticas**.

Esses padrões são amplamente utilizados em sistemas modernos, especialmente em **arquiteturas orientadas a eventos, aplicações frontend, backends escaláveis e microsserviços**.

---

## **5. Referências**
- Livro: *Padrões de Projeto: Soluções Reutilizáveis de Software Orientado a Objetos* – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (*Gang of Four*).
- Vídeo: "7 Design Patterns EVERY Developer Should Know" – Forrest Knight ([YouTube](https://www.youtube.com/watch?v=BJatgOiiht4)).

