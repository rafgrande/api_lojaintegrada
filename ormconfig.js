module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [`./${process.env.FOLDER_ORM}/models/*.${process.env.EXTFILE_ORM}`],
    "migrations": [
      `./${process.env.FOLDER_ORM}/db/migrations/*.${process.env.EXTFILE_ORM}`
    ],
    "cli": {
        "migrationsDir": "./src/db/migrations"
    },
    extra: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  }