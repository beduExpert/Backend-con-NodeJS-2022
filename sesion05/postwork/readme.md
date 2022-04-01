# Postwork 05: Persistencia en BD

Continuemos con el desarrollo de nuestra API para la gestión de lives y agreguemos una capa de persistencia a BD a través de `sequelize`

## :dart: Objetivos
* Configurar `sequelize` en el proyecto
* Declarar el modelo de `Live`
* Realizar las operaciones de `graphql` con conexion a la BD

## Desarrollo
* Tomando como base el proyecto del postwork anterior, configura sequelize con `SQLite`
* Declara el modelo Live con `sequelize`
* Agrega las siguientes `queries` con conexión a la BD
    * `getAllLives`
    * `getLive`
* Agrega las siguiente `mutaciones` con conexión a la BD
    * `insertLive`
    * `updateLive`
* Crea archivos con las llamadas de prueba que pueden ser invocados con la extensión [REST Client de VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)