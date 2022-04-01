# Reto 01: ...

## Objetivo 🎯

Continuar explorando una instancia de graphql que ya está expuesta

## Desarrollo 📝

### Queries
* lanza queries para `allCursos` sin parametros modificando los datos a solicitar en cada petición
* lanza queries para `allCursos` con parametros modificando
* ¿qué otros `queries` se pueden lanzar?

### Mutaciones
* después de lanzar un query a cursos, agrega un curso con los siguientes datos:
	* title: "Backend fundamentals"
	* rating: 4.3
	* experto_id: 333
* vuelve a consultar `allCursos`

* continua explorando los `queries` y `mutaciones` en graphiql

<details>
	<summary>Solucion</summary>

```
{
  allCursos {
    title
    Experto {
      name
    }
  }
}
```

```
{
  allCursos(perPage: 1, page: 0) {
    title
    Experto {
      name
    }
  }
}

```

```
mutation {
  createCurso(title: "Backend fundamentals", rating: 4.3, experto_id: 333) {
    Experto {
      name
      Cursos {
        title
      }
    }
  }
}
```


</details>
