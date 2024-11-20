import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Navbar/NavBar";
import { Home } from "./Components/pages/Home/Home";
import { Cart } from "./Components/pages/Cart/Cart";
import { PlaceOrder } from "./Components/pages/PlaceOrder/PlaceOrder";
import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer/Footer";
import { LoginPopup } from "./Components/LoginPopup/LoginPopup";
import { GoToTop } from "./Components/GoToTop/GoToTop";
import { Verify } from "./Components/Verify/Verify";
import { MyOrder } from "./Components/pages/MyOrder/MyOrder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className={`app ${theme}`}>
        <ToastContainer />
        <NavBar theme={theme} setTheme={setTheme} setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
          <Route path="/myorders" element={<MyOrder />}></Route>
        </Routes>
      </div>
      <GoToTop />
      <Footer />
    </>
  );
};

export default App;
