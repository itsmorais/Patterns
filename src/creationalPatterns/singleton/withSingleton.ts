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
