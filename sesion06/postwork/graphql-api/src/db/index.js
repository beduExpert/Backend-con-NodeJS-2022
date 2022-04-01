import { Sequelize, DataTypes } from 'sequelize'
import { logger } from '../logger'
import Live from './model/Live'
import User from './model/User'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: msg => logger.debug(msg)
})

Live(sequelize, DataTypes)
User(sequelize, DataTypes)

if (process.env.NODE_ENV !== 'production') {
  const syncBD = async () => await sequelize.sync()
  syncBD()
}
