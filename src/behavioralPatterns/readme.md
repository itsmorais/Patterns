# **Behavioral Design Patterns**

Behavioral design patterns focus on how **objects and classes interact** with each other, distributing responsibilities flexibly and promoting **decoupled control flow**. They allow systems to be more organized and extensible, making it easier to modify behavior without altering class structures.

## **1. The Problem Behavioral Patterns Solve**

As systems grow, communication flow between objects can become complex and difficult to follow. Behavioral patterns help:

✅ **Decouple classes** – Reducing direct dependencies and making the code more modular.
✅ **Improve flexibility** – Allowing system behavior to be changed without major modifications.
✅ **Make code more reusable** – Standardizing how objects interact.

These patterns can be divided into **two types**:
1. **Class-based** – Use **inheritance** to distribute behaviors.
2. **Object-based** – Use **composition** to manage interactions between objects.

Below, we explore two widely used behavioral patterns: **Strategy** and **Observer**.

---

## **2. Behavioral Patterns: Strategy & Observer**

### **🔹 Strategy**
- **Purpose**: Defines **different algorithms** and allows them to be swapped dynamically without modifying the class using them.
- **Common use case**: When there are multiple ways to perform an operation, and we want to switch strategies at runtime.

#### **Example (TypeScript)**
```typescript
// Interface to define strategies
interface PaymentStrategy {
    pay(amount: number): void;
}

// Payment strategy via credit card
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Payment of $${amount} made using Credit Card.`);
    }
}

// Payment strategy via PayPal
class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Payment of $${amount} made using PayPal.`);
    }
}

// Context that uses different strategies
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

// Using the Strategy Pattern
const processor = new PaymentProcessor(new CreditCardPayment());
processor.executePayment(100); // Payment via credit card

processor.setStrategy(new PayPalPayment());
processor.executePayment(200); // Payment via PayPal
```

### **🔹 Observer**
- **Purpose**: Defines a **one-to-many** relationship between objects, ensuring that when an object changes state, all its dependents are automatically notified.
- **Common use case**: Implementing **event and notification systems**, such as messaging platforms, UI notifications, or automatic state updates.

#### **Example (TypeScript)**
```typescript
// Observer interface
interface Observer {
    update(message: string): void;
}

// Concrete Observer class (User)
class User implements Observer {
    constructor(private name: string) {}
    
    update(message: string): void {
        console.log(`${this.name} received notification: ${message}`);
    }
}

// Subject class (Event Publisher)
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

// Using the Observer Pattern
const notificationSystem = new NotificationSystem();
const user1 = new User('Alice');
const user2 = new User('Bob');

notificationSystem.addObserver(user1);
notificationSystem.addObserver(user2);

notificationSystem.notify('New update available!');
// Alice received notification: New update available!
// Bob received notification: New update available!
```

---

## **3. Benefits of Behavioral Patterns**
✅ **Reduces coupling** – Objects interact more independently.
✅ **Flexible code** – Behaviors can be changed dynamically.
✅ **Increased reusability** – Strategies and observers can be reused across different contexts.
✅ **Easier maintenance** – Clear separation of responsibilities makes code evolution simpler.

---

## **4. Conclusion**
Behavioral patterns are essential to ensure **efficient and flexible communication** between objects. They help organize system logic, making it easier to maintain and scale.

- The **Strategy Pattern** is ideal for **switching algorithms dynamically**.
- The **Observer Pattern** is excellent for **event-driven systems and automatic notifications**.

These patterns are widely used in modern systems, especially in **event-driven architectures, frontend applications, scalable backends, and microservices**.

---

## **5. References**
- Book: *Design Patterns: Elements of Reusable Object-Oriented Software* – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (*Gang of Four*).
- Video: "7 Design Patterns EVERY Developer Should Know" – Forrest Knight ([YouTube](https://www.youtube.com/watch?v=BJatgOiiht4)).

