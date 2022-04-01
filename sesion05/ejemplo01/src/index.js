import 'dotenv/config'
import { logger } from "./logger";
import { sequelize } from './db';

// definición de función para probar la conexión
const connection = async () => {
  try {
    await sequelize.authenticate()
    logger.info('La conexión a la BD se ha establecido exitosamente')
  } catch (error) {
    logger.error('Error al conectarse a la BD:', error)
  }
}
// ejecución de función para probar la conexión
connection()
