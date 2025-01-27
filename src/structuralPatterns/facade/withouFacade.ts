// Importação de serviços individuais
import { UserRepository } from './repositories/UserRepository';
import { EmailService } from './services/EmailService';
import { StorageService } from './services/StorageService';

class UserController {
    async registerUser(name: string, email: string, password: string) {
        const userRepository = new UserRepository();
        const emailService = new EmailService();
        const storageService = new StorageService();

        // Criando usuário no banco de dados
        const user = await userRepository.createUser({ name, email, password });

        // Enviando e-mail de boas-vindas
        await emailService.sendWelcomeEmail(email);

        // Criando diretório de armazenamento do usuário
        await storageService.createUserFolder(user.id);

        return user;
    }
}

// Uso do controlador
const controller = new UserController();
controller.registerUser('John Doe', 'john@example.com', 'securepassword');
