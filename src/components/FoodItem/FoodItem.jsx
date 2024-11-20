import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../Context/StoreContext";
import PropTypes from "prop-types";

// Định nghĩa component FoodItem
export const FoodItem = ({ id, name, price, description, image }) => {
  // Lấy các giá trị từ StoreContext
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  // Trả về giao diện của một mục thực phẩm
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/* Hiển thị hình ảnh của món ăn */}
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
        />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          {/* Hiển thị tên món ăn và hình ảnh đánh giá */}
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        {/* Hiển thị mô tả món ăn */}
        <p className="food-item-desc">{description}</p>
        <div className="food-items-price-count">
          {/* Hiển thị giá món ăn */}
          <p className="food-item-price">${price}.00</p>
          {/* Kiểm tra xem món ăn có trong giỏ hàng không */}
          {!cartItems[id] ? (
            // Nếu không có, hiển thị nút thêm vào giỏ hàng
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
            />
          ) : (
            // Nếu có, hiển thị bộ đếm số lượng và nút thêm/bớt
            <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Xác định kiểu dữ liệu cho các props
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
