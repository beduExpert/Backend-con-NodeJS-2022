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