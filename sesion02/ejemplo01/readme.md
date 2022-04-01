# Ejemplo 1

## Objetivo
Conocer los elementos base en graphql explorando un proyecto en ejecución

## Requerimientos

* node y npm instalados
* npm i json-graphql-server

## Desarrollo

### Datos base en graphql

* Describir los escalares base en graphql
    * Int: Entero con signo a 32 bits
    * Float: Punto flotante de doble precisión
    * String: Secuencia de caracteres UTF‐8
    * Boolean: true o false.
    * ID: Identificador único que a menudo se usa como key del objeto y no tiene que ser claro para los humanos (`human‐readable`)

### Proyecto para explorar

* arrancar un proyecto de `json-graphql-server`
* crear el archivo `src/data/db.js` con el siguiente contenido
    ```json
    module.exports = {
        cursos: [
            { id: 101, title: "Frontend con JS", rating: 4.5, experto_id: 334 },
            { id: 102, title: "APIs con GraphQL", rating: 4.9, experto_id: 333 },
        ],
        expertos: [
            { id: 333, name: "Ethien Salinas" },
            { id: 334, name: "Pedro Fragoso" }
        ]
    }
    ```
* modificar el script de arranque a `json-graphql-server src/data/db.js`
* ingresar a `http://localhost:3000/`
* explorar la pestaña `Docs`

### Queries
* Identifica los elementos del siguiente query
```
Curso(id: ID!): Curso
```
    * ¿cuál es el nombre del query?
    * ¿cuáles son los parámetros de la consulta?
    * ¿cómo identificas que un dato es obligatorio?
    * ¿cuál es su respuesta?
* lanza el siguiente query en `GraphiQL`
```
query {
  Curso(id: 101) {
    title
    Experto {
      id
      name
    }
    rating
  }
}
```
* ¿qué pasa si cambias el orden de los elementos dentro de `Curso`?

### Mutations
* Explora la documentación para mutaciones
