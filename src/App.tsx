import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import "../src/styles/Global.module.scss"
import Footer from "./components/Footer/Footer";
import { Portal } from "./pages/Portal";
import { ProfileCustomization } from "./pages/Profile/ProfileCustomization";
import { AccountSettings } from "./pages/Profile/AccountSettings";
import { Profile } from "./pages/Profile/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <div>
     <Profile/> 
     {/*<Navbar />*/}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/portal" element={<Portal/>}/>
        <Route path="/profile-customization" element={<ProfileCustomization/>}></Route>
        <Route path="/account-settings" element={<AccountSettings/>}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      {/*<Footer/>*/}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
