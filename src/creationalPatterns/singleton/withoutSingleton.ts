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

