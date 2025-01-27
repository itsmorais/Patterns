# **Structural Design Patterns**

Structural design patterns focus on how **classes and objects are composed** to form larger structures. These patterns help define **efficient ways to organize objects and classes**, ensuring that a system is **more modular, reusable, and maintainable**.

## **1. The Problem Structural Patterns Solve**
As a system grows, it can become complex and difficult to manage. The structure of the code can become disorganized and hard to modify. Structural patterns help **organize dependencies**, making code **more reusable and scalable** without requiring major refactoring.

Structural patterns are categorized into **two main types**:

1. **Class-based structural patterns**: Use **inheritance** to combine interfaces or implement new functionalities.
2. **Object-based structural patterns**: Use **composition** to dynamically add new functionalities at runtime.

The advantage of **composition over inheritance** is that it allows **modifications at runtime**, while inheritance is rigid and defined **at compile time**.

---

## **2. Key Structural Patterns: Adapter & Facade**
Below are two essential structural design patterns: **Adapter** and **Facade**.

### **🔹 Adapter**
- **Purpose**: Enables two incompatible interfaces to work together by converting one interface into another that the client expects.
- **Common Use Case**: When dealing with legacy systems or third-party libraries that have different APIs from what the current system needs.

#### **Example (TypeScript)**
```typescript
// Old system that needs adaptation
class OldSystem {
    oldMethod(): void {
        console.log('Old method called');
    }
}

// Target interface expected by new system
interface NewSystem {
    newMethod(): void;
}

// Adapter that bridges the gap
class Adapter implements NewSystem {
    private oldSystem: OldSystem;
    
    constructor(oldSystem: OldSystem) {
        this.oldSystem = oldSystem;
    }
    
    newMethod(): void {
        this.oldSystem.oldMethod();
    }
}

// Usage
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
adapter.newMethod(); // Calls oldMethod() internally
```

### **🔹 Facade**
- **Purpose**: Provides a **simplified interface** to a complex system, reducing its complexity for the client.
- **Common Use Case**: When exposing only a subset of a large system's functionality, such as an API that simplifies calls to multiple internal services.

#### **Example (TypeScript)**
```typescript
// Complex subsystems
class SubsystemA {
    operationA(): void {
        console.log('Operation A executed');
    }
}

class SubsystemB {
    operationB(): void {
        console.log('Operation B executed');
    }
}

// Facade that simplifies interaction
class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;
    
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }
    
    performOperations(): void {
        this.subsystemA.operationA();
        this.subsystemB.operationB();
    }
}

// Usage
const facade = new Facade();
facade.performOperations();
```

---

## **3. Benefits of Structural Patterns**
✅ **Improved code organization** - These patterns help structure a system in a modular way.
✅ **Easier maintenance and scalability** - Reduces direct dependencies between classes.
✅ **Better code reuse** - Objects and classes can be reused across different parts of the system.
✅ **Flexibility** - Patterns like **Adapter** and **Facade** allow modifications without altering existing code.

---

## **4. Conclusion**
Structural design patterns are essential for **large and complex systems** as they ensure that the composition of objects and classes is done in an **organized and efficient manner**. These patterns are widely used in **APIs, distributed systems, graphical user interfaces, and third-party library integration**.

---

## **5. References**
- Book: *Design Patterns: Elements of Reusable Object-Oriented Software* – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (*Gang of Four*).
- Video: "7 Design Patterns EVERY Developer Should Know" – Forrest Knight ([YouTube](https://www.youtube.com/watch?v=BJatgOiiht4)).

