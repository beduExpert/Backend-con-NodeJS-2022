# Ejemplo 2

## Objetivo

* Configurar Apollo Client
* Hacer una llamada remota

## Requerimientos

* Tener listo el servidor desarrollado hasta el [ejemplo 03 de la sesión 07](../../sesion07/ejemplo03/)
* Instalación del `cliente de Apollo` y la librería de `graphql` con `npm i @apollo/client graphql`
* 

## Desarrollo

### Configuración de `Apollo Client`

* Hagamos una copia del proyecto terminado hasta el [reto 01](../reto01/bookshop-frontend/)
* Instalemos las dependencias de `apollo client` y `graphql`
```sh
npm i @apollo/client graphql
```
* Configuremos Apollo en el archivo `main.tsx`
```js
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
```
> Nota que la dependencia `setContext` viene en otro path por lo que es necesario importarla aparte

* Lo que hacemos aquí es:
    * decir dónde está nuestra API de GraphQL
    * buscar el token en el localStorage para las llamadas remotas o bien, envíar una cadena vacía en `authorization`
    * generar el cliente con las opciones anteriores definiendo el tipo de cache que queremos usar

* Envolvamos `<App />` con el `ApolloProvider`
```js
<ApolloProvider client={client}>
    <App />
</ApolloProvider>
```

### Envío de mutación `signIn`

* Dentro del componente Signin, hagamos unas variables de estado para guardar lo que el usuario ponga en los inputs
```js
import { useState } from "react";
...
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
```

* Asignemos esas variables a los inputs generados anteriormente
```js
    <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
```

* importemos las dependencias necesarias para hacer la llamada remota
```js
import { gql, useMutation } from "@apollo/client";
```

* Hagamos una constante con la mutación para `signIn` donde recibamos los valores como variables dado que las vamos a tomar de los inputs
```js
const loginMutationGQL = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;
```

* Hagamos la llamada remota que de ser exitosa, nos envíe a la página de `books` ya como usuarios autenticados, en caso contrario (credenciales inválidas por ejemplo), mandar el error a la consola (en una aplicación real podríamos mandarlo a una API que registre los errores)
```js
  const navigate = useNavigate();

  const [mutateFunction, { data, loading, error }] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn);
      navigate("/books")
      window.location.reload()
    },
    onError: (err) => console.log("API error", err),
  });
```

* Por último conectemos el formulario a una función que mande a llamar a la mutación anterior
```js
  const handleLogin = async (e) => {
    e.preventDefault();
    mutateFunction({ variables: { email, password } });
  };

  if (loading) return 'Submitting...';

  return (
    <div>
      <form onSubmit={handleLogin}>
      ...
```

* En caso de error, pongamos el mensaje debajo del formulario
```js
    </form>
    {error && `error: ${error.message}`}
```

* Al final, nuestro componete `Signin` debe lucir similar a este:
```js
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const loginMutationGQL = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [mutateFunction, { data, loading, error }] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn);
      navigate("/books")
      window.location.reload()
    },
    onError: (err) => console.log("API error", err),
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    mutateFunction({ variables: { email, password } });
  };

  if (loading) return 'Submitting...';

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && `error: ${error.message}`}
    </div>
  )
}
```

### Manejo de la sesión en la aplicación

* Hagamos un archivo `src/auth/index.js` para gestionar la autenticación
```js

const logout = () => {
  localStorage.removeItem("token");
};

const isUserAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const AuthService = {
  logout,
  isUserAuthenticated,
};
```
> el doble signo de exclamación genera un booleano "real" a partir de un [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) o un [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### Ajustando la barra de navegación para usuarios autenticados

> Para ajustar el menú, vamos a necesitar tener una variable que nos indique si el usuario está autenticado; en `react` esto se logra con variables de estado.

* Agreguemos una variable de estado booleana que esté definida al cargar la página
> NOTA: Observa que al firmarnos en el `onCompleted` de la llamada remota al firmarnos, habíamos forzado la carga de la página con `window.location.reload()`. En una aplicación más robusta, en lugar de una recarga forzada, nos ayudamos de un sistema de estado globlal.

```js
import { useState, useEffect } from 'react'

export const Navbar = () => {

  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    setSignedUser(AuthService.isUserAuthenticated())
  }, []);
  ```

  * En la parte izquierda de la barra de navegación, agreguemos otro `<li>...</li>` con una opción que solo aparezca si la variable `signedUser` es verdadera
  ```js
{signedUser && (
<li className="nav-item">
    <Link to={"/books"} className="nav-link">
        Books
    </Link>
</li>
)}
```

* En el caso de las opciones de la derecha, debemos de alternar entre Signin/Signup; esto lo podemos lograr con un `operador ternario`
```js
<div className="navbar-nav ms-auto">
    {signedUser ? (
        <li className="nav-item">
            <a href="/signin" className="nav-link" onClick={logOut}>
                Logout
            </a>
        </li>
    ) : (
        <>
            <li className="nav-item">
                <Link to={"/signin"} className="nav-link">
                    Sign in
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                    Sign up
                </Link>
            </li>
        </>
    )}
</div>
```
>NOTA: Hacemos uso de un diamante (`<></>`) para agrupar el retorno de dos elementos ya que `react` no permite regresar nodos adyacentes

* Por último, agreguémos la función que elimina el token de la sesión para regresándonos al inicio

```js
import { AuthService } from '../auth'
...
  const logOut = () => {
    AuthService.logout();
  };
```
> NOTA: La llamada a esta función ya la habíamos declarado en `onClick={logOut}`

* Nuestro componente `Navbar` debe lucir de la siguiente manera
```js
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthService } from '../auth'

export const Navbar = () => {

  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    setSignedUser(AuthService.isUserAuthenticated())
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      {/* Elementos a la izquierda */}
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
        {signedUser && (
          <li className="nav-item">
            <Link to={"/books"} className="nav-link">
              Books
            </Link>
          </li>
        )}
      </div>

      {/* Elementos a la derecha */}
      <div className="navbar-nav ms-auto">
        {signedUser ? (
          <li className="nav-item">
            <a href="/signin" className="nav-link" onClick={logOut}>
              Logout
            </a>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign up
              </Link>
            </li>
          </>
        )}
      </div>
    </nav>
  )
}
```