// services/UserFacade.ts
import { UserRepository } from '../repositories/UserRepository';
import { EmailService } from '../services/EmailService';
import { StorageService } from '../services/StorageService';

// Facade para gerenciar a criação de usuários
class UserFacade {
    private userRepository: UserRepository;
    private emailService: EmailService;
    private storageService: StorageService;

    constructor() {
        this.userRepository = new UserRepository();
        this.emailService = new EmailService();
        this.storageService = new StorageService();
    }

    async registerUser(name: string, email: string, password: string) {
        const user = await this.userRepository.createUser({ name, email, password });

        await this.emailService.sendWelcomeEmail(email);
        await this.storageService.createUserFolder(user.id);

        return user;
    }
}

// Uso do Facade no controlador
class UserController {
    private userFacade: UserFacade;

    constructor() {
        this.userFacade = new UserFacade();
    }

    async registerUser(name: string, email: string, password: string) {
        return await this.userFacade.registerUser(name, email, password);
    }
}

// Uso do controlador
const controller = new UserController();
controller.registerUser('John Doe', 'john@example.com', 'securepassword');
