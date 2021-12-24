import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/header/Header"
import Contact from "./views/Contact/Contact"
import Login from "./views/Login/Login"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import NotFound from "./views/404/404"
import Footer from "./components/footer/Footer"
import ProductsPage from "./views/ProductsPage/ProductsPage"
import SingleProduct from "./views/ProductPage/ProductPage"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path = "/contacto" element={<Contact />} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/producto/:id" element={<SingleProduct />} />
          <Route path = "/juegos" element={<ProductsPage type="games"/>} />
          <Route path = "/perifericos" element={<ProductsPage type="peripherals"/>} />
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
