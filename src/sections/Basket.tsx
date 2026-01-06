import { ShoppingCart } from "lucide-react";
import "@styles/icon.scss";

const Basket = () => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        width: "100%",
        height: "36px",
        border: "1px solid #999",
        borderRadius: "4px",
        padding: "0 16px",
        boxSizing: "border-box",
        color: "#333",
      }}
    >
      <i className="icon ico-md">
        <ShoppingCart size={16} />
      </i>
      <p>담기</p>
    </button>
  );
};

export default Basket;
