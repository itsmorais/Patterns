# **Padrões de Criação (Creational Design Patterns)**

Os **padrões de criação** são um conjunto de padrões de design que **abstraem o processo de instanciação de objetos**, tornando um sistema **independente da maneira como seus objetos são criados, compostos e representados**.

## **1. Introdução**

Ao instanciar objetos diretamente dentro do código, criamos uma forte dependência entre classes. Essa abordagem **reduz a flexibilidade** do sistema, dificultando futuras alterações e manutenções. Os padrões de criação ajudam a resolver esse problema ao fornecer **abstrações que encapsulam o processo de criação de objetos**, reduzindo o acoplamento entre os componentes do sistema.

## **2. Classificação dos Padrões de Criação**

Os padrões de criação são divididos em **duas categorias principais**:

1. **Padrões baseados em classe**: Utilizam **herança** para definir a classe que será instanciada.
2. **Padrões baseados em objeto**: Delegam a instanciação de objetos para outras classes, promovendo **composição ao invés de herança**.

A tendência moderna é favorecer **composição sobre herança**, pois isso reduz o acoplamento e aumenta a reutilização de código.

## **3. Principais Padrões de Criação**

### **🔹 Singleton**
- **Objetivo**: Garante que apenas uma instância de uma classe seja criada e fornece um ponto global de acesso a ela.
- **Uso comum**: Gerenciamento de conexões com banco de dados, cache global, configurações do sistema.

### **🔹 Factory Method**
- **Objetivo**: Define uma interface para criar objetos, mas permite que subclasses decidam qual classe concreta será instanciada.
- **Uso comum**: Criar objetos sem expor sua lógica de criação ao cliente.


### **🔹 Builder**
- **Objetivo**: Permite a construção de objetos complexos passo a passo, separando a lógica de construção da representação final.
- **Uso comum**: Objetos que possuem diversas configurações opcionais.



## **4. Benefícios dos Padrões de Criação**
✅ **Reduzem o acoplamento** entre classes.
✅ **Facilitam a manutenção e extensibilidade** do sistema.
✅ **Permitem alterações dinâmicas** na instanciação de objetos.
✅ **Aprimoram a reutilização de código**, promovendo boas práticas.

## **5. Referências**
- Livro: *Padrões de Projeto* – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (*Gang of Four*).
- Vídeo: "7 Design Patterns EVERY Developer Should Know" – Forrest Knight ([YouTube](https://www.youtube.com/watch?v=BJatgOiiht4)).

---

🚀 Este repositório tem como objetivo documentar e exemplificar os padrões de criação. Para mais detalhes, consulte os arquivos de implementação neste repositório!

