# Reto 02: ...

## Objetivo 🎯

* Agregar funcionalidad al registro

## Desarrollo 📝

* Revisa los pasos necesarios para hacer una invocación remota en `Signin`
* Toma como base el formularo desarrollado en el reto 01 para la página `Signup`
* Integra la llamada al nuestra operación `signUp`

<details>
	<summary>Solucion 🔖</summary>

```js
import { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const signupMutationGQL = gql`
mutation signUp($name: String, $lastname: String, $email: String!, $password: String!) {
  signUp(
    input: {
      name: $name
      lastname: $lastname
      email: $email
      password: $password
    }
  ) {
    name
    lastname
    email
  }
}
`;

export const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mutateFunction, { data, loading, error }] = useMutation(signupMutationGQL, {
    onError: (err) => {
      console.log("API error", err)
      localStorage.removeItem("token");
    },
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    mutateFunction({ variables: { name, lastname, email, password } });
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h3>Sign up</h3>
        <input
          type="text"
          placeholder="nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="apellido"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
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
        <button type="submit">Sign up</button>
      </form>

      {data &&
        <small>Usuario {data.signUp.email} registrado con éxito <Link to={"/signin"}>Ingresar</Link></small>
      }

      {error &&
        <small>error al tratar de registrar a {email}</small>
      }
    </div>
  );
};
```
</details>
