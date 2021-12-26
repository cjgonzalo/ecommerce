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
import ScrollTopBtn from "./components/ScrollTopBtn/ScrollTopBtn";

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
          <Route path = "/juegos" element={<ProductsPage type="juegos"/>} />
          <Route path = "/perifericos" element={<ProductsPage type="perifericos"/>} />
          <Route path = "/gabinetes" element={<ProductsPage type="gabinetes"/>} />
          <Route path = "/sillasGamer" element={<ProductsPage type="sillas"/>} />
          <Route path = "/" element={<Home/>} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
        <ScrollTopBtn />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
