# Ejemplo 1

## Objetivo

* Conectarse a una BD

## Requerimientos

* instalar `sequelize` con `npm i sequelize` 
* instalar el diver para la BD `npm i sqlite3`

## Desarrollo

### Conexión a la BD

* Inicialicemos un proyecto con todo lo que sabemos hasta ahora para un ambiente de desarrollo; por ahora no pongamos `Apollo Server` ya que solo queremos aprender a conectarnos a una BD

* instalemos `sequelize` con `npm i sequelize`
* ahora necesitaremos el interprete para la BD que estemos usando, en nuestro caso será `SQLite`; lo instalaremos con `npm i sqlite3`

* creamos el archivo `src/db/index.js` donde inicializamos la conexión
```js
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: msg => logger.debug(msg)
})
```

* para probar que funciona, en el archivo `index.js` del proyecto (el que está en la raiz de `src`) creamos una función asincrona con una llamada al método `authenticate` de la instancia de `sequelize` y lo ejecutamos inmediatamente
```js
// definición de función para probar la conexión
const connection = async () => {
  try {
    await sequelize.authenticate();
    logger.info('La conexión a la BD se ha establecido exitosamente')
  } catch (error) {
    logger.error('Error al conectarse a la BD:', error)
  }
}
// ejecución de función para probar la conexión
connection()
```

* ejecutemos el proyecto y veamos que la consola muestra el mensaje
```sh
La conexión a la BD se ha establecido exitosamente
```

### Generación de un modelo

* Agregemos un modelo de `sequlize` que es la representación de una tabla, para esto, dentro de la carpeta `db` hagamos una nueva llamada `model`
* dentro de la carpeta `model` creemos un archivo llamado `Book.js`
* dentro de este vamos a definir la tabla usando los `DataTypes` de `sequelize`
* es importante que definamos un `primaryKey` ya que cada objeto debe poder ser identificado de manera única
* Hagamos la siguiente tabla:
  * Book
    * id: int
    * asin: varchar
    * title: varchar
    * author: varchar
    * pages: int

`src/db/model/Book.js`
```js
export default (sequelize, DataTypes) => {
  return sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    asin: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    // Aquí van otras opciones del modelo
  })
}
```
* importemos Book debajo de la instancia de sequelize
```
// Creación de modelos con la instancia recien creada
Book(sequelize, DataTypes)
```

* agreguemos una llamada a `.sync()` para poder crear las tablas en la BD
> En `producción` lo haremos mediante migraciones, esto solo es para desarrollo
```js
if (process.env.NODE_ENV !== 'production') {
  // 'sync' sin parametros crea las tablas si no existen y no hace nada si ya están
  const syncBD = async () => await sequelize.sync()
  syncBD()
}
```

* al final, nuestro archivo index.js de la carpeta `db` debe lucir de la siguiente manera
```js
import { Sequelize, DataTypes } from 'sequelize';
import { logger } from '../logger';
import Book from './model/Book'

// instancia de sequelize (conexión a BD)
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: msg => logger.debug(msg)
})
// Creación de modelos con la instancia recien creada
Book(sequelize, DataTypes)

if (process.env.NODE_ENV !== 'production') {
  // 'sync' sin parametros crea las tablas si no existen y no hace nada si ya están
  const syncBD = async () => await sequelize.sync()
  syncBD()
}
```