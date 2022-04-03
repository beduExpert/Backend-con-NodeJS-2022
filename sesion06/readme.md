## Sesión 06: Auth layer 🤖

### 1. Objetivos :dart:

- Configurar una capa auth con JWT
- Exponer operaciones para `authentication` y `authorization`
- Proteger las operaciones de consulta de `Lives`

### 2. Contenido :blue_book:

En este módulo aprenderemos:

- Las tecnologías base para hacer una capa de `authorization/authentication`
- Las operaciones para hacer el `sign up` y `sign in`
- Cómo proteger operaciones para que no puedan ser consultadas sin autorización

---

#### <ins>Tema 1: hashing con bcrypt y generación de tokens con JWT</ins>

Conozcamos `JWT` y `bcrypt` que son la tecnología base para hacer nuestra capa `auth` (`authorization/authentication`)

- [**`Ejemplo 1: bcrypt `**](./ejemplo01)
- [**`Ejemplo 2: jwt`**](./ejemplo02)
- [**`Reto 1: Registro de usuarios con password hasheado con bcrypt`**](./reto01)

---

#### <ins>Tema 2: Generación de JWT</ins>

Ahora que ya tenemos algunos usuarios registrado en la BD (y en el sistema por ende), generemos un JWT para aquellos que proporcionen los datos correctos y cerremos el acceso a las operaciones sobre Books para aquellos que tengan un JWT válido

- [**`Ejemplo 3: Mutación signIn`**](./ejemplo03)
- [**`Reto 2: Operaciones protegidas`**](./reto02)

---

### 3. Postwork :memo:

Integremos el conocimiento aprendido esta sesión sobre `auth layer` con `JWT` a nuestro proyecto de `Lives`.

- [**`Postwork: Agregando una auth layer`**](./postwork/)