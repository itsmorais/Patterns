// Interface do Observer (Usuários que recebem notificações)
interface Observer {
    update(message: string): void;
}

// Classe concreta do Observer (Usuário)
class User implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} recebeu a notificação: ${message}`);
    }
}

// Classe Subject (Publicador de eventos)
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

// Uso do Observer Pattern
const notificationSystem = new NotificationSystem();
const user1 = new User('Alice');
const user2 = new User('Bob');

notificationSystem.addObserver(user1);
notificationSystem.addObserver(user2);

notificationSystem.notify('Nova atualização disponível!');
// Alice recebeu a notificação: Nova atualização disponível!
// Bob recebeu a notificação: Nova atualização disponível!
