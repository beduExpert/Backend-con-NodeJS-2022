## Sesión 08: Conexión con un cliente IU 🤖

### 1. Objetivos :dart:

- Levantar una aplicación react con `vite`
- Configurar `Apollo Client`
- Lanzar Mutaciones y Queries

### 2. Contenido :blue_book:

En este módulo aprenderemos:

- Levantar un proyecto react con vite
- Configuración y primer llamada con `Apollo Client`
- Invocación de un `query`

---

#### <ins>Tema 1: Levantar un proyecto react con vite</ins>

Ahora que ya tenemos una API desarrollada, levantemos una aplicación de frontend con [`vite`](https://vitejs.dev/) que es una alternativa al famoso [`create-react-app`](https://create-react-app.dev/)

- [**`Ejemplo 1: Proyecto base de frontend`**](./ejemplo01)
- [**`Reto 1: Generación de formularios para signin/signup`**](./reto01)

---

#### <ins>Tema 2: Configuración y primer llamada con `Apollo Client`</ins>

Teniendo un proyecto de frontend ya con formularios, procedamos a hacer llamadas a nuestra API desarrollada con GraphQL

- [**`Ejemplo 2: Configuración de Apollo Client y mutación`**](./ejemplo02)
- [**`Reto 2: Mutación para guardar usuarios`**](./reto02)

---

#### <ins>Tema 3: Invocación de un `query`</ins>

Ahora que ya sabemos cómo invocar mutaciones, complementemos nuestro conocimiento haciendo una llamada a un `query` en una operación protegida por `JWT`.

- [**`Ejemplo 3: Invocación de books`**](./ejemplo03)

---

### 3. Postwork :memo:

Apliquemos lo a aprendido en esta sesión a nuestra API de lives de `bedu` considerando que ahí sí hemos almacenado las imágenes y podemos hacer un mejor `card` por cada live.

- [**`Postwork: Conectar el proyecto con una interfaz gráfica`**](./postwork/)