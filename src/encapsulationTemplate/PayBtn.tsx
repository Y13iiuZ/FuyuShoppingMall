import "./templateStyle/payBtn.scss";
import store from "../store/CartStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

interface OrderBtnProps {
  order: any;
}

const PayBtn: React.FC<OrderBtnProps> = (props) => {
  const { addOrder } = store;
  const navigate = useNavigate();
  const handleOrderClick = () => {
    addOrder(props.order);
    navigate("/order");
  };
  return (
    <div className="payButton" onClick={handleOrderClick}>
      <div className="pay-btn">
        <svg
          className="css-i6dzq1"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          strokeWidth="2"
          stroke="#FFF"
          height="20"
          width="20"
          viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle r="3" cy="12" cx="12"></circle>
        </svg>
        <span>Quick purchase</span>
      </div>
      <div className="hover-btn-pay">
        <svg
          className="css-i6dzq1"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          strokeWidth="2"
          stroke="#ffd300"
          height="20"
          width="20"
          viewBox="0 0 24 24">
          <circle r="1" cy="21" cx="9"></circle>
          <circle r="1" cy="21" cx="20"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default observer(PayBtn);
