# Reto 01: Registro de usuarios con password hasheado con `bcrypt`

## Objetivo 馃幆

* Registrar usuarios guardando el password de manera segura

## Desarrollo 馃摑

* genera un proyecto llamado reto01
* configura tu ambiente de desarrollo con lo que ya sabes hasta ahora
* genera y registra el modelo `User` con `sequelize` para la siguiente tabla
	* User
		* id: key autonum茅rico
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
> NOTA: Cuando queremos pedir un objeto como argumento, en lugar de usar `type` usamos `input`, puedes ver [aqu铆](https://graphql.org/learn/schema/#input-types) un ejemplo

* registra la mutaci贸n `signUp` que pida un `UserInput` y regrese un `User`

* en el `resolver` de `signUp`, antes de persistir los datos, cambia el password en texto claro por la versi贸n generada con `bcrypt`

<details>
	<summary>Solucion 馃敄</summary>

Cuando tengas tu propuesta, puedes compararla con la que se propone en este directorio observando los siguientes puntos

* En la carpeta `src` est谩 el c贸digo
* En la carpeta `client` las llamadas que pueden invocarse con la extensi贸n `REST Client`
* En el archivo `package.json` se agreg贸 el script de arranque
</details>
