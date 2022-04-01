# Postwork 07: Migración a `typescript`

Ya tenemos una API desarrollada con las bases de lo que nos gustaría tener por ahora, sin embargo, para practicar la ingeniería del software, vamos a refactorizar para mejorar la calidad del código además de migrarnos a `typescript` como un `upgrade` en la tecnología que usamos.

## :dart: Objetivos
* Migrar el proyecto de `ES6+` a `typescript`
* Practicar el uso de `typescript` con `Apollo Server`
* Ejercitar el refactor de código

## Desarrollo
* Elabora un proyecto base con `typescript` modificando los scripts de arranque y ejecución del deployable
* Integra Apollo Server sobre el proyecto
* Refactoriza el código para mover la lógica de los resolvers a controladores
* Migra la integración de sequelize usando clases de `typescript`
* Verifica que la capa auth esté en el proyecto
* Corre pruebas con las peticiones remotas desarrolladas anteriormente para cada operación de la API

```
* Query
    * getAllLives
    * getLive
* Mutation
    * insertLive
    * updateLive
    * signIn
    * signUp
```