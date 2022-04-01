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