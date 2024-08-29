import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import "../src/styles/Global.module.scss"
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import NavbarProfile from "./components/NavbarProfile/NavbarProfile";
import Profile from "./components/NavbarProfile/Profile";

function App() {
  return (
    <div>
     <Profile/> 
     {/*<Navbar />*/}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
