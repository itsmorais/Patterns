// Definição das classes de usuários
interface User {
    id: string;
    name: string;
    getPermissions(): string[];
}

// Simulação de entrada de dados
const type = 'admin';
const data = { id: '1', name: 'John' };
let user: User;

// Lógica manual de criação de usuário
if (type === 'admin') {
    user = new AdminUser(data.id, data.name);
} else if (type === 'moderator') {
    user = new ModeratorUser(data.id, data.name);
} else if (type === 'regular') {
    user = new RegularUser(data.id, data.name);
} else {
    throw new Error(`Invalid user type: ${type}`);
}

// Saída dos usuários criados
console.log(user, user.getPermissions());
