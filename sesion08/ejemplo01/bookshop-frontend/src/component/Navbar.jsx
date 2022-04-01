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