# Postwork 03: Creación del proyecto base

Pongamos en práctica lo aprendido en la sesión para generar un proyecto que nos sirva para generar nuestra API

## :dart: Objetivos
* Entender el problema base que desarrollarás el resto del curso
* Configurar el ambiente de desarrollo que nos servirá para el resto de los postworks

## Desarrollo
* Entra a la página de bedu y busca la sección de [Lives](https://bedu.org/lives)
    * Haremos una API que exponga la información necesaria para pintar una sección así en un sitio
    * Busca la sección de `Bedu en médios` y observa que hay un patrón para elaborar este tipo de listas
* Con lo visto en la sesión actual, elabora un proyecto node con las siguientes características:
    * Nombre: `graphql-api`
    * Configura `.env`, `babel` y `winston` con rotación diaria
    * Modifica los `scripts` para tener uno que arranque el proyecto en modo desarrollo y uno que genere el código para producción
    * Haz un archivo `index.js`  con la impresión “Graphql API” y prueba que funcionen ambos scripts
