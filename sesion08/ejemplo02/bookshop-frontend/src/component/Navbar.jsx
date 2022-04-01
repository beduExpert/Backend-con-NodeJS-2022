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