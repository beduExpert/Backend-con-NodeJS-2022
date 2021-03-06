## Sesi贸n 06: Auth layer 馃

### 1. Objetivos :dart:

- Configurar una capa auth con JWT
- Exponer operaciones para `authentication` y `authorization`
- Proteger las operaciones de consulta de `Lives`

### 2. Contenido :blue_book:

En este m贸dulo aprenderemos:

- Las tecnolog铆as base para hacer una capa de `authorization/authentication`
- Las operaciones para hacer el `sign up` y `sign in`
- C贸mo proteger operaciones para que no puedan ser consultadas sin autorizaci贸n

---

#### <ins>Tema 1: hashing con bcrypt y generaci贸n de tokens con JWT</ins>

Conozcamos `JWT` y `bcrypt` que son la tecnolog铆a base para hacer nuestra capa `auth` (`authorization/authentication`)

- [**`Ejemplo 1: bcrypt `**](./ejemplo01)
- [**`Ejemplo 2: jwt`**](./ejemplo02)
- [**`Reto 1: Registro de usuarios con password hasheado con bcrypt`**](./reto01)

---

#### <ins>Tema 2: Generaci贸n de JWT</ins>

Ahora que ya tenemos algunos usuarios registrado en la BD (y en el sistema por ende), generemos un JWT para aquellos que proporcionen los datos correctos y cerremos el acceso a las operaciones sobre Books para aquellos que tengan un JWT v谩lido

- [**`Ejemplo 3: Mutaci贸n signIn`**](./ejemplo03)
- [**`Reto 2: Operaciones protegidas`**](./reto02)

---

### 3. Postwork :memo:

Integremos el conocimiento aprendido esta sesi贸n sobre `auth layer` con `JWT` a nuestro proyecto de `Lives`.

- [**`Postwork: Agregando una auth layer`**](./postwork/)