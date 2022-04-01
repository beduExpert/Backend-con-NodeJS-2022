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