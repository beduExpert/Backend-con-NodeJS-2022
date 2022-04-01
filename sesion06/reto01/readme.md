# Reto 01: Registro de usuarios con password hasheado con `bcrypt`

## Objetivo 🎯

* Registrar usuarios guardando el password de manera segura

## Desarrollo 📝

* genera un proyecto llamado reto01
* configura tu ambiente de desarrollo con lo que ya sabes hasta ahora
* genera y registra el modelo `User` con `sequelize` para la siguiente tabla
	* User
		* id: key autonumérico
		* name: String
		* lastname: String
		* email: String
		* password: String
		* isAdmin: Boolean
  }
* para evitar poder regresar el password en `graphql`, vamos a generar dos objetos de la siguiente manera
```js
  type User {
    id: Int
    name: String
    lastname: String
    email: String
    isAdmin: Boolean
  }

  input UserInput {
    name: String
    lastname: String
    email: String!
    password: String!
    isAdmin: Boolean
  }
```
> NOTA: Cuando queremos pedir un objeto como argumento, en lugar de usar `type` usamos `input`, puedes ver [aquí](https://graphql.org/learn/schema/#input-types) un ejemplo

* registra la mutación `signUp` que pida un `UserInput` y regrese un `User`

* en el `resolver` de `signUp`, antes de persistir los datos, cambia el password en texto claro por la versión generada con `bcrypt`

<details>
	<summary>Solucion 🔖</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` está el código
* En la carpeta `client` las llamadas que pueden invocarse con la extensión `REST Client`
* En el archivo `package.json` se agregó el script de arranque
</details>
