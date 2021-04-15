module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": ["./src/models/*.ts"],
    "migrations": [
      "./src/db/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/db/migrations"
    }
  }