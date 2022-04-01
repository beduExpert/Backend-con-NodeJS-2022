## Sesión 03: Setup de un entorno de desarrollo 🤖

### 1. Objetivos :dart:

- Configurar un ambiente de desarrollo que nos permita usar las características de `ES6+`
- Observar la diferencia entre código escrito para nosotros y el optimizado para la máquina

### 2. Contenido :blue_book:

Aprendamos a configurar un ambiente de desarrollo que además de permitirnos escribir caracteristicas presentes en `ES6+`, tenga buenas prácticas para sistemas en general.

En este módulo aprenderemos:
- Configuración `.env` para variables de entorno
- Configuración `babel` como compilador de JS para usar features de ES6+
- Configuración `winston` para la escritura de archivos log

---

#### <ins>Tema 1: Configuración de `.env`</ins>

Cuando estamos desarrollando en nuestra máquina hay variables que podemos asumir sin riesgo alguno como el nivel del logs, la cadena de conexión a la BD, la IP en que está corriendo el servidor y otras tantas cosas pero, ¿qué pasa cuando cambias de ambiente?, para eso debemos hacer uso de variables de entorno y en `JS` tenemos `.env` para esta tarea

- [**`Ejemplo 1: Configuración de .env`**](./ejemplo01)
- [**`Reto 1: Creación de variables de ambiente`**](./reto01)

---

#### <ins>Tema 2: Configuración de `babel`</ins>

Ahora ya sabes que en `JS` existen multiples motores de ejecución además de entornos. Si añadimos el hecho de que es un lenguaje no propietario, aquellos que escriben el motor tienen la opción de elegir qué características sumar o ignorar.
Babel nos permite transpilar (`js -> js`) e incluso compilar (`[jsx|ts|jts|...] -> js`) para poder hacer uso de nuevas características, obteniendo código en una versión que el motor pueda interpretar sin problema.

- [**`Ejemplo 2: Configurar babel`**](./ejemplo02)
- [**`Reto 2: Unificar babel y .env`**](./reto02)

---

#### <ins>Tema 3: Configuración de `winston`</ins>

Un feature muy importante en los sistemas es la escritura de archivos `log` para poder guardar registro de los eventos. Veamos cómo configurar un herramienta para esto además de ver cómo rotar un archivo cuando alcanza un determinado peso o fecha.

- [**`Ejemplo 3: Configuración de winston`**](./ejemplo03)
- [**`Reto 3: Rotación de logs`**](./reto03)

---

### 3. Postwork :memo:

Con lo aprendido esta sesión, elaboremos un proyecto que nos sirva como base para desarrollar una API con GraphQL.

- [**`Postwork: Creación del proyecto base`**](./postwork/)