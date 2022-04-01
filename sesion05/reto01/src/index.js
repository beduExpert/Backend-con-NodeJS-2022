import 'dotenv/config'
import { logger } from "./logger";
import { sequelize } from './db';

// definición de función para probar la conexión
const connection = async () => {
  try {
    // intento de conexión a la BD con un query de prueba
    await sequelize.authenticate()
    logger.info('La conexión a la BD se ha establecido exitosamente')
    // la primera vez este código no arroja resultados ya que no hay registros en la BD
    console.log(await sequelize.models.Book.findAll())
    // *** si intententamos correr este código más de una vez obtendremos un error por la restricción de unicidad del campo 'asin'
    await sequelize.models.Book.create({
      asin: 'B015NTIXWE',
      title: 'Ego Is the Enemy',
      author: 'Ryan Holiday',
      pages: 247
    })
    // después de la inserción se obtiene un array con los elementos encontrados
    console.log(await sequelize.models.Book.findAll())
  } catch (error) {
    logger.error('Error al conectarse a la BD:', error)
  }
}
// ejecución de función para probar la conexión
connection()
