// Definição do modelo de usuário
class UserWithoutBuilder {
    constructor(
        public id: string,
        public name: string,
        public email?: string,
        public age?: number,
        public address?: string,
        public phone?: string
    ) {}
}

// Criando usuários com diferentes configurações
const user4 = new UserWithoutBuilder('1', 'John', 'john@example.com', 30, '123 Street', '123456789');
const user5 = new UserWithoutBuilder('2', 'Alice', 'alice@example.com');
const user6 = new UserWithoutBuilder('3', 'Bob', undefined, 25, '456 Avenue');

console.log(user4);
console.log(user5);
console.log(user6);
