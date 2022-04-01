import { Sequelize, DataTypes } from 'sequelize';
import { logger } from '../logger';
import Book from './model/Book'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: msg => logger.debug(msg)
})

Book(sequelize, DataTypes)

if (process.env.NODE_ENV !== 'production') {
  // 'sync' sin parametros crea las tablas si no existen y no hace nada si ya están
  const syncBD = async () => await sequelize.sync()
  syncBD()
}