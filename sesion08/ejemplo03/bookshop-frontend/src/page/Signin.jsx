import { useState } from "react";
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