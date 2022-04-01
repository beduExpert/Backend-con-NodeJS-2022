# Ejemplo 3

## Objetivo

* Hacer la llamada a un query
* Recuperar los libros de nuestro backend

## Requerimientos

* Tener acceso a la página de `/books` ganando una sesión de usuario

## Desarrollo

* Importemos las dependencias necesarias de `apollo client`
```js
import { gql, useQuery } from '@apollo/client'
```

* Generemos una cadena con nuestro `query`

```js
const GET_LIVES = gql`
  query GetBooks {
    getAllBooks {
      asin
      title
      author
      pages
    }
  }
`;
```

* Dentro de nuestro componente, hagamos uso de `useQuery` para recuperando los valores que ofrece de manera desestructurada
```js
const { loading, error, data } = useQuery(GET_LIVES);
```

* Pongamos condiciones de lo que regresaremos mientras se está ejecutando y en caso de que llegue a ocurrir un error
```js
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
```
> Como puedes observar, en caso de que alguna de esas variables no sea nula, regresamos una cadena pero claro, podría ser un componente con mucha más información

* Como una primera prueba, tratemos de imprimir el resultado mostrando solo los títulos
```js
  return (
    <div className="container">
      <div className="row">
        <div>{data.getAllBooks.map((book) => book.title)}</div>
      </div>
    </div>
  );
```

* Mejoremos la respuesta a un evento no deseado como una la sesión caducada; para eso usaremos el mensaje `jwt expired` que nos regresa nuestra `API` al validar que un `JWT` ha expirado. Agreguemos un segundo parámetro a `useQuery` que nos permite pasar un callback `onError` que elimina el `jwt` del `localstorage` y te redirige a la página de `signin`
```js
import { AuthService } from '../auth'
...
export const Books = () => {

  const navigate = useNavigate()
  ...
  const { loading, error, data } = useQuery(GET_BOOKS, {
    onError: (err) => {
      console.log(err.message === 'jwt expired')
      switch (err.message) {
        case 'jwt expired':
          AuthService.logout()
          navigate('/signin')
          window.location.reload()
          break;
        // TODO: resolver otros casos
        default:
          break;
      }
    }
  })
```

* Hasta ahora, nuestro componente `Books` luce de la siguiente manera
```js
import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth'
import { Book } from '../component/Book'

const GET_BOOKS = gql`
  query GetBooks {
    getAllBooks {
      asin
      title
      author
      pages
    }
  }
`;

export const Books = () => {

  const navigate = useNavigate()

  const { loading, error, data } = useQuery(GET_BOOKS, {
    onError: (err) => {
      switch (err.message) {
        case 'jwt expired':
          AuthService.logout()
          navigate('/signin')
          window.location.reload()
          break;
        // TODO: resolver otros casos de error
        default:
          break;
      }
    }
  })

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container">
      <div className="row">
        {data.getAllBooks.map((book) => <Book key={book.asin} data={book} />)}
      </div>
    </div>
  );
}
```

# Cards para los libros

* Un patrón muy común para la visualización de elementos es [card](https://getbootstrap.com/docs/4.0/components/card/) y como muchos frameworks de CSS, `bootstrap` nos ofrece una implementación

* Generemos un nuevo componente llamado Book en la carpeta `component` que reciba `props` como parametro y regrese una cadena
```js
export const Book = (props) => {
  const { asin, title, author, pages } = props.data
  return "book"
}
```

* Si visualizamos la página hasta ahora, debemos ver tantas veces nuestra cadena, como elementos haya en la respuesta de la operación

* Modifiquemos `Books` para que nos regrese un `Book` por cada elemento de la llamada remota inyectando los valores a través de una propiedad que nombraremos `data` y poniendo un `key` que `react` nos pide al renderizar listas
```js
import { Book } from '../component/Book'
...
  return (
    <div className="container">
      <div className="row">
        {data.getAllBooks.map((book) => <Book key={book.asin} data={book} />)}
      </div>
    </div>
  );
```

* Ahora, en `Book` podemos desestructurar los valores de `data`

```js
const { asin, title, author, pages } = props.data
```

* Hagamos una pausa para construir la imagen que pondremos en cada libro. Para eso tenemos el servicio de [placeholder](https://placeholder.com/) donde después de explorar la `API`, vemos que podemos obtener una adecuada con la siguiente `URL`
```curl
https://via.placeholder.com/300x180?text=Book image
```

* Por último, pongamos un `card` dentro de nuestro componente `Book` y cuidando cambiar las propiedades `class` por `className` y sustituyendo la url de la imagen obtenemos nuestra versión final de `Book`
```js
export const Book = (props) => {
  const { asin, title, author, pages } = props.data
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="https://via.placeholder.com/300x180?text=Book image" alt="Book image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{author}</p>
        <p className="card-text">asin: {asin}</p>
        <p className="card-text">páginas: {pages}</p>
      </div>
    </div>
  )
}
```