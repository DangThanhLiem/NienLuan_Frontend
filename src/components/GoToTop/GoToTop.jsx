import { useEffect, useState } from "react";
import "./GoToTop.css";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      className="topArrow"
      onClick={goToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};
