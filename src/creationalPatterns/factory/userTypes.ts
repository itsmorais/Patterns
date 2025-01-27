// Implementação dos diferentes tipos de usuários
class AdminUser implements User {
    constructor(public id: string, public name: string) {}
    getPermissions() {
        return ['read', 'write', 'delete'];
    }
}

class ModeratorUser implements User {
    constructor(public id: string, public name: string) {}
    getPermissions() {
        return ['read', 'write'];
    }
}

class RegularUser implements User {
    constructor(public id: string, public name: string) {}
    getPermissions() {
        return ['read'];
    }
}