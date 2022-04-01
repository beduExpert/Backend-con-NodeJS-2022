# Ejemplo 1

## Objetivo
* Generar un proyecto con `vite` (alternativa a `create-react-app`)
* Configurar las bases del proyecto de integración

## Requerimientos

* uso de vite con `npm create vite@latest`
## Desarrollo

### Creación del proyecto base

* Estando en la carpeta `ejemplo01` de la `sesión 08`, ejecuta el comando de creación de proyectos react con `vite` para generar:
    * Project name: `bookshop-frontend`
    * Framework: `react`
    * Variant: `react`

```sh
➜  backend-graphql git:(master) ✗ npm create vite@latest
npx: installed 6 in 2.552s
✔ Project name: … bookshop-frontend
✔ Select a framework: › react
✔ Select a variant: › react

Scaffolding project in ...

Done. Now run:

  cd bookshop-frontend
  npm install
  npm run dev
```

* Sigamos las instrucciones y ejecutemos los comandos 
```sh
cd bookshop-frontend
npm install
npm run dev
```

* Verifica que el proyecto corre demanera exitosa en `http://localhost:3000/`

* podemos borrar los archivos:
    * App.css
    * index.css
    * logo.svg

* Instalemos bootstrap con 
```sh
npm i bootstrap
```
* E importemoslo en `main.jsx` después de la importación de `react` y `react-dom`
```
import 'bootstrap/dist/css/bootstrap.min.css'
```

### Configuración de react router

* estándo en la carpeta raíz del proyecto (donde está el `package.json`), instalemos [react router](https://reactrouter.com/docs/en/v6/getting-started/installation)

```sh
npm i react-router-dom@6
```

* E importemoslo en `main.jsx` envolviendo al componente `App` con `Router`

```js
import { BrowserRouter as Router } from "react-router-dom";

...

    <Router>
      <App />
    </Router>
```

* Generamos los siguientes componentes dentro de una nueva carpeta llamada `page`
    * Home.jsx
    * Books.jsx
    * Signin.jsx
    * Signup.jsx

`src/page/Home.jsx`
```js
export const Home = () => {
    return (
        <section className="title">
            Home page
        </section>
    )
}
```
`src/page/Books.jsx`
```js
export const Books = () => {
    return (
        <section className="title">
            Books page
        </section>
    )
}
```
`src/page/Signin.jsx`
```js
export const Signin = () => {
    return (
        <section className="title">
            Signin page
        </section>
    )
}
```
`src/page/Signup.jsx`
```js
export const Signup = () => {
    return (
        <section className="title">
            Signup page
        </section>
    )
}
```

* En una carpeta llamada `component`, hacemos el componente `Navbar.jsx`
`src/component/Navbar.jsx`
```js
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      {/* Elementos a la izquierda */}
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
      </div>
      {/* Elementos a la derecha */}
      <div className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={"/signin"} className="nav-link">
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/signup"} className="nav-link">
            Sign Up
          </Link>
        </li>
      </div>
    </nav>
  )
}
```

* En `App.jsx`, hagamos el ruteo a los componentes además de importar `Navbar`
```js
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./component/Navbar"
import { Books } from "./page/Books"
import { Home } from "./page/Home"
import { Signin } from "./page/Signin"
import { Signup } from "./page/Signup"

export const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container mt-3">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
```

* Ajusta la importación de `App` en `main.jsx`
```js
import { App } from './App'
```

* Ejecutemos el proyecto y veamos que podemos navegar entre las distintas rutas
```sh
npm run dev
```
