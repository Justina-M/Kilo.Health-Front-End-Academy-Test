import { useState } from "react";
import Button from "../Button/Button";
import PricingCard from "./PricingCard";
import safeCheckoutBadge from "../../../assets/safe-checkout-badge.png";

const PricingTable = ({ data }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleToggleSelect = (e) => {
    const selectedCardId = e.target.closest("li").id;
    setSelectedCardIndex(+selectedCardId);
  };

  const handleSubmitPlan = () => {
    console.log("Selected Pricing Plan: ", data[selectedCardIndex]);
  };

  return (
    <div className="PricingTable">
      <ul className="PricingTable__list">
        {data.map((card, index) => (
          <li key={index} id={index} className="PricingTable__item">
            <PricingCard
              title={card.title}
              flag={card.flag}
              price={card.price}
              duration={card.duration}
              total={card.total}
              totalDiscount={card.totalDiscount}
              discountType={card.discountType}
              selected={index === selectedCardIndex}
              onClick={handleToggleSelect}
            />
          </li>
        ))}
      </ul>
      <Button onClick={handleSubmitPlan}>Get your plan</Button>
      <div className="PricingTable__policy">
        <p>
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </p>
        <p>
          By choosing a payment method you agree to the <a href="/">T&Cs</a> and{" "}
          <a href="/">Privacy Policy</a>
        </p>
        <img src={safeCheckoutBadge} alt="Guaranteed safe checkout" />
      </div>
    </div>
  );
};

export default PricingTable;
