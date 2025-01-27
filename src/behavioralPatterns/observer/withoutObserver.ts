// Classe de notificações SEM o padrão Observer
class NotificationSystem {
    sendNotification(user: string, message: string): void {
        console.log(`Enviando notificação para ${user}: ${message}`);
    }
}

// Simulação de envio de notificações
const notificationSystem = new NotificationSystem();
notificationSystem.sendNotification('Alice', 'Nova atualização disponível!');
notificationSystem.sendNotification('Bob', 'Nova atualização disponível!');
