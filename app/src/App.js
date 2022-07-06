import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { CreateAccount } from "./components/CreateAccount";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/newaccount" element={<CreateAccount/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
