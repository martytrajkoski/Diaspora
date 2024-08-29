import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import "../src/styles/Global.module.scss"
import Footer from "./components/Footer/Footer";
import { Portal } from "./pages/Portal";
import { ProfileCustomization } from "./pages/Profile/ProfileCustomization";
import { AccountSettings } from "./pages/Profile/AccountSettings";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portal" element={<Portal/>}/>
        <Route path="/profile-customization" element={<ProfileCustomization/>}></Route>
        <Route path="/account-settings" element={<AccountSettings/>}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
