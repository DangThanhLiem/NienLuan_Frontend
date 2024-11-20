import { assets } from "../../assets/assets";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Order Your <span>Favourite Food</span> Here.
        </h2>
        <p>
          Choose from Diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.Our mission
          is to satisfy your cravings and elavate your dining experience, one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
      <div className="header-img">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};
export default Header;
