import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Header from "./components/header/Header"
import Contact from "./views/contact/contact"
import Login from "./views/login/login"
import Home from "./views/home/home"
import About from "./views/about/about"
import NotFound from "./views/404/404"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path = "/contacto" element={<Contact />} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/productos/juegos" element={<About/>} />
          <Route path = "/productos/auriculares" element={<About/>} />
          <Route path = "/productos/microfonos" element={<About/>} />
          <Route path = "/productos/gabinetes" element={<About/>} />
          <Route path = "/productos/sillas-gamer" element={<About/>} />
          <Route path = "/" element={<Home/>} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
