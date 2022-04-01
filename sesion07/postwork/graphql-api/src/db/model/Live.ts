import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize'
import { sequelize } from '..'

export default class Live extends Model<InferAttributes<Live>, InferCreationAttributes<Live>> {
  declare id: string
  declare title: string
  declare subtitle: string
  declare date: string
  declare time: string
  declare mode: string
  declare img: string
}

Live.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,
  sequelize: sequelize
})

