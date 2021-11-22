import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Header from "./components/Header"
import Contact from "./views/contact"
import Login from "./views/login"
import Home from "./views/home/home"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path = "/contacto" element={<Contact />} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/" element={<Home/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
