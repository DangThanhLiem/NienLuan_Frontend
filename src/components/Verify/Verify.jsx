import { useNavigate, useSearchParams } from "react-router-dom";
import "./Verify.css";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

export const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success"); // Lấy giá trị của tham số 'success' từ URL
  const orderId = searchParams.get("orderId"); // Lấy giá trị của tham số 'orderId' từ URL
  const { url } = useContext(StoreContext); // Lấy URL từ ngữ cảnh của StoreContext
  const navigate = useNavigate(); // Sử dụng để điều hướng

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    }); // Gửi yêu cầu POST để xác minh thanh toán
    if (response.data.success) {
      navigate("/myorders"); // Nếu thành công, điều hướng đến trang 'myorders'
    } else {
      navigate("/"); // Nếu thất bại, điều hướng về trang chủ
    }
  };

  useEffect(() => {
    verifyPayment(); // Gọi hàm verifyPayment khi component được render
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div> {/* Hiển thị spinner trong khi chờ xác minh */}
    </div>
  );
};
