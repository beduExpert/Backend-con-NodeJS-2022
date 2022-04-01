# Ejemplo 3

## Objetivo

* Desarrollar el UserController
* Refactorizar las operaciones para `signIn` y `signUp`

## Requerimientos

* Haber concluido el [reto 01](../reto01/)
* `npm i -D @types/jsonwebtoken @types/bcrypt`

## Desarrollo

* Redefinamos nuestro modelo `User` de `sequelize`, primero definamos todas las propiedades que puede tener usando la notación de clase en `typescript`

```ts
export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number
    declare name: string
    declare lastname?: string;
    declare email: string;
    declare password: string;
    declare isAdmin?: boolean;
}
```

> Si quieres saber más sobre el objeto padre [`Model`](https://sequelize.org/master/manual/typescript.html), puedes mirar la siguiente [liga](https://sequelize.org/master/manual/typescript.html)

* Ahora debajo de la clase, definamos cómo se comporta cada una de esas propiedades en la tabla
```ts
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    timestamps: true,
    sequelize: sequelize
})
```

* Al final debemos tener lo siguiente

`src/db/model/User.ts`
```ts
import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from '..';

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number
    declare name: string
    declare lastname?: string;
    declare email: string;
    declare password: string;
    declare isAdmin?: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    timestamps: true,
    sequelize: sequelize
})
```

* Como ahora exponemos `User` desde el archivo, ya no es necesario inicializarlo después de la conexión así que podemos eliminar esa línea
```ts
User(sequelize, DataTypes) // eliminamos esta línea
```

* ahora nuestro `db/index.ts` se ha vuelo más pequeño y mejor enfocado, solo en crear la conexión
```ts
import { Sequelize } from 'sequelize'
import { logger } from '../logger'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: msg => logger.debug(msg)
})

// aquí solían estar las inicializaciones, pero con nuestra configuración en typescript ya no es necesario

if (process.env.NODE_ENV !== 'production') {
  const syncBD = async () => await sequelize.sync()
  syncBD()
}
```

* Procedamos a crear nuestro UserController, pero primero instalemos los tipos para jsonwebtoken y bcrypt
```sh
npm i -D @types/jsonwebtoken @types/bcrypt
```

* Dentro de la carpeta `controller`, creamos nuestro archivo `UserController.ts`
`src/controller/UserController.ts`
```ts
export class UserController {
    async saveUser(user: User) {
        // lógica para guardar un usuario
    }
    async getUserToken(email: string, password: string) {
        // lógica para obtener tokens de usuarios registrados
    }
}
```

* Empecemos con `saveUser`, para eso declara un atributo `private` llamado `SALT_ROUNDS` y dale el valor de `10`
```ts
    private SALT_ROUNDS = 10
    
    async saveUser(user: User) {
        user.password = await hash(user.password, this.SALT_ROUNDS)
        return await User.create({ ...user })
    }
```

* Ahora migremos la lógica para `getUserToken`, el método debe quedar de la siguiente manera
```ts
    async getUserToken(email: string, password: string) {
        const user = await User.findOne({ where: { email } })
        if (user && await compare(password, user.password)) {
            const tokenData = {
                fullName: user.name + ' ' + user.lastname,
                email,
                isAdmin: user.isAdmin
            }
            logger.info(`[signIn] El usuario ${user.id} a accedido al sistema`)
            return sign(tokenData, process.env.JWT_SECRET, { expiresIn: 180 })
        } else {
            logger.error(`[signIn] Credenciales inválidas para ${email}`)
            throw new AuthenticationError('Invalid credentials')
        }
    }
```

Nuestro archivo luce de la siguiente manera
```ts
import { AuthenticationError } from 'apollo-server-errors'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { logger } from '../logger'
import User from '../db/model/User'

export class UserController {

    private SALT_ROUNDS = 10

    async saveUser(user: User) {
        user.password = await hash(user.password, this.SALT_ROUNDS)
        return await User.create({ ...user })
    }

    async getUserToken(email: string, password: string) {
        const user = await User.findOne({ where: { email } })
        if (user && await compare(password, user.password)) {
            const tokenData = {
                fullName: user.name + ' ' + user.lastname,
                email,
                isAdmin: user.isAdmin
            }
            logger.info(`[signIn] El usuario ${user.id} a accedido al sistema`)
            return sign(tokenData, process.env.JWT_SECRET, { expiresIn: 180 })
        } else {
            logger.error(`[signIn] Credenciales inválidas para ${email}`)
            throw new AuthenticationError('Invalid credentials')
        }
    }

}
```
* Creamos una instancia de `UserController` en nuestro archivo `resolver.ts` antes del objeto `resolvers`
```ts
const userController = new UserController()

export const resolvers = {
    // Queries y Mutaciones
}
```

* Por último vamos a actualizar nuestros resolvers `signIn` y `signUp`
```ts
    Query: {
        // otros quieries
    },
    Mutation: {
        // otras mutaciones
        signUp: (_, { input: user }) => {
            return userController.saveUser(user)
        },
        signIn: (_, { email, password }) => {
            return userController.getUserToken(email, password)
        }
    }
}
```