import { Route, Routes } from 'react-router-dom'
import { Navbar } from './component/Navbar'
import { Home } from './page/Home'
import { Lives } from './page/Lives'
import { Signin } from './page/Signin'
import { Signup } from './page/Signup'

export const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container mt-3">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/lives" element={<Lives />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}