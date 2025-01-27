# **Creational Design Patterns**

Creational design patterns are a set of design patterns that **abstract the process of object instantiation**, making a system **independent of how its objects are created, composed, and represented**.

## **1. Introduction**

Instantiating objects directly within the code creates a strong dependency between classes. This approach **reduces system flexibility**, making future changes and maintenance more difficult. Creational patterns help solve this problem by providing **abstractions that encapsulate the object creation process**, reducing coupling between system components.

## **2. Classification of Creational Patterns**

Creational patterns are divided into **two main categories**:

1. **Class-based patterns**: Use **inheritance** to define which class will be instantiated.
2. **Object-based patterns**: Delegate the instantiation of objects to other classes, promoting **composition over inheritance**.

The modern trend is to favor **composition over inheritance**, as it reduces coupling and increases code reuse.

## **3. Key Creational Patterns**

### **🔹 Singleton**
- **Purpose**: Ensures that only one instance of a class is created and provides a global access point to it.
- **Common Use Cases**: Managing database connections, global caching, system configurations.

### **🔹 Factory Method**
- **Purpose**: Defines an interface for creating objects but allows subclasses to decide which concrete class will be instantiated.
- **Common Use Cases**: Creating objects without exposing their instantiation logic to the client.

### **🔹 Builder**
- **Purpose**: Allows the construction of complex objects step by step, separating the construction logic from the final representation.
- **Common Use Cases**: Objects that have multiple optional configurations.



## **4. Benefits of Creational Patterns**
✅ **Reduce coupling** between classes.
✅ **Facilitate maintenance and extensibility** of the system.
✅ **Allow dynamic changes** in object instantiation.
✅ **Improve code reuse**, promoting best practices.

## **5. References**
- Book: *Design Patterns: Elements of Reusable Object-Oriented Software* – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (*Gang of Four*).
- Video: "7 Design Patterns EVERY Developer Should Know" – Forrest Knight ([YouTube](https://www.youtube.com/watch?v=BJatgOiiht4)).

---

🚀 This repository aims to document and exemplify creational design patterns. For more details, check the implementation files in this repository!

