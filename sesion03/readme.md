## Sesi贸n 03: Setup de un entorno de desarrollo 馃

### 1. Objetivos :dart:

- Configurar un ambiente de desarrollo que nos permita usar las caracter铆sticas de `ES6+`
- Observar la diferencia entre c贸digo escrito para nosotros y el optimizado para la m谩quina

### 2. Contenido :blue_book:

Aprendamos a configurar un ambiente de desarrollo que adem谩s de permitirnos escribir caracteristicas presentes en `ES6+`, tenga buenas pr谩cticas para sistemas en general.

En este m贸dulo aprenderemos:
- Configuraci贸n `.env` para variables de entorno
- Configuraci贸n `babel` como compilador de JS para usar features de ES6+
- Configuraci贸n `winston` para la escritura de archivos log

---

#### <ins>Tema 1: Configuraci贸n de `.env`</ins>

Cuando estamos desarrollando en nuestra m谩quina hay variables que podemos asumir sin riesgo alguno como el nivel del logs, la cadena de conexi贸n a la BD, la IP en que est谩 corriendo el servidor y otras tantas cosas pero, 驴qu茅 pasa cuando cambias de ambiente?, para eso debemos hacer uso de variables de entorno y en `JS` tenemos `.env` para esta tarea

- [**`Ejemplo 1: Configuraci贸n de .env`**](./ejemplo01)
- [**`Reto 1: Creaci贸n de variables de ambiente`**](./reto01)

---

#### <ins>Tema 2: Configuraci贸n de `babel`</ins>

Ahora ya sabes que en `JS` existen multiples motores de ejecuci贸n adem谩s de entornos. Si a帽adimos el hecho de que es un lenguaje no propietario, aquellos que escriben el motor tienen la opci贸n de elegir qu茅 caracter铆sticas sumar o ignorar.
Babel nos permite transpilar (`js -> js`) e incluso compilar (`[jsx|ts|jts|...] -> js`) para poder hacer uso de nuevas caracter铆sticas, obteniendo c贸digo en una versi贸n que el motor pueda interpretar sin problema.

- [**`Ejemplo 2: Configurar babel`**](./ejemplo02)
- [**`Reto 2: Unificar babel y .env`**](./reto02)

---

#### <ins>Tema 3: Configuraci贸n de `winston`</ins>

Un feature muy importante en los sistemas es la escritura de archivos `log` para poder guardar registro de los eventos. Veamos c贸mo configurar un herramienta para esto adem谩s de ver c贸mo rotar un archivo cuando alcanza un determinado peso o fecha.

- [**`Ejemplo 3: Configuraci贸n de winston`**](./ejemplo03)
- [**`Reto 3: Rotaci贸n de logs`**](./reto03)

---

### 3. Postwork :memo:

Con lo aprendido esta sesi贸n, elaboremos un proyecto que nos sirva como base para desarrollar una API con GraphQL.

- [**`Postwork: Creaci贸n del proyecto base`**](./postwork/)