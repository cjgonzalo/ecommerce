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
import ProductsPage from "./views/productsPage/productsPage"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path = "/contacto" element={<Contact />} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/juegos" element={<ProductsPage type="games"/>} />
          <Route path = "/auriculares" element={<ProductsPage type="periferics"/>} />
          <Route path = "/gabinetes" element={<ProductsPage type="cabinets"/>} />
          <Route path = "/sillas-gamer" element={<ProductsPage type="chairs"/>} />
          <Route path = "/" element={<Home/>} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
