import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import PropTypes from "prop-types";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

// Định nghĩa component NavBar
export const NavBar = ({ theme, setTheme, setShowLogin }) => {
  // Khởi tạo state menu để theo dõi mục menu hiện tại
  const [menu, setMenu] = useState("Home");
  // Khởi tạo state searchQuery để lưu trữ từ khóa tìm kiếm
  const [searchQuery, setSearchQuery] = useState("");
  // Lấy các giá trị từ StoreContext
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  // Hàm xử lý đăng xuất
  const logout = () => {
    localStorage.removeItem("token"); // Xóa token khỏi localStorage
    setToken(""); // Cập nhật token trong context
    navigate("/"); // Điều hướng về trang chủ
  };

  // Hàm chuyển đổi chế độ sáng/tối
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Trả về giao diện thanh điều hướng
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <i
          className={`fa ${theme === "light" ? "fa-moon" : "fa-sun"}`}
          aria-hidden="true"
          onClick={toggle_mode}
        ></i>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <i className="fa-solid fa-user"></i>
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Xác định kiểu dữ liệu cho các props
NavBar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  setShowLogin: PropTypes.func.isRequired,
};
