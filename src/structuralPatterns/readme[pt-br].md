# **Padrões de Projeto Estruturais**

Os padrões de projeto estruturais focam em como **classes e objetos são compostos** para formar estruturas maiores. Esses padrões ajudam a definir **maneiras eficientes de organizar objetos e classes**, garantindo que um sistema seja **mais modular, reutilizável e de fácil manutenção**.

## **1. O Problema que os Padrões Estruturais Resolvem**
À medida que um sistema cresce, ele pode se tornar complexo e difícil de gerenciar. A estrutura do código pode se tornar desorganizada e difícil de modificar. Os padrões estruturais ajudam a **organizar dependências**, tornando o código **mais reutilizável e escalável** sem a necessidade de grandes refatorações.

Os padrões estruturais são categorizados em **dois tipos principais**:

1. **Padrões estruturais baseados em classes**: Utilizam **herança** para combinar interfaces ou implementar novas funcionalidades.
2. **Padrões estruturais baseados em objetos**: Utilizam **composição** para adicionar novas funcionalidades dinamicamente em tempo de execução.

A vantagem da **composição sobre a herança** é que permite **modificações em tempo de execução**, enquanto a herança é mais rígida e definida **em tempo de compilação**.

---

## **2. Principais Padrões Estruturais: Adapter & Facade**
A seguir, dois padrões estruturais essenciais: **Adapter** e **Facade**.

### **🔹 Adapter**
- **Objetivo**: Permite que duas interfaces incompatíveis trabalhem juntas, convertendo uma interface para outra que o cliente espera.
- **Uso comum**: Quando lidamos com sistemas legados ou bibliotecas de terceiros que possuem APIs diferentes das que o sistema atual precisa.

#### **Exemplo (TypeScript)**
```typescript
// Sistema antigo que precisa de adaptação
class SistemaAntigo {
    metodoAntigo(): void {
        console.log('Método antigo chamado');
    }
}

// Interface esperada pelo novo sistema
interface NovoSistema {
    metodoNovo(): void;
}

// Adapter que faz a conversão
class Adapter implements NovoSistema {
    private sistemaAntigo: SistemaAntigo;
    
    constructor(sistemaAntigo: SistemaAntigo) {
        this.sistemaAntigo = sistemaAntigo;
    }
    
    metodoNovo(): void {
        this.sistemaAntigo.metodoAntigo();
    }
}

// Uso
const sistemaAntigo = new SistemaAntigo();
const adapter = new Adapter(sistemaAntigo);
adapter.metodoNovo(); // Chama metodoAntigo() internamente
```

### **🔹 Facade**
- **Objetivo**: Fornece uma **interface simplificada** para um sistema complexo, reduzindo sua complexidade para o cliente.
- **Uso comum**: Quando queremos expor apenas um subconjunto das funcionalidades de um sistema grande, como uma API que simplifica chamadas para múltiplos serviços internos.

#### **Exemplo (TypeScript)**
```typescript
// Subsistemas complexos
class SubsystemA {
    operacaoA(): void {
        console.log('Operação A executada');
    }
}

class SubsystemB {
    operacaoB(): void {
        console.log('Operação B executada');
    }
}

// Facade que simplifica a interação
class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;
    
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }
    
    executarOperacoes(): void {
        this.subsystemA.operacaoA();
        this.subsystemB.operacaoB();
    }
}

// Uso
const facade = new Facade();
facade.executarOperacoes();
```

---

## **3. Benefícios dos Padrões Estruturais**
✅ **Melhor organização do código** - Esses padrões ajudam a estruturar um sistema de forma modular.  
✅ **Facilidade de manutenção e escalabilidade** - Reduz dependências diretas entre classes.  
✅ **Maior reutilização de código** - Objetos e classes podem ser reutilizados em diferentes partes do sistema.  
✅ **Flexibilidade** - Padrões como **Adapter** e **Facade** permitem modificações sem alterar o código existente.  

---

## **4. Conclusão**
Os padrões de projeto estruturais são essenciais para **sistemas grandes e complexos**, pois garantem que a composição de objetos e classes seja feita de maneira **organizada e eficiente**. Esses padrões são amplamente utilizados no desenvolvimento de **APIs, sistemas distribuídos, interfaces gráficas e integração de bibliotecas externas**.

---

## **5. Referências**
- Livro: *Padrões de Projeto: Soluções Reutilizáveis de Software Orientado a Objetos* – Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (*Gang of Four*).
- Vídeo: "7 Design Patterns EVERY Developer Should Know" – Forrest Knight ([YouTube](https://www.youtube.com/watch?v=BJatgOiiht4)).

