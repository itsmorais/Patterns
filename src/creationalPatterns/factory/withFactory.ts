class UserFactory {
    static create(type: 'admin' | 'moderator' | 'regular', data: { id: string; name: string }): User {
        switch (type) {
            case 'admin':
                return new AdminUser(data.id, data.name);
            case 'moderator':
                return new ModeratorUser(data.id, data.name);
            case 'regular':
                return new RegularUser(data.id, data.name);
            default:
                throw new Error(`Invalid user type: ${type}`);
        }
    }
}

// Criando usuários com a Factory
const userFactory1 = UserFactory.create('admin', { id: '1', name: 'John' });
const userFactory2 = UserFactory.create('moderator', { id: '2', name: 'Alice' });

console.log(userFactory1, user1.getPermissions());
console.log(userFactory2, userFactory2.getPermissions());
