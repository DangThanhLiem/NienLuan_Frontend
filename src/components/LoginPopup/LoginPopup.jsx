import { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import PropTypes from "prop-types";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

// Định nghĩa component LoginPopup
export const LoginPopup = ({ setShowLogin }) => {
  // Lấy url và setToken từ StoreContext
  const { url, setToken } = useContext(StoreContext);
  // Khởi tạo state currState để theo dõi trạng thái hiện tại (Login hoặc Sign Up)
  const [currState, setCurrState] = useState("Login");
  // Khởi tạo state data để lưu thông tin người dùng
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Hàm xử lý khi có thay đổi trong các input
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // Hàm bất đồng bộ để xử lý đăng nhập hoặc đăng ký
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    // Xác định URL dựa trên trạng thái hiện tại
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    // Gửi yêu cầu POST để đăng nhập hoặc đăng ký
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      // Nếu thành công, lưu token và đóng popup
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      // Nếu thất bại, hiển thị thông báo lỗi
      toast.error(response.data.message);
    }
  };

  // Trả về giao diện của popup đăng nhập/đăng ký
  return (
    <div className={`login-popup`}>
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          )}
          <input
            onChange={onChangeHandler}
            name="email"
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            onChange={onChangeHandler}
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing I Agree to the terms of use & Privacy Policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

// Xác định kiểu dữ liệu cho prop setShowLogin
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};
