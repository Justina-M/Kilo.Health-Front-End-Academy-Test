import { ReactComponent as Checkbox } from "../../../assets/ui-icons/checkbox-primary-filled.svg";

const PricingCard = ({
  title,
  flag,
  price,
  duration = "month",
  total,
  totalDiscount,
  discountType,
  selected = false,
  onClick,
}) => {
  return (
    <button
      className={`PricingCard ${selected ? "PricingCard--selected" : ""}`}
      onClick={onClick}
    >
      <div>
        <div className="PricingCard__title">
          <h5>{title}</h5>
          {flag && <div className="PricingCard__flag">{flag}</div>}
        </div>
        <div className="PricingCard__price">
          <h2>${price}</h2>
          <p>/ {duration}</p>
        </div>
        <div className="PricingCard__bottom">
          {total && <span className="PricingCard__total">${total}</span>}
          {totalDiscount && (
            <span className="PricingCard__total-discount">
              ${totalDiscount}
            </span>
          )}
          <span>{discountType}</span>
        </div>
      </div>
      <div>
        <div className="PricingCard__checkbox">{selected && <Checkbox />}</div>
      </div>
    </button>
  );
};

export default PricingCard;
