import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login.js"
import Header from "./components/Header.js"
import './App.css';
import Home from "./components/Home.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/home" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
