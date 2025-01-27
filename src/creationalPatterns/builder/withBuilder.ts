// Modelo de usuário
class User {
    public id: string;
    public name: string;
    public email?: string;
    public age?: number;
    public address?: string;
    public phone?: string;

    constructor(builder: UserBuilder) {
        this.id = builder.id;
        this.name = builder.name;
        this.email = builder.email;
        this.age = builder.age;
        this.address = builder.address;
        this.phone = builder.phone;
    }
}

// Implementação do Builder
class UserBuilder {
    public id: string;
    public name: string;
    public email?: string;
    public age?: number;
    public address?: string;
    public phone?: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    setEmail(email: string): UserBuilder {
        this.email = email;
        return this;
    }

    setAge(age: number): UserBuilder {
        this.age = age;
        return this;
    }

    setAddress(address: string): UserBuilder {
        this.address = address;
        return this;
    }

    setPhone(phone: string): UserBuilder {
        this.phone = phone;
        return this;
    }

    build(): User {
        return new User(this);
    }
}

// Criando usuários com o Builder Pattern
const user1 = new UserBuilder('1', 'John')
    .setEmail('john@example.com')
    .setAge(30)
    .setAddress('123 Street')
    .setPhone('123456789')
    .build();

const user2 = new UserBuilder('2', 'Alice')
    .setEmail('alice@example.com')
    .build();

const user3 = new UserBuilder('3', 'Bob')
    .setAge(25)
    .setAddress('456 Avenue')
    .build();

console.log(user1);
console.log(user2);
console.log(user3);
