import Navbar from "./Navbar"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import About from "./components/About"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;