// IMPLEMENTAÇÃO SEM SINGLETON

// database/sqlite/index.ts (Sem Singleton)
import knex from 'knex';

export function createConnection() {
    return knex({
        client: 'sqlite3',
        connection: {
            filename: './database.db',
        },
        useNullAsDefault: true,
    });
}

// Em cada requisição, uma nova conexão é criada
import { createConnection } from './database/sqlite/index';

const db1 = createConnection();
const db2 = createConnection();

console.log(db1 === db2); // false - Cada chamada cria uma nova instância




// IMPLEMENTAÇÃO UTILIZANDO O PADRÃO SINGLETON

// database/sqlite/index.ts (Com Singleton)
import knex from 'knex';

class Database {
    private static instance: ReturnType<typeof knex>;

    private constructor() {}

    public static getInstance() {
        if (!Database.instance) {
            Database.instance = knex({
                client: 'sqlite3',
                connection: {
                    filename: './database.db',
                },
                useNullAsDefault: true,
            });
        }
        return Database.instance;
    }
}

// Em qualquer parte do código, utilizamos a mesma instância
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true - Ambas são a mesma instância
