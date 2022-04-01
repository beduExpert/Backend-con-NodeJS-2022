## Sesión 04: Introducción a Apollo Server 🤖

### 1. Objetivos :dart:

- Tener un ambiente que nos permita desarrollar nuestra API con un framework ampliamente usado en la industria
- Escribir una estructura de carpetas que nos permita identificar fácilmente el código buscado

### 2. Contenido :blue_book:

Esta sesión aprenderemos a configurar `Apollo Server` para correr nuestra API GraphQL sin tener que hacer una implementación de la especificación por nosotros mismos.

En este módulo aprenderemos:

- Configuración de Apollo Server
- Declaración de schema, query y resolver
- Mutaciones en Apollo Server

---

#### <ins>Tema 1: Configuración de `Apollo Server`</ins>

`Apollo` es una plataforma para el desarrollo de aplicaciones con `graphql`, aquí veremos cómo configurar `Apollo Server` que es la parte que nos permite crear APIs

- [**`Ejemplo 1: Configuración de Apollo Server`**](./ejemplo01)
- [**`Reto 1: Creación de un query con argumentos`**](./reto01)

---

#### <ins>Tema 2: Declaración de `schema`, `query` y `resolver`</ins>

Un problema común con las APIs es la falta de documentación y estructura clara para dividir los archivos; `graphql` lo resuelve dividiendo la implementación entre `schemas` y `resolvers`. Conozcamos y creemos los elementos base de cualquier API GraphQL.

- [**`Ejemplo 2: Creación de un Query`**](./ejemplo02)
- [**`Reto 2: Apollo Server con ES6+`**](./reto02)

---

#### <ins>Tema 3: Mutaciones en Apollo Server</ins>

Ya que hemos usado los queries para consultar información, debemos aprender cómo modificarla y esto nos lo permiten las mutaciones. Veamos cómo completar nuestra API con mutaciones.

- [**`Ejemplo 3:Creación de una mutación`**](./ejemplo03)

---

### 3. Postwork :memo:

Ahora que conoces `Apollo Server`, es momento de que apliques lo aprendido en tu proyecto y lo configures en el ambiente de desarrollo que tienes hasta ahora.

- [**`Postwork: Configuración de Apollo Server`**](./postwork/)