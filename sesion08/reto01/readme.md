# Reto 01: ...

## Objetivo 🎯

* Crear formulario para signin
* Crear formulario para signup

## Desarrollo 📝

* Genera un proyecto con `vite` llamado `bookshop-frontend` para `react`
* Copia el código del `ejemplo 01`
* Instala las dependencias usadas en el `ejemplo 01`
	* npm i bootstrap
	* npm i react-router-dom@6
* En la Página para SignIn, haz un formulario que pida
	* email
	* contraseña
	* botón para envíar formulario
* En la Página para SignUp, haz un formulario que pida
	* nombre
	* apellido
	* email
	* contraseña
	* botón para envíar formulario

<details>
	<summary>Solucion 🔖</summary>

```js
export const Signin = () => {
  return (
    <div>
      <form onSubmit="">
        <h3>Login</h3>
        <input
          type="text"
          placeholder="email"
        />
        <input
          type="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
```

```js
export const Signup = () => {
  return (
    <div>
      <form onSubmit="">
        <h3>Sign up</h3>
        <input
          type="text"
          placeholder="nombre"
        />
        <input
          type="text"
          placeholder="apellido"
        />
        <input
          type="text"
          placeholder="email"
        />
        <input
          type="password"
          placeholder="password"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
```
</details>
