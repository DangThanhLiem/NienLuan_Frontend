import { assets } from "../../assets/assets";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p style={{ textAlign: "justify" }}>
            Delicious Food is your go-to food delivery app, bringing delicious
            meals from your favorite restaurants straight to your doorstep. Our
            mission is to make dining easy, convenient, and enjoyable, whether
            you are at home or at work.
          </p>
          <div className="footer-social-icons">
            <img className="facebook" src={assets.facebook_icon} alt="" />
            <img className="twitter" src={assets.twitter_icon} alt="" />
            <img className="linkedin" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+84 559346616</li>
            <li>contact@deliciousfood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; DeliciousFood.com -All Right Reserved.
      </p>
    </div>
  );
};
