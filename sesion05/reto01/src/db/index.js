import { Sequelize, DataTypes } from 'sequelize';
import { logger } from '../logger';
import Book from './model/Book'

// instancia de sequelize (conexión a BD)
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: msg => logger.debug(msg) // debemos subir en nivel lo logging en nuestra configuración de winston
})

// Creación de modelos con la instancia recien creada
Book(sequelize, DataTypes)

if (process.env.NODE_ENV !== 'production') {
  // 'sync' sin parametros crea las tablas si no existen y no hace nada si ya están
  const syncBD = async () => await sequelize.sync()
  syncBD()
}
