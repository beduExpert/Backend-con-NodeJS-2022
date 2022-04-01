# Ejemplo 1: Hello World de Apollo Server con TypeScript

## Objetivo

Crear un proyecto base de Apollo Server con TypeScript

## Requerimientos

* compilador de `typescript`
* archivo `tsconfig.json` en la raiz del proyecto
* actualización de los `scripts` de arranque

## Desarrollo
* Creamos la carpeta ejemplo01 e inicializamos un proyecto node
```sh
mkdir ejemplo01
cd ejemplo01
npm init -y
```

### Configuración general del proyecto

* En este tipo de proyectos no es necesario usar `babel` sino el compilador de `typescript`
* En el ambiente de desarrollo, para ejecutar código sin tener que compilarlo antes,  usamos `ts-node` (`nodemon` lo usará)
```sh
npm i -D typescript ts-node
```

* Instalemos las dependencias que hemos usado hasta ahora
```sh
npm i apollo-server apollo-server-errors bcrypt dotenv graphql jsonwebtoken sequelize sqlite3 winston 
winston-daily-rotate-file
```

* modificamos nuestros scripts de arranque para poner el que genera código para producción y el que ejecuta el servidor de manera local

```json
  "scripts": {
    "build": "npx tsc",
    "start": "npx nodemon src/index.ts"
  },
```

* Generemos el archivo [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) en la raiz del proyecto para indicar que es un proyecto `TypeScript` y además dar las configuraciones para la compilación, es decir, este archivo es como una mezcla del `package.json` + `babel.config.json`
```ts
{
  "compilerOptions": {
    "lib": [
      "es2018"
    ],
    "module": "CommonJS",
    "target": "es2018",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "outDir": "./dist",
  }
}
```

* De alguno de los proyectos anteriores, copia el archivo `logger/index.js` y cambia la extensión de `.js` a `.ts`

```ts
import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'

export const logger = createLogger({
   level: 'debug',
   format: format.combine(
      format.label({ label: 'Graphql API' }),
      format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
      format.printf(({ label, timestamp, level, message }) => `[${label}] ${timestamp} | ${level} | ${message}`)
   ),
   transports: [
      new transports.DailyRotateFile({
         level: 'error',
         filename: './logs/error-%DATE%.log',
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '30m',
         maxFiles: '15d'
      }),
      new transports.DailyRotateFile({
         filename: './logs/combined-%DATE%.log',
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '30m',
         maxFiles: '15d'
      }),
   ],
});

if (process.env.NODE_ENV !== 'production') {
   logger.add(new transports.Console({
      format: format.simple(),
   }));
}
```

* Crea el archivo `.env` con las variables que hemos usado hasta ahora
```
NODE_ENV = development
JWT_SECRET = s3Cr3T_W0rD
```

### Configuración de Apollo Server

* Creemos nuestra instancia de `Apollo Server` en `src/index.ts`

> Nota la extensión `.ts`, esta es la que usamos en archivos `typescript`

```ts
import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import { logger } from './logger'
import { resolvers } from './resolver'
import { typeDefs } from './schema'

new ApolloServer({
    typeDefs,
    resolvers
}).listen().then(({ url }) => {
    logger.info(`🚀  Servidor listo en ${url}, inicializado en ${process.env.NODE_ENV} a las ${new Date().toISOString()}`)
})
```

* Agreguemos un `schema` básico en `src/schema.ts`
```ts
import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    hello: String
  }
`
```

* Pongamos nuestro resolver en `src/resolvers.ts`
```ts
export const resolvers = {
    Query: {
        hello: () => "API GraphQL con ApolloServer y TypeScript",
    },
}
```

### Ejecución

* Probemos que el proyecto funciona de manera local con
```sh
npm start
```

* Probemos la compilación para producción construyendo el proyecto y ejecutando la carpeta resultante

```sh
npm run build
node build
```

* Prueba el proyecto en ambos ambientes con el siguiente query
```graphql
query {
  hello
}
```